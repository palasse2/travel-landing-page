/* ════════════════════════════════════════════════════════════
   JOURNAL.JS  —  Travel Readz
   Fetches posts from Sanity CMS and renders:
     • Post grid  → journal.html
     • Single post → journal.html?slug=my-post-slug
════════════════════════════════════════════════════════════ */

/* ── CONFIG ──────────────────────────────────────────────── */
const SANITY_PROJECT_ID = 'cldl9ygg';
const SANITY_DATASET    = 'production';
const SANITY_API_VER    = '2024-01-01';
const POSTS_PER_PAGE    = 9;

/* ══════════════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════════════ */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fmtDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
  } catch(e) { return iso; }
}

function readTime(text) {
  if (!text) return '1 min read';
  var words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200)) + ' min read';
}

function initials(name) {
  return (name || 'TR').split(' ').map(function(w){ return w[0]||''; }).join('').slice(0,2).toUpperCase();
}

function setMeta(prop, content) {
  var el = document.querySelector('meta[property="' + prop + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', prop);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/* ══════════════════════════════════════════════════════════
   SANITY HELPERS
══════════════════════════════════════════════════════════ */

function sanityUrl(query, params) {
  params = params || {};
  var base = 'https://' + SANITY_PROJECT_ID + '.apicdn.sanity.io/v' + SANITY_API_VER + '/data/query/' + SANITY_DATASET;
  var q = '?query=' + encodeURIComponent(query.trim());
  var p = Object.keys(params).map(function(k) {
    return '&$' + k + '=' + encodeURIComponent(JSON.stringify(params[k]));
  }).join('');
  return base + q + p;
}

function imgUrl(ref, w, h) {
  if (!ref) return null;
  w = w || 800;
  try {
    var parts = ref.split('-');
    var ext   = parts.pop();
    var dims  = parts.pop();
    var id    = parts.slice(1).join('-');
    var wh    = dims.split('x');
    var ow    = parseInt(wh[0], 10) || 800;
    var oh    = parseInt(wh[1], 10) || 500;
    var fh    = h || Math.round((oh / ow) * w);
    return 'https://cdn.sanity.io/images/' + SANITY_PROJECT_ID + '/' + SANITY_DATASET
      + '/' + id + '-' + dims + '.' + ext
      + '?w=' + w + '&h=' + fh + '&fit=crop&auto=format&q=80';
  } catch(e) { return null; }
}

async function sanityFetch(query, params) {
  var url = sanityUrl(query, params);
  var res = await fetch(url);
  if (!res.ok) throw new Error('Sanity API error: ' + res.status);
  var data = await res.json();
  return data.result;
}

/* ══════════════════════════════════════════════════════════
   PORTABLE TEXT → HTML
══════════════════════════════════════════════════════════ */

function portableToHtml(blocks) {
  if (!blocks || !blocks.length) return '';
  return blocks.map(function(block) {
    if (block._type === 'image') {
      var src = imgUrl(block.asset && block.asset._ref, 900);
      if (!src) return '';
      var cap = block.caption ? '<figcaption>' + esc(block.caption) + '</figcaption>' : '';
      return '<figure><img src="' + src + '" alt="' + esc(block.alt||'') + '" loading="lazy">' + cap + '</figure>';
    }
    if (block._type !== 'block') return '';

    var tag = block.style === 'h2'         ? 'h2'
            : block.style === 'h3'         ? 'h3'
            : block.style === 'h4'         ? 'h4'
            : block.style === 'blockquote' ? 'blockquote'
            : 'p';

    if (!block.children || !block.children.length) return '<' + tag + '></' + tag + '>';

    var inner = block.children.map(function(span) {
      var text = esc(span.text || '');
      if (!text) return '';
      var marks = span.marks || [];
      if (marks.indexOf('strong') > -1) text = '<strong>' + text + '</strong>';
      if (marks.indexOf('em') > -1)     text = '<em>' + text + '</em>';
      if (marks.indexOf('code') > -1)   text = '<code>' + text + '</code>';
      var linkMark = marks.find(function(m) {
        return block.markDefs && block.markDefs.some(function(d){ return d._key === m && d._type === 'link'; });
      });
      if (linkMark) {
        var def = block.markDefs.find(function(d){ return d._key === linkMark; });
        text = '<a href="' + esc(def.href||'#') + '" target="_blank" rel="noopener">' + text + '</a>';
      }
      return text;
    }).join('');

    if (tag === 'blockquote') return '<blockquote><p>' + inner + '</p></blockquote>';
    return '<' + tag + '>' + inner + '</' + tag + '>';
  }).join('\n');
}

function extractPlainText(blocks) {
  if (!blocks) return '';
  return blocks.filter(function(b){ return b._type === 'block'; })
    .map(function(b){ return (b.children||[]).map(function(s){ return s.text||''; }).join(''); })
    .join(' ');
}

function extractHeadings(blocks) {
  if (!blocks) return [];
  return blocks.filter(function(b){ return b._type === 'block' && (b.style === 'h2' || b.style === 'h3'); })
    .map(function(b){
      var text = (b.children||[]).map(function(s){ return s.text||''; }).join('');
      var id   = text.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      return { text: text, id: id, level: b.style };
    });
}

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
var _allPosts     = [];
var _shown        = 0;
var _activeFilter = 'all';
var _categories   = [];

/* ══════════════════════════════════════════════════════════
   ENTRY POINT
══════════════════════════════════════════════════════════ */
function initJournalPage() {
  var slug = new URLSearchParams(window.location.search).get('slug');
  if (slug) {
    _renderSinglePost(slug);
  } else {
    _renderGrid();
  }
}

/* ══════════════════════════════════════════════════════════
   GRID VIEW
══════════════════════════════════════════════════════════ */
async function _renderGrid() {
  var container = document.getElementById('journal-container');
  container.innerHTML = _skeletonGrid(6);

  var query = '*[_type == "post"] | order(publishedAt desc) { _id, title, slug, publishedAt, "excerpt": array::join(string::split(pt::text(body), "")[0..200], "") + "...", "imageRef": mainImage.asset._ref, "category": categories[0]->title, "bodyText": pt::text(body) }';

  try {
    _allPosts = await sanityFetch(query);
    if (!_allPosts) _allPosts = [];
  } catch(err) {
    container.innerHTML = _emptyState('📡', 'Could not load posts', 'Check your Sanity project ID and CORS settings.');
    console.error('[Journal]', err);
    return;
  }

  if (_allPosts.length === 0) {
    container.innerHTML = _emptyState('✍️', 'No posts yet', 'Publish your first post in Sanity Studio.');
    return;
  }

  _categories   = [...new Set(_allPosts.map(function(p){ return p.category; }).filter(Boolean))];
  _shown        = 0;
  _activeFilter = 'all';

  container.innerHTML = '';
  container.appendChild(_buildFilterBar());

  var gridWrap = document.createElement('div');
  gridWrap.id = 'jnl-grid';
  gridWrap.className = 'journal-grid';
  container.appendChild(gridWrap);

  var loadWrap = document.createElement('div');
  loadWrap.id = 'jnl-load-wrap';
  loadWrap.className = 'journal-load-more-wrap';
  container.appendChild(loadWrap);

  _renderBatch();
}

function _renderBatch() {
  var filtered = _activeFilter === 'all'
    ? _allPosts
    : _allPosts.filter(function(p){ return p.category === _activeFilter; });

  var grid     = document.getElementById('jnl-grid');
  var loadWrap = document.getElementById('jnl-load-wrap');

  if (filtered.length === 0) {
    grid.innerHTML     = _emptyState('🔍', 'No posts in this category', 'Try a different filter.');
    loadWrap.innerHTML = '';
    return;
  }

  var batch = filtered.slice(_shown, _shown + POSTS_PER_PAGE);
  batch.forEach(function(post, idx) {
    var featured = (_shown === 0 && idx === 0);
    var card = _buildCard(post, featured);
    card.classList.add('reveal');
    setTimeout(function(){ card.classList.add('in'); }, 60 * idx);
    grid.appendChild(card);
  });

  _shown += batch.length;

  if (_shown < filtered.length) {
    loadWrap.innerHTML = '<button class="journal-load-more-btn" id="jnl-load-btn">Load More Stories →</button>';
    document.getElementById('jnl-load-btn').addEventListener('click', _renderBatch);
  } else {
    loadWrap.innerHTML = '';
  }
}

/* ── Filter bar ──────────────────────────────────────────── */
function _buildFilterBar() {
  var bar = document.createElement('div');
  bar.className = 'journal-filters';

  var lbl = document.createElement('span');
  lbl.className   = 'journal-filter-label';
  lbl.textContent = 'Filter';
  bar.appendChild(lbl);

  function makeBtn(label, cat, active) {
    var b = document.createElement('button');
    b.className   = 'journal-filter-btn' + (active ? ' active' : '');
    b.dataset.cat = cat;
    b.textContent = label;
    return b;
  }

  bar.appendChild(makeBtn('All', 'all', true));
  _categories.forEach(function(cat){ bar.appendChild(makeBtn(cat, cat, false)); });

  bar.addEventListener('click', function(e) {
    var btn = e.target.closest('.journal-filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.journal-filter-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    _activeFilter = btn.dataset.cat;
    _shown = 0;
    document.getElementById('jnl-grid').innerHTML = '';
    _renderBatch();
  });

  return bar;
}

/* ── Post card ───────────────────────────────────────────── */
function _buildCard(post, featured) {
  featured = !!featured;
  var card = document.createElement('article');
  card.className = 'journal-card' + (featured ? ' journal-card--featured' : '');

  var src      = imgUrl(post.imageRef, featured ? 1200 : 800, featured ? 675 : 533);
  var imgInner = src
    ? '<img src="' + src + '" alt="' + esc(post.title||'') + '" loading="lazy">'
    : '<div class="journal-card-img-placeholder" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>';

  var tag = post.category
    ? '<div class="journal-card-tag">' + esc(post.category) + '</div>' : '';

  card.innerHTML = [
    '<div class="journal-card-img">' + imgInner + tag + '</div>',
    '<div class="journal-card-body">',
    '  <div class="journal-card-meta">',
    '    <time class="journal-card-date" datetime="' + esc(post.publishedAt||'') + '">' + fmtDate(post.publishedAt) + '</time>',
    '    <span class="journal-card-meta-dot" aria-hidden="true"></span>',
    '    <span class="journal-card-read-time">' + readTime(post.bodyText) + '</span>',
    '  </div>',
    '  <h2 class="journal-card-title">' + esc(post.title||'Untitled') + '</h2>',
    '  <p class="journal-card-excerpt">' + esc(post.excerpt||'') + '</p>',
    '  <span class="journal-card-read-more">Read Article →</span>',
    '</div>'
  ].join('');

  card.addEventListener('click', function() {
    window.location.href = 'journal.html?slug=' + encodeURIComponent((post.slug && post.slug.current)||'');
  });

  return card;
}

/* ══════════════════════════════════════════════════════════
   SINGLE POST VIEW
══════════════════════════════════════════════════════════ */
async function _renderSinglePost(slug) {
  var container = document.getElementById('journal-container');
  container.innerHTML = _skeletonPost();

  var postQuery = '*[_type == "post" && slug.current == $slug][0] { _id, title, slug, publishedAt, body, "imageRef": mainImage.asset._ref, "category": categories[0]->title, "authorName": author->name }';
  var relQuery  = '*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0..2] { title, slug, publishedAt, "imageRef": mainImage.asset._ref }';

  var post, related;
  try {
    var results = await Promise.all([
      sanityFetch(postQuery, { slug: slug }),
      sanityFetch(relQuery,  { slug: slug })
    ]);
    post    = results[0];
    related = results[1] || [];
  } catch(err) {
    container.innerHTML = _emptyState('📡', 'Could not load article', 'Please try again later.');
    console.error('[Journal]', err);
    return;
  }

  if (!post) {
    container.innerHTML = _emptyState('🔍', 'Article not found', 'This post may have been moved or removed.');
    return;
  }

  document.title = (post.title||'Article') + ' | Travel Readz Journal';
  var plainText = extractPlainText(post.body);
  var excerpt   = plainText.slice(0, 160);
  setMeta('og:title',       post.title||'');
  setMeta('og:description', excerpt);
  var coverSrc = imgUrl(post.imageRef, 1200, 630);
  if (coverSrc) setMeta('og:image', coverSrc);

  var heroTitle    = document.getElementById('journal-page-title');
  var heroSubtitle = document.getElementById('journal-page-subtitle');
  if (heroTitle)    heroTitle.textContent    = post.title || '';
  if (heroSubtitle) heroSubtitle.textContent = excerpt;

  var rawHtml  = portableToHtml(post.body);
  var pCount   = 0;
  var bodyHtml = rawHtml.replace(/<\/p>/gi, function(m) {
    pCount++;
    return m + (pCount === 3 ? _postCta() : '');
  });

  var headings = extractHeadings(post.body);
  headings.forEach(function(h) {
    var re = new RegExp('(<h[23]>)(' + h.text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')(</h[23]>)');
    bodyHtml = bodyHtml.replace(re, '<' + h.level + '><span id="' + h.id + '">' + esc(h.text) + '</span></' + h.level + '>');
  });

  var tocHtml = '';
  if (headings.length > 1) {
    var items = headings.map(function(h) {
      return '<li><a href="#' + h.id + '">' + esc(h.text) + '</a></li>';
    }).join('');
    tocHtml = '<div class="post-sidebar-section"><div class="post-sidebar-label">In This Article</div><ul class="post-toc">' + items + '</ul></div>';
  }

  var relHtml = '';
  if (related.length) {
    var relCards = related.map(function(r) {
      var thumb = imgUrl(r.imageRef, 120, 120);
      var href  = 'journal.html?slug=' + encodeURIComponent((r.slug && r.slug.current)||'');
      return '<div class="post-related-card" role="link" tabindex="0" onclick="location.href=\'' + href + '\'" onkeydown="if(event.key===\'Enter\')location.href=\'' + href + '\'">'
        + '<div class="post-related-thumb">' + (thumb ? '<img src="' + thumb + '" alt="' + esc(r.title||'') + '" loading="lazy">' : '<div style="width:100%;height:100%;background:#0d1a19;"></div>') + '</div>'
        + '<div class="post-related-info"><div class="post-related-title">' + esc(r.title||'') + '</div>'
        + '<time class="post-related-date" datetime="' + esc(r.publishedAt||'') + '">' + fmtDate(r.publishedAt) + '</time></div></div>';
    }).join('');
    relHtml = '<div class="post-sidebar-section"><div class="post-sidebar-label">Related Articles</div>' + relCards + '</div>';
  }

  var coverHtml = coverSrc ? '<div class="post-cover"><img src="' + coverSrc + '" alt="' + esc(post.title||'') + '" loading="eager"></div>' : '';
  var tagHtml   = post.category ? '<div class="post-tags"><span class="post-tag">' + esc(post.category) + '</span></div>' : '';

  container.innerHTML = [
    '<a href="journal.html" class="post-back-link">← Back to Journal</a>',
    '<div class="post-layout">',
    '  <article>',
         tagHtml,
    '    <h1 class="post-title">' + esc(post.title||'') + '</h1>',
    '    <div class="post-meta">',
    '      <div class="post-author">',
    '        <div class="post-author-avatar" aria-hidden="true">' + initials(post.authorName) + '</div>',
    '        <span class="post-author-name">' + esc(post.authorName||'Travel Readz') + '</span>',
    '      </div>',
    '      <div class="post-meta-sep"></div>',
    '      <time class="post-date" datetime="' + esc(post.publishedAt||'') + '">' + fmtDate(post.publishedAt) + '</time>',
    '      <div class="post-meta-sep"></div>',
    '      <span class="post-read-time">' + readTime(plainText) + '</span>',
    '    </div>',
         coverHtml,
    '    <div class="post-body">' + bodyHtml + '</div>',
    '  </article>',
    '  <aside class="post-sidebar">' + tocHtml + relHtml + '</aside>',
    '</div>'
  ].join('\n');

  if (headings.length > 1) {
    var tocLinks = container.querySelectorAll('.post-toc a');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          tocLinks.forEach(function(a){ a.classList.remove('active'); });
          var active = container.querySelector('.post-toc a[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    headings.forEach(function(h) {
      var el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
  }
}

function _postCta() {
  return '<div class="post-cta-block"><p>Planning a trip to Morocco? The Travel Readz guide has everything — local maps, cultural knowledge, a budget calculator, and direct WhatsApp support.</p><a href="https://travelreadz.gumroad.com/l/ubqlaj?wanted=true" class="post-cta-btn">Get the Guide →</a></div>';
}

/* ══════════════════════════════════════════════════════════
   SKELETON / EMPTY STATES
══════════════════════════════════════════════════════════ */
function _skeletonGrid(n) {
  n = n || 6;
  var cards = '';
  for (var i = 0; i < n; i++) {
    cards += '<div class="skeleton-card"><div class="skeleton-img"></div><div class="skeleton-body"><div class="skeleton-line skeleton-line--short"></div><div class="skeleton-line skeleton-line--title"></div><div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line skeleton-line--short"></div></div></div>';
  }
  return '<div class="journal-skeleton-grid">' + cards + '</div>';
}

function _skeletonPost() {
  return '<div style="max-width:760px;margin:0 auto;"><div class="skeleton-line" style="width:120px;height:12px;margin-bottom:40px;"></div><div class="skeleton-line skeleton-line--short" style="margin-bottom:16px;"></div><div class="skeleton-line skeleton-line--title" style="height:38px;margin-bottom:24px;"></div><div class="skeleton-line" style="width:55%;margin-bottom:40px;"></div><div class="skeleton-img" style="aspect-ratio:16/9;margin-bottom:48px;"></div><div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line skeleton-line--short"></div></div>';
}

function _emptyState(icon, title, msg) {
  return '<div class="journal-empty"><div class="journal-empty-icon" aria-hidden="true">' + icon + '</div><h3>' + esc(title) + '</h3><p>' + esc(msg) + '</p></div>';
}
