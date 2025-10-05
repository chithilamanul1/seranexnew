"use client";
import React from "react";

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400" data-aos="fade-up">
          Our Services
        </h1>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          We offer a wide range of services to help your business thrive online. From web development to graphic design,
          we&apos;ve got you covered.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Our team ensures that every project is handled with professionalism, creativity, and attention to detail.
        </p>
      </div>
    </section>
  );
}
