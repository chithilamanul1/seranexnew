import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Smartphone,
  ShoppingCart,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Calendar,
  Award,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  Download,
  Play,
  Zap,
  Globe,
  Shield,
  Rocket
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: 'website',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/94728382638', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:seranexdigital@gmail.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"></div>
      <ParticleBackground />
      
      {/* Header */}
      <header className="relative z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-black/20 border-b border-gray-800/50">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SERANEX</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors duration-300 font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors duration-300 font-medium">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-purple-400 transition-colors duration-300 font-medium">Portfolio</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors duration-300 font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors duration-300 font-medium">Contact</button>
            <span className="text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
              Building Great Websites
            </span>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-6 py-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            <Rocket className="mr-2 w-4 h-4" />
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
        <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            SERANEX
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light mb-8 text-gray-200">Digital Excellence</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            &gt; We Create Amazing Digital Experiences That Transform Businesses
          </p>
          
          {/* Service Icons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12 mb-20">
            <div className="text-center group cursor-pointer" onClick={() => scrollToSection('services')}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <p className="text-base font-semibold">Websites</p>
            </div>
            <div className="text-center group cursor-pointer" onClick={() => scrollToSection('services')}>
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <p className="text-base font-semibold">Design</p>
            </div>
            <div className="text-center group cursor-pointer" onClick={() => scrollToSection('services')}>
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <p className="text-base font-semibold">Marketing</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            At SERANEX, we help businesses grow online. We build websites, create designs, and help you 
            reach more customers through smart digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              variant="outline" 
              className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">200+</div>
            <p className="text-gray-300 font-medium">Projects Done</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">5+</div>
            <p className="text-gray-300 font-medium">Years</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">98%</div>
            <p className="text-gray-300 font-medium">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer everything you need to grow your business online and reach more customers with cutting-edge solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Website Building */}
          <Card 
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setActiveService('website')}
            onMouseLeave={() => setActiveService(null)}
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">Website Building</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We build lightning-fast, beautiful websites that work perfectly across all devices and browsers.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />Mobile-Responsive Design</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />Lightning Fast Loading</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />Easy Content Management</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />SEO Optimized</li>
              </ul>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 w-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Graphic Design */}
          <Card 
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setActiveService('design')}
            onMouseLeave={() => setActiveService(null)}
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-500/25">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-300 transition-colors">Graphic Design</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creative visual solutions and brand designs that make your business stand out professionally.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />Logo & Brand Identity</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />Business Materials</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />Marketing Graphics</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />Social Media Assets</li>
              </ul>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300 w-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Digital Marketing */}
          <Card 
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setActiveService('marketing')}
            onMouseLeave={() => setActiveService(null)}
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">Digital Marketing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Strategic marketing campaigns that drive traffic, generate leads, and convert visitors to customers.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />Google Ads & PPC</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />Social Media Marketing</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />Email Campaigns</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />SEO & Analytics</li>
              </ul>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 w-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Mobile Apps */}
          <Card 
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setActiveService('mobile')}
            onMouseLeave={() => setActiveService(null)}
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/25">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors">Mobile Apps</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Custom mobile applications for iOS and Android with intuitive user experiences and modern features.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />iOS & Android Apps</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />Cross-Platform Solutions</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />App Store Deployment</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />Maintenance & Updates</li>
              </ul>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 hover:text-orange-300 w-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Online Stores */}
          <Card 
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setActiveService('ecommerce')}
            onMouseLeave={() => setActiveService(null)}
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/25">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors">Online Stores</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Complete e-commerce solutions with secure payments, inventory management, and customer analytics.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Secure Payment Gateway</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Inventory Management</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Order Tracking System</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />Customer Support Tools</li>
              </ul>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:text-green-300 w-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Cloud Solutions */}
          <Card 
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setActiveService('cloud')}
            onMouseLeave={() => setActiveService(null)}
          >
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-indigo-500/25">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">Cloud Solutions</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Scalable cloud infrastructure and backup systems to keep your business data secure and accessible.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />Automated Backups</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />Cloud Storage Solutions</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />Team Collaboration</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />24/7 Security Monitoring</li>
              </ul>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-indigo-300 w-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Modern Technology</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We use the best and latest tools to build websites that are fast, secure, and easy to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Website Tech</h3>
            <ul className="space-y-2 text-gray-300">
              <li>React</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Server Tech</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Python</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-green-400">Cloud Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Amazon AWS</li>
              <li>Google Cloud</li>
              <li>Microsoft Azure</li>
              <li>Digital Ocean</li>
              <li>Cloudflare</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Design Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Canva</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">15+</div>
            <p className="text-gray-300">Tools We Know</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">99%</div>
            <p className="text-gray-300">Website Uptime</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">24/7</div>
            <p className="text-gray-300">Support</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">3x</div>
            <p className="text-gray-300">Faster Loading</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check out some of the amazing websites and apps we've built for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="TechStart Website"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Business Website
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">TechStart Website</h3>
              <p className="text-gray-300 mb-4">
                A modern website for a technology startup with easy navigation and mobile-friendly design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">Website Design</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">Mobile-Friendly</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">Fast Loading</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">SEO Ready</span>
              </div>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 w-full">
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="FoodDelivery App"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                Mobile App
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">FoodDelivery App</h3>
              <p className="text-gray-300 mb-4">
                Easy-to-use food delivery app with online ordering and real-time tracking features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm">iPhone App</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm">Android App</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm">Online Payments</span>
                <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm">GPS Tracking</span>
              </div>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 w-full">
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-600 to-teal-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fashion Store Online"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Online Shop
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Fashion Store Online</h3>
              <p className="text-gray-300 mb-4">
                Beautiful online clothing store with easy shopping cart and secure payment system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">Online Store</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">Payment System</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">Inventory</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">Customer Reviews</span>
              </div>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 w-full">
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* Project 4 */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-orange-600 to-red-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness Tracker"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                Health App
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Fitness Tracker</h3>
              <p className="text-gray-300 mb-4">
                Personal fitness tracking app with workout plans and progress monitoring features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm">Workout Plans</span>
                <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm">Progress Tracking</span>
                <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm">Social Features</span>
                <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-sm">Health Data</span>
              </div>
              <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 w-full">
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* Project 5 */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-pink-600 to-rose-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Learning Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                Education Website
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Learning Platform</h3>
              <p className="text-gray-300 mb-4">
                Online learning platform where students can take courses and track their progress.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-sm">Video Lessons</span>
                <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-sm">Progress Tests</span>
                <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-sm">Certificates</span>
                <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-sm">Student Dashboard</span>
              </div>
              <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900 w-full">
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* Project 6 */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Restaurant Website"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                Local Business
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Restaurant Website</h3>
              <p className="text-gray-300 mb-4">
                Professional website for a local restaurant with online menu and reservation system.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded text-sm">Online Menu</span>
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded text-sm">Table Booking</span>
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded text-sm">Location Map</span>
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded text-sm">Customer Reviews</span>
              </div>
              <Button variant="outline" className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900 w-full">
                View Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a friendly team of designers, developers, and marketers who love helping businesses grow online. 
            Our goal is to make amazing websites that your customers will love.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Story</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="text-gray-300 mb-4">
                SERANEX started in 2019 when we saw that many businesses needed better websites but didn't know where to start. 
                We wanted to make it easy for any business to have a professional online presence.
              </p>
            </div>
            <div>
              <p className="text-gray-300 mb-4">
                Today, we help small and large businesses create websites, design graphics, and reach more customers online. 
                We believe every business deserves to succeed in the digital world.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <span className="text-lg text-cyan-400 font-semibold">Always Moving Forward</span>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-16">
          {/* Chithila Manul - Founder & Owner */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400 transition-colors">
              <img 
                src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/537762261_758430983835047_1656468814233480421_n.jpg?ccb=11-4&oh=01_Q5Aa2gGDjszrt2Q4EfiP7ITgSf8oYaK8fyHeeHe9IWYrkOMB1A&oe=68DD3BA3&_nc_sid=5e03e0&_nc_cat=106"
                alt="Chithila Manul"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Chithila Manul</h4>
            <p className="text-cyan-400 mb-4">Founder & Owner</p>
            <p className="text-gray-300 text-sm">
              Visionary leader with expertise in business strategy and digital transformation. 
              Passionate about helping businesses achieve their online goals.
            </p>
          </div>

          {/* Riyon Bashitha - Co-Owner */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-purple-400/30 hover:border-purple-400 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="Riyon Bashitha"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Riyon Bashitha</h4>
            <p className="text-purple-400 mb-4">Co-Owner</p>
            <p className="text-gray-300 text-sm">
              Technical expert and strategic partner, specializing in innovative solutions and 
              ensuring exceptional project delivery for all our clients.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Creative Ideas</h4>
            <p className="text-gray-300 text-sm">
              We love coming up with new and exciting ways to make your business stand out online.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">We Care About You</h4>
            <p className="text-gray-300 text-sm">
              Your success is what matters most to us. We work hard to make sure you're happy with our work.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Quality Work</h4>
            <p className="text-gray-300 text-sm">
              We always do our best work and make sure everything we create looks great and works perfectly.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">You Can Trust Us</h4>
            <p className="text-gray-300 text-sm">
              We deliver on time, stay in touch throughout your project, and provide ongoing support.
            </p>
          </div>
        </div>

        {/* Our Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">200+</div>
            <p className="text-gray-300">Projects Finished</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">50+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">5+</div>
            <p className="text-gray-300">Years in Business</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">15+</div>
            <p className="text-gray-300">Tools We Use</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to grow your business online? Let's talk about your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Start Your Project</h3>
            <form 
              action="https://formsubmit.co/seranexdigital@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select
                  name="project_type"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                >
                  <option value="website">Website Development</option>
                  <option value="app">Mobile App</option>
                  <option value="design">Graphic Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="ecommerce">Online Store</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-0 py-3"
              >
                Send Message <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                Email Us
              </h4>
              <p className="text-gray-300 mb-2">seranexdigital@gmail.com</p>
              <p className="text-gray-400 text-sm">Send us a message anytime</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 text-green-400 mr-3" />
                WhatsApp Us
              </h4>
              <p className="text-gray-300 mb-2">0728382638</p>
              <p className="text-gray-400 text-sm">Chat with us directly on WhatsApp</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-purple-400 mr-3" />
                Visit Us
              </h4>
              <p className="text-gray-300 mb-2">Sri Lanka</p>
              <p className="text-gray-400 text-sm">Come see us in person</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">What We Do</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Website Building</li>
                <li>• Mobile Apps</li>
                <li>• Graphic Design</li>
                <li>• Digital Marketing</li>
                <li>• Online Stores</li>
                <li>• Cloud Storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join over 200+ happy clients who have grown their businesses with SERANEX. Let's make something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-0 px-8 py-3">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-8 border-t border-slate-700 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <img 
            src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
            alt="Emergent" 
            className="w-6 h-6 rounded"
          />
          <span>Made with</span>
          <a 
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emergent
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;