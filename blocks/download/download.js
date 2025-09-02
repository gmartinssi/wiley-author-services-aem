export default function decorate(block) {
  const downloads = [];
  
  // Parse download data from block
  [...block.children].forEach((row) => {
    const download = {
      title: row.children[0]?.textContent.trim() || '',
      description: row.children[1]?.textContent.trim() || '',
      url: row.children[2]?.querySelector('a')?.href || row.children[2]?.textContent.trim() || '',
      category: row.children[3]?.textContent.trim() || 'resource',
      fileType: 'pdf' // Default to PDF, can be extended
    };
    if (download.title) {
      downloads.push(download);
    }
  });

  // Create download cards
  const downloadsContainer = document.createElement('div');
  downloadsContainer.className = 'downloads-container';
  
  downloadsContainer.innerHTML = `
    <div class="downloads-grid">
      ${downloads.map(item => `
        <div class="download-card" data-category="${item.category}">
          <div class="download-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#f5f5f5"/>
              <path d="M28 14H20C18.9 14 18 14.9 18 16V32C18 33.1 18.9 34 20 34H28C29.1 34 30 33.1 30 32V16C30 14.9 29.1 14 28 14Z" stroke="#663399" stroke-width="2"/>
              <path d="M22 20H26M22 24H26M22 28H24" stroke="#663399" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="download-content">
            <h3 class="download-title">${item.title}</h3>
            <p class="download-description">${item.description}</p>
            <div class="download-footer">
              <span class="download-type">${item.fileType.toUpperCase()}</span>
              <a href="${item.url}" class="download-button" download>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2V14M10 14L6 10M10 14L14 10M3 17H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  block.textContent = '';
  block.append(downloadsContainer);
  
  // Add click tracking
  downloadsContainer.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = button.closest('.download-card');
      const title = card.querySelector('.download-title').textContent;
      console.log('Download initiated:', title);
      // Track download analytics here
    });
  });
}
