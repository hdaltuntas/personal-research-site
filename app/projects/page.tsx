import Card from '@/components/Card'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'Sheet Pile ML Suite',
      emoji: '🏗️',
      description: 'PLAXIS analizi, veri ekstraktı ve ML pipeline\'ı',
      longDescription:
        'PLAXIS çıktılarını otomatize etmek, FEM verilerini işlemek ve makine öğrenmesi modelleri eğitmek için tam bir Python pipeline.',
      features: [
        'Feature engineering (soil properties, design variables)',
        'Model comparison (XGBoost, RandomForest, Neural Networks)',
        'FEM validation against PLAXIS',
        'Hyperparameter optimization',
        'Cross-validation and error analysis',
      ],
      tech: ['Python', 'PLAXIS', 'scikit-learn', 'XGBoost', 'pandas', 'matplotlib'],
      github: 'https://github.com/denizhanturkmen/sheet-pile-ml',
      status: 'Active',
      papers: 3,
    },
    {
      id: 2,
      name: 'Marshall Test PINN',
      emoji: '🧪',
      description: 'Bitümlü karışım karakterizasyonu için Physics-Informed Neural Networks',
      longDescription:
        'Laboratuvar verilerinden öğrenen ve fizik kısıtlamalarını kullanan sinir ağları. Marshall test parametrelerini tahmin eder.',
      features: [
        'PINN architecture with physics constraints',
        'Multi-output prediction (stability, flow, VMA, bulk density)',
        'Lab data validation',
        'Uncertainty quantification',
        'Interpretable model outputs',
      ],
      tech: ['PyTorch', 'Physics-informed learning', 'Optimization', 'TensorFlow'],
      github: 'https://github.com/denizhanturkmen/marshall-pinn',
      status: 'Active',
      papers: 3,
    },
    {
      id: 3,
      name: 'CBR ML Predictor',
      emoji: '📊',
      description: 'Toprak özelliklerinden CBR (California Bearing Ratio) tahmini',
      longDescription:
        '117 PMAT lab raporu verisinden eğitilmiş ensemble ML modeli. Toprak özelliklerinden CBR değerini tahmin eder.',
      features: [
        'PMAT lab data extraction from 117 reports',
        'Multi-model ensemble (RF, XGBoost, SVM)',
        'Feature importance analysis',
        'Model interpretability with SHAP',
        'Cross-validation results',
      ],
      tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SHAP'],
      github: 'https://github.com/denizhanturkmen/cbr-ml',
      status: 'Active',
      papers: 2,
    },
    {
      id: 4,
      name: 'Pile Embedding Depth Optimizer',
      emoji: '🎯',
      description: 'Kazık temel derinliği tahmini için ML modeli',
      longDescription:
        'Toprak özellikleri ve tasarım kısıtlamalarından optimal kazık derinliğini tahmin eder.',
      features: [
        'Regression models for depth prediction',
        'Cost optimization algorithms',
        'Constraint handling (bearing capacity, settlement)',
        'Sensitivity analysis',
      ],
      tech: ['Python', 'scikit-learn', 'scipy'],
      github: 'https://github.com/denizhanturkmen/pile-depth-optimizer',
      status: 'Active',
      papers: 1,
    },
    {
      id: 5,
      name: 'Film Collection Manager',
      emoji: '🎬',
      description: 'Kişisel film koleksiyonu yönetimi desktop uygulaması',
      longDescription:
        'PyQt5 tabanlı masaüstü uygulaması. Film koleksiyonunu organize etmek, rating yapmak ve izleme listesi oluşturmak için.',
      features: [
        'SQLite database management',
        'PyQt5 GUI',
        'Rating, genre, watchlist features',
        'Search and filter functionality',
        'Export to CSV',
      ],
      tech: ['Python', 'PyQt5', 'SQLite'],
      github: 'https://github.com/denizhanturkmen/film-collection',
      status: 'Completed',
      papers: 0,
    },
    {
      id: 6,
      name: 'Stock Indicator Dashboard',
      emoji: '📈',
      description: 'PGSUS hisse senedi teknik analiz dashboard\'ı',
      longDescription:
        'Streamlit ile yapılmış interaktif dashboard. Trend göstergeleri, Excel upload ve analiz özellikleri.',
      features: [
        'Technical indicators (SMA, RSI, MACD, Bollinger Bands)',
        'Excel file upload',
        'Historical data analysis',
        'Trading signals',
        'Export capabilities',
      ],
      tech: ['Streamlit', 'pandas', 'plotly', 'Python'],
      github: 'https://github.com/denizhanturkmen/stock-dashboard',
      status: 'Active',
      papers: 0,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Completed':
        return 'bg-blue-100 text-blue-800'
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
        <div className="container-custom">
          <h1>🎯 Projeler & Portfolio</h1>
          <p className="text-gray-600 mt-4">
            Geotechnical research, materials science, ve software development projeleri
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{project.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusBadge(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{project.longDescription}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">🎯 Özellikler</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-gray-500 italic">+{project.features.length - 3} daha...</li>
                  )}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">💻 Teknolojiler</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="badge text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {project.papers > 0 && `📄 ${project.papers} makale`}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
                  🐙 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Categories */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <h2>📂 Proje Kategorileri</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="card">
              <h3 className="text-lg font-bold mb-2">🏗️ Araştırma (3)</h3>
              <p className="text-gray-600 text-sm">
                Sheet pile walls, Marshall test PINN, CBR prediction - geotechnical research projeleri
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold mb-2">🛠️ Tools (2)</h3>
              <p className="text-gray-600 text-sm">
                Pile embedding optimizer, film collection manager - utility uygulamaları
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold mb-2">📊 Dashboards (1)</h3>
              <p className="text-gray-600 text-sm">
                Stock indicator dashboard - veri görselleştirme ve analiz arayüzleri
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container-custom py-12">
        <h2>💡 Kullanılan Teknolojiler</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-bold mb-4">🐍 Python Ecosystem</h4>
            <div className="space-y-2">
              <p>
                <strong>ML & Data:</strong> scikit-learn, XGBoost, PyTorch, TensorFlow, pandas, numpy
              </p>
              <p>
                <strong>Numerical:</strong> MATLAB, PLAXIS, scipy
              </p>
              <p>
                <strong>Visualization:</strong> matplotlib, plotly, seaborn
              </p>
              <p>
                <strong>Web:</strong> Next.js, React, Streamlit, Flask
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">🚀 Deployment & DevOps</h4>
            <div className="space-y-2">
              <p>
                <strong>Platforms:</strong> Vercel, Streamlit Cloud, Railway
              </p>
              <p>
                <strong>Version Control:</strong> Git, GitHub
              </p>
              <p>
                <strong>Databases:</strong> SQLite, PostgreSQL
              </p>
              <p>
                <strong>Others:</strong> Docker, CI/CD, REST APIs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">GitHub'ta Tüm Projeleri Gör</h3>
          <p className="mb-8">
            Kod, documentation ve associated data depositorium\'ları
          </p>
          <a href="https://github.com/denizhanturkmen" className="btn bg-white text-primary hover:bg-gray-100">
            🐙 GitHub Profile
          </a>
        </div>
      </section>
    </>
  )
}
