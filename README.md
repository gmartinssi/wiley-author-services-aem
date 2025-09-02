# Wiley Author Services - AEM Prototype

This is a working AEM prototype for Wiley Author Services built using Adobe Franklin (Helix) and @adobe/aem-cli.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ and npm v8+
- Git

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm start
```

The site will be available at `http://localhost:3000`

### Alternative commands:
```bash
# Start on different port
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Preview production build
npm run preview
```

## 📁 Project Structure

```
wiley-author-services-aem/
├── blocks/                 # Franklin blocks (components)
│   ├── navigation/        # Navigation component
│   ├── tool-card/         # Tool card component
│   ├── download/          # Download resource component
│   ├── video-player/      # Video player component
│   └── webinar-list/      # Webinar list component
├── content/               # Content pages (Markdown)
│   └── wiley/
│       └── author-services/
│           ├── index.md
│           ├── journal-authors.md
│           └── webinars.md
├── scripts/               # JavaScript files
│   ├── scripts.js        # Main scripts
│   └── lib-franklin.js   # Franklin library
├── styles/                # CSS files
│   ├── styles.css        # Main styles
│   └── fonts.css         # Font definitions
├── .helix/               # Helix configuration
│   └── config.yaml
├── fstab.yaml            # File system table config
├── head.html             # HTML head template
├── header.html           # Header template
├── footer.html           # Footer template
└── 404.html              # 404 error page
```

## 🎨 Components (Blocks)

### Navigation Block
Provides main navigation with category switching functionality.

### Tool Card Block
Displays interactive tool cards with descriptions and links.

### Download Block
Shows downloadable resources (PDFs, Excel files) with metadata.

### Video Player Block
Embeds videos from various platforms (YouTube, Brightcove, Vimeo).

### Webinar List Block
Lists upcoming and past webinars with registration links.

## 📝 Content Management

Content is managed through Markdown files in the `/content` directory. Each page follows this structure:

```markdown
# Page Title

Page introduction text...

---

## Block Name
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

## 🔧 Configuration

### fstab.yaml
Configure content sources and DAM endpoints:

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
  /content/dam: https://your-dam-endpoint.com
```

### .helix/config.yaml
Helix configuration for routing and API endpoints.

## 🚢 Deployment

### Local Testing
```bash
npm start
```

### Preview Environment
```bash
npm run preview
```

### Production Build
```bash
npm run build
```

### Deploy to AEM
1. Build the project
2. Upload to AEM as a content package
3. Configure dispatcher rules
4. Test on AEM environment

## 📊 Content Fragment Models

The project includes JSON schemas for content fragments:
- Interactive Tools
- PDF Resources
- Video Resources
- Webinar Events
- Dropdown Components

These are based on the original AEM content structure from the `aem_content_package_vClaud` directory.

## 🔗 Integration Points

- **Journal Finder**: External tool integration
- **Manuscript Language Checker**: Wiley Editing Services
- **Author Compliance Tool**: Compliance checking system
- **Brightcove**: Video platform integration
- **GoToWebinar**: Webinar registration system

## 🛠️ Development

### Adding a New Block
1. Create a new folder in `/blocks/your-block-name/`
2. Add `your-block-name.js` and `your-block-name.css`
3. Export a default function that decorates the block
4. Use the block in Markdown content

### Styling
- Global styles: `/styles/styles.css`
- Block-specific styles: `/blocks/[block-name]/[block-name].css`
- CSS variables defined in `:root` for consistency

## 📚 Resources

- [Franklin Documentation](https://www.hlx.live/docs/)
- [AEM CLI Documentation](https://github.com/adobe/aem-cli)
- [AEM Core Components](https://github.com/adobe/aem-core-wcm-components)

## 👥 Contact

For questions or support:
- Gabriel Martins Silva - gmartinssi@wiley.com

## 📄 License

© 2025 John Wiley & Sons, Inc. All rights reserved.
