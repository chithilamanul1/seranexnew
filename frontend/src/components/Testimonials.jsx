import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616c768e9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
      testimonial: "SERANEX transformed our online presence completely. Their team delivered a stunning website that not only looks amazing but also converts visitors into customers. Our sales increased by 200% within the first month!",
      project: "E-commerce Website & Digital Marketing"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Founder, FoodDelivery Pro",
      company: "FoodDelivery Pro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      testimonial: "The mobile app SERANEX created for us is absolutely phenomenal. The user interface is intuitive, and the backend system handles thousands of orders seamlessly. Our customers love the real-time tracking feature!",
      project: "Mobile App Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director, Fashion Forward",
      company: "Fashion Forward",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      testimonial: "Working with SERANEX was a game-changer for our brand. They created a complete visual identity that perfectly captures our essence. The logo design and marketing materials have elevated our brand recognition significantly.",
      project: "Brand Identity & Graphic Design"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Owner, Fitness Plus Gym",
      company: "Fitness Plus Gym",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
      testimonial: "SERANEX's digital marketing strategies helped us reach fitness enthusiasts we never thought possible. Our membership grew by 300% in just 6 months, and our Google ads are performing exceptionally well.",
      project: "Digital Marketing Campaign"
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Principal, EduTech Academy",
      company: "EduTech Academy",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80",
      rating: 5,
      testimonial: "The e-learning platform SERANEX developed revolutionized our teaching methods. Students are more engaged, and the analytics help us track their progress effectively. It's user-friendly for both teachers and students.",
      project: "E-Learning Platform Development"
    },
    {
      id: 6,
      name: "Robert Wilson",
      title: "Chef & Owner, Gourmet Bistro",
      company: "Gourmet Bistro",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      rating: 5,
      testimonial: "SERANEX created a beautiful website for my restaurant that showcases our dishes perfectly. The online reservation system works flawlessly, and we've seen a 150% increase in bookings since the launch.",
      project: "Restaurant Website & Booking System"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section id="testimonials" className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our amazing clients have to say about working with SERANEX.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 transition-all duration-300 -translate-x-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-purple-600/20 backdrop-blur-sm border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 transition-all duration-300 translate-x-6"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {getCurrentTestimonials().map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-purple-400 opacity-50" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.title}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
            200+
          </div>
          <p className="text-gray-300 text-sm">Happy Clients</p>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
            4.9/5
          </div>
          <p className="text-gray-300 text-sm">Average Rating</p>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
            98%
          </div>
          <p className="text-gray-300 text-sm">Success Rate</p>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
            24/7
          </div>
          <p className="text-gray-300 text-sm">Support</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;