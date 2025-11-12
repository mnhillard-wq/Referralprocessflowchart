# 🔧 Step-by-Step Link Update Guide

This guide will walk you through updating each placeholder link in your flowcharts.

---

## 📌 What You Need

Before starting, have these ready:
1. Your Google Drive document links
2. A text editor (VS Code, Notepad++, or even Notepad)
3. 10-15 minutes of time

---

## 🚀 Quick Method: Tell Me Your Links!

**Easiest way:** Just provide me with your document URLs and I'll update all the files for you!

### Format to provide:
```
PEER SUPPORT REFERRAL FORM:
https://drive.google.com/file/d/YOUR_ID_HERE/view?usp=sharing

NG TUBE PARENT BOOKLET:
https://drive.google.com/file/d/YOUR_ID_HERE/view?usp=sharing

NG TUBE SKILLS CHECKLIST:
https://drive.google.com/file/d/YOUR_ID_HERE/view?usp=sharing

NG TUBE SUPPLY LIST:
https://drive.google.com/file/d/YOUR_ID_HERE/view?usp=sharing

TRACH PARENT BOOKLET:
https://drive.google.com/file/d/YOUR_ID_HERE/view?usp=sharing

TRACH SKILLS CHECKLIST:
https://drive.google.com/file/d/YOUR_ID_HERE/view?usp=sharing
```

**I'll update all the files for you instantly!**

---

## 🛠️ Manual Method: Update Yourself

If you prefer to do it yourself, here's how:

### G-Tube Flowchart (1 link to update)

**File:** `/components/GTubeFlowchart.tsx`

**Find line 122** (or search for "YOUR_PDF_LINK_HERE"):
```tsx
href="YOUR_PDF_LINK_HERE"
```

**Replace with your link:**
```tsx
href="https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view?usp=sharing"
```

✅ **Save the file**

---

### NG Tube Flowchart (4 links to update)

**File:** `/components/NGTubeFlowchart.tsx`

**1. Line 90 - Peer Support Referral:**
```tsx
// Find:
href="YOUR_PDF_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

**2. Line 118 - Parent Care Booklet:**
```tsx
// Find:
href="YOUR_BOOKLET_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

**3. Line 143 - Skills Checklist:**
```tsx
// Find:
href="YOUR_CHECKLIST_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

**4. Line 242 - Supply List:**
```tsx
// Find:
href="YOUR_SUPPLY_LIST_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

✅ **Save the file**

---

### Tracheostomy Flowchart (3 links to update)

**File:** `/components/TracheostomyFlowchart.tsx`

**1. Line 90 - Peer Support Referral:**
```tsx
// Find:
href="YOUR_PDF_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

**2. Line 118 - Parent Care Booklet:**
```tsx
// Find:
href="YOUR_BOOKLET_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

**3. Line 142 - Skills Checklist:**
```tsx
// Find:
href="YOUR_CHECKLIST_LINK_HERE"

// Replace with:
href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

✅ **Save the file**

---

## ✅ After Updating - Testing

1. **Visual Check:**
   - Open each updated file
   - Confirm no "YOUR_" placeholders remain
   - Check that URLs look complete

2. **Functional Test:**
   - Deploy to Netlify (or run locally)
   - Click each link
   - Verify documents open correctly

---

## 🎯 Progress Tracker

Mark off as you complete:

### G-Tube:
- [ ] Peer support referral form updated
- [ ] Tested link works

### NG Tube:
- [ ] Peer support referral form updated
- [ ] Parent care booklet updated
- [ ] Skills checklist updated
- [ ] Supply list updated
- [ ] All links tested

### Tracheostomy:
- [ ] Peer support referral form updated
- [ ] Parent care booklet updated
- [ ] Skills checklist updated
- [ ] All links tested

---

## 🆘 Common Issues

### "I can't find the line number"
Use Ctrl+F (Cmd+F on Mac) and search for the placeholder text:
- `YOUR_PDF_LINK_HERE`
- `YOUR_BOOKLET_LINK_HERE`
- etc.

### "Link requires login to view"
Fix Google Drive sharing:
1. Open file in Google Drive
2. Right-click → "Share"
3. Change "Restricted" to "Anyone with the link"
4. Set permission to "Viewer"
5. Copy the new link

### "I made a mistake"
Just change it back! Or let me know and I'll fix it.

---

## 💬 Preferred Method: Let Me Help!

**Just tell me:**
1. Which documents you have ready
2. The Google Drive links for each
3. I'll update all files for you instantly!

**Example message to send me:**
```
I have these ready:

1. Peer support form: https://drive.google.com/file/d/abc123/view
2. NG Tube booklet: https://drive.google.com/file/d/def456/view
3. NG Tube checklist: https://drive.google.com/file/d/ghi789/view
4. NG Tube supplies: https://drive.google.com/file/d/jkl012/view
5. Trach booklet: https://drive.google.com/file/d/mno345/view
6. Trach checklist: https://drive.google.com/file/d/pqr678/view

Please update the files!
```

---

**Ready?** Let me know how you'd like to proceed! 🚀
