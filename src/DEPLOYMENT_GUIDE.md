# Step-by-Step Deployment Guide

This guide will help you deploy the NICU Flowcharts app so others can access it via a web link.

## 🎯 Recommended: Deploy to Netlify (Free & Easy)

### Why Netlify?
- ✅ Completely free
- ✅ No credit card required
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ Easy updates (just drag & drop new files)

### Steps:

#### 1. Prepare Your Files
Download all your files to a folder on your computer. You should have:
```
nicu-flowcharts/
├── App.tsx
├── components/
├── styles/
└── (all other files)
```

#### 2. Create a Netlify Account
1. Go to https://www.netlify.com/
2. Click "Sign up" (you can use GitHub, GitLab, or email)
3. Complete the registration (it's free!)

#### 3. Deploy Your Site

**Method A: Drag and Drop (Easiest)**
1. Log into Netlify
2. On your dashboard, scroll down to "Want to deploy a new site without connecting to Git?"
3. Drag your entire project folder onto the upload area
4. Wait 30-60 seconds for deployment
5. Done! You'll get a URL like: `https://random-name-12345.netlify.app`

**Method B: Connect to GitHub**
1. Upload your code to a GitHub repository
2. In Netlify, click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your repository
5. Click "Deploy site"
6. Future updates: Just push to GitHub and Netlify auto-updates!

#### 4. Customize Your URL
1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Choose a custom name: `nicu-flowcharts.netlify.app`

#### 5. Share Your Link
Your app is now live! Share the URL:
```
https://nicu-flowcharts.netlify.app
```

---

## 🔄 Alternative: Deploy to Vercel

### Steps:
1. Go to https://vercel.com/
2. Sign up (free)
3. Click "Add New" → "Project"
4. Import from GitHub or upload files
5. Click "Deploy"
6. Get your URL: `https://your-project.vercel.app`

---

## 📱 Alternative: Deploy to GitHub Pages

### Steps:
1. Create a GitHub account at https://github.com/
2. Create a new repository: "nicu-flowcharts"
3. Upload your files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Get your URL: `https://yourusername.github.io/nicu-flowcharts`

**Note**: May require additional configuration for React apps

---

## 🔗 Updating Document Links

Before deploying, replace placeholder links with your actual Google Drive/document links:

### Files to Check:

**1. G-Tube Flowchart** (`/components/GTubeFlowchart.tsx`)
   - Lines with `YOUR_PDF_LINK_HERE`
   - Lines with `https://drive.google.com/...`
   - Lines with `https://docs.google.com/...`

**2. NG Tube Flowchart** (`/components/NGTubeFlowchart.tsx`)
   - Same as above

**3. Tracheostomy Flowchart** (`/components/TracheostomyFlowchart.tsx`)
   - Same as above

### How to Update:
1. Open the file in a text editor (VS Code, Notepad++, etc.)
2. Find: `href="YOUR_PDF_LINK_HERE"`
3. Replace with: `href="https://drive.google.com/your-actual-link"`
4. Save the file
5. Re-deploy (drag & drop to Netlify or push to GitHub)

---

## 📤 Making Updates After Deployment

### If Using Netlify Drag & Drop:
1. Make your changes locally
2. Go to your Netlify site → Deploys
3. Drag your updated folder to the deploy area
4. Wait for deployment (30-60 seconds)
5. Changes are live!

### If Using GitHub/GitLab:
1. Make your changes
2. Commit and push to your repository
3. Netlify/Vercel automatically deploys updates
4. Changes are live in 1-2 minutes

---

## 🎨 Creating a Custom Domain (Optional)

### Using Your Own Domain:
1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. In Netlify: Site settings → Domain management
3. Click "Add custom domain"
4. Enter your domain (e.g., `nicu-education.org`)
5. Follow DNS instructions provided by Netlify
6. SSL certificate is automatically added!

---

## 📊 Tracking Usage (Optional)

### Add Google Analytics:
1. Create a Google Analytics account
2. Get your tracking ID
3. Add to your `App.tsx` or create a `analytics.js` file
4. Track pageviews, button clicks, PDF exports, etc.

---

## 🔒 Making the Site Private (If Needed)

### Option 1: Netlify Password Protection
1. Go to Site settings → Access control
2. Enable "Password protection"
3. Set a password
4. Share password with authorized staff only

### Option 2: IP Restrictions
1. Some hosting services allow IP whitelisting
2. Only hospital networks can access
3. Requires advanced configuration

---

## ✅ Pre-Deployment Checklist

- [ ] All document links are updated (no `YOUR_LINK_HERE`)
- [ ] Contact email addresses are correct
- [ ] Test all three flowcharts (G-Tube, NG, Trach)
- [ ] Test PDF export from each flowchart
- [ ] Check on mobile device
- [ ] Verify all buttons/links work
- [ ] Review content for accuracy
- [ ] Get approval from SDP team

---

## 🆘 Troubleshooting

### "Site won't deploy"
- Check that all files are included
- Ensure no missing dependencies
- Try re-uploading

### "Links don't work"
- Verify Google Drive links are set to "Anyone with link can view"
- Check for typos in URLs
- Test links in incognito mode

### "PDF export looks wrong"
- Test in Chrome (best print support)
- Check print preview before saving
- Ensure "Background graphics" is enabled

### "Need to update content"
- Edit the flowchart files
- Re-deploy to Netlify/Vercel
- Clear browser cache to see changes

---

## 📞 Getting Help

### Resources:
- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages**: https://pages.github.com/

### Questions?
Contact your IT department or web development team for assistance.

---

## 🎉 Success!

Once deployed, your flowcharts will be:
- ✅ Accessible via a simple web link
- ✅ Available 24/7 from anywhere
- ✅ Printable to PDF
- ✅ Mobile-friendly
- ✅ Easy to update

Share your link with your team and start improving NICU caregiver education!

---

**Deployment URL Template:**
```
https://your-chosen-name.netlify.app
```

**Share this link via:**
- Email to staff
- Hospital intranet
- QR code for posters
- Orientation materials
- Training documents
