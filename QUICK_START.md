# ⚡ Hızlı Başlangıç - Next.js Research Site

5 dakika içinde siteniz hazır olacak! 🚀

## 1️⃣ Klonla & Kurulum

```bash
# Repository klonla
git clone https://github.com/yourusername/personal-research-site.git
cd personal-research-site

# Paketleri yükle
npm install

# Local'de çalıştır
npm run dev
```

➜ Tarayıcı açılacak: http://localhost:3000

## 2️⃣ Kişiselleştir (5 dakika)

### A. Ana Sayfa Başlığı

**Dosya:** `app/page.tsx`

```typescript
// Satır 45-50'de bulunur
<h1 className="text-5xl font-bold mb-4 border-b-4 border-primary pb-4 inline-block">
  Senin Adın - Araştırma Alanın   ← BURAYA YAZDIR
</h1>
<p className="text-2xl text-gray-600 mt-6 mb-8">
  Konu 1 • Konu 2 • Konu 3         ← BURAYA YAZDIR
</p>
```

### B. Hakkında Bilgisi

**Dosya:** `app/page.tsx`

```typescript
// Satır 110'da bulunur
with col1:
st.markdown("""
### 👋 Merhaba

Buraya seni tanıt...           ← BURAYA YAZDIR
""")
```

### C. İletişim Bilgileri

**Dosya:** `components/Navbar.tsx`

```typescript
// Satır 20'de bulunur
<Link href="/" className="text-2xl font-bold text-primary">
  🔬 Senin Adın                 ← BURAYA YAZDIR
</Link>
```

**Dosya:** `components/Footer.tsx`

```typescript
// Satır 30-40'da bulunur
<a href="mailto:senin@email.com" className="hover:text-accent">  ← EMAIL
  📧 Email
</a>
<a href="https://github.com/username" className="hover:text-accent">  ← GITHUB
  🐙 GitHub
</a>
```

## 3️⃣ Blog Yazısı Ekle

**Dosya:** `app/blog/page.tsx`

Satır 8'de bu bölümü bul ve yeni yazı ekle:

```typescript
const blogPosts = [
  {
    id: 7,
    title: 'Senin Blog Yazısı',  ← BAŞLIK
    date: '27 Ağustos 2026',      ← TARİH
    excerpt: 'Yazının özeti...',  ← ÖZET
    tags: ['Python', 'ML'],        ← ETİKETLER
  },
  // ... diğer yazılar
]
```

## 4️⃣ Makale Ekle

**Dosya:** `app/papers/page.tsx`

Satır 8'de `paperSeries` bulunur. Ekle:

```typescript
{
  id: 7,
  title: 'Makale Başlığı',
  journal: 'Dergi Adı',
  year: 2026,
  status: 'Published',  // veya: Under Review, In Preparation, Planned
  doi: '10.xxxx/xxxxx',
  pdf: 'https://link-to-pdf.com',
  tags: ['Tag1', 'Tag2'],
}
```

## 5️⃣ Proje Ekle

**Dosya:** `app/projects/page.tsx`

Satır 8'de `projects` bulunur. Ekle:

```typescript
{
  id: 7,
  name: 'Proje Adı',
  emoji: '🎯',
  description: 'Kısa açıklama',
  longDescription: 'Uzun açıklama',
  features: ['Özellik 1', 'Özellik 2', 'Özellik 3'],
  tech: ['Python', 'PyTorch'],
  github: 'https://github.com/username/project',
  status: 'Active',  // veya: Completed, Planned
  papers: 2,
}
```

## 6️⃣ GitHub'a Push Et

```bash
git add .
git commit -m "Personalize website"
git push origin main
```

## 7️⃣ Vercel'de Deploy

### Option A: GitHub Integration (KOLAY)

1. https://vercel.com adresine git
2. "New Project" butonuna tıkla
3. GitHub repository'ni seç
4. "Deploy" butonuna tıkla
5. **Bitti!** ✨

Siteniz şu adreste: `https://your-username.vercel.app`

### Option B: Manual Deploy (İleri)

```bash
npm install -g vercel
vercel
```

## 8️⃣ Custom Domain Bağla

### Adım 1: Domain Satın Al

- GoDaddy, Namecheap, Google Domains vb

### Adım 2: Vercel Dashboard'da

1. Project → Settings → Domains
2. Domain adını yaz: `research.example.com`
3. DNS kayıtlarını güncelle

### Adım 3: DNS Sağlayıcısında

CNAME Record ekle:
```
Name: research
Type: CNAME
Value: cname.vercel-dns.com
TTL: 3600
```

**24-48 saat sonra aktif olur!** 🌍

## 🎨 Renk Şemasını Değiştir (Opsiyonel)

**Dosya:** `tailwind.config.ts`

```typescript
colors: {
  primary: '#1f77b4',      ← BURAYA RENKlerini YAZ (hex kod)
  secondary: '#2ca02c',    ← BURAYA
  accent: '#ff7f0e',       ← BURAYA
}
```

**Hex renk kodları:**
- Mavi: `#1f77b4` (default)
- Yeşil: `#2ca02c` (default)
- Turuncu: `#ff7f0e` (default)
- Kırmızı: `#d62728`
- Mor: `#9467bd`
- Pembe: `#e377c2`

## ✅ Kontrol Listesi

- [ ] Başlık ve subtitle güncelledim
- [ ] Hakkında bilgilerimi yazdım
- [ ] İletişim bilgilerini ekledim
- [ ] Blog yazısı ekledim
- [ ] Makaleler ekledim
- [ ] Projeler ekledim
- [ ] GitHub'a push ettim
- [ ] Vercel'de deploy ettim
- [ ] Custom domain bağladım
- [ ] Sitenin tümünü kontrol ettim

## 🆘 Sorun Çıkarsa

### Kurulum hatası
```bash
rm -rf node_modules
npm install
```

### Port meşgul
```bash
npm run dev -- -p 3001
```

### Build hatası
```bash
npm run build
```

### Vercel ile sorun
```bash
vercel --prod
```

## 📞 Yardım

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Tebrikler!** Siteniz artık canlı! 🎉

Sorular varsa bana email at veya GitHub issues aç! 💌
