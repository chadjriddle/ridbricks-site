# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static website** for ridbricks, a Newberg, Oregon-based LEGO buying business. The site has **no build process** - it's pure HTML/CSS/JavaScript deployed directly to Netlify.

**Business Context:**
- Buys bulk LEGO at $3-$6/lb based on cleanliness and organization
- Complete sets and minifigures individually evaluated
- Serves local Newberg, Oregon community
- Sells on eBay: https://www.ebay.com/usr/ridbrick
- Contact: sales@ridbricks.com

**Live Site:** https://ridbricks.netlify.app

## Architecture

### Static Site Structure
- **3 HTML pages:** index.html (landing), contact.html (form), success.html (confirmation)
- **Single CSS file:** css/styles.css with CSS custom properties for theming
- **Single JS file:** js/main.js for form validation and UX enhancements
- **No build step:** Files deploy directly to Netlify from git push

### Netlify Forms Integration
The contact form uses **Netlify's built-in form handling** - critical attributes:

```html
<form
  name="lego-contact"              <!-- Must match hidden field -->
  method="POST"
  action="/success.html"           <!-- Custom redirect -->
  netlify                          <!-- Enables Netlify Forms -->
  netlify-honeypot="bot-field"     <!-- Spam protection -->
  data-netlify="true"              <!-- Explicit detection -->
  enctype="multipart/form-data"    <!-- File uploads -->
>
  <input type="hidden" name="form-name" value="lego-contact">
  <input type="hidden" name="submission-time" id="submission-time" value="">
</form>
```

**Key Points:**
- Forms only work when deployed to Netlify (not locally)
- Timestamp field prevents duplicate submission filtering
- Honeypot field (`bot-field`) must remain hidden with `.hidden` class
- Form submissions may go to Spam folder in Netlify dashboard during testing
- Email notifications must be configured manually in Netlify dashboard

### CSS Architecture
All styles in `css/styles.css` use CSS custom properties for easy theming:

```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #ff6600;
  --color-bg: #ffffff;
  --color-text: #333333;
  /* spacing, typography, etc. */
}
```

**Mobile-first responsive design** with breakpoints at 768px and 1024px.

### JavaScript Structure
`js/main.js` handles:
- Mobile menu toggle
- Client-side form validation (validates before Netlify submission)
- File upload preview and validation (5MB max per file)
- Timestamp injection on form submission
- Progressive enhancement (site works without JS)

## Development Workflow

### Local Testing
```bash
# Open in browser (forms won't submit)
start index.html

# Or use any local server
```

**Important:** Netlify Forms only work when deployed - local testing shows validation but submissions fail.

### Deployment
```bash
# Commit and push - Netlify auto-deploys
git add .
git commit -m "Description"
git push origin main
```

Netlify automatically:
- Detects the push to main branch
- Deploys in ~30-60 seconds
- Detects forms with `netlify` attribute
- Updates live site

### Testing Forms After Deployment
1. Submit test form on live site
2. Check Netlify dashboard → Forms → "lego-contact"
3. Check both **Verified** and **Spam** tabs (test submissions often go to spam)
4. Verify email notification arrives at sales@ridbricks.com

## Critical Configuration

### Netlify Form Setup (Manual Steps After First Deploy)
1. Netlify Dashboard → Site Settings → Forms
2. Enable form detection
3. Add email notification → sales@ridbricks.com
4. Form name: "lego-contact"

### netlify.toml
- Publish directory: `.` (root)
- Security headers configured
- URL redirects: `/about`, `/buy`, `/sell` → `/contact.html`

## Common Issues & Solutions

### Form Submissions Not Appearing
- **Check Spam folder** in Netlify Forms dashboard (most common issue)
- Test submissions often flagged as spam
- Real customer submissions should go to Verified
- Approve spam submissions by clicking "Verify"

### Form Redirect Issues
- Must use `action="/success.html"` with leading slash
- JavaScript validation prevents submission on errors (by design)
- Timestamp field prevents duplicate filtering

### File Upload Problems
- Max 5MB per file (validated in JavaScript)
- Max 10MB total per submission (Netlify limit)
- Requires `enctype="multipart/form-data"` on form tag

## Branding & Content

### Logo
- Circular logo at `images/logo.webp` (140px WebP)
- CSS: `border-radius: 50%` with `object-fit: cover`
- Displayed with "ridbricks" text in header

### Color Scheme
Edit CSS custom properties in `:root` to change theme:
- Primary (blue): #0066cc
- Secondary (orange): #ff6600

### Updating Business Info
**Pricing appears in multiple locations:**
- index.html hero section
- index.html "Our Pricing" card
- contact.html hero section
- contact.html "Our Pricing" card
- All meta descriptions

**Location (Newberg, Oregon) appears in:**
- Both hero sections
- Footer (all 3 pages)
- Meta descriptions

Search and replace when updating business details.

## File Locations

**Pages:** index.html, contact.html, success.html (root)
**Styles:** css/styles.css (single file, ~500 lines)
**Scripts:** js/main.js (form validation, ~265 lines)
**Config:** netlify.toml (deployment, headers, redirects)
**Images:** images/ (logo.webp, README.md)
**Docs:** README.md, DEPLOYMENT.md (comprehensive guides)

## External Dependencies

**None** - No npm packages, no build tools, no frameworks. Pure HTML/CSS/JS.

**Netlify Services Used:**
- Static hosting
- Forms (with file uploads)
- Email notifications
- Spam filtering with honeypot
- Automatic deployments from GitHub

## Browser Support

Modern browsers only (no IE11):
- CSS custom properties
- ES6+ JavaScript (const, let, arrow functions, template literals)
- Flexbox and CSS Grid
