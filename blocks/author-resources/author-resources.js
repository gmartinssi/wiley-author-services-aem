export default async function decorate(block) {
  // Fetch content from AEM/Franklin JSON endpoint
  const resp = await fetch('/author-resources.json');
  const data = await resp.json();

  // Build the resources list
  const resourcesHTML = data.data.map(resource => `
    <div class="resource-item">
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <a href="${resource.link}" class="resource-link">Learn More</a>
    </div>
  `).join('');

  block.innerHTML = `
    <div class="author-resources-container">
      <h2>Author Resources</h2>
      ${resourcesHTML}
    </div>
  `;
}
