import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Sheet Pile Wall Analysis with Python',
      date: '30 Ağustos 2026',
      excerpt: 'PLAXIS çıktılarını Python ile otomatize etme ve ML modelleri geliştirme teknikləri',
      category: 'Sheet Pile',
      tags: ['Python', 'PLAXIS', 'ML', 'FEM'],
    },
    {
      id: 2,
      title: 'Marshall Test Predictions with PINNs',
      date: '25 Ağustos 2026',
      excerpt: 'Physics-informed neural networks ile asphalt characterization ve bending moment prediction',
      category: 'PINN',
      tags: ['PINN', 'Asphalt', 'Neural Networks', 'PyTorch'],
    },
    {
      id: 3,
      title: 'CBR-ML Model Comparison',
      date: '20 Ağustos 2026',
      excerpt: 'Farklı ML modelleri (XGBoost, Random Forest, Neural Networks) performans karşılaştırması',
      category: 'CBR',
      tags: ['CBR', 'Machine Learning', 'scikit-learn'],
    },
  ]

  return (
    <>
      <section className="section pt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">📖 Blog</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Geotechnical engineering, machine learning, ve research metodolojileri hakkında yazılar.
        </p>
      </section>

      <section className="section">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="card group hover:border-primary-500 cursor-pointer block"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                </div>
                <span className="badge badge-primary text-sm mt-3 md:mt-0 w-fit">
                  {post.category}
                </span>
              </div>

              <p className="text-gray-400 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
