# OPS & AI-Buckingham Machine Website

Official website for OPS (One Parameter Solution) and AI-Buckingham Machine - A revolutionary scientific paradigm that calculates truth without experiments.

## 🌟 Overview

This website showcases:
- **OPS Theory**: One Parameter Solution for calculating all physical phenomena
- **AI-Buckingham Machine**: AI-powered dimensional analysis tool
- **The Book**: "The Rebellion of the Point" (점의 반란)
- **Validation**: Rigorous verification methodology with Zero-Knowledge Proof
- **Applications**: Industry applications and strategic convergence opportunities
- **Media**: Press releases, technical whitepapers, and video materials

## 📁 Project Structure

```
ops-website/
├── index.html              # Home page
├── pages/                  # All secondary pages
│   ├── theory.html        # Core theory explanation
│   ├── book.html          # Book introduction
│   ├── validation.html    # Verification methodology
│   ├── applications.html  # Industry applications
│   └── media.html         # Media center
├── css/
│   └── main.css           # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Image assets
├── pdfs/                  # PDF documents
│   ├── [In-Depth Press Release].pdf
│   ├── [심층 보도자료].pdf
│   ├── Science_Beyond_Experiment.pdf
│   ├── Truth_Proves_Calculation.pdf
│   ├── 알파폴드2.pdf
│   ├── 베조스2.pdf
│   └── 점의 반란 내지 출력.pdf
├── videos/                # Video materials
│   ├── OPS__이미_도착한_초지능 - 60분.mp4
│   └── 양동봉 원장의 제로존 이론 - 2007.mp4
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Local Development (Recommended)

Simply open the website using a local web server:

```bash
# Using Python 3
cd ops-website
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

### Option 2: Direct File Access

You can also open `index.html` directly in your browser, though some features (like video playback) may work better with a local server.

## 🌐 Features

### Bilingual Support
- **Korean** (default)
- **English**
- Toggle language using the buttons in the header
- Language preference is saved in browser localStorage

### Responsive Design
- Mobile-friendly layout
- Tablet and desktop optimized
- Touch-friendly navigation

### Interactive Elements
- Smooth scroll animations
- Card hover effects
- Active navigation highlighting
- Language toggle with state persistence

### Media Integration
- PDF viewer for documents
- Local video player for lectures
- Embedded presentations

## 🎨 Customization

### Colors
Edit `css/main.css` to change the color scheme:

```css
:root {
  --primary-color: #1a237e;    /* Main brand color */
  --secondary-color: #0d47a1;  /* Secondary color */
  --accent-color: #2196f3;     /* Accent highlights */
  /* ... more colors */
}
```

### Content
All content is in HTML files with bilingual support using CSS classes:
- `.ko-only` - Korean text
- `.en-only` - English text

### Adding New Pages
1. Create HTML file in `pages/` directory
2. Copy header/footer structure from existing pages
3. Add navigation link in all pages
4. Follow the existing card-based layout pattern

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### No Build Process Required
This is a static HTML/CSS/JS website with no build dependencies. Everything works out of the box.

### Technologies Used
- Pure HTML5
- CSS3 (with CSS variables)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries required

### Performance
- Minimal JavaScript for fast loading
- CSS-based animations
- Lazy loading for media content
- Optimized asset delivery

## 📦 Deployment

### GitHub Pages
1. Push this folder to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch and root folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify
1. Drag and drop the `ops-website` folder to Netlify
2. Or connect your GitHub repository
3. No build configuration needed

### Traditional Web Hosting
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Set proper file permissions (644 for files, 755 for directories)

## 📄 Content Management

### Updating PDFs
Place new PDF files in the `pdfs/` folder and update links in HTML files.

### Updating Videos
Place new video files in the `videos/` folder and update the video embed code in relevant pages.

### Updating Text Content
Edit the HTML files directly. All bilingual content is clearly marked with `.ko-only` and `.en-only` classes.

## 🔐 Security Notes

- All links to external resources should use HTTPS
- PDFs and videos are served locally (no external dependencies)
- No user data collection or cookies (except localStorage for language preference)
- No server-side processing required

## 📞 Contact Information

- **General Inquiries**: contact@ops-ai-bm.com
- **Media Inquiries**: media@ops-ai-bm.com
- **Partnership Inquiries**: partnership@ops-ai-bm.com

## 📚 Documentation

For detailed information about OPS theory and AI-Buckingham Machine:
- Read the technical whitepapers in the `pdfs/` folder
- Watch the 60-minute lecture video
- Visit the Theory page on the website

## 🎯 Target Audience

This website is designed for:
- **Investors**: Understanding business value and ROI
- **Press/Media**: Access to press kits and media materials
- **Research Partners**: Academic collaboration opportunities
- **Industry Partners**: Technology licensing and joint R&D

## 🌍 Languages

- **Korean** (한국어) - Primary language
- **English** - Full translation available

## 📊 Analytics (Optional)

To add analytics, insert your tracking code in the `<head>` section of each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🔄 Version History

### v1.0.0 (2026-01-11)
- Initial release
- Complete bilingual website
- 6 main pages with full content
- PDF and video integration
- Responsive design
- No build process required

## 📝 License

All content copyright © 2026 OPS & AI-Buckingham Machine. All rights reserved.

## 🙏 Acknowledgments

- OPS Theory developed by Director Yang Dong-bong
- Website content and strategy by CEO Shim Jae-woo
- Technical implementation and design

---

**Built with ❤️ for the Computational Civilization**
