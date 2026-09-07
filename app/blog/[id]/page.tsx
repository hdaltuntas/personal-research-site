import Link from 'next/link'

// Generate static params for all blog posts
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function BlogPost({ params }: { params: { id: string } }) {
  // Mock data - sonra database'den çek
  const posts: Record<string, any> = {
    '1': {
      title: 'Sheet Pile Wall Analysis with Python',
      date: '30 Ağustos 2026',
      category: 'Sheet Pile',
      tags: ['Python', 'PLAXIS', 'ML', 'FEM'],
      content: `
        <h2>Giriş</h2>
        <p>Sheet pile wall bending moment tahminlemesi için Python ve PLAXIS kullanarak nasıl bir workflow oluşturabiliriz?</p>
        
        <h2>PLAXIS Kurulumu</h2>
        <p>İlk olarak PLAXIS'ten gerekli çıktıları exportlamanız gerekiyor...</p>
        
        <h2>Python Workflow</h2>
        <p>Python kullanarak PLAXIS çıktılarını otomatize etmek mümkün...</p>
        
        <h2>Machine Learning Modeli</h2>
        <p>Scikit-learn ve XGBoost kullanarak bir tahmin modeli geliştirdik...</p>
        
        <h2>Sonuçlar</h2>
        <p>Model performansı çok ümit verici çıktı...</p>
      `,
    },
    '2': {
      title: 'Marshall Test Predictions with PINNs',
      date: '25 Ağustos 2026',
      category: 'PINN',
      tags: ['PINN', 'Asphalt', 'Neural Networks', 'PyTorch'],
      content: '<h2>Physics-Informed Neural Networks</h2><p>PINN kullanarak asphalt characterization...</p>',
    },
    '3': {
      title: 'CBR-ML Model Comparison',
      date: '20 Ağustos 2026',
      category: 'CBR',
      tags: ['CBR', 'Machine Learning', 'scikit-learn'],
      content: '<h2>CBR Tahmin Modellerinin Karşılaştırması</h2><p>Farklı ML modelleri arasında performans karşılaştırması...</p>',
    },
  }

  const post = posts[params.id]

  if (!post) {
    return (
      <section className="section">
        <h1 className="text-4xl font-bold text-white">Post Bulunamadı</h1>
        <Link href="/blog" className="btn btn-primary mt-6">
          ← Blog'a Dön
        </Link>
      </section>
    )
  }

  return (
    <>
      <article className="section pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="text-primary-400 hover:text-primary-300 transition-colors mb-4 inline-block">
              ← Blog'a Dön
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <span>📅 {post.date}</span>
              <span className="badge badge-primary">{post.category}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div
              className="text-gray-300 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          <div className="border-t border-dark-700 pt-8 mb-8">
            <h3 className="font-bold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span key={tag} className="badge badge-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Diğer Yazılar</h3>
            <div className="space-y-3">
              <Link href="/blog/1" className="block text-primary-400 hover:text-primary-300">
                → Sheet Pile Wall Analysis with Python
              </Link>
              <Link href="/blog/2" className="block text-primary-400 hover:text-primary-300">
                → Marshall Test Predictions with PINNs
              </Link>
              <Link href="/blog/3" className="block text-primary-400 hover:text-primary-300">
                → CBR-ML Model Comparison
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
