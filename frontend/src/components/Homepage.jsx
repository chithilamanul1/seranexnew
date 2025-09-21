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
  MessageCircle
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">SERANEX</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <span className="text-sm bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
              Building Great Websites
            </span>
          </div>
          
          <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-0">
            <span className="mr-2">✨</span>
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            SERANEX
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Digital Excellence</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            &gt; We Create Amazing Digital Experiences
          </p>
          
          {/* Service Icons */}
          <div className="flex justify-center space-x-12 mb-16">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm">Websites</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm">Design</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm">Marketing</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            At SERANEX, we help businesses grow online. We build websites, create designs, and help you 
            reach more customers through smart digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-0 px-8 py-3 text-lg">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400">200+</div>
            <p className="text-gray-300">Projects Done</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">5+</div>
            <p className="text-gray-300">Years</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">98%</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer everything you need to grow your business online and reach more customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website Building */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Website Building</h3>
              <p className="text-gray-300 mb-4">
                We build fast, beautiful websites that work perfectly on phones, tablets, and computers.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Mobile-Friendly</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Fast Loading</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Easy to Update</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Works Everywhere</li>
              </ul>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Graphic Design */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Graphic Design</h3>
              <p className="text-gray-300 mb-4">
                Beautiful logos, brand designs, and graphics that make your business look professional.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Logo Design</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Business Cards</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Brochures</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Social Media Graphics</li>
              </ul>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Digital Marketing */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Digital Marketing</h3>
              <p className="text-gray-300 mb-4">
                Help more people find your business online and turn visitors into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Google Ads</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Social Media</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email Marketing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />SEO Optimization</li>
              </ul>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Mobile Apps */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Mobile Apps</h3>
              <p className="text-gray-300 mb-4">
                Custom mobile apps for iPhone and Android that your customers will love to use.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />iPhone Apps</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Android Apps</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Easy to Use</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />App Store Ready</li>
              </ul>
              <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Online Stores */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Online Stores</h3>
              <p className="text-gray-300 mb-4">
                Complete online shops where you can sell products and accept payments easily.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Payment Processing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Inventory Management</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Order Tracking</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Customer Support</li>
              </ul>
              <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Cloud Solutions */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Cloud Solutions</h3>
              <p className="text-gray-300 mb-4">
                Secure online storage and backup systems to keep your business data safe.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />Data Backup</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />File Storage</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />Team Collaboration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />24/7 Security</li>
              </ul>
              <Button variant="outline" className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900">
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