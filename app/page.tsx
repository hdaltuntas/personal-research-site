import Link from 'next/link'

export default function Home() {
  const stats = [
    { number: '6', label: 'Araştırma Alanı', icon: '🔬' },
    { number: '3', label: 'Sheet Pile Makaleler', icon: '🏗️' },
    { number: '3', label: 'Marshall Test Makaleler', icon: '🧪' },
    { number: '117+', label: 'Lab Data Points', icon: '📊' },
  ]

  const researchAreas = [
    {
      icon: '🏗️',
      title: 'Sheet Pile Walls',
      description: 'Cantilever sheet pile wall bending moment prediction using ML',
      papers: '3 makaleler',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: '🧪',
      title: 'Marshall Test & PINN',
      description: 'Physics-informed neural networks for asphalt characterization',
      papers: '3 makaleler',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '📊',
      title: 'CBR Prediction',
      description: 'Machine learning models for California Bearing Ratio prediction',
      papers: '2+ makaleler',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: '🎯',
      title: 'Pile Foundations',
      description: 'Embedding depth optimization using ML algorithms',
      papers: '1+ makaleler',
      color: 'from-fuchsia-500 to-pink-500',
    },
  ]

  const recentPosts = [
    {
      id: 1,
      title: 'Sheet Pile Wall Analysis with Python',
      date: '30 Ağustos 2026',
      excerpt: 'PLAXIS çıktılarını Python ile otomatize etme ve ML modelleri geliştirme',
      tags: ['Python', 'PLAXIS', 'ML'],
    },
    {
      id: 2,
      title: 'Marshall Test Predictions with PINNs',
      date: '25 Ağustos 2026',
      excerpt: 'Physics-informed neural networks ile asphalt characterization',
      tags: ['PINN', 'Asphalt', 'Neural Networks'],
    },
    {
      id: 3,
      title: 'CBR-ML Model Comparison',
      date: '20 Ağustos 2026',
      excerpt: 'Farklı ML modelleri performans karşılaştırması',
      tags: ['CBR', 'Machine Learning'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary-500 border-opacity-30 bg-primary-500 bg-opacity-10">
            <span className="text-primary-300 text-sm font-semibold">🔬 Araştırma & Geliştirme</span>
          </div>

          <h1 className="hero-title mb-6">
            Geotechnical & Materials Research
          </h1>

          <p className="hero-subtitle max-w-2xl mx-auto mb-12">
            Sheet Pile Walls • Asphalt Materials • Physics-Informed Neural Networks
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/blog" className="btn btn-primary">
              Blog'u Oku →
            </Link>
            <Link href="/papers" className="btn btn-secondary">
              Makaleleri Gör →
            </Link>
            <Link href="/projects" className="btn btn-outline">
              Projeleri İncele →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="card group hover:border-primary-500"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>🎓 Kimim Ben</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Geotechnical engineering ve materials science alanında bağımsız araştırmacı olarak çalışıyorum. 
              Araştırmalarımda makine öğrenmesi, physics-informed neural networks ve sayısal modelleme 
              kombinasyonunu kullanıyorum.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Tüm araştırmalarım yüksek kaliteli metodoloji, sağlam validasyon ve reproducible kod 
              prensiplerine dayanır. Q1/Q2 uluslararası dergilerinde yayınlanmayı hedefliyorum.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="mailto:deniz@example.com" className="btn btn-primary">
                📧 İletişime Geç
              </a>
              <a href="/about" className="btn btn-outline">
                Daha Fazla Bilgi →
              </a>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 card-glow">
            <h4 className="font-bold text-white mb-6">📊 Aktif Araştırmalar</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary-400">✓</span>
                <span className="text-gray-300">3-paper series: Sheet pile ML prediction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary-400">✓</span>
                <span className="text-gray-300">3-paper series: Marshall test PINN</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400">✓</span>
                <span className="text-gray-300">CBR prediction models</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary-400">✓</span>
                <span className="text-gray-300">Pile embedding depth optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-dark py-20">
        <div className="container-custom">
          <h2 className="section-title">🔬 Araştırma Alanları</h2>

          <div className="grid-auto">
            {researchAreas.map((area, idx) => (
              <div
                key={idx}
                className="card group hover:border-primary-500 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                <div className="flex items-center gap-2 text-primary-300">
                  <span className="text-xs font-semibold">{area.papers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section">
        <h2 className="section-title">📖 Son Yazılar</h2>

        <div className="grid-auto mb-8">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="card group hover:border-primary-500 cursor-pointer"
            >
              <div className="text-sm text-gray-400 mb-3">{post.date}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge badge-primary text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn btn-primary">
            Tüm Yazıları Gör →
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-dark py-20">
        <div className="container-custom">
          <h2 className="section-title">💻 Teknoloji Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Programming', items: 'Python • MATLAB • TypeScript • SQL' },
              { title: 'ML & AI', items: 'scikit-learn • XGBoost • PyTorch • TensorFlow' },
              { title: 'Numerical', items: 'PLAXIS • FEM • MATLAB • Simulink' },
              { title: 'Web & Cloud', items: 'Next.js • React • Vercel • Streamlit' },
            ].map((stack, idx) => (
              <div key={idx} className="card text-center group hover:border-primary-500">
                <h4 className="font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {stack.title}
                </h4>
                <p className="text-sm text-gray-400">{stack.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center card-glow border-0">
          <h2 className="text-4xl font-bold text-white mb-4">İşbirliği & İletişim</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Araştırma, işbirliği veya sorularınız için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:deniz@example.com" className="btn bg-white text-primary-600 hover:bg-gray-100">
              📧 Email Gönder
            </a>
            <a href="https://github.com" className="btn bg-white bg-opacity-20 text-white hover:bg-opacity-30">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com" className="btn bg-white bg-opacity-20 text-white hover:bg-opacity-30">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
