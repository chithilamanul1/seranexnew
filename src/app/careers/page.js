"use client";
import React from "react";

export default function CareersPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400" data-aos="fade-up">
          Careers at Seranex
        </h1>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Join our team and be part of a forward-thinking digital company. We&apos;re always looking for talented, passionate individuals
          who are ready to innovate and grow with us.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          At Seranex, we value creativity, collaboration, and a dedication to excellence. Whether you&apos;re an experienced developer,
          designer, or a fresh graduate eager to learn, we have opportunities that will challenge and inspire you.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          Explore current openings and discover why Seranex is more than just a workplace — it&apos;s a place to grow, innovate,
          and make a real impact.
        </p>
      </div>
    </section>
  );
}
