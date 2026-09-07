export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Makaleler', href: '/papers' },
      { label: 'Projeler', href: '/projects' },
    ],
    research: [
      { label: 'Sheet Pile ML', href: '/projects' },
      { label: 'Marshall Test PINN', href: '/projects' },
      { label: 'CBR Prediction', href: '/projects' },
      { label: 'Pile Embedding', href: '/projects' },
    ],
    social: [
      { label: 'GitHub', href: 'https://github.com/denizhanturkmen', icon: '🐙' },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
      { label: 'Email', href: 'mailto:deniz@example.com', icon: '📧' },
      { label: 'ResearchGate', href: 'https://researchgate.net', icon: '📚' },
    ],
  }

  return (
    <footer className="bg-dark-900 border-t border-dark-700 mt-20">
      <div className="container-custom py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🔬</span>
              <h3 className="text-xl font-bold text-gradient">Deniz</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Geotechnical Engineering & Materials Science araştırmaları. Machine Learning & Physics-Informed Neural Networks.
            </p>
            <div className="flex gap-3">
              {links.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-600 flex items-center justify-center text-lg hover:border-primary-500 hover:bg-primary-500 hover:bg-opacity-10 transition-all"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sayfalar */}
          <div>
            <h4 className="font-bold text-white mb-4">Sayfalar</h4>
            <ul className="space-y-2">
              {links.product.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Araştırmalar */}
          <div>
            <h4 className="font-bold text-white mb-4">Araştırmalar</h4>
            <ul className="space-y-2">
              {links.research.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-bold text-white mb-4">İstatistikler</h4>
            <div className="space-y-3">
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary-400">6</div>
                <div className="text-xs text-gray-400">Araştırma Alanı</div>
              </div>
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-3">
                <div className="text-2xl font-bold text-secondary-400">6</div>
                <div className="text-xs text-gray-400">Planlanan Makale</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Deniz. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                Gizlilik
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                Şartlar
              </a>
              <a href="/sitemap.xml" className="text-gray-500 hover:text-primary-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 pt-8 border-t border-dark-700">
            <p className="text-xs text-gray-500 mb-3">Teknolojiler:</p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Python', 'PyTorch'].map((tech) => (
                <span key={tech} className="badge badge-primary text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
