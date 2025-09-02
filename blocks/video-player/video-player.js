export default function decorate(block) {
  const videos = [];
  
  // Parse video data from block
  [...block.children].forEach((row) => {
    const video = {
      title: row.children[0]?.textContent.trim() || '',
      description: row.children[1]?.textContent.trim() || '',
      videoId: row.children[2]?.textContent.trim() || '',
      platform: row.children[3]?.textContent.trim() || 'youtube',
      thumbnail: row.children[4]?.querySelector('img')?.src || ''
    };
    if (video.videoId) {
      videos.push(video);
    }
  });

  // Create video players
  const videosContainer = document.createElement('div');
  videosContainer.className = 'videos-container';
  
  videosContainer.innerHTML = `
    <div class="videos-grid">
      ${videos.map((video, index) => {
        let embedUrl = '';
        if (video.platform === 'youtube') {
          embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
        } else if (video.platform === 'brightcove') {
          embedUrl = `//players.brightcove.net/1234567890/default_default/index.html?videoId=${video.videoId}`;
        } else if (video.platform === 'vimeo') {
          embedUrl = `https://player.vimeo.com/video/${video.videoId}`;
        }
        
        return `
          <div class="video-card">
            <div class="video-wrapper">
              <div class="video-thumbnail" data-video-id="${video.videoId}" data-platform="${video.platform}" data-index="${index}">
                ${video.thumbnail ? 
                  `<img src="${video.thumbnail}" alt="${video.title}">` :
                  `<div class="video-placeholder">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="30" stroke="white" stroke-width="2"/>
                      <path d="M26 20L44 32L26 44V20Z" fill="white"/>
                    </svg>
                  </div>`
                }
                <button class="video-play-button" aria-label="Play video">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.7)"/>
                    <path d="M26 20L44 32L26 44V20Z" fill="white"/>
                  </svg>
                </button>
              </div>
              <div class="video-iframe-container" style="display: none;">
                <iframe 
                  src="" 
                  data-src="${embedUrl}"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            </div>
            <div class="video-info">
              <h3 class="video-title">${video.title}</h3>
              <p class="video-description">${video.description}</p>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  block.textContent = '';
  block.append(videosContainer);
  
  // Add play button functionality
  videosContainer.querySelectorAll('.video-play-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const thumbnail = button.closest('.video-thumbnail');
      const wrapper = thumbnail.closest('.video-wrapper');
      const iframeContainer = wrapper.querySelector('.video-iframe-container');
      const iframe = iframeContainer.querySelector('iframe');
      
      // Load and show iframe
      iframe.src = iframe.dataset.src + '?autoplay=1';
      thumbnail.style.display = 'none';
      iframeContainer.style.display = 'block';
    });
  });
}
