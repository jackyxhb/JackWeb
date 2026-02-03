# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**JackWeb** is a static HTML/CSS portfolio and support hub for two iOS applications:
- **CVAgent**: AI-powered CV and cover letter generation tool
- **ETPattern**: English language learning app using spaced repetition

This is a **static website** with no build tools, no framework dependencies, and no runtime JavaScript. All files are pure HTML5 and CSS3, deployable directly to any static host.

## Technology Stack

- **HTML5**: Pure semantic markup with external CSS
- **CSS3**: Advanced features including:
  - CSS custom properties (variables) for theming
  - CSS Grid and Flexbox for responsive layouts
  - Animated gradients with 50+ keyframe animations
  - Backdrop filters for glass-morphism effects
  - Media queries for mobile responsiveness (768px breakpoint)
- **JavaScript**: Minimal vanilla JS for theme toggle (localStorage + prefers-color-scheme)
- **No framework, no build tools, no dependencies**

## Project Structure

```
/
├── index.html                          # Main landing page (app portal hub)
├── CVAgentSupport.html                 # CVAgent FAQs and troubleshooting
├── ETPatternSupport.html               # ETPattern FAQs and troubleshooting
├── PrivacyPolicyforCVAgent.html        # CVAgent privacy policy
├── PrivacyPolicyforETPattern.html      # ETPattern privacy policy
├── assets/
│   ├── css/
│   │   ├── design-system.css           # CSS variables, color tokens, base styles
│   │   ├── components.css              # Reusable UI component styles
│   │   └── animations.css              # Keyframes and advanced animations
│   ├── js/
│   │   └── theme-toggle.js             # Dark/Light theme switcher
│   └── images/
│       ├── cvagent-icon.svg            # CVAgent favicon (purple gradient)
│       ├── etpattern-icon.svg          # ETPattern favicon (pink gradient)
│       └── portal-icon.svg             # Main portal favicon
├── CLAUDE.md                           # Claude Code guidance document
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

The site uses a **comprehensive centralized design system** with:

### CSS Design System (design-system.css)
- **CSS Custom Properties**: Full theme system with dark/light mode support
- **Color Palette**:
  - Primary backgrounds: Dark gradient (#1a1a2e → #16213e → #0f3460)
  - Accent colors: Purple (#667eea) for CVAgent, Pink (#f093fb) for ETPattern
  - Text colors: Primary white, secondary with opacity variations
- **Typography**: Google Fonts "Inter" family (400, 500, 600, 700, 800 weights)
- **Spacing System**: 4pt base unit grid (8px, 12px, 16px, 24px, 32px, 60px, etc.)
- **Border Radius**: 0.5rem (sm), 1rem (md), 1.5rem (xl), 2rem (2xl), etc.
- **Shadows & Effects**: Multiple shadow levels, glass-morphism with 20px blur
- **Animations**: 15-second gradient shift, hover effects, transitions (150ms-500ms)

### Component Library (components.css)
- `.glass-card`: Glass-morphism cards with backdrop blur and hover effects
- `.nav-bar`: Fixed navigation with theme toggle button
- `.theme-toggle`: Sun/moon icon switcher with smooth transitions
- `.hero`: Hero sections with gradient text animations
- `.app-cards-grid`: Responsive grid (auto-fit, minmax 320px)
- `.faq-item`: Collapsible details/summary with animated chevron
- `.feature-card`: Feature highlight cards with icons and titles
- `.contact-box`: Contact section styling
- Responsive layouts and flex containers throughout

### Animation Library (animations.css)
- **Floating**: 3-4 second floating motion animations
- **Gradients**: Animated gradient shifting and color transitions
- **Glows**: Pulsing glow effects (CVAgent purple, ETPattern pink)
- **Shimmer**: Shine and shimmer effects
- **Bouncing**: Spring and bounce animations
- **Fades**: Fade in/out with directional variants (up, down, left, right)
- **Slides**: Slide animations with staggered timing
- **Scales**: Scale up, down, and pulse effects
- **50+ total animations** available as utility classes

### Layout & Responsive Design
- **CSS Grid**: Auto-fit columns for app cards, responsive sidebars
- **Flexbox**: Navigation bars, content sections, list items
- **Container queries**: Max-width 1200px for main content
- **Mobile breakpoint**: 768px - single column on mobile, multi-column on desktop
- **Sticky sidebars**: On desktop (top: 90px), responsive grid on mobile

## Page Structure

### index.html (Main Portal)
- **Fixed Navigation Bar**: Home logo, breadcrumbs (hidden on mobile), theme toggle
- **Hero Section**: Gradient-text "Jack's App Portal" heading, subtitle, animations
- **App Cards Grid**: Responsive grid with CVAgent and ETPattern showcase
  - App icon with gradient background
  - App name and description
  - Links to support and privacy pages
  - Hover effects and animations
- **Footer**: Contact email and navigation links
- **Features**: Theme toggle, full animation support, responsive design

### CVAgentSupport.html (Support Page)
- **Navigation**: Home button, breadcrumbs, theme toggle
- **Hero Section**: App icon, title, version badge (v1.2.4)
- **Features Section**: 4-column grid of key features with icons
- **FAQ Sections**:
  - 5 collapsible FAQ items (details/summary)
  - 1 troubleshooting section
  - 1 privacy section with link to full policy
  - Staggered fade-in animations
- **Sidebar (Desktop)**:
  - Requirements box (iOS, iCloud, internet, storage)
  - Contact box with email button
  - Related links (Privacy, Home, ETPattern Support)
- **Responsive**: Sidebar moves below content on tablet/mobile

### ETPatternSupport.html (Support Page)
- Same structure as CVAgent but with:
- **Features**: 300+ Patterns, FSRS Algorithm, Translation API, CloudKit Sync
- **Version Badge**: v2.4
- **Requirements**: iOS 18+, iCloud account, internet, 100MB space
- **Pink accent color** throughout (#f093fb)
- **5 FAQs** covering: import, sync, audio, maturity levels, progress tracking

### PrivacyPolicyforCVAgent.html (Privacy Policy)
- **Navigation**: Home button, breadcrumbs, theme toggle
- **Hero Section**: Gradient title, subtitle, last updated badge
- **Content Layout**:
  - Main content column with 8 numbered sections
  - Sticky sidebar with table of contents and quick navigation links
  - Responsive: Single column on mobile, two-column on desktop
- **Sections**:
  1. Overview - Privacy-first promise
  2. Data Collection - 5 "no data collection" feature items
  3. Data Storage & Security - 4 storage method items
  4. Data Sharing & Disclosure - Data sharing policy
  5. AI Processing & Privacy - AI provider information
  6. Privacy Compliance - GDPR, CCPA, App Store compliance
  7. Changes to Policy - Policy update notification
  8. Contact Us - Email contact button
- **Features**: Highlight boxes, feature items with icons, table of contents, email CTA

### PrivacyPolicyforETPattern.html (Privacy Policy)
- Same structure as CVAgent but with:
- **Sections**: 8 numbered sections covering ETPattern-specific privacy
- **Section 5**: Translation & External Services (instead of AI Processing)
- **Pink accent color** (#f093fb) for all interactive elements
- **Specific content**: On-device learning, SwiftData security, CloudKit details

## Theme System

### Dark/Light Mode Toggle
- **Implementation**: Vanilla JavaScript with localStorage persistence
- **File**: `assets/js/theme-toggle.js`
- **How it works**:
  1. Sets `data-theme` attribute on `<html>` element
  2. CSS variables automatically adapt based on theme
  3. User preference saved to localStorage
  4. Respects system `prefers-color-scheme` as default
- **Button**: Sun/moon icon in navigation bar
- **Smooth transitions**: All color changes fade smoothly (250ms)

### Color Customization
All colors are defined as CSS variables in `design-system.css`:
```css
:root {
  --accent-cvagent: #667eea;
  --accent-cvagent-dark: #764ba2;
  --accent-etpattern: #f093fb;
  --accent-etpattern-dark: #f5576c;
  /* Light and dark theme variations for all colors */
}

[data-theme="light"] {
  /* Light mode overrides */
}
```

To change accent colors:
1. Edit CSS variables in `design-system.css`
2. Update both dark and light theme sections
3. The change automatically applies across all pages

## Common Updates

### Adding/Updating App Information

1. **Main page (index.html)**:
   - Update app card icon (emoji) and title
   - Update description text
   - Keep card structure for consistent styling

2. **Support page** (e.g., CVAgentSupport.html):
   - Update version badge in hero section
   - Add/edit FAQ items (inside `.faq-items` div)
   - Update feature cards in features grid
   - Update requirements sidebar box

3. **Privacy page** (e.g., PrivacyPolicyforCVAgent.html):
   - Update section content while keeping numbered structure
   - Keep section-title structure for styling
   - Update feature-items in feature-list

### Updating Styling Globally

All styling is centralized:
- **Colors & Variables**: `assets/css/design-system.css`
- **Components**: `assets/css/components.css`
- **Animations**: `assets/css/animations.css`

To update styling across all pages:
1. Edit the appropriate CSS file
2. Changes automatically apply everywhere
3. No need to update individual HTML files

### Email/Contact Updates

Contact email appears in multiple places:
- Footer of index.html
- CVAgentSupport.html footer and contact box
- ETPatternSupport.html footer and contact box
- PrivacyPolicyforCVAgent.html contact section
- PrivacyPolicyforETPattern.html contact section

**Global email**: **jackyxhb@gmail.com**

To update globally:
1. Search for `jackyxhb@gmail.com` in the codebase
2. Update all occurrences (currently in 5+ places)
3. Or change in CSS if using `::before` content (if implemented)

### Favicon Updates

Current favicons (in `assets/images/`):
- `cvagent-icon.svg` - Purple gradient, document icon
- `etpattern-icon.svg` - Pink gradient, brain/pattern icon
- `portal-icon.svg` - Combined gradient, portal icon

To update:
1. Replace SVG files in `assets/images/`
2. Or update favicon links in HTML `<head>` sections
3. Consider creating PNG versions (favicon.ico, apple-touch-icon.png) if needed

## Git Workflow

- **Main branch**: Production-ready content
- **Commit pattern**: Descriptive feat/fix messages
- **Remote**: https://github.com/jackyxhb/JackWeb.git

## Performance Considerations

- **Minimal JavaScript**: Only 4.6KB theme toggle script (vanilla, no dependencies)
- **CSS-Driven**: All animations and effects use CSS, not JavaScript
- **Fast Page Load**: Single HTTP request per page, CSS cached by browser
- **Optimized Assets**:
  - CSS files compressed and minified (12-18KB each)
  - SVG favicons (lightweight, scalable)
  - Google Fonts with preconnect for faster loading
- **No Runtime Overhead**: Progressive enhancement means site works without JS
- **Responsive Design**: Layouts adapt smoothly without layout thrashing
- **Efficient Animations**: Hardware-accelerated CSS transforms and opacity

## Accessibility & Browser Support

### Accessibility Features
- **Semantic HTML5**: Proper heading hierarchy, nav landmarks, article sections
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Indicators**: Visible focus states for keyboard navigation
- **ARIA Labels**: Buttons and interactive elements have aria-label attributes
- **Details/Summary**: Native HTML element for accessible FAQ expansion
- **Keyboard Navigation**: All interactive elements reachable via Tab key
- **Responsive Type**: Font sizes scale based on viewport (clamp functions)
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari (desktop & iOS)
- **CSS Features Used**:
  - CSS Custom Properties (all major browsers)
  - Grid & Flexbox (all major browsers)
  - Backdrop-filter: Works on modern browsers (graceful degradation for older)
- **Fallbacks**: System fonts as fallback (-apple-system, BlinkMacSystemFont, sans-serif)
- **Mobile Support**: iOS Safari, Android Chrome with full responsive design

## Creating New Pages

To add a new page while maintaining design consistency:

1. **HTML Structure**:
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <!-- Meta tags -->
  <title>Page Title</title>

  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="assets/images/portal-icon.svg">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="assets/css/design-system.css">
  <link rel="stylesheet" href="assets/css/components.css">
  <link rel="stylesheet" href="assets/css/animations.css">

  <style>
    /* Page-specific styles here */
  </style>
</head>

<body>
  <!-- Navigation bar -->
  <nav class="support-nav">
    <!-- Navigation content -->
  </nav>

  <div class="wrapper">
    <div class="container">
      <!-- Page content using .glass-card, .section, etc. -->
    </div>
  </div>

  <script src="assets/js/theme-toggle.js"></script>
</body>
</html>
```

2. **Use Existing Components**:
   - `.glass-card` for card containers
   - `.section` for content sections
   - `.feature-card` for feature highlights
   - `.contact-box` for contact information
   - `details`/`summary` for collapsible content

3. **Apply Animations**:
   - Add `animation:` classes to elements
   - Use fade-in, slide, scale, bounce effects
   - Stagger animations with nth-child delays

4. **Maintain Accent Colors**:
   - Use `--accent-cvagent` or `--accent-etpattern` variables
   - Apply with `background: linear-gradient(135deg, var(--accent-cvagent) 0%, var(--accent-cvagent-dark) 100%)`

## CSS Variables Reference

Common CSS variables (from `design-system.css`):
```css
/* Colors */
--accent-cvagent: #667eea
--accent-etpattern: #f093fb
--text-primary, --text-secondary, --text-muted
--bg-primary, --bg-secondary, --bg-tertiary
--glass-bg, --glass-border, --glass-blur

/* Spacing */
--space-4: 1rem, --space-6: 1.5rem, --space-8: 2rem, etc.

/* Sizing */
--text-4xl, --text-3xl, --text-2xl, --text-xl, --text-lg, --text-base, --text-sm

/* Effects */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl
--transition-base: 250ms ease, --transition-slow: 350ms ease

/* Radius */
--radius-sm: 0.5rem, --radius-md: 0.75rem, --radius-lg: 1rem, --radius-2xl: 2rem
```

## Future Enhancements

When adding features, maintain the static-first approach:
- **CSS First**: Use CSS animations instead of JavaScript
- **Semantic HTML**: Keep markup clean and accessible
- **Design System**: Use existing components and variables
- **Responsive**: Use CSS Grid/Flexbox with mobile-first approach
- **No Dependencies**: Avoid JavaScript libraries or frameworks
- **New Pages**: Add as standalone HTML with consistent external CSS
- **Theme Support**: Ensure dark/light mode compatibility
