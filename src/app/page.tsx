import { Github, Linkedin, Mail, Download, ExternalLink, Brain, Code, Terminal } from 'lucide-react';
import Contact from "@/app/(components)/contact";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#0A0F1C]">
        {/* Header/Intro Section */}
        <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#0A0F1C] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 mix-blend-overlay"></div>
            <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="AI Background"
                className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0F1C]"></div>
          <div className="container mx-auto px-6 z-10 text-center">
            <div className="animate-float mb-8">
              <Brain size={64} className="mx-auto text-cyan-400 opacity-90" />
            </div>
            <h1 className="text-6xl font-bold mb-4 animate-fade-in gradient-text">
              Ariel Pratama Lesmana
            </h1>
            <h2 className="text-3xl mb-6 text-cyan-50">
              Software Engineer | AI/Machine Learning Engineer | Computer Vision Specialist
            </h2>
            <p className="text-xl mb-12 text-cyan-100 max-w-2xl mx-auto">
              Empowering solutions through AI and Deep Learning
            </p>
            <div className="flex justify-center gap-6">
              <a href="#contact"
                 className="group relative px-8 py-4 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 transition-all duration-300">
                <span className="relative z-10 text-cyan-50 font-semibold">Contact Me</span>
              </a>
              <a href="#portfolio"
                 className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                <span className="relative z-10 text-white font-semibold">View Portfolio</span>
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#0A0F1C]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center gradient-text">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 mb-12">
                <p className="text-xl text-cyan-50 leading-relaxed">
                  As a graduate in Informatics with a stellar 3.84 GPA, I&#39;ve focused my expertise on Computer Vision and Deep Learning.
                  Currently working as a Software Engineer at Etherval IT Consultancy, I&#39;ve developed a strong foundation in
                  remote collaboration and innovative problem-solving.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card p-8 rounded-2xl skill-card">
                  <Code className="w-12 h-12 mb-4 text-cyan-400" />
                  <h3 className="text-xl font-bold mb-3 text-white">AI Fitness App</h3>
                  <p className="text-cyan-100">Movement accuracy tracking using CNN technology</p>
                </div>
                <div className="glass-card p-8 rounded-2xl skill-card">
                  <Terminal className="w-12 h-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-3 text-white">E-commerce Analytics</h3>
                  <p className="text-cyan-100">Inventory prediction using ARIMA modeling</p>
                </div>
                <div className="glass-card p-8 rounded-2xl skill-card">
                  <Brain className="w-12 h-12 mb-4 text-indigo-400" />
                  <h3 className="text-xl font-bold mb-3 text-white">Instagram Automation</h3>
                  <p className="text-cyan-100">Automated quote posting bot (daily_quotes_by_kelp)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#0A0F1C]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="glass-card rounded-2xl overflow-hidden project-card">
                <div className="relative">
                  <img
                      src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="AI Fitness App"
                      className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Fitness Trainer</h3>
                  <p className="text-cyan-100 mb-6">
                    Real-time movement tracking and correction using advanced CNN models for accurate fitness guidance.
                  </p>
                  <a href="https://pypi.org/project/kelpie-personal-trainer/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="glass-card rounded-2xl overflow-hidden project-card">
                <div className="relative">
                  <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="E-commerce Analytics"
                      className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Smart Inventory Prediction</h3>
                  <p className="text-cyan-100 mb-6">
                    E-commerce inventory management system using ARIMA modeling for accurate stock predictions.
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-2xl overflow-hidden project-card">
                <div className="relative">
                  <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="ERP System Development"
                      className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">ERP System Development</h3>
                  <p className="text-cyan-100 mb-6">
                    Comprehensive ERP solution with features for automated testing using Cucumber and Spring Boot.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl overflow-hidden project-card">
                <div className="relative">
                  <img
                      src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="AWS Integration Project"
                      className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">AWS Cloud Integration</h3>
                  <p className="text-cyan-100 mb-6">
                    Implemented robust cloud solutions utilizing AWS services including ECS, S3, and Pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </div>
  );
}
