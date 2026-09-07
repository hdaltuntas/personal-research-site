export default function Papers() {
  const paperSeries = [
    {
      series: 'Sheet Pile Wall ML Prediction',
      icon: '🏗️',
      description: 'Cantilever sheet pile wall bending moment prediction using machine learning',
      papers: [
        {
          title: 'Paper 1: Data Synthesis & Feature Engineering',
          status: 'In Preparation',
          statusColor: 'badge-preparation',
          abstract: 'PLAXIS simulations ve soil property databases kullanarak training dataset oluşturma...',
        },
        {
          title: 'Paper 2: ML Model Development & Validation',
          status: 'Planned',
          statusColor: 'badge-planned',
          abstract: 'XGBoost, Random Forest ve Neural Network modellerinin karşılaştırması...',
        },
        {
          title: 'Paper 3: Real-World Applications & Performance',
          status: 'Planned',
          statusColor: 'badge-planned',
          abstract: 'Gerçek alan projeleri ile model performansının validasyonu...',
        },
      ],
    },
    {
      series: 'Marshall Test PINN Research',
      icon: '🧪',
      description: 'Physics-informed neural networks for asphalt binder characterization',
      papers: [
        {
          title: 'Paper 1: PINN Framework & Physics Constraints',
          status: 'In Preparation',
          statusColor: 'badge-preparation',
          abstract: 'Marshall test için physics-informed neural network mimarisi...',
        },
        {
          title: 'Paper 2: Training & Loss Function Optimization',
          status: 'Planned',
          statusColor: 'badge-planned',
          abstract: 'PINN eğitimi, physics loss terms ve convergence analizi...',
        },
        {
          title: 'Paper 3: Experimental Validation & Extrapolation',
          status: 'Planned',
          statusColor: 'badge-planned',
          abstract: 'PINN tahminlerinin gerçek Marshall test sonuçları ile karşılaştırması...',
        },
      ],
    },
  ]

  return (
    <>
      <section className="section pt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">📚 Makaleler</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Yayınlanmış ve yazılmakta olan araştırma makaleleri. Q1/Q2 uluslararası dergilere hedefleniyor.
        </p>
      </section>

      <section className="section space-y-16">
        {paperSeries.map((series, seriesIdx) => (
          <div key={seriesIdx}>
            {/* Series Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{series.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-white">{series.series}</h2>
                  <p className="text-gray-400 mt-2">{series.description}</p>
                </div>
              </div>
            </div>

            {/* Papers Grid */}
            <div className="space-y-4 pl-16">
              {series.papers.map((paper, paperIdx) => (
                <div
                  key={paperIdx}
                  className="paper-card group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${paperIdx * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">{paper.abstract}</p>
                    </div>
                    <span className={`badge ${paper.statusColor} text-sm whitespace-nowrap h-fit`}>
                      {paper.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            {seriesIdx < paperSeries.length - 1 && (
              <div className="border-t border-dark-700 mt-12 pt-12" />
            )}
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="section-dark py-20">
        <div className="container-custom">
          <h2 className="section-title">📅 Yayın Takvimi</h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { date: '2026 Q3', milestone: 'Paper 1: Sheet Pile - In Preparation' },
              { date: '2026 Q4', milestone: 'Paper 1: Marshall PINN - In Preparation' },
              { date: '2027 Q1', milestone: 'Paper 2: Sheet Pile - Planned' },
              { date: '2027 Q2', milestone: 'Paper 2: Marshall PINN - Planned' },
              { date: '2027 Q3+', milestone: 'Paper 3 serilerine başlama' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white">
                    ✓
                  </div>
                </div>
                <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 flex-grow">
                  <div className="font-bold text-primary-400 text-sm">{item.date}</div>
                  <div className="text-gray-300 mt-1">{item.milestone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="section">
        <h2 className="section-title">📊 Durum Açıklaması</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="card">
            <span className="badge badge-published">Published</span>
            <p className="text-gray-400 text-sm mt-3">Yayınlanmış ve peer-review'den geçmiş</p>
          </div>
          <div className="card">
            <span className="badge badge-review">Under Review</span>
            <p className="text-gray-400 text-sm mt-3">Dergi tarafından incelenmekte</p>
          </div>
          <div className="card">
            <span className="badge badge-preparation">In Preparation</span>
            <p className="text-gray-400 text-sm mt-3">Yazılmakta ve son düzeltmeler devam ediyor</p>
          </div>
          <div className="card">
            <span className="badge badge-planned">Planned</span>
            <p className="text-gray-400 text-sm mt-3">Planlı, yakında başlanacak</p>
          </div>
        </div>
      </section>
    </>
  )
}
