import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  User,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Download,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Database,
  Server,
  Briefcase,
  Star,
  ExternalLink,
  Send,
  ChevronRight,
  Target,
  Zap,
  Users,
  TrendingUp,
  Layers,
  Terminal,
  Menu,
  X
} from 'lucide-react';

const siteContent = {
  personal: {
    name: "Ayako Victor Benson",
    title: "Full Stack Web3 Developer & System Architect",
    email: "benvicky6133@gmail.com",
    phone: "Kenya 2020-00200",
    location: "Nairobi, Kenya",
    profileImage: "/profile.jpeg",
    bio: "Multidisciplinary technologist and entrepreneur with commanding expertise spanning full-stack Web3 development, quantitative trading systems, and electrical engineering. As Founder and CTO of MoneyTreesIncorporated, I architect and execute revolutionary blockchain solutions that directly address emerging market financial infrastructure challenges. My technical leadership encompasses building Solana-based cryptocurrency exchanges with seamless M-Pesa integration, engineering 5+ proprietary algorithmic trading bots that leverage advanced technical indicators including Supertrend and Pivot Point systems, and delivering enterprise-grade applications that serve real-world clients across multiple industries. I bridge the gap between traditional electrical engineering foundations and cutting-edge Web3 innovations, having successfully transitioned from hands-on electrical installations and solar system deployments to pioneering decentralized financial technologies. My development portfolio demonstrates consistent delivery of production-ready systems: from comprehensive church finance management platforms to YouTube-scale video sharing applications, each solution engineered with scalable architecture, robust security protocols, and intuitive user experiences. I transform complex technical challenges into streamlined, profitable systems that generate measurable business impact. My leadership extends beyond code - I mentor development teams, establish engineering best practices, and drive cross-functional collaboration that accelerates project delivery. Every system I build combines deep technical expertise with strategic business understanding, ensuring solutions that scale efficiently and adapt to rapidly evolving market demands. I deliver results that matter.",
    socialLinks: {
      github: "https://github.com/gitboycrypto",
      linkedin: "https://linkedin.com/in/ayakovictorbenson",
      twitter: "https://twitter.com/gitboycrypto"
    }
  },
  skills: [
    "Solana", "Rust", "React", "Node.js", "TypeScript", "JavaScript", 
    "Python", "C++", "MongoDB", "PostgreSQL", "Firebase", "Docker", 
    "Git", "Arduino", "IoT Systems", "Web3", "Blockchain", "Smart Contracts"
  ],
  projects: [
    {
      id: 1,
      title: "MoneyTreesIncorporated",
      description: "Solana-based cryptocurrency exchange designed specifically for the Kenyan market, featuring M-Pesa integration and KYC-free onboarding. Built comprehensive trading infrastructure with automated monitoring tools.",
      status: "ongoing",
      technologies: ["Solana", "Rust", "React", "Node.js", "M-Pesa API"],
      github: "https://github.com/ayakovictorbenson/moneytrees",
      demo: "https://www.moneytreesincorporated.com/",
      needsCollaboration: false
    },
    {
      id: 2,
      title: "Quantitative Trading Bot Suite", 
      description: "5+ proprietary algorithmic trading bots deployed on Bitget utilizing Supertrend, Pivot Point Supertrend, and Chandelier Exit indicators. Features real-time risk management and live signal processing.",
      status: "complete",
      technologies: ["Python", "JavaScript", "Bitget API", "Technical Indicators"],
      github: "https://github.com/gitboycrypto",
      needsCollaboration: false
    },
    {
      id: 3,
      title: "Church Finance Management System",
      description: "Secure and intuitive platform for managing donations, budgeting, and expense tracking. Built for local church with comprehensive financial oversight and reporting capabilities.",
      status: "complete", 
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/gitboycrypto",
      needsCollaboration: false
    },
    {
      id: 4,
      title: "YouTube-like Video Platform",
      description: "Fully responsive video-sharing platform with user uploads, real-time comments, streaming analytics, and content management. Delivered complete social media experience.",
      status: "complete",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Video Processing"],
      github: "https://github.com/gitboycrypto",
      needsCollaboration: false
    },
    {
      id: 5,
      title: "Rent Management System",
      description: "Comprehensive rental property management platform featuring tenant portals, payment tracking, lease management tools, and real estate investor dashboard integration.",
      status: "complete",
      technologies: ["React", "Node.js", "PostgreSQL", "Payment Gateway"],
      github: "https://github.com/gitboycrypto",
      needsCollaboration: false
    },
    {
      id: 6,
      title: "Twitter Automation Bot",
      description: "Advanced social media automation system for promotional campaigns, follower interactions, and analytics scraping. Streamlines targeted marketing operations.",
      status: "complete",
      technologies: ["Python", "Twitter API", "Data Analytics", "Automation"],
      github: "https://github.com/gitboycrypto",
      needsCollaboration: false
    }
  ]
};

const experience = [
  {
    title: "Founder & CTO / CEO",
    company: "MoneyTreesIncorporated",
    period: "August 2023 - Present",
    location: "Nairobi, Kenya",
    achievements: [
      "Founded and lead Solana-based crypto exchange for Kenyan market with M-Pesa integration",
      "Designed and implemented multiple automated cryptocurrency trading bots and monitoring tools",
      "Developed Twitter promotion bot for targeted social media marketing automation",
      "Built and deployed 5+ proprietary quant trading bots with advanced technical indicators"
    ],
    technologies: ["Solana", "Rust", "React", "Node.js", "M-Pesa API", "Python"]
  },
  {
    title: "Web3 Developer (Contract)",
    company: "Chinese Blockchain Firm",
    period: "January 2025 - February 2025",
    location: "Remote",
    achievements: [
      "Contributed to Web3 blockchain tooling suite for decentralized identity management",
      "Worked with cross-border team delivering secure smart contract interaction modules",
      "Implemented optimized blockchain infrastructure using TypeScript and Rust",
      "Delivered production-ready decentralized application components"
    ],
    technologies: ["TypeScript", "Rust", "Web3", "Smart Contracts", "Blockchain"]
  },
  {
    title: "Freelance Software Engineer / Tech Partner",
    company: "Various Clients",
    period: "2023 - 2025",
    location: "Kenya & Remote",
    achievements: [
      "Built YouTube-like web app with video uploads, real-time comments, and analytics",
      "Delivered Church Finance Management System for donation and expense tracking",
      "Created Rent Management platform with tenant portals and payment integration",
      "Architected scalable SaaS solutions used by local businesses and institutions"
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "WebSockets"]
  },
  {
    title: "Junior Developer",
    company: "Lintech Studio",
    period: "2018 - 2023",
    location: "Nairobi, Kenya",
    achievements: [
      "Led frontend development for Railways Training Institute educational app",
      "Built Tassia Central SDA Church app with event management and user systems",
      "Developed Newlife SDA Church app with real-time updates and admin dashboards",
      "Delivered robust, maintainable codebases across multiple client projects"
    ],
    technologies: ["Android", "Java", "Firebase", "UI/UX Design", "Mobile Development"]
  }
];

const education = [
  {
    degree: "Certificate in Electrical Engineering",
    institution: "Technical Institute", 
    period: "January 2021 - December 2022",
    gpa: "Merit",
    focus: "Circuit Design, Power Distribution & Control Systems"
  }
];

const certifications = [
  {
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    year: "2024",
    id: "CEH-2024-001"
  },
  {
    name: "Electrical Engineering Certificate",
    issuer: "Technical Institute",
    year: "2022",
    id: "EE-CERT-2022"
  },
  {
    name: "Full Stack Web Development",
    issuer: "Self-Taught & Practical Experience",
    year: "2023",
    id: "FSWD-2023"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'education', label: 'Education', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur opacity-60"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-0.5">
                {siteContent.personal.profileImage ? (
                  <Image 
                    src={siteContent.personal.profileImage}
                    alt={siteContent.personal.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                    <User size={20} className="text-cyan-400" />
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-lg font-bold text-gradient-primary">
              {siteContent.personal.name.split(' ')[0]}
            </h1>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="glass-card-minimal p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-white/10"
          >
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link w-full justify-start ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-white/10">
                <div className="flex flex-col gap-2">
                  <button className="btn-primary w-full text-sm">
                    <Download size={16} />
                    Download Resume
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-secondary w-full text-sm"
                  >
                    <Send size={16} />
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Desktop Sidebar - Hidden on Mobile */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block lg:w-96 lg:fixed lg:h-screen glass-card-minimal lg:m-6 lg:overflow-y-auto"
        >
          {/* Profile Section */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="w-32 h-32 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-1">
                  {siteContent.personal.profileImage ? (
                    <Image 
                      src={siteContent.personal.profileImage}
                      alt={siteContent.personal.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                      <User size={48} className="text-cyan-400" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl font-black text-gradient-primary mb-2"
            >
              {siteContent.personal.name}
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg font-semibold text-gradient-accent mb-4"
            >
              {siteContent.personal.title}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center items-center gap-2 text-sm text-green-400 mb-6"
            >
              <Calendar size={14} />
              <span>Available for opportunities</span>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4 mb-8"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Mail size={20} className="text-blue-400" />
              Contact
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{siteContent.personal.location}</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${siteContent.personal.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                  {siteContent.personal.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{siteContent.personal.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href={siteContent.personal.socialLinks.github} className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href={siteContent.personal.socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={siteContent.personal.socialLinks.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="space-y-3"
          >
            <button className="btn-primary w-full">
              <Download size={18} />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary w-full"
            >
              <Send size={18} />
              Get In Touch
            </button>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-gray-700"
          >
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Sections</h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link w-full justify-start ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                    <ChevronRight size={14} className="ml-auto" />
                  </button>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>

        {/* Main Content Area */}
        <div className="lg:ml-96 lg:pl-6 flex-1 pt-20 lg:pt-0">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 space-y-6 sm:space-y-8 lg:space-y-12">
            
            {/* Mobile Profile Header */}
            <div className="lg:hidden">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="glass-container p-4 sm:p-6"
              >
                <div className="w-24 h-24 mx-auto relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 rounded-full blur-lg opacity-60"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-1">
                    {siteContent.personal.profileImage ? (
                      <Image 
                        src={siteContent.personal.profileImage}
                        alt={siteContent.personal.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-full"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                        <User size={36} className="text-cyan-400" />
                      </div>
                    )}
                  </div>
                </div>
                
                <h1 className="text-xl sm:text-2xl font-black text-gradient-primary mb-2">
                  {siteContent.personal.name}
                </h1>
                
                <p className="text-base sm:text-lg font-semibold text-gradient-accent mb-4">
                  {siteContent.personal.title}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <Calendar size={14} />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={14} />
                    <span>{siteContent.personal.location}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 mb-6">
                  <a href={siteContent.personal.socialLinks.github} className="social-link" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                  <a href={siteContent.personal.socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                  </a>
                  <a href={siteContent.personal.socialLinks.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                    <Twitter size={18} />
                  </a>
                  <a href={`mailto:${siteContent.personal.email}`} className="social-link">
                    <Mail size={18} />
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Overview Section */}
            <motion.section 
              id="overview"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-container p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-blue-400" size={28} />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient-primary">Professional Overview</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="glass-card text-center">
                  <TrendingUp className="text-cyan-400 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-lg sm:text-xl text-white mb-2">7+ Years</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Experience</p>
                </div>
                <div className="glass-card text-center">
                  <Users className="text-blue-400 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-lg sm:text-xl text-white mb-2">20+ Projects</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Delivered</p>
                </div>
                <div className="glass-card text-center">
                  <Zap className="text-green-400 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-lg sm:text-xl text-white mb-2">CEO & CTO</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Leadership</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {siteContent.personal.bio}
              </p>
            </motion.section>

            {/* Experience Section */}
            <motion.section 
              id="experience"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-container p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Briefcase className="text-blue-400" size={28} />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient-primary">Professional Experience</h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-l-xl"></div>
                    
                    <div className="flex flex-col gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{job.title}</h3>
                        <p className="text-base sm:text-lg text-blue-300 font-semibold mb-1">{job.company}</p>
                        <p className="text-sm text-gray-400">{job.location}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                          <ChevronRight className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id="projects"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-container p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Code2 className="text-blue-400" size={28} />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient-primary">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {siteContent.projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="project-card group h-full flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white flex-1 pr-3">{project.title}</h3>
                      <span className={`status-badge status-${project.status} whitespace-nowrap`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      {project.github && (
                        <a href={project.github} className="btn-ghost text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                          <Github size={18} />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} className="btn-primary text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.needsCollaboration && (
                        <button 
                          onClick={() => scrollToSection('contact')}
                          className="btn-secondary text-sm sm:text-base"
                        >
                          <Layers size={18} />
                          Collaborate
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              id="skills"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-container p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Star className="text-blue-400" size={28} />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient-primary">Technical Skills</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {siteContent.skills.map((skill, index) => {
                  const skillIcons = {
                    'Solana': Code2,
                    'Rust': Terminal,
                    'React': Code2,
                    'Node.js': Server,
                    'TypeScript': Terminal,
                    'JavaScript': Terminal,
                    'Python': Terminal,
                    'C++': Terminal,
                    'MongoDB': Database,
                    'PostgreSQL': Database,
                    'Firebase': Database,
                    'Docker': Layers,
                    'Git': Code2,
                    'Arduino': Terminal,
                    'IoT Systems': Server,
                    'Web3': Code2,
                    'Blockchain': Database,
                    'Smart Contracts': Code2
                  };
                  
                  const Icon = skillIcons[skill] || Code2;
                  
                  return (
                    <motion.div 
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="skill-card"
                    >
                      <Icon className="skill-icon" size={24} />
                      <span className="text-xs sm:text-sm font-medium text-white text-center leading-tight">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Education & Certifications */}
            <motion.section 
              id="education"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-container p-4 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Target className="text-blue-400" size={28} />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient-primary">Education & Certifications</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Education */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Education</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {education.map((edu, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card"
                      >
                        <h4 className="font-bold text-white mb-2 text-sm sm:text-base">{edu.degree}</h4>
                        <p className="text-blue-300 font-semibold mb-1 text-sm sm:text-base">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-400 gap-1 sm:gap-0">
                          <span>{edu.period}</span>
                          <span className="font-semibold">{edu.gpa}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-cyan-400 mt-2">{edu.focus}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Certifications</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0">
                          <div className="flex-1">
                            <h4 className="font-bold text-white mb-1 text-sm sm:text-base">{cert.name}</h4>
                            <p className="text-xs sm:text-sm text-blue-300">{cert.issuer}</p>
                            <p className="text-xs text-gray-400 mt-1">ID: {cert.id}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-400 text-white px-2 py-1 rounded text-xs font-semibold">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section 
              id="contact"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-container p-4 sm:p-6 md:p-8 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <Send className="text-blue-400" size={28} />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient-primary">Ready to Collaborate</h2>
              </div>

              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Looking for a multidisciplinary technologist to architect your next breakthrough? Let&#39;s discuss how my Web3 expertise, 
                quantitative trading systems, and full-stack development skills can drive your technical vision forward and deliver exceptional results.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <a href={`mailto:${siteContent.personal.email}`} className="btn-primary text-sm sm:text-base">
                  <Mail size={20} />
                  Send Email
                </a>
                <a href={siteContent.personal.socialLinks.linkedin} className="btn-secondary text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
                <a href={siteContent.personal.socialLinks.github} className="btn-ghost text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  View GitHub
                </a>
              </div>

              {/* Contact Details for Mobile */}
              <div className="lg:hidden mt-8 pt-6 border-t border-gray-700/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="glass-card-minimal">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Mail size={18} className="text-blue-400" />
                      Email
                    </h4>
                    <a href={`mailto:${siteContent.personal.email}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                      {siteContent.personal.email}
                    </a>
                  </div>
                  <div className="glass-card-minimal">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <MapPin size={18} className="text-cyan-400" />
                      Location
                    </h4>
                    <span className="text-gray-300 text-sm">{siteContent.personal.location}</span>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
}