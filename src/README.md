# NICU Caregiver Education Flowcharts

Interactive web-based flowcharts for NICU caregiver education at Weill Cornell Medicine, covering G-Tube, NG Tube, and Tracheostomy discharge processes.

## 🌟 Features

- **Three Interactive Flowcharts**: G-Tube, NG Tube, and Tracheostomy
- **Color-Coded Workflow**: Visual distinction between Initial Steps, SDP Activities, Nursing Tasks, and Physician Review
- **PDF Export**: Print-optimized for single-page portrait documents
- **Responsive Design**: Works on desktop and mobile devices
- **Direct Document Links**: Quick access to checklists, forms, and training materials

## 🚀 Quick Start

### Option 1: Deploy to Netlify (Recommended - Easiest)

1. **Fork this repository** or download the code
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub/GitLab account (or drag and drop the folder)
5. Configure build settings:
   - Build command: `npm run build` (if using Vite) or leave empty
   - Publish directory: `dist` (if using Vite) or `build`
6. Click "Deploy site"
7. Your app will be live at: `https://your-site-name.netlify.app`

### Option 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import your Git repository or upload the folder
4. Vercel will auto-detect settings
5. Click "Deploy"
6. Your app will be live at: `https://your-project-name.vercel.app`

### Option 3: Deploy to GitHub Pages

1. Push code to a GitHub repository
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and folder (`/root` or `/docs`)
4. Save and wait for deployment
5. Your app will be live at: `https://yourusername.github.io/repository-name`

### Option 4: Run Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd nicu-flowcharts

# Install dependencies (if using npm/yarn)
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

# Open browser to http://localhost:5173 (or the port shown)
```

## 📋 Using the Flowcharts

### Navigation
- Click tabs at the top to switch between G-Tube, NG Tube, and Tracheostomy flowcharts
- Each flowchart has its own color theme for easy identification

### Exporting to PDF
1. Click the "Export to PDF" button on any flowchart
2. In the print dialog:
   - Select "Save as PDF"
   - Set orientation to "Portrait"
   - Enable "Background graphics"
3. Save the PDF

### Workflow Color Coding
- **Blue**: Initial consultation and referral steps
- **Amber/Orange**: SDP (Simulation Discharge Program) activities
- **Emerald Green**: Nursing tasks and documentation
- **Purple**: Physician review and discharge checklist

## 🔗 Updating Document Links

All document links are embedded in the flowchart components. To update links:

1. **G-Tube Links**: Edit `/components/GTubeFlowchart.tsx`
2. **NG Tube Links**: Edit `/components/NGTubeFlowchart.tsx`
3. **Tracheostomy Links**: Edit `/components/TracheostomyFlowchart.tsx`

Search for URLs (e.g., `https://drive.google.com/` or `YOUR_PDF_LINK_HERE`) and replace with your actual document links.

### Example Links to Update:
- SDP teaching materials
- Skills checklists
- Supply lists
- EPIC order sheets
- Peer support referral forms

## 📁 Project Structure

```
├── App.tsx                          # Main app with tab navigation
├── components/
│   ├── GTubeFlowchart.tsx          # G-Tube flowchart
│   ├── NGTubeFlowchart.tsx         # NG Tube flowchart
│   ├── TracheostomyFlowchart.tsx   # Tracheostomy flowchart
│   ├── FlowchartNode.tsx           # Reusable flowchart components
│   └── ui/                          # Shadcn UI components
├── styles/
│   └── globals.css                  # Global styles and print CSS
└── README.md                        # This file
```

## 🎨 Customization

### Changing Colors
Colors are defined in the flowchart components. Look for Tailwind classes like:
- `bg-blue-50` (backgrounds)
- `border-blue-500` (borders)
- `text-blue-900` (text)

### Updating Contact Information
Edit the respective flowchart component files to update:
- Email addresses
- Staff names
- Department contacts

### Modifying Workflow Steps
Each flowchart component contains the step-by-step process. Edit the JSX in the component files to:
- Add/remove steps
- Change descriptions
- Update checklists

## 🖨️ Print Optimization

The flowcharts are optimized for printing to PDF:
- **Page size**: Standard portrait (8.5" × 11")
- **Margins**: 0.5 inches all around
- **Color preservation**: Full color maintained in PDF
- **Single page**: Each flowchart fits on one page

## 📧 Contact Information

### NICU Patients Contact:
- Tricia Budway: trb9006@nyp.org
- Jane Harrington: jharring@nyp.org
- Lilly Fox: elf9094@nyp.org
- MacKenzi Preston (CC): mnh9003@med.cornell.edu
- Olivia Gasser, NP (CC): olg9016@med.cornell.edu

### 6N/C/S Patients Contact:
- Olivia Gasser, NP: olg9016@med.cornell.edu
- MacKenzi Preston (CC): mnh9003@med.cornell.edu

## 🛠️ Technical Stack

- **React**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first styling
- **Shadcn/ui**: Component library
- **Lucide React**: Icon library
- **Vite**: Build tool (if applicable)

## 📄 License

This application is designed for internal use at Weill Cornell Medicine. Please ensure compliance with institutional policies regarding medical education materials.

## 🤝 Contributing

To make updates:
1. Clone the repository
2. Make your changes
3. Test thoroughly (especially PDF export)
4. Deploy updated version
5. Share new URL with team

## 💡 Tips for Success

1. **Test PDF Export**: Always verify PDFs look correct before sharing
2. **Update Links Regularly**: Keep Google Drive/document links current
3. **Mobile Testing**: Check flowcharts on tablets and phones
4. **Browser Compatibility**: Test in Chrome, Safari, Firefox, Edge
5. **Backup**: Keep a copy of all linked documents

## 📱 Sharing the App

Once deployed, share the URL with your team:
- **QR Code**: Generate a QR code linking to your deployed app
- **Email**: Send the URL directly to staff
- **Intranet**: Add link to hospital intranet
- **Training Materials**: Include in orientation documents

## 🔒 Security Notes

- Do not include sensitive patient information in flowcharts
- Ensure all linked documents have appropriate permissions
- Review institutional policies on web-based tools
- Consider authentication if required by your institution

---

**Weill Cornell Medicine - NICU Caregiver Education**  
*For questions or updates, contact your SDP team*
