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
            > We Create Amazing Digital Experiences
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