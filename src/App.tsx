import { Sprout, Microscope, Leaf, Mail, Phone, ArrowRight, Flower2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-green-50">
      <nav className="fixed w-full bg-gradient-to-r from-lime-600 to-green-700 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Flower2 className="text-white" size={32} />
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

      <main className="pt-20">
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    Regenerative Agriculture Systems
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building Systems That{' '}
                  <span className="text-lime-600">Regenerate</span> Land
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
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-lime-200">
                  <img
                    src="/eden's_gate.jpeg"
                    alt="Compost System Guide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-lime-50 p-6 rounded-xl shadow-xl max-w-xs border-2 border-lime-200">
                  <p className="text-sm text-gray-600 mb-1">Expert-Designed</p>
                  <p className="font-bold text-green-800 text-lg">Palingenesis Compost System</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <section id="expertise" className="py-24 bg-gradient-to-b from-lime-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <section id="contact" className="py-24 bg-gradient-to-br from-lime-500 via-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
