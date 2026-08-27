import Card from '@/components/Card'
import { useState } from 'react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Sheet Pile Wall Analysis with Python',
      date: '30 Ağustos 2026',
      excerpt: 'PLAXIS çıktılarını Python ile otomatize etme, veri analizi ve görselleştirme. FEM sonuçları ve makine öğrenmesi modelleri.',
      tags: ['Python', 'PLAXIS', 'ML', 'Geotechnical'],
      content: 'Full article content here...',
    },
    {
      id: 2,
      title: 'Marshall Test Predictions with PINNs',
      date: '25 Ağustos 2026',
      excerpt: 'Physics-informed neural networks nasıl çalışır ve Marshall test uygulaması. Bitümlü karışım karakterizasyonu.',
      tags: ['PINN', 'Asphalt', 'Neural Networks', 'ML'],
      content: 'Full article content here...',
    },
    {
      id: 3,
      title: 'CBR-ML Model Comparison',
      date: '20 Ağustos 2026',
      excerpt: 'Farklı ML modelleri test sonuçları ve performans karşılaştırması. RandomForest vs XGBoost vs Neural Networks.',
      tags: ['CBR', 'Machine Learning', 'Data Science'],
      content: 'Full article content here...',
    },
    {
      id: 4,
      title: 'PMAT Data Extraction Automation',
      date: '15 Ağustos 2026',
      excerpt: '117 PMAT lab raporundan otomatik veri çıkartma. Python ve regex ile text parsing.',
      tags: ['Data Extraction', 'Python', 'Automation'],
      content: 'Full article content here...',
    },
    {
      id: 5,
      title: 'FEM Validation Against Lab Data',
      date: '10 Ağustos 2026',
      excerpt: 'PLAXIS FEM analizinin laboratuvar verileriyle doğrulanması. Sensitivity analysis.',
      tags: ['PLAXIS', 'FEM', 'Validation', 'Geotechnical'],
      content: 'Full article content here...',
    },
    {
      id: 6,
      title: 'Getting Started with Physics-Informed Learning',
      date: '05 Ağustos 2026',
      excerpt: 'PINN konseptlerine giriş. Fizik kısıtlamalarını sinir ağlarına nasıl entegre edebilirim?',
      tags: ['PINN', 'Physics', 'Deep Learning'],
      content: 'Full article content here...',
    },
  ]

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
        <div className="container-custom">
          <h1>📝 Blog</h1>
          <p className="text-gray-600 mt-4">
            Geotechnical engineering, materials science, ve makine öğrenmesi hakkında yazılar
          </p>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {blogPosts.map((post) => (
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
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="card mb-6">
              <h3 className="font-bold mb-4">🔍 Ara</h3>
              <input
                type="text"
                placeholder="Yazı ara..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Tags */}
            <div className="card">
              <h3 className="font-bold mb-4">🏷️ Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <a
                    key={tag}
                    href={`?tag=${tag}`}
                    className="badge badge-primary hover:bg-primary hover:text-white cursor-pointer text-xs"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="card mt-6 bg-blue-50">
              <h3 className="font-bold mb-4">📊 İstatistikler</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">{blogPosts.length}</span> yazı
                </p>
                <p>
                  <span className="font-semibold">{allTags.length}</span> etiket
                </p>
                <p>
                  <span className="font-semibold">2026</span> senesinden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
