export default async function decorate(block) {
  // Define sidebar sections and links
  const sections = [
    {
      title: 'Journal Authors',
      links: [
        { text: 'Find a Journal', href: '/author-services/journal-authors#find-journal' },
        { text: 'Prepare', href: '/author-services/journal-authors#prepare' },
        { text: 'Submission & Peer Review', href: '/author-services/journal-authors#submission' },
        { text: 'Licensing', href: '/author-services/journal-authors#licensing' },
        { text: 'Open Access', href: '/author-services/journal-authors#open-access' },
        { text: 'Publication', href: '/author-services/journal-authors#publication' },
        { text: 'Promote', href: '/author-services/journal-authors#promote' },
      ],
    },
    {
      title: 'Book Authors',
      links: [
        { text: 'Book Proposal', href: '/author-services/book-authors#book-proposal' },
        { text: 'Writing Process', href: '/author-services/book-authors#book-writing' },
        { text: 'Marketing', href: '/author-services/book-authors#book-marketing' },
      ],
    },
    {
      title: 'Reviewers',
      links: [
        { text: 'Guidelines', href: '/author-services/reviewers#reviewer-guidelines' },
        { text: 'Resources', href: '/author-services/reviewers#reviewer-resources' },
        { text: 'Recognition', href: '/author-services/reviewers#reviewer-recognition' },
      ],
    },
    {
      title: 'Editors',
      links: [
        { text: 'Editorial Tools', href: '/author-services/editors#editor-tools' },
        { text: 'Guidelines', href: '/author-services/editors#editor-guidelines' },
      ],
    },
    {
      title: 'Societies',
      links: [
        { text: 'Publishing Services', href: '/author-services/societies#society-publishing' },
        { text: 'Benefits', href: '/author-services/societies#society-benefits' },
      ],
    },
    {
      title: 'Librarians',
      links: [
        { text: 'Resources', href: '/author-services/librarians#library-resources' },
        { text: 'Services', href: '/author-services/librarians#library-services' },
      ],
    },
    {
      title: 'Research Networks',
      links: [
        { text: 'Collaboration', href: '/author-services/research-networks#network-collaboration' },
        { text: 'Tools', href: '/author-services/research-networks#network-tools' },
      ],
    },
    {
      title: 'Corporate Partners',
      links: [
        { text: 'Solutions', href: '/author-services/corporate-partners#corporate-solutions' },
        { text: 'Licensing', href: '/author-services/corporate-partners#corporate-licensing' },
      ],
    },
  ];

  // Build sidebar HTML
  block.innerHTML = `
    <nav class="sidebar-nav" role="navigation" aria-label="Main navigation">
      <ul class="sidebar-nav-list">

        // Define sidebar sections and direct links to markdown content
        const sections = [
          { title: 'Author Resources', href: '/author-resources' },
          { title: 'Journal Authors', href: '/journal-authors' },
          { title: 'Book Authors', href: '/book-authors' },
          { title: 'Reviewers', href: '/reviewers' },
          { title: 'Editors', href: '/editors' },
          { title: 'Societies', href: '/societies' },
          { title: 'Librarians', href: '/librarians' },
          { title: 'Research Networks', href: '/research-networks' },
          { title: 'Corporate Partners', href: '/corporate-partners' },
        ];

        // Build sidebar HTML with direct links
        var html = '<nav class="sidebar-nav" role="navigation" aria-label="Main navigation">';
        html += '<ul class="sidebar-nav-list">';
        for (var i = 0; i < sections.length; i++) {
          html += '<li class="sidebar-nav-item"><a href="' + sections[i].href + '" class="sidebar-nav-link">' + sections[i].title + '</a></li>';
        }
        html += '</ul></nav>';
        block.innerHTML = html;
