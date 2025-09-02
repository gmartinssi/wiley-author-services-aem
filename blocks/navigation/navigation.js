export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'navigation-wrapper';
  
  // Get navigation data from the block
  const categories = [];
  [...block.children].forEach((row) => {
    const category = {
      title: row.children[0]?.textContent.trim() || '',
      description: row.children[1]?.textContent.trim() || '',
      link: row.children[2]?.querySelector('a')?.href || '#'
    };
    categories.push(category);
  });

  // Build navigation HTML
  const navHTML = `
    <div class="navigation-container">
      <ul class="navigation-list">
        ${categories.map((cat, index) => `
          <li class="navigation-item ${index === 0 ? 'active' : ''}" data-category="${cat.title.toLowerCase().replace(/\s+/g, '-')}">
            <a href="${cat.link}" class="navigation-link">
              <span class="navigation-title">${cat.title}</span>
              ${cat.description ? `<span class="navigation-description">${cat.description}</span>` : ''}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  nav.innerHTML = navHTML;
  block.textContent = '';
  block.append(nav);

  // Add click handlers for navigation
  nav.querySelectorAll('.navigation-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove active class from all items
      nav.querySelectorAll('.navigation-item').forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
      // Dispatch custom event for content switching
      const event = new CustomEvent('navigation-change', {
        detail: { category: item.dataset.category }
      });
      document.dispatchEvent(event);
    });
  });
}
