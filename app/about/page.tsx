export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
        <div className="container-custom">
          <h1>👤 Hakkında</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">👋 Deniz</h3>
                <p className="text-gray-700 text-sm mb-6">
                  Geotechnical Engineering ve Materials Science araştırmacısı. Makine öğrenmesi, PINN ve numerical modeling konularında çalışmakta.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>📍 Konum:</strong> Lüleburgaz, Kırklareli, TR
                  </p>
                  <p>
                    <strong>💼 Statü:</strong> Bağımsız Araştırmacı
                  </p>
                  <p>
                    <strong>📌 Kuruluş:</strong> Self-Employed
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border rounded-lg p-6">
                <h4 className="font-bold mb-4">📊 Quick Stats</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Aktif Araştırmalar</span>
                    <span className="font-bold text-primary">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Planlanan Makaleler</span>
                    <span className="font-bold text-primary">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Açık Projeler</span>
                    <span className="font-bold text-primary">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lab Data Points</span>
                    <span className="font-bold text-primary">117+</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border rounded-lg p-6 mt-6">
                <h4 className="font-bold mb-4">📧 İletişim</h4>
                <div className="space-y-2 text-sm">
                  <a href="mailto:deniz@example.com" className="block text-primary hover:text-accent">
                    📧 Email
                  </a>
                  <a href="https://github.com/denizhanturkmen" className="block text-primary hover:text-accent">
                    🐙 GitHub
                  </a>
                  <a href="https://linkedin.com" className="block text-primary hover:text-accent">
                    🔗 LinkedIn
                  </a>
                  <a href="https://researchgate.net" className="block text-primary hover:text-accent">
                    📚 ResearchGate
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Bio */}
            <div className="mb-12">
              <h2>Kimim Ben</h2>
              <p className="text-gray-700 mb-4">
                Geotechnical engineering ve materials science alanında bağımsız araştırmacı olarak çalışmaktayım. 
                Müdür araştırmalarımda makine öğrenmesi, physics-informed neural networks (PINNs) ve sayısal modelleme 
                (FEM/PLAXIS) kombinasyonunu kullanıyorum.
              </p>
              <p className="text-gray-700 mb-4">
                Araştırma kariyerim sheet pile walls (palplanş), asphalt materials characterization, CBR prediction 
                ve pile foundation design optimization alanlarında yoğunlaşmaktadır.
              </p>
              <p className="text-gray-700">
                Metodolojimin temel özellikleri yüksek kalite, sağlam validasyon, reproducible code ve transparent 
                communication. Tüm araştırmalarımı Q1/Q2 uluslararası dergilerine sunmayı hedeflemekteyim.
              </p>
            </div>

            {/* Research Interests */}
            <div className="mb-12">
              <h2>🔬 Araştırma İlgi Alanları</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Geotechnical Engineering</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sheet pile wall design & analysis</li>
                    <li>• Pile foundation bearing capacity</li>
                    <li>• Soil-structure interaction</li>
                    <li>• CBR and geotechnical classification</li>
                    <li>• Settlement prediction</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Materials Science</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Asphalt mixture characterization</li>
                    <li>• Marshall stability testing</li>
                    <li>• Bituminous properties prediction</li>
                    <li>• Pavement performance modeling</li>
                    <li>• Material optimization</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Machine Learning</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Neural networks & deep learning</li>
                    <li>• Physics-informed ML (PINNs)</li>
                    <li>• Ensemble methods</li>
                    <li>• Feature engineering</li>
                    <li>• Model interpretability</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Numerical Modeling</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• FEM analysis (PLAXIS)</li>
                    <li>• Parametric studies</li>
                    <li>• Sensitivity analysis</li>
                    <li>• Optimization algorithms</li>
                    <li>• Validation & verification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Technologies */}
            <div className="mb-12">
              <h2>💻 Teknolojiler & Yetenekler</h2>

              <div className="mb-6">
                <h4 className="font-bold mb-3">🐍 Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'MATLAB', 'JavaScript/TypeScript', 'SQL', 'Git'].map((skill) => (
                    <span key={skill} className="badge badge-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">🤖 Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow', 'Neural Networks', 'PINN', 'Ensemble Methods'].map(
                    (skill) => (
                      <span key={skill} className="badge badge-primary">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">🔢 Data & Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  {['pandas', 'numpy', 'scipy', 'matplotlib', 'plotly', 'statistical analysis'].map((skill) => (
                    <span key={skill} className="badge badge-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">📐 Engineering Software</h4>
                <div className="flex flex-wrap gap-2">
                  {['PLAXIS', 'FEM Analysis', 'MATLAB Simulink', 'AutoCAD'].map((skill) => (
                    <span key={skill} className="badge badge-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3">🌐 Web & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Streamlit', 'Flask', 'REST APIs', 'Docker', 'Vercel'].map((skill) => (
                    <span key={skill} className="badge badge-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Approach */}
            <div className="mb-12">
              <h2>🎯 Araştırma Yaklaşımım</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-1">1. Data-Driven</h4>
                  <p className="text-gray-700 text-sm">
                    Laboraturium verileri ve FEM sonuçları temelinde araştırma yapıyorum. Her modelin geçerliliği 
                    bağımsız test setlerine karşı doğrulanır.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold mb-1">2. Physics-Informed</h4>
                  <p className="text-gray-700 text-sm">
                    Machine learning modellerine fizik kısıtlamalarını entegre ediyorum. Bu sayede daha interpretable 
                    ve generalizable modeller elde ediyorum.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold mb-1">3. Reproducible</h4>
                  <p className="text-gray-700 text-sm">
                    Tüm araştırmalarımın kodı GitHub'ta açık olarak yayınlanır. Veriler, parametreler ve sonuçlar 
                    fully documented.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold mb-1">4. Published</h4>
                  <p className="text-gray-700 text-sm">
                    Araştırma sonuçları Q1/Q2 uluslararası dergilerde yayınlanır. Sonuçlar peer-review sürecinden 
                    geçer.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mb-12">
              <h2>🎓 Eğitim</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Geotechnical Engineering</h4>
                  <p className="text-gray-700 text-sm">B.S. Degree - Foundation in soil mechanics, foundation design, earthworks</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Advanced Machine Learning</h4>
                  <p className="text-gray-700 text-sm">Self-directed - Deep learning, PINNs, neural network architectures</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Numerical Modeling</h4>
                  <p className="text-gray-700 text-sm">PLAXIS training, FEM analysis, computational mechanics</p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div>
              <h2>💡 Araştırma Felsefesi</h2>
              <p className="text-gray-700 mb-4">
                Araştırmaların amacı bilgiye katkıda bulunmak ve insan yaşamını iyileştirmektir. Mühendislik problelminin 
                çözümü için makine öğrenmesi bir araç olabilir, fakat fizik ve mühendislik ilkeleri temel kalmalıdır.
              </p>
              <p className="text-gray-700 mb-4">
                Yapılan araştırmaların açık ve erişilebilir olması gerekir. Kodu paylaşmak, sonuçları detaylı 
                document etmek ve başkalarının yolundan ilerlemelerine yardımcı olmak sorumluluktur.
              </p>
              <p className="text-gray-700">
                Uzun vadede, engineering problems'i çözmek için multi-disciplinary approaches gereklidir. Geotechnics, 
                materials, computation, data science ve domain expertise'nin kombinasyonu güçlü araştırma ortaya çıkarır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">İşbirliği ve Sorular</h3>
          <p className="mb-8">
            Araştırma, işbirliği, danışmanlık veya soru ve önerileriniz için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:deniz@example.com" className="btn bg-white text-primary hover:bg-gray-100">
              📧 Email Gönder
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
