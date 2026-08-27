# 🔬 Deniz - Personal Research Website

Modern, hızlı ve SEO uyumlu kişisel araştırma web sitesi. Next.js + React + Tailwind CSS ile yapılmıştır.

## ✨ Özellikler

- 📱 **Responsive Design** - Mobil, tablet ve masaüstüne uyumlu
- ⚡ **Ultra Hızlı** - Next.js App Router ile optimized
- 🎨 **Modern Design** - Tailwind CSS ile güzel ve clean
- 📝 **Blog Sistemi** - Markdown tabanlı yazılar
- 📚 **Makaleler** - Yayınlanan araştırmaların yönetimi
- 🎯 **Projeler** - Portfolio ve GitHub linkler
- 📊 **SEO Optimized** - Metadata ve structured data
- 🌐 **Custom Domain** - Vercel ile tam custom domain desteği
- 🚀 **Easy Deploy** - Vercel'de tek click deploy

## 🚀 Hızlı Başlangıç

### 1. Klonla ve Kurulum Yap

```bash
# Repository'yi klonla
git clone https://github.com/yourusername/personal-research-site.git
cd personal-research-site

# Bağımlılıkları yükle
npm install
```

### 2. Local'de Çalıştır

```bash
npm run dev
```

Tarayıcında aç: `http://localhost:3000`

### 3. Kişisel Bilgilerini Güncelle

Aşağıdaki dosyalarda kişisel bilgilerini güncelle:

- `app/page.tsx` - Ana sayfa
- `components/Navbar.tsx` - İletişim bilgileri
- `components/Footer.tsx` - Social media linkler

### 4. GitHub'a Push Et

```bash
git add .
git commit -m "Personalize website"
git push origin main
```

### 5. Vercel'de Deploy

1. [Vercel](https://vercel.com) sitesine git
2. GitHub hesabını bağla
3. Repository'yi seç → **Import**
4. Otomatik olarak deploy olacak

Deploy sonrası: `https://your-username.vercel.app`

## 📝 İçerik Ekleme

### Blog Yazısı Ekle

1. `app/blog/page.tsx` dosyasındaki `blogPosts` array'ine yeni yazı ekle:

```typescript
{
  id: 7,
  title: 'Blog Yazısı Başlığı',
  date: '27 Ağustos 2026',
  excerpt: 'Kısa özet...',
  tags: ['Tag1', 'Tag2'],
}
```

2. `app/blog/[id]/page.tsx` dosyasında post content'i güncelle

### Makale Ekle

`app/papers/page.tsx` dosyasındaki `paperSeries` array'ine ekle:

```typescript
{
  id: 7,
  title: 'Makale Başlığı',
  journal: 'Journal Adı',
  year: 2026,
  status: 'Published', // Published, Under Review, In Preparation, Planned
  doi: '10.xxxx/xxxxx',
  pdf: 'https://link.com',
  tags: ['Tag1', 'Tag2'],
}
```

### Proje Ekle

`app/projects/page.tsx` dosyasındaki `projects` array'ine ekle:

```typescript
{
  id: 7,
  name: 'Proje Adı',
  emoji: '🎯',
  description: 'Kısa açıklama',
  longDescription: 'Uzun açıklama',
  features: ['Özellik 1', 'Özellik 2'],
  tech: ['Python', 'PyTorch'],
  github: 'https://github.com/...',
  status: 'Active',
  papers: 2,
}
```

## 🌐 Custom Domain Bağla

### Adım 1: Domain Satın Al

- GoDaddy, Namecheap, Google Domains vb den domain al

### Adım 2: Vercel'de Custom Domain Ekle

1. Vercel Dashboard → Project Settings
2. **Domains** bölümüne git
3. Domain adresini gir (ör: `research.example.com`)
4. DNS kayıtlarını güncelle

### Adım 3: DNS Ayarlarını Yap

Domain sağlayıcı panelinde:

```
Type: CNAME
Name: research (subdomain)
Value: cname.vercel-dns.com
TTL: 3600
```

**24-48 saat** sonra domain aktif olacak!

## 📊 Proje Yapısı

```
nextjs-site/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Ana sayfa
│   ├── globals.css        # Global CSS
│   ├── blog/
│   │   ├── page.tsx       # Blog listesi
│   │   └── [id]/
│   │       └── page.tsx   # Blog detay
│   ├── papers/
│   │   └── page.tsx       # Makaleler
│   ├── projects/
│   │   └── page.tsx       # Projeler
│   └── about/
│       └── page.tsx       # Hakkında
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   └── Card.tsx           # Card komponenti
├── public/                # Statik dosyalar
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── vercel.json            # Vercel deployment config
```

## 🎨 Özelleştirme

### Renk Şemasını Değiştir

`tailwind.config.ts` dosyasında:

```typescript
colors: {
  primary: '#YOUR_COLOR',     // Ana renk
  secondary: '#YOUR_COLOR',   // İkinci renk
  accent: '#YOUR_COLOR',      // Vurgu rengi
}
```

### Font Değiştir

`tailwind.config.ts` dosyasında `theme.fontFamily` ekle

### Logo Değiştir

`components/Navbar.tsx` dosyasında `🔬` emoji'sini değiştir

## 📱 Responsive Tasarım

Sitede responsive breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Tailwind'in `md:`, `lg:` prefixes'i kullan.

## 🔍 SEO Optimizasyonu

- ✅ Metadata (title, description, OG tags)
- ✅ Structured data
- ✅ Mobile friendly
- ✅ Fast loading (Vercel CDN)
- ✅ Clean URLs
- ✅ Sitemap (otomatik)

Metadata `app/layout.tsx` dosyasında tanımlanır.

## 📈 Performance

Vercel's Lighthouse scores:

- ⚡ Performance: 95+
- ♿ Accessibility: 95+
- 📋 Best Practices: 95+
- 🔍 SEO: 100

## 🚀 Production Checklist

Vercel'de deploy etmeden önce:

- [ ] Tüm kişisel bilgileri güncelledim
- [ ] Blog yazılarını ekledim
- [ ] Makaleleri listeledim
- [ ] Projeleri ekledim
- [ ] Hakkında sayfasını tamamladım
- [ ] Social media linklerini koydum
- [ ] Resimleri/görselleri ekledim
- [ ] Mobile'da test ettim
- [ ] Linkler çalışıyor
- [ ] Meta tags doğru

## 🆘 Sorun Giderme

### Build hatası

```bash
npm run build
```

### Node modules sorun

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port kullanımında sorun

```bash
npm run dev -- -p 3001  # Farklı port kullan
```

## 📚 Referanslar

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 Lisans

MIT License - Özgürce kullanabilir, değiştirebilir, dağıtabilirsiniz.

## 📧 İletişim

- **Email**: deniz@example.com
- **GitHub**: [@denizhanturkmen](https://github.com/denizhanturkmen)
- **LinkedIn**: [Deniz](https://linkedin.com/in/deniz)

---

**Son Güncelleme**: August 27, 2026

Keyifli coding! 🚀✨
