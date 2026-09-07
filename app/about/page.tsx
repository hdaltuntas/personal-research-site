export default function About() {
  return (
    <>
      <section className="section pt-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">🎓 Hakkında</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Geotechnical engineering ve materials science alanında araştırmacı ve developer.
        </p>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h2>👋 Kimim Ben</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Geotechnical engineering ve materials science alanında bağımsız araştırmacı olarak çalışıyorum. 
              Araştırmalarımda makine öğrenmesi (ML), physics-informed neural networks (PINN) ve sayısal 
              modelleme (FEM) kombinasyonunu kullanarak pratik problemleri çözmek amaçlanıyor.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Temel ilgim alanları:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-primary-400">→</span>
                Sheet pile walls ve cantilever systems
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary-400">→</span>
                Asphalt materials ve Marshall test
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-400">→</span>
                Machine learning uygulamaları geotechnical'de
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary-400">→</span>
                Physics-informed neural networks
              </li>
            </ul>

            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-white mb-4">🎯 Araştırma Felsefesi</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tüm araştırmalarım yüksek kaliteli metodoloji, sağlam validasyon ve reproducible code 
                prensiplerine dayanır. Sadece teorik değil, pratik problemleri çözmek amaçlıyorum. 
                Her makale:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>✓ Detaylı dataset açıklaması</li>
                <li>✓ Reproducible Python/MATLAB code</li>
                <li>✓ FEM veya field data ile validasyon</li>
                <li>✓ Open-source tools kullanımı</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="card sticky top-24 text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-2">Hasan Deniz Altuntaş</h3>
              <p className="text-gray-400 text-sm mb-6">
                Geotechnical & Materials Research
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-dark-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-400">6</div>
                  <div className="text-xs text-gray-400">Research Area</div>
                </div>
                <div className="bg-dark-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-secondary-400">6</div>
                  <div className="text-xs text-gray-400">Planned Papers</div>
                </div>
                <div className="bg-dark-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-400">10+</div>
                  <div className="text-xs text-gray-400">Activity</div>
                </div>
              </div>

              <div className="space-y-2">
                <a href="mailto:deniz@example.com" className="btn btn-primary w-full text-sm">
                  📧 Email
                </a>
                <a href="https://github.com" className="btn btn-secondary w-full text-sm" target="_blank">
                  🐙 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-dark py-20">
        <div className="container-custom">
          <h2 className="section-title">💻 Yetenekler</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: 'Programlama Dilleri',
                skills: ['Python (Advanced)', 'MATLAB (Advanced)', 'TypeScript', 'SQL', 'Shell/Bash'],
              },
              {
                category: 'Machine Learning',
                skills: ['scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow', 'Neural Networks'],
              },
              {
                category: 'Sayısal Modelleme',
                skills: ['PLAXIS', 'FEM', 'OpenSees', 'Numerical Analysis', 'Optimization'],
              },
              {
                category: 'Web & Development',
                skills: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Streamlit'],
              },
            ].map((skillGroup, idx) => (
              <div key={idx} className="card">
                <h3 className="font-bold text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <h2 className="section-title">📅 Yolculuk</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              year: '2026',
              title: 'Independent Research',
              description: 'Geotechnical & Materials Science araştırmalarına tam odak. 6 makale serisi başlatıldı.',
            },
            {
              year: '2025',
              title: 'Research Direction Change',
              description: 'PINN ve ML kombinasyonuna yönelim. PLAXIS + Python workflow geliştirildi.',
            },
            {
              year: '2024',
              title: 'Foundation Building',
              description: 'Python, ML, numerical modeling tekniklerini derinleştirme.',
            },
            {
              year: '2020+',
              title: 'Geotechnical Journey Begins',
              description: 'Geotechnical engineering alanında eğitim ve temel araştırmaların başlangıcı.',
            },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-8 border-l border-primary-600">
              <div className="absolute -left-3 top-1 w-4 h-4 bg-primary-600 rounded-full" />
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <div className="text-sm font-bold text-primary-400 mb-2">{item.year}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center card-glow border-0">
          <h2 className="text-4xl font-bold text-white mb-4">İşbirliği & İletişim</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Araştırma, işbirliği, soru veya feedback için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:deniz@example.com" className="btn bg-white text-primary-600 hover:bg-gray-100">
              📧 Email Gönder
            </a>
            <a href="https://github.com" className="btn bg-white bg-opacity-20 text-white hover:bg-opacity-30" target="_blank">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com" className="btn bg-white bg-opacity-20 text-white hover:bg-opacity-30" target="_blank">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
