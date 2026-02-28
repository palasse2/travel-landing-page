/* ============================================================
   JOURNAL.JS — Travel Readz × Sanity CMS Integration
   ============================================================
   ⚙️  CONFIG: Replace the two values below with your own.
   Find them at: https://sanity.io/manage → your project
============================================================ */

const SANITY_PROJECT_ID = 'YOUR_PROJECT_ID'; // ← paste your projectId here
const SANITY_DATASET    = 'production';       // ← change if your dataset differs
const SANITY_API_VERSION = '2024-01-01';      // API version — safe to leave as-is

/* ============================================================
   CORE: Build Sanity CDN fetch URL from a GROQ query
============================================================ */
function sanityFetch(query, params = {}) {
  const baseUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;
  const encodedQuery = encodeURIComponent(query);
  let url = `${baseUrl}?query=${encodedQuery}`;

  // Append any named params (e.g. $slug)
  Object.entries(params).forEach(([key, value]) => {
    url += `&${encodeURIComponent('$' + key)}=${encodeURIComponent(JSON.stringify(value))}`;
  });

  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
    return res.json();
  }).then(data => data.result);
}

/* ============================================================
   CORE: Build Sanity image URL from an image asset reference
   Docs: https://www.sanity.io/docs/image-urls
============================================================ */
function sanityImageUrl(imageRef, width = 800) {
  if (!imageRef?.asset?._ref) return '';
  // Ref format: image-{id}-{dimensions}-{format}
  const [, id, dimensions, format] = imageRef.asset._ref.split('-');
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dimensions}.${format}?w=${width}&auto=format&fit=crop`;
}

/* ============================================================
   CORE: Format a date string into readable form
============================================================ */
function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

/* ============================================================
   RENDER: Single post card HTML (used in grid views)
============================================================ */
function renderPostCard(post, index = 0) {
  const imgUrl  = sanityImageUrl(post.mainImage, 600);
  const imgHtml = imgUrl
    ? `<div class="journal-card-image"><img src="${imgUrl}" alt="${escapeHtml(post.title)}" loading="lazy"></div>`
    : `<div class="journal-card-image journal-card-image--placeholder"><span class="journal-img-placeholder-icon">✦</span></div>`;

  return `
    <article class="journal-card" style="animation-delay:${index * 0.1}s">
      ${imgHtml}
      <div class="journal-card-body">
        <div class="journal-card-meta">
          <span class="journal-card-date">${formatDate(post.publishedAt)}</span>
        </div>
        <h3 class="journal-card-title">${escapeHtml(post.title)}</h3>
        <p class="journal-card-excerpt">${escapeHtml(post.excerpt || '')}</p>
        <a href="/journal.html?slug=${encodeURIComponent(post.slug.current)}" class="journal-card-link">
          Read Article <span class="journal-card-arrow">→</span>
        </a>
      </div>
    </article>
  `;
}

/* ============================================================
   RENDER: Full single post view
============================================================ */
function renderSinglePost(post) {
  const imgUrl = sanityImageUrl(post.mainImage, 1200);

  // Render Portable Text body (basic blocks only — extend as needed)
  const bodyHtml = renderPortableText(post.body || []);

  return `
    <article class="journal-post">
      <div class="journal-post-header">
        <a href="/journal.html" class="journal-back-link">← Back to Journal</a>
        <div class="journal-post-meta">
          <time class="journal-post-date">${formatDate(post.publishedAt)}</time>
        </div>
        <h1 class="journal-post-title">${escapeHtml(post.title)}</h1>
        ${post.excerpt ? `<p class="journal-post-excerpt">${escapeHtml(post.excerpt)}</p>` : ''}
      </div>
      ${imgUrl ? `
        <div class="journal-post-hero-image">
          <img src="${imgUrl}" alt="${escapeHtml(post.title)}">
        </div>
      ` : ''}
      <div class="journal-post-body">
        ${bodyHtml}
      </div>
    </article>
  `;
}

/* ============================================================
   RENDER: Portable Text → HTML
   Handles: normal, h1-h4, blockquote, bullet/number lists, marks
============================================================ */
function renderPortableText(blocks) {
  if (!blocks?.length) return '';
  let html = '';
  let listBuffer = [];
  let listType = null;

  function flushList() {
    if (!listBuffer.length) return;
    const tag = listType === 'number' ? 'ol' : 'ul';
    html += `<${tag} class="journal-body-list">${listBuffer.join('')}</${tag}>`;
    listBuffer = [];
    listType = null;
  }

  blocks.forEach(block => {
    if (block._type === 'image') {
      flushList();
      const imgUrl = sanityImageUrl(block, 900);
      if (imgUrl) html += `<figure class="journal-body-figure"><img src="${imgUrl}" alt="${escapeHtml(block.alt || '')}" loading="lazy"></figure>`;
      return;
    }
    if (block._type !== 'block') return;

    const text = renderSpans(block.children || []);

    // Handle list items
    if (block.listItem) {
      if (listType !== block.listItem) { flushList(); listType = block.listItem; }
      listBuffer.push(`<li>${text}</li>`);
      return;
    }
    flushList();

    switch (block.style) {
      case 'h1': html += `<h1 class="journal-body-h1">${text}</h1>`; break;
      case 'h2': html += `<h2 class="journal-body-h2">${text}</h2>`; break;
      case 'h3': html += `<h3 class="journal-body-h3">${text}</h3>`; break;
      case 'h4': html += `<h4 class="journal-body-h4">${text}</h4>`; break;
      case 'blockquote': html += `<blockquote class="journal-body-quote">${text}</blockquote>`; break;
      default: if (text.trim()) html += `<p class="journal-body-p">${text}</p>`; break;
    }
  });

  flushList();
  return html;
}

/* Render inline spans with marks (bold, italic, underline, link) */
function renderSpans(spans) {
  return spans.map(span => {
    let text = escapeHtml(span.text || '');
    if (!span.marks?.length) return text;
    span.marks.forEach(mark => {
      if (mark === 'strong')    text = `<strong>${text}</strong>`;
      else if (mark === 'em')   text = `<em>${text}</em>`;
      else if (mark === 'underline') text = `<u>${text}</u>`;
      else if (mark === 'code') text = `<code>${text}</code>`;
      // Link marks reference markDefs — basic passthrough
    });
    return text;
  }).join('');
}

/* XSS-safe HTML escape */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ============================================================
   LOADING / ERROR STATE HELPERS
============================================================ */
function showLoading(container, message = 'Loading…') {
  container.innerHTML = `
    <div class="journal-loading">
      <div class="journal-loading-spinner"></div>
      <p>${message}</p>
    </div>
  `;
}

function showError(container, message = 'Could not load posts. Please try again later.') {
  container.innerHTML = `
    <div class="journal-error">
      <span class="journal-error-icon">✦</span>
      <p>${message}</p>
    </div>
  `;
}

/* ============================================================
   FEATURE 1: Homepage — Latest 3 Posts
   Call this on index.html inside <script> after the section exists
============================================================ */
async function initHomepageJournal() {
  const grid = document.querySelector('.journal-grid');
  if (!grid) return;

  showLoading(grid, 'Loading latest posts…');

  try {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }`;

    const posts = await sanityFetch(query);

    if (!posts?.length) {
      showError(grid, 'No posts published yet. Check back soon.');
      return;
    }

    grid.innerHTML = posts.map((post, i) => renderPostCard(post, i)).join('');

    // Trigger reveal animations
    requestAnimationFrame(() => {
      grid.querySelectorAll('.journal-card').forEach(card => card.classList.add('in'));
    });

  } catch (err) {
    console.error('[Journal] Homepage fetch error:', err);
    showError(grid);
  }
}

/* ============================================================
   FEATURE 2 & 3: Journal Page — All Posts OR Single Post
   Called automatically when journal.html loads
============================================================ */
async function initJournalPage() {
  const slug = new URLSearchParams(window.location.search).get('slug');

  if (slug) {
    await loadSinglePost(slug);
  } else {
    await loadAllPosts();
  }
}

/* Load and render all posts */
async function loadAllPosts() {
  const container = document.getElementById('journal-container');
  if (!container) return;

  showLoading(container, 'Loading journal…');

  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }`;

    const posts = await sanityFetch(query);

    if (!posts?.length) {
      showError(container, 'No posts published yet. Check back soon.');
      return;
    }

    container.innerHTML = `<div class="journal-all-grid">${posts.map((p, i) => renderPostCard(p, i)).join('')}</div>`;

    requestAnimationFrame(() => {
      container.querySelectorAll('.journal-card').forEach(card => card.classList.add('in'));
    });

  } catch (err) {
    console.error('[Journal] All posts fetch error:', err);
    showError(container);
  }
}

/* Load and render single post by slug */
async function loadSinglePost(slug) {
  const container = document.getElementById('journal-container');
  if (!container) return;

  showLoading(container, 'Loading article…');

  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body
    }`;

    const post = await sanityFetch(query, { slug });

    if (!post) {
      showError(container, 'Article not found.');
      return;
    }

    // ── SEO: Dynamic title, meta description, Open Graph ──
    document.title = `${post.title} | Travel Readz Journal`;

    setMeta('description', post.excerpt || '');
    setMeta('og:title', post.title);
    setMeta('og:description', post.excerpt || '');
    setMeta('og:type', 'article');
    setMeta('og:url', window.location.href);

    const imgUrl = sanityImageUrl(post.mainImage, 1200);
    if (imgUrl) setMeta('og:image', imgUrl);

    container.innerHTML = renderSinglePost(post);
    container.classList.add('in');

  } catch (err) {
    console.error('[Journal] Single post fetch error:', err);
    showError(container, 'Failed to load article.');
  }
}

/* Set or create a meta tag */
function setMeta(name, content) {
  const isOg = name.startsWith('og:');
  const attr  = isOg ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
