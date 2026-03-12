/* ════════════════════════════════════════════════════════════
   JOURNAL.JS  —  Travel Readz
   Fetches posts from Sanity CMS and renders:
     • Post grid  → journal.html
     • Single post → journal.html?slug=my-post-slug
   ────────────────────────────────────────────────────────────
   QUICK SETUP
   1. Create a free project at https://sanity.io
   2. Replace SANITY_PROJECT_ID below with your project ID
   3. Sanity → Settings → API → CORS Origins → add your domain
   4. Publish posts in Sanity Studio — they appear instantly
   (Schema reference at the bottom of this file)
════════════════════════════════════════════════════════════ */

/* ── CONFIG  (edit these two lines) ─────────────────────── */
const SANITY_PROJECT_ID = 'cldl9ygg';  // ← replace
const SANITY_DATASET    = 'production';
const SANITY_API_VER    = '2024-01-01';
const POSTS_PER_PAGE    = 9;

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
    var ow = parseInt(wh[0], 10) || 800;
    var oh = parseInt(wh[1], 10) || 500;
    var fh = h || Math.round((oh / ow) * w);
    return 'https://cdn.sanity.io/images/' + SANITY_PROJECT_ID + '/' + SANITY_DATASET
      + '/' + id + '-' + dims + '.' + ext
      + '?w=' + w + '&h=' + fh + '&fit=crop&auto=format&q=80';
  } catch(e) { return null; }
}

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

function readTime(blocks) {
  var words = (blocks || [])
    .filter(function(b){ return b && b._type === 'block'; })
    .map(function(b){ return (b.children||[]).map(function(c){ return c.text||''; }).join(' '); })
    .join(' ').trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200)) + ' min read';
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
   PORTABLE TEXT → HTML
══════════════════════════════════════════════════════════ */

function ptToHtml(blocks) {
  if (!Array.isArray(blocks)) return '';

  // Group list items
  var grouped = [];
  var listBuf = [], listStyle = null;

  function flushList() {
    if (!listBuf.length) return;
    grouped.push({ _listType: listStyle, items: listBuf.slice() });
    listBuf = []; listStyle = null;
  }

  blocks.forEach(function(b) {
    if (!b) return;
    if (b._type === 'block' && b.listItem) {
      if (listStyle !== b.listItem) flushList();
      listStyle = b.listItem;
      listBuf.push(b);
    } else {
      flushList();
      grouped.push(b);
    }
  });
  flushList();

  return grouped.map(function(item) {
    // List group
    if (item._listType) {
      var tag = item._listType === 'bullet' ? 'ul' : 'ol';
      var lis = item.items.map(function(b) {
        return '<li>' + renderInline(b.children||[], b.markDefs||[]) + '</li>';
      }).join('');
      return '<' + tag + '>' + lis + '</' + tag + '>';
    }
    // Image
    if (item._type === 'image' && item.asset && item.asset._ref) {
      var src = imgUrl(item.asset._ref, 1200);
      var cap = item.caption ? '<figcaption>' + esc(item.caption) + '</figcaption>' : '';
      return '<figure><img src="' + src + '" alt="' + esc(item.alt||'') + '" loading="lazy">' + cap + '</figure>';
    }
    // Code block
    if (item._type === 'code') {
      var lang = item.language ? ' data-lang="' + esc(item.language) + '"' : '';
      return '<pre' + lang + '><code>' + esc(item.code||'') + '</code></pre>';
    }
    // Standard block
    if (item._type !== 'block') return '';
    var inner = renderInline(item.children||[], item.markDefs||[]);
    var hid = item._headingId ? ' id="' + item._headingId + '"' : '';
    switch (item.style) {
      case 'h2':         return '<h2' + hid + '>' + inner + '</h2>';
      case 'h3':         return '<h3' + hid + '>' + inner + '</h3>';
      case 'h4':         return '<h4' + hid + '>' + inner + '</h4>';
      case 'blockquote': return '<blockquote><p>' + inner + '</p></blockquote>';
      default:
        return inner.trim() ? '<p>' + inner + '</p>' : '<hr>';
    }
  }).join('\n');
}

function renderInline(spans, markDefs) {
  return (spans||[]).map(function(span) {
    var t = esc(span.text||'');
    (span.marks||[]).forEach(function(mark) {
      if      (mark==='strong')          { t = '<strong>' + t + '</strong>'; }
      else if (mark==='em')              { t = '<em>' + t + '</em>'; }
      else if (mark==='code')            { t = '<code>' + t + '</code>'; }
      else if (mark==='underline')       { t = '<u>' + t + '</u>'; }
      else if (mark==='strike-through')  { t = '<s>' + t + '</s>'; }
      else {
        var def = (markDefs||[]).find(function(d){ return d._key === mark; });
        if (def && def._type === 'link') {
          var ext = (def.href||'').startsWith('http');
          var rel = ext ? ' target="_blank" rel="noopener noreferrer"' : '';
          t = '<a href="' + esc(def.href||'#') + '"' + rel + '>' + t + '</a>';
        }
      }
    });
    return t;
  }).join('');
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

  var query = [
    '*[_type == "post"] | order(publishedAt desc) {',
    '  _id, title,',
    '  "slug": slug.current,',
    '  publishedAt, excerpt,',
    '  "category": category->title,',
    '  "coverRef": mainImage.asset._ref,',
    '  body',
    '}'
  ].join('\n');

  try {
    var res  = await fetch(sanityUrl(query));
    var data = await res.json();
    if (!res.ok || data.error) throw new Error((data.error && data.error.description) || 'Sanity fetch error');
    _allPosts = data.result || [];
  } catch(err) {
    var hint = (err.message||'').includes('YOUR_PROJECT_ID')
      ? 'Open journal.js and replace YOUR_PROJECT_ID with your Sanity project ID.'
      : err.message;
    container.innerHTML = _emptyState('📡', 'Could not load posts', hint);
    console.error('[Journal]', err);
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
    var card     = _buildCard(post, featured);
    card.classList.add('reveal');
    setTimeout(function(){ card.classList.add('in'); }, 60 * idx);
    grid.appendChild(card);
  });

  _shown += batch.length;

  if (_shown < filtered.length) {
    loadWrap.innerHTML = [
      '<button class="journal-load-more-btn" id="jnl-load-btn">',
      '  <span data-translate="journal.loadMore">Load More Stories</span>',
      '  <span aria-hidden="true">→</span>',
      '</button>'
    ].join('');
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
  lbl.className = 'journal-filter-label';
  lbl.setAttribute('data-translate', 'journal.filter');
  lbl.textContent = 'Filter';
  bar.appendChild(lbl);

  function makeBtn(label, cat, active) {
    var b = document.createElement('button');
    b.className    = 'journal-filter-btn' + (active ? ' active' : '');
    b.dataset.cat  = cat;
    b.textContent  = label;
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
  card.style.cursor = 'pointer';

  var src = imgUrl(post.coverRef, featured ? 1200 : 600);
  var imgInner = src
    ? '<img src="' + src + '" alt="' + esc(post.title||'') + '" loading="lazy">'
    : '<div class="journal-card-img-placeholder" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
          '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
          '<circle cx="8.5" cy="8.5" r="1.5"/>' +
          '<polyline points="21 15 16 10 5 21"/>' +
        '</svg></div>';

  var tag = post.category
    ? '<div class="journal-card-tag">' + esc(post.category) + '</div>' : '';

  card.innerHTML = [
    '<div class="journal-card-img">' + imgInner + tag + '</div>',
    '<div class="journal-card-body">',
    '  <div class="journal-card-meta">',
    '    <time class="journal-card-date" datetime="' + esc(post.publishedAt||'') + '">' + fmtDate(post.publishedAt) + '</time>',
    '    <span class="journal-card-meta-dot" aria-hidden="true"></span>',
    '    <span class="journal-card-read-time">' + readTime(post.body) + '</span>',
    '  </div>',
    '  <h2 class="journal-card-title">' + esc(post.title||'Untitled') + '</h2>',
    '  <p class="journal-card-excerpt">' + esc(post.excerpt||'') + '</p>',
    '  <span class="journal-card-read-more">',
    '    <span data-translate="journal.readMore">Read Article</span>',
    '    <span aria-hidden="true">→</span>',
    '  </span>',
    '</div>'
  ].join('');

  card.addEventListener('click', function() {
    window.location.href = 'journal.html?slug=' + encodeURIComponent(post.slug||'');
  });

  return card;
}

/* ══════════════════════════════════════════════════════════
   SINGLE POST VIEW
══════════════════════════════════════════════════════════ */
async function _renderSinglePost(slug) {
  var container = document.getElementById('journal-container');
  container.innerHTML = _skeletonPost();

  var postQuery = [
    '*[_type == "post" && slug.current == $slug][0] {',
    '  _id, title,',
    '  "slug": slug.current,',
    '  publishedAt, excerpt,',
    '  "category": category->title,',
    '  "authorName": author->name,',
    '  "coverRef": mainImage.asset._ref,',
    '  "coverAlt": mainImage.alt,',
    '  body',
    '}'
  ].join('\n');

  var relQuery = [
    '*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0..2] {',
    '  title,',
    '  "slug": slug.current,',
    '  publishedAt,',
    '  "coverRef": mainImage.asset._ref',
    '}'
  ].join('\n');

  var post, related;
  try {
    var results = await Promise.all([
      fetch(sanityUrl(postQuery, { slug: slug })).then(function(r){ return r.json(); }),
      fetch(sanityUrl(relQuery,  { slug: slug })).then(function(r){ return r.json(); })
    ]);
    post    = results[0].result;
    related = results[1].result || [];
  } catch(err) {
    container.innerHTML = _emptyState('📡', 'Could not load article', 'Please try again later.');
    console.error('[Journal]', err);
    return;
  }

  if (!post) {
    container.innerHTML = _emptyState('🔍', 'Article not found', 'This post may have been moved or removed.');
    return;
  }

  // Update page meta
  document.title = post.title + ' | Travel Readz Journal';
  setMeta('og:title',       post.title);
  setMeta('og:description', post.excerpt||'');
  if (post.coverRef) setMeta('og:image', imgUrl(post.coverRef, 1200, 630));

  // Update hero
  var heroTitle    = document.getElementById('journal-page-title');
  var heroSubtitle = document.getElementById('journal-page-subtitle');
  if (heroTitle)    heroTitle.textContent    = post.title||'';
  if (heroSubtitle) heroSubtitle.textContent = post.excerpt||'';

  // Assign heading IDs for TOC
  var hIdx = 0;
  var bodyBlocks = (post.body||[]).map(function(b) {
    if (b && b._type==='block' && (b.style==='h2'||b.style==='h3')) {
      return Object.assign({}, b, { _headingId: 'h-' + (hIdx++) });
    }
    return b;
  });
  var headings = bodyBlocks.filter(function(b){ return b && b._headingId; });

  // Body HTML — inject mid-post CTA after 3rd paragraph
  var rawBody = ptToHtml(bodyBlocks);
  var pCount  = 0;
  var bodyWithCta = rawBody.replace(/<\/p>/g, function(m) {
    pCount++;
    return m + (pCount === 3 ? _postCta() : '');
  });

  // TOC
  var tocHtml = '';
  if (headings.length) {
    var tocItems = headings.map(function(h) {
      var text   = (h.children||[]).map(function(c){ return c.text||''; }).join('');
      var indent = h.style==='h3' ? ' style="padding-left:24px"' : '';
      return '<li><a href="#' + h._headingId + '"' + indent + '>' + esc(text) + '</a></li>';
    }).join('');
    tocHtml = [
      '<div class="post-sidebar-section">',
      '  <div class="post-sidebar-label" data-translate="journal.toc">In This Article</div>',
      '  <ul class="post-toc" id="post-toc">' + tocItems + '</ul>',
      '</div>'
    ].join('');
  }

  // Related posts
  var relHtml = '';
  if (related.length) {
    var relCards = related.map(function(r) {
      var thumb = imgUrl(r.coverRef, 112, 112);
      var href  = 'journal.html?slug=' + encodeURIComponent(r.slug||'');
      return [
        '<div class="post-related-card" role="link" tabindex="0"',
        '  onclick="location.href=\'' + href + '\'"',
        '  onkeydown="if(event.key===\'Enter\')location.href=\'' + href + '\'">',
        '  <div class="post-related-thumb">',
        (thumb ? '<img src="' + thumb + '" alt="' + esc(r.title||'') + '" loading="lazy">'
               : '<div style="width:100%;height:100%;background:#0d1a19;"></div>'),
        '  </div>',
        '  <div class="post-related-info">',
        '    <div class="post-related-title">' + esc(r.title||'') + '</div>',
        '    <time class="post-related-date" datetime="' + esc(r.publishedAt||'') + '">' + fmtDate(r.publishedAt) + '</time>',
        '  </div>',
        '</div>'
      ].join('');
    }).join('');
    relHtml = [
      '<div class="post-sidebar-section">',
      '  <div class="post-sidebar-label" data-translate="journal.related">Related Articles</div>',
      relCards,
      '</div>'
    ].join('');
  }

  // Cover image
  var coverSrc  = imgUrl(post.coverRef, 1400, 788);
  var coverHtml = coverSrc
    ? '<div class="post-cover"><img src="' + coverSrc + '" alt="' + esc(post.coverAlt||post.title||'') + '" loading="eager"></div>'
    : '';

  // Category tag
  var tagHtml = post.category
    ? '<div class="post-tags"><span class="post-tag">' + esc(post.category) + '</span></div>'
    : '';

  container.innerHTML = [
    '<a href="journal.html" class="post-back-link">',
    '  ← <span data-translate="journal.backToJournal">Back to Journal</span>',
    '</a>',
    '<div class="post-layout">',
    '  <article>',
         tagHtml,
    '    <h1 class="post-title">' + esc(post.title||'') + '</h1>',
    '    <div class="post-meta">',
    '      <div class="post-author">',
    '        <div class="post-author-avatar" aria-hidden="true">' + initials(post.authorName) + '</div>',
    '        <span class="post-author-name">' + esc(post.authorName||'Travel Readz') + '</span>',
    '      </div>',
    '      <div class="post-meta-sep" aria-hidden="true"></div>',
    '      <time class="post-date" datetime="' + esc(post.publishedAt||'') + '">' + fmtDate(post.publishedAt) + '</time>',
    '      <div class="post-meta-sep" aria-hidden="true"></div>',
    '      <span class="post-read-time">' + readTime(post.body) + '</span>',
    '    </div>',
         coverHtml,
    '    <div class="post-body">' + bodyWithCta + '</div>',
    '  </article>',
    '  <aside class="post-sidebar">',
         tocHtml,
         relHtml,
    '  </aside>',
    '</div>'
  ].join('\n');

  // TOC active highlight on scroll
  if (headings.length) {
    var tocLinks  = container.querySelectorAll('.post-toc a');
    var headingEls = Array.from(container.querySelectorAll('[id^="h-"]'));
    window.addEventListener('scroll', function() {
      var current = '';
      headingEls.forEach(function(el) {
        if (window.scrollY >= el.offsetTop - 160) current = el.id;
      });
      tocLinks.forEach(function(a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
  }
}

function _postCta() {
  return [
    '<div class="post-cta-block">',
    '  <p data-translate="journal.cta.text">',
    '    Planning a trip to Morocco? The Travel Readz guide has everything —',
    '    local maps, cultural knowledge, a budget calculator, and direct WhatsApp support.',
    '  </p>',
    '  <a href="https://travelreadz.gumroad.com/l/ubqlaj?wanted=true"',
    '     class="post-cta-btn" data-translate="journal.cta.btn">',
    '    Get the Guide →',
    '  </a>',
    '</div>'
  ].join('');
}

/* ══════════════════════════════════════════════════════════
   SKELETON / EMPTY STATES
══════════════════════════════════════════════════════════ */
function _skeletonGrid(n) {
  n = n || 6;
  var cards = '';
  for (var i = 0; i < n; i++) {
    cards += [
      '<div class="skeleton-card">',
      '  <div class="skeleton-img"></div>',
      '  <div class="skeleton-body">',
      '    <div class="skeleton-line skeleton-line--short"></div>',
      '    <div class="skeleton-line skeleton-line--title"></div>',
      '    <div class="skeleton-line"></div>',
      '    <div class="skeleton-line"></div>',
      '    <div class="skeleton-line skeleton-line--short"></div>',
      '  </div>',
      '</div>'
    ].join('');
  }
  return '<div class="journal-skeleton-grid">' + cards + '</div>';
}

function _skeletonPost() {
  return [
    '<div style="max-width:760px;margin:0 auto;">',
    '  <div class="skeleton-line" style="width:120px;height:12px;margin-bottom:40px;"></div>',
    '  <div class="skeleton-line skeleton-line--short" style="margin-bottom:16px;"></div>',
    '  <div class="skeleton-line skeleton-line--title" style="height:38px;margin-bottom:24px;"></div>',
    '  <div class="skeleton-line" style="width:55%;margin-bottom:40px;"></div>',
    '  <div class="skeleton-img" style="aspect-ratio:16/9;margin-bottom:48px;"></div>',
    '  <div class="skeleton-line"></div>',
    '  <div class="skeleton-line"></div>',
    '  <div class="skeleton-line"></div>',
    '  <div class="skeleton-line skeleton-line--short"></div>',
    '</div>'
  ].join('');
}

function _emptyState(icon, title, msg) {
  return [
    '<div class="journal-empty">',
    '  <div class="journal-empty-icon" aria-hidden="true">' + icon + '</div>',
    '  <h3>' + esc(title) + '</h3>',
    '  <p>' + esc(msg) + '</p>',
    '</div>'
  ].join('');
}

/* ════════════════════════════════════════════════════════════
   SANITY STUDIO SCHEMA  (copy into your Studio project)
   ────────────────────────────────────────────────────────────

   schemas/post.js
   ───────────────
   export default {
     name: 'post', title: 'Post', type: 'document',
     fields: [
       { name:'title',       type:'string',   title:'Title',       validation:R=>R.required() },
       { name:'slug',        type:'slug',     title:'Slug',        options:{source:'title'}, validation:R=>R.required() },
       { name:'author',      type:'reference',title:'Author',      to:[{type:'author'}] },
       { name:'category',    type:'reference',title:'Category',    to:[{type:'category'}] },
       { name:'mainImage',   type:'image',    title:'Cover Image', options:{hotspot:true},
         fields:[{name:'alt',type:'string',title:'Alt text'}] },
       { name:'publishedAt', type:'datetime', title:'Published At' },
       { name:'excerpt',     type:'text',     title:'Excerpt',     rows:4 },
       { name:'body',        type:'array',    title:'Body',
         of:[
           { type:'block',
             styles:[
               {title:'Normal',    value:'normal'},
               {title:'Heading 2', value:'h2'},
               {title:'Heading 3', value:'h3'},
               {title:'Quote',     value:'blockquote'},
             ],
             marks:{
               decorators:[
                 {title:'Bold',   value:'strong'},
                 {title:'Italic', value:'em'},
                 {title:'Code',   value:'code'},
               ],
               annotations:[
                 { name:'link', type:'object', title:'Link',
                   fields:[{name:'href',type:'url',title:'URL'}] }
               ]
             }
           },
           { type:'image', options:{hotspot:true},
             fields:[
               {name:'alt',     type:'string',title:'Alt text'},
               {name:'caption', type:'string',title:'Caption'},
             ]
           }
         ]
       }
     ],
     preview:{
       select:{title:'title',author:'author.name',media:'mainImage'},
       prepare({title,author,media}){return{title,subtitle:author?`by ${author}`:'',media};}
     }
   };

   schemas/author.js
   ──────────────────
   export default {
     name:'author', title:'Author', type:'document',
     fields:[
       {name:'name',  type:'string', title:'Name'},
       {name:'image', type:'image',  title:'Photo'},
       {name:'bio',   type:'text',   title:'Bio'},
     ]
   };

   schemas/category.js
   ────────────────────
   export default {
     name:'category', title:'Category', type:'document',
     fields:[
       {name:'title',       type:'string', title:'Title'},
       {name:'description', type:'text',   title:'Description'},
     ]
   };

   schemas/index.js
   ─────────────────
   import post     from './post';
   import author   from './author';
   import category from './category';
   export const schemaTypes = [post, author, category];

════════════════════════════════════════════════════════════ */
