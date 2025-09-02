export default function decorate(block) {
  const webinars = [];
  
  // Parse webinar data from block
  [...block.children].forEach((row) => {
    const webinar = {
      title: row.children[0]?.textContent.trim() || '',
      description: row.children[1]?.textContent.trim() || '',
      date: row.children[2]?.textContent.trim() || '',
      registrationUrl: row.children[3]?.querySelector('a')?.href || row.children[3]?.textContent.trim() || '',
      category: row.children[4]?.textContent.trim() || 'general',
      status: row.children[5]?.textContent.trim() || 'upcoming'
    };
    if (webinar.title) {
      webinars.push(webinar);
    }
  });

  // Sort webinars by date
  webinars.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Group webinars by category
  const groupedWebinars = webinars.reduce((acc, webinar) => {
    if (!acc[webinar.category]) {
      acc[webinar.category] = [];
    }
    acc[webinar.category].push(webinar);
    return acc;
  }, {});

  // Create webinar list
  const webinarsContainer = document.createElement('div');
  webinarsContainer.className = 'webinars-container';
  
  webinarsContainer.innerHTML = `
    <div class="webinars-content">
      ${Object.entries(groupedWebinars).map(([category, items]) => `
        <div class="webinar-category-section">
          <h3 class="webinar-category-title">${formatCategoryName(category)}</h3>
          <div class="webinar-list">
            ${items.map(webinar => {
              const date = new Date(webinar.date);
              const isPast = date < new Date();
              const formattedDate = date.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              });
              
              return `
                <div class="webinar-item ${isPast ? 'past' : 'upcoming'}">
                  <div class="webinar-date">
                    <div class="date-month">${date.toLocaleDateString('en-US', { month: 'short' })}</div>
                    <div class="date-day">${date.getDate()}</div>
                  </div>
                  <div class="webinar-details">
                    <h4 class="webinar-title">${webinar.title}</h4>
                    <p class="webinar-description">${webinar.description}</p>
                    <div class="webinar-meta">
                      <span class="webinar-date-full">${formattedDate}</span>
                      ${!isPast ? `
                        <a href="${webinar.registrationUrl}" class="webinar-register-btn" target="_blank" rel="noopener">
                          Register Now
                        </a>
                      ` : `
                        <span class="webinar-status">Past Event</span>
                      `}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  block.textContent = '';
  block.append(webinarsContainer);
}

function formatCategoryName(category) {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
