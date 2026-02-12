# ridbricks Website - Deployment Guide

Quick reference for deploying the ridbricks website to Netlify.

## Pre-Deployment Checklist

- [x] All HTML files created (index.html, contact.html, success.html)
- [x] CSS stylesheet complete (css/styles.css)
- [x] JavaScript functionality implemented (js/main.js)
- [x] Netlify configuration ready (netlify.toml)
- [x] .gitignore configured
- [ ] Add logo image to images/logo.png (optional - using text logo for now)
- [ ] Add hero image to images/hero-lego.jpg (optional - using CSS gradient)
- [ ] Test locally by opening index.html in browser

## Step 1: Push to GitHub

```bash
# Add all files to git
git add .

# Commit with descriptive message
git commit -m "Initial ridbricks website implementation

- Landing page with hero section and eBay store promotion
- Contact form with Netlify Forms integration and file uploads
- Success page for form submissions
- Responsive mobile-first design
- Form validation and UX enhancements
- Complete documentation"

# Push to GitHub
git push origin main
```

## Step 2: Deploy to Netlify

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Log in or create an account (free)

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `netlify-site` repository

3. **Configure Build Settings**
   - **Site name:** (Netlify will auto-generate, you can customize)
   - **Branch to deploy:** main
   - **Build command:** (leave empty - no build needed)
   - **Publish directory:** `.` (period/dot for root directory)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy (should take ~30 seconds)
   - You'll get a URL like: `https://random-name-123.netlify.app`

## Step 3: Configure Form Notifications

**IMPORTANT:** This step is required to receive form submissions via email.

1. **Go to Site Settings**
   - In Netlify dashboard, click your site
   - Go to "Site settings" → "Forms"

2. **Add Form Notification**
   - Click "Form notifications" → "Add notification"
   - Select "Email notification"
   - **Form:** Select "lego-contact"
   - **Email to notify:** Enter your email address
   - Click "Save"

3. **Optional: Enable Spam Filtering**
   - Under "Form detection" ensure it's enabled
   - Honeypot field is already configured in the form

## Step 4: Test the Site

### Test Form Submission
1. Visit your live Netlify URL
2. Navigate to the contact page
3. Fill out the form with test data
4. Upload 1-2 test images
5. Submit the form
6. Verify:
   - Success page loads
   - Email notification arrives (check spam folder)
   - Submission appears in Netlify dashboard → Forms

### Test Responsive Design
- Open on mobile device
- Test mobile menu toggle
- Verify form works on mobile
- Check image uploads on mobile

### Test All Links
- Navigation links between pages
- eBay store links (should open in new tab)
- Footer links

## Step 5: Optional Customization

### Custom Domain (Optional)
1. Go to "Domain settings" in Netlify
2. Click "Add custom domain"
3. Follow instructions to configure DNS
4. Enable HTTPS (automatic with Netlify)

### Analytics (Optional)
- Enable Netlify Analytics in site settings
- Or add Google Analytics code to HTML files

### Update Site Name
1. Go to "Site settings" → "General"
2. Click "Change site name"
3. Enter preferred name: `ridbricks.netlify.app`

## Troubleshooting

### Forms Not Working
- **Issue:** Form submissions not appearing
- **Solution:**
  - Ensure form has `netlify` and `data-netlify="true"` attributes
  - Check Netlify dashboard → Forms to verify form was detected
  - Verify hidden `form-name` field matches form name

### Email Notifications Not Arriving
- **Issue:** Not receiving email notifications
- **Solution:**
  - Check spam/junk folder
  - Verify email notification is configured in Netlify
  - Check notification settings in Site Settings → Forms

### File Uploads Not Working
- **Issue:** Images not uploading
- **Solution:**
  - Verify form has `enctype="multipart/form-data"`
  - Check file size limits (5MB per file, 10MB total)
  - Test with smaller images first

### Mobile Menu Not Working
- **Issue:** Mobile menu doesn't toggle
- **Solution:**
  - Ensure JavaScript is enabled
  - Check browser console for errors
  - Verify main.js is loading correctly

## Post-Deployment Tasks

### Immediate
- [ ] Test form submission with real data
- [ ] Verify email notifications are working
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev

### Soon
- [ ] Add actual logo image (replace text logo)
- [ ] Customize colors if desired (edit CSS variables)
- [ ] Add hero image if desired
- [ ] Monitor form submissions
- [ ] Respond to inquiries promptly

### Later
- [ ] Consider custom domain
- [ ] Add Google Analytics (optional)
- [ ] Create FAQ page (optional)
- [ ] Add testimonials section (optional)
- [ ] Monitor and optimize performance

## Monitoring Form Submissions

### Netlify Dashboard
- Go to your site in Netlify
- Click "Forms" in the left sidebar
- View all submissions with attached files
- Export submissions as CSV

### Email Notifications
- You'll receive an email for each submission
- Includes all form fields and download links for photos
- Reply directly to the customer's email

## Updating the Site

To make changes after deployment:

1. **Edit Files Locally**
   - Make changes to HTML, CSS, or JS files
   - Test locally by opening in browser

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. **Automatic Deployment**
   - Netlify automatically detects the push
   - Site rebuilds and deploys in ~30 seconds
   - No manual intervention needed

## Performance Tips

### Image Optimization
- Compress all images before uploading
- Use TinyPNG or Squoosh for compression
- Consider WebP format for better compression

### Caching
- Netlify automatically handles caching
- Static assets are cached for fast delivery
- No additional configuration needed

### CDN
- Netlify serves your site from a global CDN
- Fast load times worldwide
- No additional cost or configuration

## Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Forms:** https://docs.netlify.com/forms/setup/
- **Netlify Support:** https://answers.netlify.com

## Next Steps

After successful deployment:

1. Share the site URL with potential customers
2. Monitor form submissions and respond promptly
3. Update eBay store regularly with new inventory
4. Consider adding more content pages as business grows
5. Collect customer testimonials to add to the site

---

**Site is now live and ready to generate leads!** 🎉
