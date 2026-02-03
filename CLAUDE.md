# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**JackWeb** is a static HTML/CSS portfolio and support hub for two iOS applications:
- **CVAgent**: AI-powered CV and cover letter generation tool
- **ETPattern**: English language learning app using spaced repetition

This is a **static website** with no build tools, no framework dependencies, and no runtime JavaScript. All files are pure HTML5 and CSS3, deployable directly to any static host.

## Technology Stack

- **HTML5**: Pure semantic markup with inline styling
- **CSS3**: Advanced features including:
  - CSS Grid and Flexbox for responsive layouts
  - Animated gradients with keyframe animations
  - Backdrop filters for glass-morphism effects
  - Media queries for mobile responsiveness (768px breakpoint)
- **No framework, no build tools, no dependencies**

## Project Structure

```
/
├── index.html                          # Main landing page (app portal hub)
├── CVAgentSupport.html                 # CVAgent FAQs and troubleshooting
├── ETPatternSupport.html               # ETPattern FAQs and troubleshooting
├── PrivacyPolicyforCVAgent.html        # CVAgent privacy policy
├── PrivacyPolicyforETPattern.html      # ETPattern privacy policy
└── .claude/settings.local.json         # Claude Code settings
```

## Common Development Tasks

### Local Development

Open any HTML file directly in a browser:
```bash
open index.html
```

Or use a simple local server (Python):
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

Files can be deployed directly to any static host (GitHub Pages, Netlify, Vercel, S3, etc.). No build step required.

```bash
# GitHub Pages: Push to main branch and enable Pages in repo settings
git push origin main
```

## Design Architecture

The site uses a **centralized design system** with:

- **Color palette**: Dark gradient backgrounds with accent colors (purple, red, teal)
- **Typography**: Google Fonts "Inter" with responsive sizing
- **Layout**: CSS Grid for responsive app cards, Flexbox for flexible containers
- **Effects**: Animated gradients, glass-morphism, smooth hover transitions, floating animations
- **Responsive design**: Single breakpoint at 768px for mobile/tablet

### Key CSS Components

- `.bg-gradient`: Animated background with radial and linear gradients (15s animation cycle)
- `.container`: Max-width wrapper for centered content
- `.app-cards-grid`: CSS Grid with auto-fit columns
- `.app-card`: Individual app showcase with hover effects and glass effect (backdrop-filter: blur)

## Page Structure

### index.html (Main Portal)

- Hero section with gradient-text heading animation
- App cards grid (CVAgent and ETPattern)
- Each card links to support and privacy pages
- Footer with contact email (jackyxhb@gmail.com)

### Support Pages

Both support pages follow the same structure:
- Hero section with app title
- FAQ section organized by topic
- Back link to main portal
- Shared styling with index.html

### Privacy Policy Pages

Minimal, text-focused pages emphasizing:
- No data collection from users
- Data stored locally or in iCloud
- No third-party sharing
- Links to support pages

## Common Updates

### Adding/Updating App Information

1. **Main page (index.html)**: Update app card HTML and links
2. **Support page** (e.g., CVAgentSupport.html): Update FAQ content
3. **Privacy page** (e.g., PrivacyPolicyforCVAgent.html): Update privacy commitments

All pages share the same CSS styling approach. The Inter font family and color scheme are used consistently across all pages.

### Email/Contact Updates

Contact email appears in:
- Footer of index.html
- Support page footers
- Privacy policy pages

Global email: **jackyxhb@gmail.com**

## Git Workflow

- **Main branch**: Production-ready content
- **Commit pattern**: Descriptive feat/fix messages
- **Remote**: https://github.com/jackyxhb/JackWeb.git

## Performance Considerations

- Zero runtime JavaScript = instant page load
- Single HTTP request per page
- Optimized CSS with no unused styles
- Google Fonts loaded via preconnect for faster loading
- Responsive images and layouts avoid unnecessary repaints

## Accessibility & Browser Support

- Semantic HTML5 structure
- Color contrast suitable for readability
- Responsive viewport meta tag
- Cross-browser compatible CSS (modern browsers)
- System fonts as fallback (-apple-system, BlinkMacSystemFont)

## Future Enhancements

When adding features, maintain the static-first approach:
- Use CSS animations instead of JavaScript
- Keep HTML semantic and lightweight
- Use CSS Grid/Flexbox for responsive layouts
- Add new pages as standalone HTML files with consistent styling
