import Link from 'next/link'
import Card from '@/components/Card'

export default function Home() {
  const featuredBlogPosts = [
    {
      id: 1,
      title: 'Sheet Pile Wall Analysis with Python',
      date: '30 Ağustos 2026',
      excerpt: 'PLAXIS çıktılarını Python ile otomatize etme, veri analizi ve görselleştirme',
      tags: ['Python', 'PLAXIS', 'ML'],
    },
    {
      id: 2,
      title: 'Marshall Test Predictions with PINNs',
      date: '25 Ağustos 2026',
      excerpt: 'Physics-informed neural networks nasıl çalışır ve Marshal test uygulaması',
      tags: ['PINN', 'Asphalt', 'ML'],
    },
    {
      id: 3,
      title: 'CBR-ML Model Comparison',
      date: '20 Ağustos 2026',
      excerpt: 'Farklı ML modelleri test sonuçları ve performans karşılaştırması',
      tags: ['CBR', 'Machine Learning'],
    },
  ]

  const researchAreas = [
    {
      emoji: '🏗️',
      title: 'Sheet Pile Walls',
      description: 'Cantilever sheet pile wall bending moment prediction using ML',
      papers: 3,
    },
    {
      emoji: '🧪',
      title: 'Marshall Test & PINN',
      description: 'Physics-informed neural networks for asphalt characterization',
      papers: 3,
    },
    {
      emoji: '📊',
      title: 'CBR Prediction',
      description: 'Machine learning models for California Bearing Ratio prediction',
      papers: 2,
    },
    {
      emoji: '🎯',
      title: 'Pile Foundations',
      description: 'Embedding depth optimization using ML algorithms',
      papers: 1,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4 border-b-4 border-primary pb-4 inline-block">
            Geotechnical & Materials Research
          </h1>
          <p className="text-2xl text-gray-600 mt-6 mb-8">
            Sheet Pile Walls • Asphalt Materials • Physics-Informed Neural Networks
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/blog" className="btn btn-primary">
              Blog'u Oku
            </Link>
            <Link href="/papers" className="btn btn-secondary">
              Makaleleri Gör
            </Link>
            <Link href="/projects" className="btn bg-accent text-white hover:bg-orange-600">
              Projeleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2>👋 Merhaba</h2>
            <p className="text-gray-700 mb-4">
              Geoteknik mühendisliği ve malzeme biliminde araştırma yapıyorum. Çalışmalarımda makine öğrenmesi, 
              physics-informed neural networks ve sayısal modelleme (PLAXIS/FEM) kombinasyonunu kullanıyorum.
            </p>
            <p className="text-gray-700">
              Araştırmalarım Q1/Q2 uluslararası dergilerinde yayınlanmayı hedeflemektedir. Metodolojimin temel 
              özellikleri yüksek kalite, sağlam validasyon ve reproducible kod.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-secondary">📊 Aktif Araştırmalar</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✅ 3-paper series: Sheet pile ML prediction</li>
              <li>✅ 3-paper series: Marshall test PINN</li>
              <li>✅ CBR prediction models</li>
              <li>✅ Pile embedding depth optimization</li>
              <li>✅ Film collection management app</li>
              <li>✅ Stock indicator dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">🔬 Araştırma Alanları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, idx) => (
              <div key={idx} className="card text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">{area.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                <p className="text-xs font-semibold text-primary">{area.papers} makale</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container-custom py-16">
        <h2>📖 Son Yazılar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredBlogPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.excerpt}
              date={post.date}
              tags={post.tags}
              href={`/blog/${post.id}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn btn-primary">
            Tüm Yazıları Gör →
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <h2 className="text-white text-center mb-12">💻 Teknoloji Stack</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="font-bold mb-3 text-accent">Programming</h4>
              <p className="text-gray-300">Python • MATLAB • JavaScript • SQL</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-accent">ML & AI</h4>
              <p className="text-gray-300">scikit-learn • XGBoost • PyTorch • TensorFlow</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-accent">Numerical</h4>
              <p className="text-gray-300">PLAXIS • FEM • MATLAB Simulink</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-accent">Web</h4>
              <p className="text-gray-300">Next.js • React • Streamlit • Flask</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">İletişime Geç</h2>
          <p className="mb-8 text-lg">
            Araştırma, işbirliği veya soruların için benimle iletişime geçebilirsin.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:deniz@example.com" className="btn bg-white text-primary hover:bg-gray-100">
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
