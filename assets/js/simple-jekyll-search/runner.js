---
---
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '{{ site.baseurl }}/assets/json/search-posts.json',
  searchResultTemplate: `
         <dt class="result">
          <a class="posts-nav-item"  href="{url}">
            <span class="posts-nav-item-date">
              <time datetime="{date}" class="date">
                {date}
              </time>
            </span>
            {title}
          </a>
        </dt>
        <dd>
          <p>{excerpt}</p>
        </dd>`,
  limit: 12
});
