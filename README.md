# Deniz Research Website

🔬 Personal research website showcasing geotechnical engineering & materials science work.

## 🌐 Live Demo

**Vercel:** [personal-research-site-git-main-haltuntas.vercel.app](https://personal-research-site-git-main-haltuntas.vercel.app)

**Netlify:** [Coming Soon]

---

## ✨ Features

- 🌙 **Dark Modern Design** - Professional dark theme with purple & cyan colors
- ⚡ **Fast Performance** - Next.js 14, optimized for speed
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎨 **Beautiful UI** - Tailwind CSS with custom components
- 📝 **Blog System** - Blog posts with categories and tags
- 📚 **Research Papers** - Track paper status (Published, Under Review, In Preparation, Planned)
- 🚀 **Projects Portfolio** - Showcase research projects and tools
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/personal-research-site.git
cd personal-research-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
personal-research-site/
├── app/
│   ├── layout.tsx           # Root layout with navbar & footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── blog/
│   │   ├── page.tsx         # Blog list
│   │   └── [id]/page.tsx    # Blog post detail
│   ├── papers/
│   │   └── page.tsx         # Research papers
│   ├── projects/
│   │   └── page.tsx         # Projects portfolio
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   └── Card.tsx             # Reusable card component
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

---

## 🎨 Colors & Theme

### Primary Colors
- **Purple:** `#8b5cf6` - Main brand color
- **Cyan:** `#06b6d4` - Accent color

### Backgrounds
- **Dark 900:** `#0f1419` - Main background
- **Dark 800:** `#1a202c` - Cards & sections

---

## 🚀 Deployment

### Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### Vercel

1. Connect GitHub repository to Vercel
2. Vercel auto-detects Next.js
3. Deploy with one click!

---

## 📝 Content Management

### Adding Blog Posts

Edit `/app/blog/[id]/page.tsx` and add post data to the `posts` object.

### Adding Projects

Edit `/app/projects/page.tsx` and add project data to the `projects` array.

### Adding Papers

Edit `/app/papers/page.tsx` and add paper data to the `paperSeries` array.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel / Netlify
- **Package Manager:** npm

---

## 📊 Research Areas

1. **Sheet Pile Walls** - ML prediction for bending moments
2. **Marshall Test PINN** - Physics-informed neural networks for asphalt
3. **CBR Prediction** - ML models for bearing capacity
4. **Pile Foundations** - Embedding depth optimization
5. **Pavement Analysis** - FEM + ML for rutting prediction
6. **3D Consolidation** - Advanced soil mechanics

---

## 📄 Paper Series

### Sheet Pile Wall Prediction (3 Papers)
- Paper 1: Data Synthesis & Feature Engineering
- Paper 2: ML Model Development & Validation
- Paper 3: Real-World Applications & Performance

### Marshall Test PINN (3 Papers)
- Paper 1: PINN Framework & Physics Constraints
- Paper 2: Training & Loss Function Optimization
- Paper 3: Experimental Validation & Extrapolation

---

## 🔗 Links

- **GitHub:** [hdaltuntas](https://github.com/hdaltuntas)
- **Research:** [personal-research-site](https://github.com/hdaltuntas/personal-research-site)
- **Email:** deniz@example.com

---

## 📜 License

MIT License - feel free to use this template for your own research website!

---

## 🙏 Acknowledgments

Built with ❤️ using Next.js, React, and Tailwind CSS.

---

**Last Updated:** September 2026
