# Images Directory

This directory contains images for the ridbricks website.

## Required Images

### logo.png
- **Description:** ridbricks logo
- **Current Status:** TODO - Placeholder needed
- **Recommended Size:** 200x60px (or similar aspect ratio)
- **Format:** PNG with transparent background
- **Usage:** Header/navigation on all pages

### hero-lego.jpg (Optional)
- **Description:** Hero section background image
- **Current Status:** TODO - Optional, can use free stock photo
- **Recommended Size:** 1920x600px
- **Format:** JPG
- **Usage:** Hero section background (if desired)
- **Free Sources:**
  - [Unsplash](https://unsplash.com/s/photos/lego)
  - [Pexels](https://www.pexels.com/search/lego/)

## Current Implementation

The site currently uses a text-based logo ("ridbricks") and a CSS gradient for the hero section. Both work well and images are optional at this stage.

## Adding Your Logo

1. Save your logo as `logo.png` in this directory
2. Open each HTML file (index.html, contact.html, success.html)
3. Find the header section with the logo
4. Uncomment the `<img>` tag:
   ```html
   <img src="images/logo.png" alt="ridbricks Logo">
   ```
5. Remove or comment out the text "ridbricks" if desired

## Image Optimization

Before adding images:
- Compress images to reduce file size
- Use appropriate formats (PNG for logos, JPG for photos)
- Consider using WebP for better compression (with fallbacks)
- Ensure images are responsive-ready

## Tools for Image Optimization

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
