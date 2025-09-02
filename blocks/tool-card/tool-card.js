export default function decorate(block) {
  const tools = [];
  
  // Parse tool data from block
  [...block.children].forEach((row) => {
    const tool = {
      name: row.children[0]?.textContent.trim() || '',
      description: row.children[1]?.textContent.trim() || '',
      url: row.children[2]?.querySelector('a')?.href || row.children[2]?.textContent.trim() || '',
      category: row.children[3]?.textContent.trim() || 'general'
    };
    if (tool.name) {
      tools.push(tool);
    }
  });

  // Create tool cards
  const toolsContainer = document.createElement('div');
  toolsContainer.className = 'tool-cards-container';
  
  toolsContainer.innerHTML = `
    <div class="tool-cards-grid">
      ${tools.map(tool => `
        <div class="tool-card" data-category="${tool.category}">
          <div class="tool-card-content">
            <h3 class="tool-card-title">${tool.name}</h3>
            <p class="tool-card-description">${tool.description}</p>
            <a href="${tool.url}" class="tool-card-link" target="_blank" rel="noopener">
              <span>Access Tool</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="tool-card-category">
            <span class="category-badge">${tool.category}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  block.textContent = '';
  block.append(toolsContainer);
  
  // Add hover effects
  toolsContainer.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}
