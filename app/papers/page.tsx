import Card from '@/components/Card'

export default function PapersPage() {
  const paperSeries = [
    {
      series: 'Sheet Pile Wall Series',
      emoji: '🏗️',
      papers: [
        {
          id: 1,
          title: 'ML-Based Bending Moment Prediction for Cantilever Sheet Pile Walls - Part 1: Feature Engineering',
          journal: 'Geotechnical Engineering Journal',
          year: 2026,
          status: 'Under Review',
          doi: '',
          pdf: '',
          tags: ['Sheet Pile', 'ML', 'Feature Engineering'],
        },
        {
          id: 2,
          title: 'ML-Based Bending Moment Prediction for Cantilever Sheet Pile Walls - Part 2: Model Comparison',
          journal: 'Geotechnical Engineering Journal',
          year: 2026,
          status: 'In Preparation',
          doi: '',
          pdf: '',
          tags: ['Sheet Pile', 'ML', 'Model Comparison'],
        },
        {
          id: 3,
          title: 'ML-Based Bending Moment Prediction for Cantilever Sheet Pile Walls - Part 3: Validation & Application',
          journal: 'Geotechnical Engineering Journal',
          year: 2026,
          status: 'Planned',
          doi: '',
          pdf: '',
          tags: ['Sheet Pile', 'ML', 'Validation'],
        },
      ],
    },
    {
      series: 'Marshall Test PINN Series',
      emoji: '🧪',
      papers: [
        {
          id: 4,
          title: 'Physics-Informed Neural Networks for Asphalt Mixture Characterization - Part 1: Theory',
          journal: 'Asphalt Materials and Pavement Journal',
          year: 2026,
          status: 'In Preparation',
          doi: '',
          pdf: '',
          tags: ['Marshall Test', 'PINN', 'Asphalt'],
        },
        {
          id: 5,
          title: 'Physics-Informed Neural Networks for Asphalt Mixture Characterization - Part 2: Training',
          journal: 'Asphalt Materials and Pavement Journal',
          year: 2026,
          status: 'Planned',
          doi: '',
          pdf: '',
          tags: ['Marshall Test', 'PINN', 'Training'],
        },
        {
          id: 6,
          title: 'Physics-Informed Neural Networks for Asphalt Mixture Characterization - Part 3: Applications',
          journal: 'Asphalt Materials and Pavement Journal',
          year: 2026,
          status: 'Planned',
          doi: '',
          pdf: '',
          tags: ['Marshall Test', 'PINN', 'Applications'],
        },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800'
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'In Preparation':
        return 'bg-blue-100 text-blue-800'
      case 'Planned':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
        <div className="container-custom">
          <h1>📚 Yayınlanan Makaleler</h1>
          <p className="text-gray-600 mt-4">
            Uluslararası dergilerde yayınlanan araştırmalar
          </p>
        </div>
      </section>

      {/* Papers */}
      <section className="container-custom py-12">
        {paperSeries.map((series) => (
          <div key={series.series} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{series.emoji}</span>
              <h2>{series.series}</h2>
            </div>

            <div className="space-y-4">
              {series.papers.map((paper) => (
                <div
                  key={paper.id}
                  className="paper-card border-l-4 border-primary bg-blue-50 hover:bg-blue-100 transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{paper.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        📖 <strong>{paper.journal}</strong> • {paper.year}
                      </p>

                      <div className="flex gap-2 mb-3">
                        {paper.tags.map((tag) => (
                          <span key={tag} className="text-xs badge badge-primary">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 text-sm">
                        {paper.pdf && (
                          <a href={paper.pdf} className="text-primary hover:text-accent font-medium">
                            📄 PDF
                          </a>
                        )}
                        {paper.doi && (
                          <a href={`https://doi.org/${paper.doi}`} className="text-primary hover:text-accent font-medium">
                            🔗 DOI
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(paper.status)}`}>
                        {paper.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Stats */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h3 className="font-bold text-xl mb-6">📊 Yayın İstatistikleri</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6</div>
              <p className="text-gray-600 text-sm">Planlanan Makale</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">2</div>
              <p className="text-gray-600 text-sm">Seri</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2</div>
              <p className="text-gray-600 text-sm">Hedef Journal (Q1/Q2)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2026</div>
              <p className="text-gray-600 text-sm">Taşdığı Yıl</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">GitHub'ta Kod Erişim</h3>
          <p className="mb-6">
            Tüm makalelerin associated code ve data depositorium'u GitHub'ta mevcuttur.
          </p>
          <a href="https://github.com/denizhanturkmen" className="btn bg-white text-primary hover:bg-gray-100">
            🐙 GitHub Profiline Git
          </a>
        </div>
      </section>
    </>
  )
}
