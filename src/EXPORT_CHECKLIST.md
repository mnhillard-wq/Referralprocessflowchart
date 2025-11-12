# Final Export Checklist

Use this checklist before deploying your NICU Flowcharts app.

## ✅ Pre-Export Checklist

### Content Review
- [ ] All flowchart content is accurate and up-to-date
- [ ] Medical terminology is correct
- [ ] Workflow steps match current hospital procedures
- [ ] All contact names and roles are current
- [ ] Smart phrases match EPIC system

### Links & Documents
- [ ] All `YOUR_PDF_LINK_HERE` placeholders replaced
- [ ] All `YOUR_BOOKLET_LINK_HERE` placeholders replaced
- [ ] All `YOUR_CHECKLIST_LINK_HERE` placeholders replaced
- [ ] All `YOUR_SUPPLY_LIST_LINK_HERE` placeholders replaced
- [ ] Google Drive links set to "Anyone with link can view"
- [ ] All links tested in incognito mode
- [ ] Backup copies of all linked documents saved

### Contact Information
- [ ] NICU contact emails verified
  - [ ] Tricia Budway: trb9006@nyp.org
  - [ ] Jane Harrington: jharring@nyp.org
  - [ ] Lilly Fox: elf9094@nyp.org
- [ ] CC contacts verified
  - [ ] MacKenzi Preston: mnh9003@med.cornell.edu
  - [ ] Olivia Gasser, NP: olg9016@med.cornell.edu
- [ ] 6N/C/S contacts verified
- [ ] Peer support coordinator verified
  - [ ] Mariela Guerra: mag9152@nyp.org

### Functionality Testing
- [ ] Tab navigation works (G-Tube, NG Tube, Tracheostomy)
- [ ] All buttons clickable and functional
- [ ] PDF export tested from each flowchart
- [ ] Print preview looks correct (portrait, single page)
- [ ] Colors print correctly
- [ ] Mobile view tested (tablet/phone)
- [ ] Desktop view tested
- [ ] All three flowcharts display properly

### Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### PDF Export Quality Check
- [ ] G-Tube flowchart prints on one page
- [ ] NG Tube flowchart prints on one page
- [ ] Tracheostomy flowchart prints on one page
- [ ] Colors maintained in PDF
- [ ] Text is readable
- [ ] Logos/branding visible
- [ ] Footer information included
- [ ] No content cut off

### Compliance & Approval
- [ ] Content reviewed by SDP team
- [ ] Medical accuracy verified
- [ ] Institutional branding approved
- [ ] IT/Security review completed (if required)
- [ ] Privacy/HIPAA compliance checked
- [ ] No PHI (Protected Health Information) included
- [ ] Permissions obtained for external links

## 📤 Deployment Steps

### Step 1: Choose Platform
- [ ] Netlify (recommended)
- [ ] Vercel
- [ ] GitHub Pages
- [ ] Other: ________________

### Step 2: Create Account
- [ ] Account created
- [ ] Email verified
- [ ] Payment info added (if required)

### Step 3: Upload Files
- [ ] All files in one folder
- [ ] Folder structure preserved
- [ ] No missing files
- [ ] Upload successful

### Step 4: Configure Deployment
- [ ] Build settings configured
- [ ] Domain name chosen
- [ ] SSL certificate enabled (automatic on Netlify/Vercel)
- [ ] Deploy successful

### Step 5: Test Live Site
- [ ] Site loads correctly
- [ ] All tabs work
- [ ] All links work
- [ ] PDF export works
- [ ] Mobile responsive
- [ ] No console errors

### Step 6: Document & Share
- [ ] URL saved: ________________________________
- [ ] QR code generated (optional)
- [ ] Admin login saved (if applicable)
- [ ] Deployment credentials saved securely
- [ ] Team notified of new URL

## 🔄 Post-Deployment

### Communication
- [ ] Email sent to SDP team with URL
- [ ] URL added to hospital intranet
- [ ] Added to orientation materials
- [ ] Included in training documentation
- [ ] QR code posted in relevant areas
- [ ] Old resources updated/retired

### Documentation
- [ ] README.md updated with live URL
- [ ] Deployment date recorded
- [ ] Version number noted
- [ ] Change log created
- [ ] Update procedure documented

### Monitoring
- [ ] Usage tracking set up (optional)
- [ ] Feedback mechanism established
- [ ] Update schedule planned
- [ ] Backup plan in place

## 📋 File Inventory

Ensure all these files are included in your deployment:

### Essential Files
- [ ] App.tsx
- [ ] components/GTubeFlowchart.tsx
- [ ] components/NGTubeFlowchart.tsx
- [ ] components/TracheostomyFlowchart.tsx
- [ ] components/FlowchartNode.tsx
- [ ] styles/globals.css

### UI Components Folder
- [ ] components/ui/tabs.tsx
- [ ] components/ui/button.tsx
- [ ] components/ui/card.tsx
- [ ] components/ui/checkbox.tsx
- [ ] All other UI components

### Documentation (Optional but Recommended)
- [ ] README.md
- [ ] DEPLOYMENT_GUIDE.md
- [ ] LINK_UPDATE_GUIDE.md
- [ ] This checklist (EXPORT_CHECKLIST.md)

### Configuration Files (if applicable)
- [ ] package.json
- [ ] tsconfig.json
- [ ] vite.config.ts
- [ ] tailwind.config.js (if exists)

## 🎯 Quality Assurance

### Visual Check
- [ ] Logo/branding correct
- [ ] Colors match brand guidelines
- [ ] Typography clear and readable
- [ ] Spacing/layout professional
- [ ] No typos or grammatical errors

### Accessibility
- [ ] Text contrast sufficient
- [ ] Font sizes readable
- [ ] Links clearly identifiable
- [ ] Print-friendly
- [ ] Works without JavaScript (if possible)

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images optimized
- [ ] No broken links
- [ ] No 404 errors
- [ ] No console errors

## 🔒 Security & Privacy

- [ ] No passwords in code
- [ ] No API keys exposed
- [ ] No patient information included
- [ ] Links require appropriate permissions
- [ ] HTTPS enabled
- [ ] Regular security updates planned

## 📞 Support Plan

### Internal Support
- [ ] Primary contact: ____________________________
- [ ] Backup contact: _____________________________
- [ ] IT support: _________________________________

### Update Procedure
- [ ] Who can request updates: ___________________
- [ ] Update approval process: ___________________
- [ ] Deployment responsibility: _________________
- [ ] Emergency contact: __________________________

## 🎉 Launch Preparation

### Training
- [ ] Staff trained on how to access
- [ ] PDF export instructions shared
- [ ] Link sharing guidelines provided
- [ ] Troubleshooting guide available

### Promotion
- [ ] Announcement prepared
- [ ] Demo scheduled (if needed)
- [ ] Quick reference guide created
- [ ] FAQ document ready

## 📝 Sign-Off

**Content Approved By:**
- Name: _____________________
- Role: _____________________
- Date: _____________________
- Signature: _________________

**Technical Approved By:**
- Name: _____________________
- Role: _____________________
- Date: _____________________
- Signature: _________________

**Deployed By:**
- Name: _____________________
- Date: _____________________
- URL: ______________________
- Platform: __________________

---

## 🆘 Troubleshooting

If something doesn't work:
1. ✅ Check this list again
2. ✅ Review DEPLOYMENT_GUIDE.md
3. ✅ Test in different browser
4. ✅ Clear cache and retry
5. ✅ Contact IT support
6. ✅ Check deployment platform status

---

## 📊 Success Metrics (Optional)

After 30 days, track:
- [ ] Number of users
- [ ] Most viewed flowchart
- [ ] PDF export frequency
- [ ] Feedback received
- [ ] Update requests
- [ ] System downtime (should be 0%)

---

**Remember:** Once deployed, your flowcharts will help improve caregiver education and patient outcomes. Take your time with this checklist to ensure a successful launch!

**Questions?** Review the README.md and DEPLOYMENT_GUIDE.md files for detailed instructions.
