import { Sprout, Microscope, Leaf, Mail, Phone, ArrowRight, Flower2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-green-50 relative">
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mandala-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            <g transform="translate(200,200)">
              <circle cx="0" cy="0" r="80" fill="none" stroke="#65a30d" strokeWidth="1"/>
              <circle cx="0" cy="0" r="60" fill="none" stroke="#84cc16" strokeWidth="1"/>
              <circle cx="0" cy="0" r="40" fill="none" stroke="#65a30d" strokeWidth="1"/>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x1 = Math.cos(angle) * 40;
                const y1 = Math.sin(angle) * 40;
                const x2 = Math.cos(angle) * 80;
                const y2 = Math.sin(angle) * 80;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#84cc16" strokeWidth="1"/>;
              })}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const petalLength = 30;
                const cx = Math.cos(angle) * 70;
                const cy = Math.sin(angle) * 70;
                return (
                  <ellipse
                    key={i}
                    cx={cx}
                    cy={cy}
                    rx="12"
                    ry="25"
                    fill="none"
                    stroke="#65a30d"
                    strokeWidth="1.5"
                    transform={`rotate(${i * 45}, ${cx}, ${cy})`}
                  />
                );
              })}
              <circle cx="0" cy="0" r="15" fill="none" stroke="#84cc16" strokeWidth="2"/>
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * Math.PI / 180;
                const x = Math.cos(angle) * 10;
                const y = Math.sin(angle) * 10;
                return <circle key={i} cx={x} cy={y} r="3" fill="#65a30d"/>;
              })}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mandala-pattern)"/>
      </svg>
      <nav className="fixed w-full bg-gradient-to-r from-lime-600 to-green-700 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg">
                <img src="/edens_gate2.jpeg" alt="Eden's Gate Logo" className="h-16 w-16 object-contain" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Eden's Gate</h1>
                <p className="text-sm text-lime-100 font-medium">Soil Company</p>
              </div>
            </div>
            <a
              href="#contact"
              className="hidden md:flex items-center space-x-2 bg-white text-green-700 px-6 py-3 rounded-lg hover:bg-lime-50 transition-all font-semibold shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
          </div>
          <svg className="absolute top-10 right-10 w-96 h-96 opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(16)].map((_, i) => {
                const angle = (i * 22.5) * Math.PI / 180;
                const x = Math.cos(angle) * 80;
                const y = Math.sin(angle) * 80;
                return (
                  <g key={i}>
                    <ellipse
                      cx={x}
                      cy={y}
                      rx="15"
                      ry="35"
                      fill="none"
                      stroke="#65a30d"
                      strokeWidth="2"
                      transform={`rotate(${i * 22.5}, ${x}, ${y})`}
                    />
                  </g>
                );
              })}
              <circle cx="0" cy="0" r="70" fill="none" stroke="#84cc16" strokeWidth="3"/>
              <circle cx="0" cy="0" r="50" fill="none" stroke="#65a30d" strokeWidth="2"/>
              <circle cx="0" cy="0" r="30" fill="none" stroke="#84cc16" strokeWidth="3"/>
            </g>
          </svg>
          <svg className="absolute bottom-20 left-20 w-80 h-80 opacity-[0.06]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x = Math.cos(angle) * 60;
                const y = Math.sin(angle) * 60;
                return (
                  <circle key={i} cx={x} cy={y} r="8" fill="#65a30d" opacity="0.5"/>
                );
              })}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const x1 = Math.cos(angle) * 30;
                const y1 = Math.sin(angle) * 30;
                const x2 = Math.cos(angle) * 70;
                const y2 = Math.sin(angle) * 70;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#84cc16" strokeWidth="2"/>
                );
              })}
              <circle cx="0" cy="0" r="25" fill="none" stroke="#65a30d" strokeWidth="3"/>
            </g>
          </svg>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    Regenerative Agriculture Systems
                  </span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Building Systems That{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600">Regenerate</span> Land
                </h2>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Expert soil restoration, multi-species cover crop design, and regenerative strategies
                  that are scalable, profitable, and biologically coherent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-lime-500 to-green-600 text-white px-8 py-4 rounded-lg hover:from-lime-600 hover:to-green-700 transition-all hover:scale-105 shadow-lg font-semibold"
                  >
                    <span>Let's Connect</span>
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="#expertise"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-lime-600 text-lime-700 px-8 py-4 rounded-lg hover:bg-lime-50 transition-all font-semibold"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
                <p className="text-gray-700 italic border-l-4 border-lime-500 pl-4 text-lg">
                  "We rise by amplifying coherence."
                </p>
              </div>
              <div className="relative flex items-center justify-center min-h-[500px]">
                <svg className="w-full h-full max-w-2xl" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#84cc16', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#65a30d', stopOpacity: 0.5}} />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#22c55e', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#16a34a', stopOpacity: 0.5}} />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#84cc16', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#22c55e', stopOpacity: 0.5}} />
                    </linearGradient>
                  </defs>

                  <g transform="translate(250, 250)">
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 45) * Math.PI / 180;
                      const x = Math.cos(angle) * 180;
                      const y = Math.sin(angle) * 180;
                      return (
                        <ellipse
                          key={i}
                          cx={x}
                          cy={y}
                          rx="40"
                          ry="100"
                          fill="url(#gradient1)"
                          stroke="#65a30d"
                          strokeWidth="2"
                          transform={`rotate(${i * 45}, ${x}, ${y})`}
                          opacity="0.4"
                        />
                      );
                    })}

                    <circle cx="-140" cy="-140" r="70" fill="url(#gradient1)" stroke="#65a30d" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{animationDuration: '3s'}}/>
                    <g transform="translate(-140, -140)">
                      <foreignObject x="-35" y="-50" width="70" height="100">
                        <div className="flex flex-col items-center justify-center h-full">
                          <Sprout className="text-lime-700 mb-2" size={32} />
                          <p className="text-sm font-bold text-gray-900 text-center">Soil Health</p>
                          <p className="text-xs text-gray-700 text-center">Regeneration</p>
                        </div>
                      </foreignObject>
                    </g>

                    <circle cx="140" cy="-140" r="70" fill="url(#gradient2)" stroke="#16a34a" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}/>
                    <g transform="translate(140, -140)">
                      <foreignObject x="-35" y="-50" width="70" height="100">
                        <div className="flex flex-col items-center justify-center h-full">
                          <Leaf className="text-green-700 mb-2" size={32} />
                          <p className="text-sm font-bold text-gray-900 text-center">Ecological</p>
                          <p className="text-xs text-gray-700 text-center">Design</p>
                        </div>
                      </foreignObject>
                    </g>

                    <circle cx="0" cy="140" r="70" fill="url(#gradient3)" stroke="#65a30d" strokeWidth="3" opacity="0.6" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '2s'}}/>
                    <g transform="translate(0, 140)">
                      <foreignObject x="-35" y="-50" width="70" height="100">
                        <div className="flex flex-col items-center justify-center h-full">
                          <Microscope className="text-lime-700 mb-2" size={32} />
                          <p className="text-sm font-bold text-gray-900 text-center">Biological</p>
                          <p className="text-xs text-gray-700 text-center">Systems</p>
                        </div>
                      </foreignObject>
                    </g>

                    <circle cx="0" cy="0" r="140" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.3"/>
                    <circle cx="0" cy="0" r="100" fill="none" stroke="#65a30d" strokeWidth="2" opacity="0.2"/>
                    <circle cx="0" cy="0" r="60" fill="none" stroke="#84cc16" strokeWidth="3" opacity="0.3"/>

                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30) * Math.PI / 180;
                      const x1 = Math.cos(angle) * 60;
                      const y1 = Math.sin(angle) * 60;
                      const x2 = Math.cos(angle) * 100;
                      const y2 = Math.sin(angle) * 100;
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#84cc16" strokeWidth="1.5" opacity="0.2"/>;
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <svg className="absolute top-0 left-0 w-64 h-64 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const x = Math.cos(angle) * 70;
                const y = Math.sin(angle) * 70;
                return (
                  <ellipse
                    key={i}
                    cx={x}
                    cy={y}
                    rx="18"
                    ry="40"
                    fill="none"
                    stroke="#65a30d"
                    strokeWidth="2.5"
                    transform={`rotate(${i * 45}, ${x}, ${y})`}
                  />
                );
              })}
              <circle cx="0" cy="0" r="60" fill="none" stroke="#84cc16" strokeWidth="3"/>
              <circle cx="0" cy="0" r="20" fill="#65a30d" opacity="0.3"/>
            </g>
          </svg>
          <svg className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(24)].map((_, i) => {
                const angle = (i * 15) * Math.PI / 180;
                const innerR = 40;
                const outerR = 80;
                const x1 = Math.cos(angle) * innerR;
                const y1 = Math.sin(angle) * innerR;
                const x2 = Math.cos(angle) * outerR;
                const y2 = Math.sin(angle) * outerR;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#84cc16" strokeWidth="1.5" opacity="0.6"/>;
              })}
              <circle cx="0" cy="0" r="35" fill="none" stroke="#65a30d" strokeWidth="3"/>
            </g>
          </svg>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Jeremy Schissler</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Regenerative agronomist, systems-builder, and founder of Eden's Gate Soil Company
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I design high-functioning agricultural ecosystems that blend soil biology, ecology,
                  and practical agronomy into strategies farmers can actually use.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My work focuses on rebuilding soil function, strengthening plant health, and creating
                  regenerative systems that are scalable, profitable, and biologically coherent.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm known for seeing patterns others miss — connecting plant physiology, soil health,
                  and management in ways that improve land fast. I thrive at the intersection of research,
                  field testing, and system design.
                </p>
              </div>
              <div className="bg-gradient-to-br from-lime-100 to-green-100 p-8 rounded-2xl border-2 border-lime-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Sprout className="text-lime-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-800">Translating complex science into clear, actionable steps</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Microscope className="text-lime-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-800">Uniting microbial ecology, redox bio-chemistry, and ecological design</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Leaf className="text-lime-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-800">Building frameworks that unlock long-term resilience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-24 bg-gradient-to-b from-lime-50 to-green-100 relative overflow-hidden">
          <svg className="absolute top-1/4 right-10 w-96 h-96 opacity-[0.06]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x = Math.cos(angle) * 75;
                const y = Math.sin(angle) * 75;
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="12" fill="none" stroke="#65a30d" strokeWidth="2"/>
                    <line x1="0" y1="0" x2={x} y2={y} stroke="#84cc16" strokeWidth="1.5" opacity="0.4"/>
                  </g>
                );
              })}
              <circle cx="0" cy="0" r="65" fill="none" stroke="#84cc16" strokeWidth="3"/>
              <circle cx="0" cy="0" r="45" fill="none" stroke="#65a30d" strokeWidth="2"/>
              <circle cx="0" cy="0" r="25" fill="none" stroke="#84cc16" strokeWidth="3"/>
            </g>
          </svg>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
              <p className="text-xl text-gray-700">Comprehensive regenerative solutions for modern agriculture</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Multi-Species Cover Crops",
                  description: "Strategic design of diverse cover crop systems that rebuild soil structure and biological activity"
                },
                {
                  title: "Composting Strategies",
                  description: "Advanced composting systems including the flagship Palingenesis method"
                },
                {
                  title: "Soil Restoration",
                  description: "Comprehensive approaches to rebuilding soil function and microbial communities"
                },
                {
                  title: "System Design",
                  description: "Holistic farm systems that integrate ecology, biology, and profitability"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-lime-200 hover:border-lime-400"
                >
                  <div className="bg-gradient-to-br from-lime-400 to-green-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <Sprout className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white relative overflow-hidden">
          <svg className="absolute top-1/3 left-5 w-80 h-80 opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(16)].map((_, i) => {
                const angle = (i * 22.5) * Math.PI / 180;
                const x = Math.cos(angle) * 65;
                const y = Math.sin(angle) * 65;
                return (
                  <ellipse
                    key={i}
                    cx={x}
                    cy={y}
                    rx="10"
                    ry="30"
                    fill="none"
                    stroke="#65a30d"
                    strokeWidth="2"
                    transform={`rotate(${i * 22.5}, ${x}, ${y})`}
                  />
                );
              })}
              <circle cx="0" cy="0" r="55" fill="none" stroke="#84cc16" strokeWidth="2.5"/>
              <circle cx="0" cy="0" r="30" fill="none" stroke="#65a30d" strokeWidth="2"/>
            </g>
          </svg>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Projects</h2>
              <p className="text-xl text-gray-700">Bridging science and practice for true regeneration</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Palingenesis Compost System",
                  description: "A scientifically-designed composting framework that optimizes microbial ecology and redox chemistry for superior soil health outcomes"
                },
                {
                  name: "Omni Seed Mix",
                  description: "Carefully curated multi-species seed blends designed to maximize ecological function and soil restoration potential"
                },
                {
                  name: "Omni Seed Synergy Coat",
                  description: "Innovative seed coating technology that enhances establishment and promotes beneficial microbial associations"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-lime-50 to-green-50 border-2 border-lime-300 p-8 rounded-xl hover:border-lime-500 transition-all hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-green-800 mb-4">{project.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-br from-lime-500 via-green-600 to-green-700 relative overflow-hidden">
          <svg className="absolute top-10 right-20 w-64 h-64 opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const x = Math.cos(angle) * 70;
                const y = Math.sin(angle) * 70;
                return (
                  <ellipse
                    key={i}
                    cx={x}
                    cy={y}
                    rx="15"
                    ry="38"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    transform={`rotate(${i * 45}, ${x}, ${y})`}
                  />
                );
              })}
              <circle cx="0" cy="0" r="60" fill="none" stroke="white" strokeWidth="3"/>
              <circle cx="0" cy="0" r="25" fill="none" stroke="white" strokeWidth="2.5"/>
            </g>
          </svg>
          <svg className="absolute bottom-10 left-20 w-56 h-56 opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(100,100)">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x = Math.cos(angle) * 60;
                const y = Math.sin(angle) * 60;
                return (
                  <circle key={i} cx={x} cy={y} r="6" fill="white" opacity="0.7"/>
                );
              })}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * Math.PI / 180;
                const x1 = Math.cos(angle) * 30;
                const y1 = Math.sin(angle) * 30;
                const x2 = Math.cos(angle) * 65;
                const y2 = Math.sin(angle) * 65;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2"/>
                );
              })}
              <circle cx="0" cy="0" r="25" fill="none" stroke="white" strokeWidth="2.5"/>
            </g>
          </svg>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something That Lasts</h2>
            <p className="text-xl text-lime-100 mb-12 leading-relaxed">
              If you're working on regenerative agriculture, soil health, or innovative farming systems,
              I'd love to connect.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="mailto:jeremy@edensgatesoil.com"
                className="bg-white text-green-900 p-8 rounded-xl hover:bg-lime-50 transition-all hover:scale-105 shadow-xl"
              >
                <Mail className="mx-auto mb-4 text-lime-600" size={40} />
                <p className="font-semibold text-lg mb-2">Email</p>
                <p className="text-gray-700">jeremy@edensgatesoil.com</p>
              </a>
              <a
                href="tel:+15402971607"
                className="bg-white text-green-900 p-8 rounded-xl hover:bg-lime-50 transition-all hover:scale-105 shadow-xl"
              >
                <Phone className="mx-auto mb-4 text-lime-600" size={40} />
                <p className="font-semibold text-lg mb-2">Phone</p>
                <p className="text-gray-700">(540) 297-1607</p>
              </a>
            </div>
            <div className="text-lime-100">
              <p className="mb-2">Eden's Gate Soil Company</p>
              <p className="mb-2">Houston, Texas</p>
              <a
                href="https://edensgatesoil.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:underline"
              >
                edensgatesoil.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-lime-400 mb-4">
              "We rise by amplifying coherence."
            </p>
            <p className="text-sm">
              © 2025 Eden's Gate Soil Company. Agricultural Service · Consulting Agency · Wholesale & Supply Store
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
