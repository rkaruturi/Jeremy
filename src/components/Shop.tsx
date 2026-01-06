import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingCart, Plus, Check, User, Briefcase, Rocket, Package } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface AboutUsContent {
  id: string;
  section: string;
  title: string;
  content: string;
  order_index: number;
}

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  order_index: number;
}

interface Project {
  id: string;
  name: string;
  description: string;
  order_index: number;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [aboutUs, setAboutUs] = useState<AboutUsContent[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchAllContent();
  }, []);

  const fetchAllContent = async () => {
    try {
      const [productsRes, aboutUsRes, servicesRes, projectsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/products`, {
          headers: { 'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}` },
        }),
        supabase.from('about_us').select('*').order('order_index'),
        supabase.from('services').select('*').order('order_index'),
        supabase.from('projects').select('*').order('order_index'),
      ]);

      const productsData = await productsRes.json();
      setProducts(productsData || []);
      setAboutUs(aboutUsRes.data || []);
      setServices(servicesRes.data || []);
      setProjects(projectsRes.data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bioParagraphs = aboutUs.filter(item => item.section === 'bio');
  const philosophyPoints = aboutUs.filter(item => item.section === 'philosophy');

  if (loading) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-lime-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              <User size={18} />
              <span>About Us</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center space-x-2 text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              <Briefcase size={18} />
              <span>Services</span>
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="flex items-center space-x-2 text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              <Rocket size={18} />
              <span>Blog</span>
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="flex items-center space-x-2 text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              <Package size={18} />
              <span>Products</span>
            </button>
          </div>
        </div>
      </nav>

      <section id="about" className="py-24 bg-gradient-to-br from-lime-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Jeremy Schissler</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {bioParagraphs.map((para) => (
              <p key={para.id}>{para.content}</p>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Philosophy</h3>
            <div className="space-y-6">
              {philosophyPoints.map((point) => (
                <div key={point.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-lime-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-700">{point.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-700">Comprehensive design solutions tailored to your vision</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-lime-50 to-green-50 p-8 rounded-2xl shadow-lg border-2 border-lime-200 hover:border-lime-400 hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <span className="inline-block bg-lime-500 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Projects</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-700">Showcasing our most impactful work</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-lime-200 hover:shadow-xl transition-all`}
              >
                <div className="md:w-1/3 bg-gradient-to-br from-lime-200 to-green-300 flex items-center justify-center p-12">
                  <Rocket className="h-24 w-24 text-lime-600" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-700">Premium regenerative agriculture products and services</p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">No products available yet</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg overflow-hidden border-2 border-lime-200 hover:border-lime-400 hover:shadow-xl transition-all group"
                >
                  {product.image_url ? (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.stock <= 0 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-64 bg-gradient-to-br from-lime-200 to-green-200 flex items-center justify-center">
                      <ShoppingCart className="h-24 w-24 text-lime-600 opacity-50" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-lime-500 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-lime-600">${product.price}</span>
                      {product.stock > 0 && (
                        <span className="text-sm text-gray-600">
                          {product.stock} in stock
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={product.stock <= 0 || addedToCart === product.id}
                      className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        addedToCart === product.id
                          ? 'bg-green-500 text-white'
                          : product.stock <= 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 hover:scale-105 shadow-lg'
                      }`}
                    >
                      {addedToCart === product.id ? (
                        <>
                          <Check size={20} />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <Plus size={20} />
                          <span>{product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
