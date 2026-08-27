import Link from 'next/link'

export default function BlogPost({ params }: { params: { id: string } }) {
  // Mock veri - gerçekte database'den gelecek
  const post = {
    id: params.id,
    title: 'Sheet Pile Wall Analysis with Python',
    date: '30 Ağustos 2026',
    author: 'Deniz',
    category: 'Geotechnical Engineering',
    tags: ['Python', 'PLAXIS', 'ML', 'Geotechnical'],
    content: `
# Sheet Pile Wall Analysis with Python

## Giriş

PLAXIS ile yapılan sayısal analizler geoteknik mühendisliğinin önemli bir parçasıdır. Ancak büyük ölçekli parametrik çalışmalar için çıktıları elle işlemek verimsizdir. Bu yazıda, Python kullanarak PLAXIS sonuçlarını otomatize etmeyi, analiz etmeyi ve makine öğrenmesi modelleri geliştirmeyi göstereceğim.

## PLAXIS Çıktılarını Python'a Aktarma

### Veri Formatı

PLAXIS, analiz sonuçlarını çeşitli formatlarda dışa aktarabilir:

\`\`\`python
import pandas as pd
import numpy as np

# PLAXIS CSV çıktılarını yükleme
df_results = pd.read_csv('plaxis_output.csv')

# Temel bilgiler
print(df_results.head())
print(df_results.describe())
\`\`\`

### Data Cleaning

\`\`\`python
# Eksik değerleri kontrol et
print(df_results.isnull().sum())

# Anormal değerleri temizle (outliers)
Q1 = df_results['BendingMoment'].quantile(0.25)
Q3 = df_results['BendingMoment'].quantile(0.75)
IQR = Q3 - Q1
\`\`\`

## Makine Öğrenmesi Modeli Eğitimi

### Feature Engineering

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

features = ['SoilDensity', 'CohesionAngle', 'FrictionAngle', 'WallHeight']
target = 'MaxBendingMoment'

X = df_cleaned[features]
y = df_cleaned[target]

model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)
\`\`\`

## Sonuç

Python ile PLAXIS otomasyonu şu faydaları sağlar:
- ✅ Hızlı parametrik çalışmalar
- ✅ Makine öğrenmesi entegrasyonu
- ✅ Reproducible sonuçlar
- ✅ Büyük veri setlerinin işlenmesi

---

**Kod Deposu**: [GitHub Repository](https://github.com/denizhanturkmen/sheet-pile-ml)
    `,
    readTime: '8 min read',
  }

  const relatedPosts = [
    { id: 2, title: 'Marshall Test Predictions with PINNs' },
    { id: 3, title: 'CBR-ML Model Comparison' },
  ]

  return (
    <>
      <article className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:text-accent mb-4 block">
              ← Blog'a Dön
            </Link>
            <h1>{post.title}</h1>
            <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="badge badge-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* Author Info */}
          <div className="bg-blue-50 border-l-4 border-primary p-6 mb-12">
            <h3 className="font-bold mb-2">Yazarı Hakkında</h3>
            <p className="text-gray-700">
              Deniz, geotechnical engineering ve materials science alanında bağımsız araştırmacı.
              Makine öğrenmesi, physics-informed neural networks ve sayısal modelleme konularında
              çalışmaktadır.
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="font-bold text-xl mb-6">İlgili Yazılar</h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="block p-4 border border-gray-200 rounded hover:border-primary hover:bg-blue-50 transition"
                  >
                    <h4 className="font-semibold text-primary">{related.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="border-t border-gray-200 pt-8">
            <p className="font-semibold mb-4">Bu yazıyı paylaş</p>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}`}
                className="btn btn-primary"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}`}
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
              <a href={`mailto:?subject=${post.title}`} className="btn bg-gray-500 text-white hover:bg-gray-600">
                Email
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-gray-50 py-12 mt-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">Daha Fazla Yazı Oku</h3>
          <Link href="/blog" className="btn btn-primary">
            Tüm Yazıları Gör
          </Link>
        </div>
      </section>
    </>
  )
}
