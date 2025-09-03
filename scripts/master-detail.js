// Master-Detail Layout JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sidebar navigation
  initSidebarNavigation();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Initialize content loading
  initContentLoading();
});

function initSidebarNavigation() {
  const sidebarItems = document.querySelectorAll('.sidebar-nav-item');
  
  sidebarItems.forEach(item => {
    const link = item.querySelector('.sidebar-nav-link');
    const submenu = item.querySelector('.sidebar-submenu');
    
    if (link && submenu) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle expanded state
        const isExpanded = item.classList.contains('expanded');
        
        // Close all other items
        sidebarItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('expanded');
          }
        });
        
        // Toggle current item
        if (!isExpanded) {
          item.classList.add('expanded');
        } else {
          item.classList.remove('expanded');
        }
        
        // Update main content
        const section = item.dataset.section;
        if (section) {
          updateMainContent(section);
        }
      });
    }
  });
  
  // Handle submenu clicks
  const submenuLinks = document.querySelectorAll('.sidebar-submenu-link');
  submenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all submenu items
      document.querySelectorAll('.sidebar-submenu-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Add active class to clicked item
      link.parentElement.classList.add('active');
      
      // Scroll to section
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Update breadcrumb
      updateBreadcrumb(link.textContent);
    });
  });
}

function initSmoothScrolling() {
  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

function initContentLoading() {
  // Simulate content loading for different sections
  const sections = {
    'journal-authors': {
      title: 'Journal Authors',
      description: 'Resources and tools for journal authors throughout the publication journey.'
    },
    'reviewers': {
      title: 'Reviewers',
      description: 'Guidelines and resources for peer reviewers.'
    },
    'ethics': {
      title: 'Ethics Guidelines',
      description: 'Best practice guidelines on research integrity and publishing ethics.'
    },
    'webinars': {
      title: 'Webinars & Events',
      description: 'Upcoming and past webinars for researchers and authors.'
    }
  };
  
  // Check URL hash on load
  const hash = window.location.hash.substring(1);
  if (hash && sections[hash]) {
    updateMainContent(hash);
  }
}

function updateMainContent(section) {
  const contentTitle = document.querySelector('.content-title');
  const contentDescription = document.querySelector('.content-description');
  const breadcrumb = document.getElementById('current-section');
  
  // Update based on section
  const sectionData = getSectionData(section);
  if (sectionData) {
    if (contentTitle) contentTitle.textContent = sectionData.title;
    if (contentDescription) contentDescription.textContent = sectionData.description;
    if (breadcrumb) breadcrumb.textContent = sectionData.breadcrumb;
    
    // Update URL
    window.history.pushState({}, '', `#${section}`);
    
    // Show loading state briefly
    showLoadingState();
    
    // Load section-specific content
    setTimeout(() => {
      loadSectionContent(section);
      hideLoadingState();
    }, 300);
  }
}

function getSectionData(section) {
  const data = {
    'journal-authors': {
      title: 'Find a Journal',
      description: 'Working on your next manuscript? Use one of the options below to find the perfect journal for your work.',
      breadcrumb: 'Journal Authors'
    },
    'reviewers': {
      title: 'Reviewer Guidelines',
      description: 'Learn about the peer review process and access resources to help you provide effective reviews.',
      breadcrumb: 'Reviewers'
    },
    'ethics': {
      title: 'Ethics Guidelines',
      description: 'Comprehensive guidelines on research integrity, authorship, and publishing ethics.',
      breadcrumb: 'Ethics Guidelines'
    },
    'webinars': {
      title: 'Webinars & Events',
      description: 'Join our expert-led webinars and events to enhance your publishing knowledge.',
      breadcrumb: 'Webinars'
    }
  };
  
  return data[section];
}

function updateBreadcrumb(text) {
  const breadcrumb = document.getElementById('current-section');
  if (breadcrumb && text) {
    breadcrumb.textContent = text;
  }
}

function showLoadingState() {
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.style.opacity = '0.5';
    mainContent.style.transition = 'opacity 0.2s';
  }
}

function hideLoadingState() {
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.style.opacity = '1';
  }
}

function loadSectionContent(section) {
  // This function would typically load content dynamically
  // For now, it just logs the section being loaded
  console.log(`Loading content for section: ${section}`);
  
  // Trigger custom event for content loaded
  const event = new CustomEvent('sectionLoaded', {
    detail: { section }
  });
  document.dispatchEvent(event);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const item = document.querySelector(`[data-section="${hash}"]`);
    if (item) {
      item.classList.add('expanded');
      updateMainContent(hash);
    }
  }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initSidebarNavigation,
    updateMainContent,
    getSectionData
  };
}
