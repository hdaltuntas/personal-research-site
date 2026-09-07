export default function Projects() {
  const projects = [
    {
      icon: '🏗️',
      title: 'Sheet Pile ML Suite',
      description: 'Cantilever sheet pile wall bending moment prediction using machine learning algorithms',
      techs: ['Python', 'scikit-learn', 'XGBoost', 'PLAXIS'],
      status: 'Active Research',
      features: ['Feature engineering', 'Model comparison', 'FEM validation'],
    },
    {
      icon: '🧪',
      title: 'Marshall Test PINN',
      description: 'Physics-informed neural networks for asphalt binder characterization and prediction',
      techs: ['PyTorch', 'Python', 'Neural Networks', 'Physics'],
      status: 'Active Research',
      features: ['Physics constraints', 'Loss optimization', 'Experimental validation'],
    },
    {
      icon: '📊',
      title: 'CBR Prediction ML',
      description: 'Machine learning models for California Bearing Ratio prediction from soil properties',
      techs: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
      status: 'Active',
      features: ['Data preprocessing', 'Multi-model comparison', '117 lab samples'],
    },
    {
      icon: '🎯',
      title: 'Pile Embedding Optimizer',
      description: 'ML-based optimization for pile foundation embedding depth prediction',
      techs: ['Python', 'TensorFlow', 'Optimization', 'FEM'],
      status: 'In Development',
      features: ['Parameter optimization', 'Cost analysis', 'Soil classification'],
    },
    {
      icon: '🎬',
      title: 'Film Collection Manager',
      description: 'Personal desktop application for managing and organizing film collection',
      techs: ['Python', 'SQLite', 'tkinter', 'GUI'],
      status: 'Completed',
      features: ['Database management', 'Search & filter', 'Statistics'],
    },
    {
      icon: '📈',
      title: 'Stock Analysis Dashboard',
      description: 'Streamlit dashboard for PGSUS stock analysis with technical indicators',
      techs: ['Streamlit', 'Python', 'pandas', 'plotly'],
      status: 'Active',
      features: ['Real-time data', 'Technical indicators', 'Trend analysis'],
    },
  ]

  return (
    <>
      <section className="section pt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">🚀 Projeler</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Araştırma, geliştirme ve uygulamada çalıştığım projeler. Her biri farklı teknoloji ve methodology'leri içeriyor.
        </p>
      </section>

      <section className="section">
        <div className="grid-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group hover:border-secondary-500 animate-slide-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{project.icon}</span>
                <span className={`badge text-xs whitespace-nowrap ${
                  project.status === 'Active Research' ? 'badge-preparation' :
                  project.status === 'Active' ? 'badge-preparation' :
                  project.status === 'In Development' ? 'badge-review' :
                  'badge-published'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.map((feature) => (
                  <span key={feature} className="text-xs px-2 py-1 bg-dark-700 text-gray-300 rounded">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="border-t border-dark-700 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="badge badge-secondary text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="section-dark py-20">
        <div className="container-custom">
          <h2 className="section-title">💻 Teknoloji Kategorileri</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Programming',
                icon: '🐍',
                items: ['Python', 'MATLAB', 'TypeScript', 'SQL'],
              },
              {
                title: 'ML & AI',
                icon: '🧠',
                items: ['scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow'],
              },
              {
                title: 'Numerical & FEM',
                icon: '📐',
                items: ['PLAXIS', 'MATLAB FEM', 'OpenSees', 'sfepy'],
              },
              {
                title: 'Web & Cloud',
                icon: '☁️',
                items: ['Next.js', 'React', 'Vercel', 'Streamlit'],
              },
            ].map((category, idx) => (
              <div key={idx} className="card group hover:border-primary-500 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="section">
        <h2 className="section-title">🔬 Araştırma Metodolojisi</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              step: '1',
              title: 'Problem Definition',
              description: 'Açık araştırma sorusu ve hipotez tanımlaması',
            },
            {
              step: '2',
              title: 'Data Collection & Synthesis',
              description: 'PLAXIS, MATLAB simülasyonları ve laboratuvar verisi toplama',
            },
            {
              step: '3',
              title: 'Feature Engineering',
              description: 'Geotechnical domain bilgisini ML feature setine dönüştürme',
            },
            {
              step: '4',
              title: 'Model Development',
              description: 'ML/PINN modellerini eğitme ve hiperparameter tuning',
            },
            {
              step: '5',
              title: 'Validation & Testing',
              description: 'FEM simülasyonları ve gerçek verilerle validasyon',
            },
            {
              step: '6',
              title: 'Publication',
              description: 'Peer-review dergilerine gönderme',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
