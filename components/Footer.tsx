export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Hakkında */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Deniz</h3>
            <p className="text-gray-300">
              Geotechnical Engineering & Materials Science araştırmaları
            </p>
          </div>

          {/* Linkler */}
          <div>
            <h4 className="font-bold mb-4">Sayfalar</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-accent">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-accent">
                  Blog
                </a>
              </li>
              <li>
                <a href="/papers" className="hover:text-accent">
                  Makaleler
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-accent">
                  Projeler
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:deniz@example.com" className="hover:text-accent">
                  📧 Email
                </a>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-accent">
                  🐙 GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-accent">
                  🔗 LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Teknolojiler */}
          <div>
            <h4 className="font-bold mb-4">Stack</h4>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">Next.js</span>
              <span className="badge badge-primary">React</span>
              <span className="badge badge-primary">Python</span>
              <span className="badge badge-primary">ML</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Deniz. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
              <a href="/privacy" className="hover:text-accent">
                Gizlilik
              </a>
              <a href="/sitemap.xml" className="hover:text-accent">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
