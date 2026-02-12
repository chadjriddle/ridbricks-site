# ridbricks LEGO Business Website

A professional website for ridbricks, a business that buys used LEGO bulk and sets and sells on eBay.

## Overview

This is a static website built with HTML, CSS, and JavaScript designed for easy deployment to Netlify. The site promotes the ridbricks eBay store and generates leads from people wanting to sell their LEGO.

**Live eBay Store:** https://www.ebay.com/usr/ridbrick

## Features

- **Landing Page** - Showcases business value proposition and eBay store
- **Contact Form** - Netlify Forms integration for lead capture with photo uploads
- **Responsive Design** - Mobile-first, works on all devices
- **Fast & Lightweight** - No build process, pure HTML/CSS/JS
- **SEO Optimized** - Semantic HTML, meta tags, and Open Graph tags
- **Accessible** - WCAG compliant with proper ARIA labels

## Project Structure

```
netlify-site/
├── index.html              # Landing page
├── contact.html            # Buying info + contact form
├── success.html            # Form submission confirmation
├── netlify.toml            # Netlify configuration
├── css/
│   └── styles.css          # All styling
├── js/
│   └── main.js             # Form validation & UX enhancements
├── images/                 # Images directory
│   ├── logo.png            # ridbricks logo (TODO: add final logo)
│   └── hero-lego.jpg       # Hero image (TODO: add image)
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## Deployment to Netlify

### Initial Setup

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial ridbricks website"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select this repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Configure Form Notifications:**
   - After deployment, go to Site Settings → Forms
   - Click "Form notifications"
   - Add email notification with your email address
   - Test the form by submitting a test entry on the live site

### Netlify Forms

The contact form uses Netlify's built-in form handling. No additional configuration is needed - Netlify automatically detects forms with the `netlify` attribute.

**Free tier limits:**
- 100 form submissions per month
- 10MB max upload per submission
- Built-in spam filtering

**Testing forms:**
- Forms only work when deployed to Netlify
- For local testing, you'll see the form but submissions won't work
- After deployment, test with real submissions

## Local Development

Since this is a static site with no build process:

1. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server (VS Code extension)

2. **Testing:**
   - Navigate between pages
   - Test responsive design (resize browser)
   - Validate forms work (JavaScript validation)
   - Note: Netlify Forms only work when deployed

## Content Updates

### Updating Text Content

Edit the HTML files directly:
- `index.html` - Landing page content
- `contact.html` - Contact page and buying guidelines
- `success.html` - Thank you page

### Updating Styles

Edit `css/styles.css`. The stylesheet uses CSS custom properties (variables) for easy theming:

```css
:root {
  --color-primary: #0066cc;      /* Main brand color */
  --color-secondary: #ff6600;    /* Accent color */
  --color-bg: #ffffff;           /* Background */
  --color-text: #333333;         /* Text color */
}
```

Change these values to update the entire site's color scheme.

### Adding Images

1. **Logo** - Add your logo to `images/logo.png`
   - Then uncomment the logo `<img>` tag in the header of each HTML file
   - Remove or comment out the text "ridbricks"

2. **Hero Image** - Add a hero image to `images/hero-lego.jpg`
   - Update CSS in `.hero` section to use as background image

3. **Other Images** - Add any additional images to the `images/` directory

### Updating eBay Store Link

The eBay store link appears in multiple places. Search and replace:
- Current: `https://www.ebay.com/usr/ridbrick`
- With your actual eBay store URL

Locations:
- Navigation menu (all 3 HTML files)
- Hero section (index.html)
- Footer (all 3 HTML files)

## Key Files Explained

### netlify.toml
Configures Netlify deployment settings, security headers, and redirects.

### css/styles.css
Complete stylesheet with:
- CSS custom properties for easy theming
- Mobile-first responsive design
- Form styling and validation states
- Reusable component styles

### js/main.js
Handles:
- Mobile menu toggle
- Form validation (client-side)
- File upload preview
- File size validation
- Smooth scrolling

### HTML Files
- Semantic HTML5 structure
- Meta tags for SEO
- Open Graph tags for social sharing
- Netlify Forms integration with file uploads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Target metrics:
- Time to Interactive: < 2 seconds
- First Contentful Paint: < 1 second
- Lighthouse Score: 90+

Run PageSpeed Insights after deployment to verify.

## Testing Checklist

**Before Deployment:**
- [ ] Validate HTML (W3C validator)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify all links work
- [ ] Check images have alt text
- [ ] Test form validation with JavaScript disabled

**After Deployment:**
- [ ] Submit test form entry
- [ ] Verify email notification received
- [ ] Check form appears in Netlify dashboard
- [ ] Test file uploads (try 1-5 images)
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify success page redirect
- [ ] Run PageSpeed Insights

## Future Enhancements

Potential additions for later:
- FAQ page
- Photo gallery of past purchases
- Customer testimonials
- Blog/news section
- Price estimator tool
- Email newsletter signup
- Google Analytics integration
- Custom domain

## Support

For issues with:
- **Netlify deployment:** See [Netlify Docs](https://docs.netlify.com)
- **Forms not working:** Ensure site is deployed and check Netlify dashboard
- **Email notifications:** Configure in Netlify Site Settings → Forms

## License

© 2026 ridbricks. All rights reserved.
