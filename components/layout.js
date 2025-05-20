import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  CircuitBoard,
  Terminal
} from 'lucide-react';
import { siteContent } from '../data/content';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: CircuitBoard },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Experience', href: '/experience', icon: Terminal },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-6'
      }`}>
        <div className="container mx-auto">
          <div className={`nav-container ${scrolled ? 'nav-scrolled' : ''} flex justify-between items-center`}>
            <Link href="/" className="nav-brand">
              {siteContent.personal.name.split(' ')[0]}
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden glass-card-minimal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 glass-card-minimal animate-slide-down">
              <div className="flex flex-col space-y-4 p-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={item.name}
                      href={item.href} 
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="mt-32 pb-8">
        <div className="container mx-auto">
          <div className="glass-card-minimal text-center">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gradient-accent">Professional Network</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href={siteContent.personal.socialLinks.github} className="social-link">
                    <Github size={20} />
                  </a>
                  <a href={siteContent.personal.socialLinks.linkedin} className="social-link">
                    <Linkedin size={20} />
                  </a>
                  <a href={siteContent.personal.socialLinks.twitter} className="social-link">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gradient-primary">
                  {siteContent.personal.name}
                </h4>
                <p className="text-blue-300 font-semibold">
                  {siteContent.personal.title}
                </p>
                <div className="flex justify-center items-center gap-2 text-cyan-400">
                  <CircuitBoard size={16} />
                  <span className="text-sm">Engineering Excellence</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gradient-accent">Get In Touch</h4>
                <a 
                  href={`mailto:${siteContent.personal.email}`} 
                  className="btn-ghost"
                >
                  <Mail size={16} />
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-700/30">
              <p className="text-gray-400 text-sm">
                © 2024 {siteContent.personal.name}. Precision engineering meets innovative software development.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}