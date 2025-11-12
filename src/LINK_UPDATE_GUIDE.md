# Quick Guide: Updating Document Links

This guide shows you exactly where to find and update all document links in your flowcharts.

## 🎯 Before You Start

1. **Gather all your document URLs** (from Google Drive, etc.)
2. **Ensure sharing is enabled**: Set to "Anyone with the link can view"
3. **Test each link** in an incognito browser window
4. **Keep a backup** of the original files

## 📋 Links to Update by Flowchart

### G-Tube Flowchart (`/components/GTubeFlowchart.tsx`)

**Line ~122**: Peer to Peer Support Referral Form
```tsx
href="YOUR_PDF_LINK_HERE"
```
Replace with your actual referral form URL

**Lines ~150-175**: SDP Teaching Materials (3 buttons)
```tsx
// MicKEY or MINI button
href="https://drive.google.com/file/d/1uK2F9cYcN_HHkiaLzQRBe1ZaaKaDBWpc/view?usp=drive_link"

// PEG Button
href="https://drive.google.com/file/d/16kp4nRmmBuljvUOL1B7V_XIV3CxKx2xa/view?usp=drive_link"

// Traditional Long GT
href="https://drive.google.com/file/d/1h-WXwlRncO_zKKm4L8gD0st5prwFo2TT/view?usp=drive_link"
```

**Lines ~207-249**: Skills Sheets (3 links)
```tsx
// MicKEY Skills Sheet
href="https://docs.google.com/document/d/1KlmQgsK9wcVnnTZ6dqXtzRAJwsnR42lO/edit?usp=sharing..."

// PEG Skills Sheet
href="https://docs.google.com/document/d/1_vjQQf050jFQve6u8I8EfdQciuoHlibB/edit?usp=drive_link..."

// Long Tube Skills Sheet
href="https://docs.google.com/document/d/1Ig_Bh2Gdrm-QjJlXk6t9iNjs_Iu7Vaw_/edit?usp=drive_link..."
```

**Line ~302**: Complete Discharge Checklist
```tsx
href="https://docs.google.com/document/d/1d__ROcz1IiSozXbuvVy1dDXn_N_hzEhy9XTT1M3YP10/edit?tab=t.0"
```

**Line ~314**: EPIC Order Sheet
```tsx
href="https://drive.google.com/file/d/1DQ85GQgl530c8fUWlmdnMFG3z1HEKulU/view?usp=drive_link"
```

---

### NG Tube Flowchart (`/components/NGTubeFlowchart.tsx`)

**Line ~90**: Peer to Peer Support Referral Form
```tsx
href="YOUR_PDF_LINK_HERE"
```
Replace with your actual referral form URL

**Line ~118**: Parent Care Booklet
```tsx
href="YOUR_BOOKLET_LINK_HERE"
```
Replace with your NG tube parent booklet URL

**Line ~143**: Skills Checklist
```tsx
href="YOUR_CHECKLIST_LINK_HERE"
```
Replace with your NG tube skills checklist URL

**Line ~242**: Supply List
```tsx
href="YOUR_SUPPLY_LIST_LINK_HERE"
```
Replace with your NG tube supply list URL

---

### Tracheostomy Flowchart (`/components/TracheostomyFlowchart.tsx`)

**Line ~90**: Peer to Peer Support Referral Form
```tsx
href="YOUR_PDF_LINK_HERE"
```
Replace with your actual referral form URL

**Line ~118**: Parent Care Booklet
```tsx
href="YOUR_BOOKLET_LINK_HERE"
```
Replace with your tracheostomy parent booklet URL

**Line ~142**: Skills Checklist
```tsx
href="YOUR_CHECKLIST_LINK_HERE"
```
Replace with your tracheostomy skills checklist URL

---

## 🔧 How to Update Links

### Step-by-Step:

1. **Open the file in a text editor**
   - Use VS Code, Sublime Text, Notepad++, or even Notepad
   - Don't use Word (it can corrupt the code)

2. **Find the link** (use Ctrl+F / Cmd+F)
   - Search for: `YOUR_PDF_LINK_HERE`
   - Or search for the specific line number mentioned above

3. **Replace the URL**
   - Keep the quotes: `href="NEW_URL_HERE"`
   - Example:
   ```tsx
   // Before
   href="YOUR_PDF_LINK_HERE"
   
   // After
   href="https://drive.google.com/file/d/abc123/view?usp=sharing"
   ```

4. **Save the file**
   - Make sure it's saved as `.tsx` not `.txt`

5. **Test locally** (if possible)
   - Or proceed to re-deploy

6. **Re-deploy**
   - Upload to Netlify/Vercel
   - Or push to GitHub

---

## 📝 Example: Complete Link Replacement

### Before:
```tsx
<a 
  href="YOUR_PDF_LINK_HERE" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
>
  <FileText size={14} />
  Download Referral Form (PDF)
</a>
```

### After:
```tsx
<a 
  href="https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
>
  <FileText size={14} />
  Download Referral Form (PDF)
</a>
```

**What changed?** Only the `href="..."` part!

---

## 📧 Email Addresses to Verify

Check that all email addresses are current:

### G-Tube Flowchart:
- Lines 84-92: NICU contacts
- Lines 104-110: 6N/C/S contacts
- Line 119: Peer support coordinator

### NG Tube Flowchart:
- Lines 76-81: SDP contacts

### Tracheostomy Flowchart:
- Lines 76-81: SDP contacts

**Current emails in the app:**
- trb9006@nyp.org (Tricia Budway)
- jharring@nyp.org (Jane Harrington)
- elf9094@nyp.org (Lilly Fox)
- mnh9003@med.cornell.edu (MacKenzi Preston)
- olg9016@med.cornell.edu (Olivia Gasser, NP)
- mag9152@nyp.org (Mariela Guerra)

---

## ✅ Link Checklist

Use this checklist to ensure you've updated all links:

### G-Tube:
- [ ] Peer support referral form
- [ ] MicKEY/MINI teaching material
- [ ] PEG button teaching material
- [ ] Traditional long GT teaching material
- [ ] MicKEY skills sheet
- [ ] PEG skills sheet
- [ ] Long tube skills sheet
- [ ] Complete discharge checklist
- [ ] EPIC order sheet

### NG Tube:
- [ ] Peer support referral form
- [ ] Parent care booklet
- [ ] Skills checklist
- [ ] Supply list

### Tracheostomy:
- [ ] Peer support referral form
- [ ] Parent care booklet
- [ ] Skills checklist

---

## 🔍 Testing Your Links

After updating, test each link:

1. **Deploy your changes**
2. **Open the live site**
3. **Click every single link**
4. **Verify it opens the correct document**
5. **Check from a different computer/browser**

### Common Issues:
- ❌ Link opens login page → Check sharing settings
- ❌ Link shows "404 Not Found" → URL might be incorrect
- ❌ Link asks for permission → Update to "Anyone with link"

---

## 🎯 Google Drive Sharing Settings

For each document you link:

1. Right-click the file in Google Drive
2. Click "Share"
3. Change from "Restricted" to "Anyone with the link"
4. Set permission to "Viewer"
5. Copy the link
6. Use this link in your code

---

## 💾 Keeping Track of Links

Create a document to track all your links:

```
G-TUBE LINKS
============
Peer Support Form: https://drive.google.com/...
MicKEY Teaching: https://drive.google.com/...
PEG Teaching: https://drive.google.com/...
...

NG TUBE LINKS
============
Peer Support Form: https://drive.google.com/...
Parent Booklet: https://drive.google.com/...
...

TRACHEOSTOMY LINKS
==================
Peer Support Form: https://drive.google.com/...
Parent Booklet: https://drive.google.com/...
...
```

Save this in a secure location for future reference!

---

## 🆘 Quick Fixes

### "I broke something!"
- Restore from your backup
- Or download fresh files from deployment

### "Link still shows YOUR_PDF_LINK_HERE"
- Make sure you saved the file
- Re-deploy your changes
- Clear browser cache (Ctrl+Shift+R)

### "How do I find line numbers?"
- Most text editors show line numbers
- Or use Ctrl+F to search for the text near the link

---

## 📞 Need Help?

If you're stuck:
1. Check this guide again
2. Review the example above
3. Contact your IT support
4. Or reach out to the original developer

Remember: You're only changing URLs inside quotation marks. Don't change anything else!
