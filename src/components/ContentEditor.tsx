import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Edit2, Save, Plus, Trash2, X } from 'lucide-react';

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

export default function ContentEditor() {
  const [activeTab, setActiveTab] = useState<'about' | 'services' | 'projects'>('about');
  const [aboutUs, setAboutUs] = useState<AboutUsContent[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const [aboutUsRes, servicesRes, projectsRes] = await Promise.all([
        supabase.from('about_us').select('*').order('order_index'),
        supabase.from('services').select('*').order('order_index'),
        supabase.from('projects').select('*').order('order_index'),
      ]);

      setAboutUs(aboutUsRes.data || []);
      setServices(servicesRes.data || []);
      setProjects(projectsRes.data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateAboutUs = async (id: string, updates: Partial<AboutUsContent>) => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('about_us')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      await fetchContent();
      setEditingId(null);
    } catch (error) {
      console.error('Error updating content:', error);
    } finally {
      setSaving(false);
    }
  };

  const updateService = async (id: string, updates: Partial<Service>) => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('services')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      await fetchContent();
      setEditingId(null);
    } catch (error) {
      console.error('Error updating service:', error);
    } finally {
      setSaving(false);
    }
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('projects')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      await fetchContent();
      setEditingId(null);
    } catch (error) {
      console.error('Error updating project:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-lime-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'about'
                ? 'border-lime-500 text-lime-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'services'
                ? 'border-lime-500 text-lime-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-lime-500 text-lime-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Projects
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'about' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Us Content</h3>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Biography Paragraphs</h4>
              {aboutUs.filter(item => item.section === 'bio').map((item) => (
                <div key={item.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                  {editingId === item.id ? (
                    <div>
                      <textarea
                        value={item.content}
                        onChange={(e) => {
                          const updated = aboutUs.map(a =>
                            a.id === item.id ? { ...a, content: e.target.value } : a
                          );
                          setAboutUs(updated);
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg mb-3 min-h-[100px]"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updateAboutUs(item.id, { content: item.content })}
                          disabled={saving}
                          className="flex items-center space-x-1 px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 disabled:opacity-50"
                        >
                          <Save size={16} />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={() => {
                            fetchContent();
                            setEditingId(null);
                          }}
                          className="flex items-center space-x-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                        >
                          <X size={16} />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-700 mb-3">{item.content}</p>
                      <button
                        onClick={() => setEditingId(item.id)}
                        className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                      >
                        <Edit2 size={14} />
                        <span>Edit</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Core Philosophy</h4>
              {aboutUs.filter(item => item.section === 'philosophy').map((item) => (
                <div key={item.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                  {editingId === item.id ? (
                    <div>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = aboutUs.map(a =>
                            a.id === item.id ? { ...a, title: e.target.value } : a
                          );
                          setAboutUs(updated);
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg mb-3 font-semibold"
                        placeholder="Title"
                      />
                      <textarea
                        value={item.content}
                        onChange={(e) => {
                          const updated = aboutUs.map(a =>
                            a.id === item.id ? { ...a, content: e.target.value } : a
                          );
                          setAboutUs(updated);
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg mb-3 min-h-[80px]"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updateAboutUs(item.id, { title: item.title, content: item.content })}
                          disabled={saving}
                          className="flex items-center space-x-1 px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 disabled:opacity-50"
                        >
                          <Save size={16} />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={() => {
                            fetchContent();
                            setEditingId(null);
                          }}
                          className="flex items-center space-x-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                        >
                          <X size={16} />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
                      <p className="text-gray-700 mb-3">{item.content}</p>
                      <button
                        onClick={() => setEditingId(item.id)}
                        className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                      >
                        <Edit2 size={14} />
                        <span>Edit</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Services</h3>
            {services.map((service) => (
              <div key={service.id} className="p-4 border border-gray-200 rounded-lg">
                {editingId === service.id ? (
                  <div>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                        const updated = services.map(s =>
                          s.id === service.id ? { ...s, title: e.target.value } : s
                        );
                        setServices(updated);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-3 font-semibold"
                      placeholder="Service Title"
                    />
                    <input
                      type="text"
                      value={service.category}
                      onChange={(e) => {
                        const updated = services.map(s =>
                          s.id === service.id ? { ...s, category: e.target.value } : s
                        );
                        setServices(updated);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                      placeholder="Category"
                    />
                    <textarea
                      value={service.description}
                      onChange={(e) => {
                        const updated = services.map(s =>
                          s.id === service.id ? { ...s, description: e.target.value } : s
                        );
                        setServices(updated);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-3 min-h-[100px]"
                      placeholder="Description"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateService(service.id, {
                          title: service.title,
                          category: service.category,
                          description: service.description
                        })}
                        disabled={saving}
                        className="flex items-center space-x-1 px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 disabled:opacity-50"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => {
                          fetchContent();
                          setEditingId(null);
                        }}
                        className="flex items-center space-x-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      >
                        <X size={16} />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-2">
                      <span className="inline-block bg-lime-500 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                        {service.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-700 mb-3">{service.description}</p>
                    <button
                      onClick={() => setEditingId(service.id)}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      <Edit2 size={14} />
                      <span>Edit</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flagship Projects</h3>
            {projects.map((project) => (
              <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
                {editingId === project.id ? (
                  <div>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => {
                        const updated = projects.map(p =>
                          p.id === project.id ? { ...p, name: e.target.value } : p
                        );
                        setProjects(updated);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-3 font-semibold"
                      placeholder="Project Name"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const updated = projects.map(p =>
                          p.id === project.id ? { ...p, description: e.target.value } : p
                        );
                        setProjects(updated);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-3 min-h-[120px]"
                      placeholder="Description"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateProject(project.id, {
                          name: project.name,
                          description: project.description
                        })}
                        disabled={saving}
                        className="flex items-center space-x-1 px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 disabled:opacity-50"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => {
                          fetchContent();
                          setEditingId(null);
                        }}
                        className="flex items-center space-x-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                      >
                        <X size={16} />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h4>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <button
                      onClick={() => setEditingId(project.id)}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      <Edit2 size={14} />
                      <span>Edit</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
