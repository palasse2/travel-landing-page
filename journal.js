/* ════════════════════════════════════════════════════════════
   JOURNAL.JS  —  Travel Readz
   Fetches posts from Hashnode and renders:
     • Post grid  → journal.html
     • Single post → journal.html?slug=my-post-slug
   ────────────────────────────────────────────────────────────
   QUICK SETUP
   1. Create a free blog at https://hashnode.com
   2. Your host is already set below
   3. Write posts in Hashnode — they appear instantly here
════════════════════════════════════════════════════════════ */

/* ── CONFIG ──────────────────────────────────────────────── */
const HASHNODE_HOST    = 'travelreadz.hashnode.dev';
const HASHNODE_API     = 'https://gql.hashnode.com';
const POSTS_PER_PAGE   = 9;

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

function readTime(minutes) {
  return (minutes || 1) + ' min read';
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
   HASHNODE API HELPER
══════════════════════════════════════════════════════════ */

async function hashnodeQuery(query, variables) {
  var res = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query, variables: variables || {} })
  });
  var data = await res.json();
  if (data.errors) throw new Error(data.errors[0].message);
  return data.data;
}

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
var _allPosts     = [];
var _shown        = 0;
var _activeFilter = 'all';
var _categories   = [];
var _endCursor    = null;
var _hasMore      = false;

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

  var query = `
    query GetPosts($host: String!, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              slug
              publishedAt
              brief
              readTimeInMinutes
              coverImage { url }
              tags { name }
              author { name profilePicture }
            }
          }
        }
      }
    }
  `;

  try {
    var data = await hashnodeQuery(query, {
      host: HASHNODE_HOST,
      first: POSTS_PER_PAGE,
      after: null
    });

    var publication = data.publication;
    if (!publication) throw new Error('Publication not found. Check your Hashnode host.');

    var posts = publication.posts.edges.map(function(e){ return e.node; });
    _endCursor = publication.posts.pageInfo.endCursor;
    _hasMore   = publication.posts.pageInfo.hasNextPage;
    _allPosts  = posts;

  } catch(err) {
    container.innerHTML = _emptyState('📡', 'Could not load posts', err.message);
    console.error('[Journal]', err);
    return;
  }

  _categories   = [...new Set(_allPosts.map(function(p){
    return p.tags && p.tags[0] ? p.tags[0].name : null;
  }).filter(Boolean))];
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
    : _allPosts.filter(function(p){
        return p.tags && p.tags.some(function(t){ return t.name === _activeFilter; });
      });

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

  if (_shown < filtered.length || _hasMore) {
    loadWrap.innerHTML = [
      '<button class="journal-load-more-btn" id="jnl-load-btn">',
      '  Load More Stories →',
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

  var src = post.coverImage ? post.coverImage.url : null;
  var imgInner = src
    ? '<img src="' + src + '" alt="' + esc(post.title||'') + '" loading="lazy">'
    : '<div class="journal-card-img-placeholder" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">' +
          '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
          '<circle cx="8.5" cy="8.5" r="1.5"/>' +
          '<polyline points="21 15 16 10 5 21"/>' +
        '</svg></div>';

  var category = post.tags && post.tags[0] ? post.tags[0].name : null;
  var tag = category
    ? '<div class="journal-card-tag">' + esc(category) + '</div>' : '';

  card.innerHTML = [
    '<div class="journal-card-img">' + imgInner + tag + '</div>',
    '<div class="journal-card-body">',
    '  <div class="journal-card-meta">',
    '    <time class="journal-card-date" datetime="' + esc(post.publishedAt||'') + '">' + fmtDate(post.publishedAt) + '</time>',
    '    <span class="journal-card-meta-dot" aria-hidden="true"></span>',
    '    <span class="journal-card-read-time">' + readTime(post.readTimeInMinutes) + '</span>',
    '  </div>',
    '  <h2 class="journal-card-title">' + esc(post.title||'Untitled') + '</h2>',
    '  <p class="journal-card-excerpt">' + esc(post.brief||'') + '</p>',
    '  <span class="journal-card-read-more">Read Article →</span>',
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

  var query = `
    query GetPost($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          slug
          publishedAt
          readTimeInMinutes
          brief
          content { html }
          coverImage { url }
          tags { name }
          author { name profilePicture }
          seo { title description }
        }
      }
    }
  `;

  var relQuery = `
    query GetRelated($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              title
              slug
              publishedAt
              coverImage { url }
            }
          }
        }
      }
    }
  `;

  var post, related;
  try {
    var results = await Promise.all([
      hashnodeQuery(query, { host: HASHNODE_HOST, slug: slug }),
      hashnodeQuery(relQuery, { host: HASHNODE_HOST, first: 4 })
    ]);
    post    = results[0].publication && results[0].publication.post;
    related = (results[1].publication && results[1].publication.posts.edges || [])
      .map(function(e){ return e.node; })
      .filter(function(p){ return p.slug !== slug; })
      .slice(0, 3);
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
  setMeta('og:title',       post.seo ? post.seo.title : post.title);
  setMeta('og:description', post.seo ? post.seo.description : post.brief);
  if (post.coverImage) setMeta('og:image', post.coverImage.url);

  // Update hero
  var heroTitle    = document.getElementById('journal-page-title');
  var heroSubtitle = document.getElementById('journal-page-subtitle');
  if (heroTitle)    heroTitle.textContent    = post.title || '';
  if (heroSubtitle) heroSubtitle.textContent = post.brief || '';

  // Hashnode returns ready HTML — inject mid-post CTA after 3rd paragraph
  var rawHtml  = (post.content && post.content.html) || '';
  var pCount   = 0;
  var bodyHtml = rawHtml.replace(/<\/p>/gi, function(m) {
    pCount++;
    return m + (pCount === 3 ? _postCta() : '');
  });

  // Category tag
  var category = post.tags && post.tags[0] ? post.tags[0].name : null;
  var tagHtml  = category
    ? '<div class="post-tags"><span class="post-tag">' + esc(category) + '</span></div>'
    : '';

  // Cover image
  var coverHtml = post.coverImage
    ? '<div class="post-cover"><img src="' + post.coverImage.url + '" alt="' + esc(post.title||'') + '" loading="eager"></div>'
    : '';

  // Related posts sidebar
  var relHtml = '';
  if (related.length) {
    var relCards = related.map(function(r) {
      var thumb = r.coverImage ? r.coverImage.url : null;
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
      '  <div class="post-sidebar-label">Related Articles</div>',
      relCards,
      '</div>'
    ].join('');
  }

  container.innerHTML = [
    '<a href="journal.html" class="post-back-link">← Back to Journal</a>',
    '<div class="post-layout">',
    '  <article>',
         tagHtml,
    '    <h1 class="post-title">' + esc(post.title||'') + '</h1>',
    '    <div class="post-meta">',
    '      <div class="post-author">',
    '        <div class="post-author-avatar" aria-hidden="true">' + initials(post.author && post.author.name) + '</div>',
    '        <span class="post-author-name">' + esc((post.author && post.author.name)||'Travel Readz') + '</span>',
    '      </div>',
    '      <div class="post-meta-sep" aria-hidden="true"></div>',
    '      <time class="post-date" datetime="' + esc(post.publishedAt||'') + '">' + fmtDate(post.publishedAt) + '</time>',
    '      <div class="post-meta-sep" aria-hidden="true"></div>',
    '      <span class="post-read-time">' + readTime(post.readTimeInMinutes) + '</span>',
    '    </div>',
         coverHtml,
    '    <div class="post-body">' + bodyHtml + '</div>',
    '  </article>',
    '  <aside class="post-sidebar">',
         relHtml,
    '  </aside>',
    '</div>'
  ].join('\n');
}

function _postCta() {
  return [
    '<div class="post-cta-block">',
    '  <p>Planning a trip to Morocco? The Travel Readz guide has everything —',
    '    local maps, cultural knowledge, a budget calculator, and direct WhatsApp support.</p>',
    '  <a href="https://travelreadz.gumroad.com/l/ubqlaj?wanted=true" class="post-cta-btn">',
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
