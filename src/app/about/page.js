"use client";
import React from "react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400" data-aos="fade-up">
          About Seranex
        </h1>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Welcome to <span className="text-blue-400 font-semibold">Seranex</span>, your trusted digital innovation partner.
          We&apos;re dedicated to transforming ideas into real-world solutions through web development, design, and technology.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Our mission is simple: to deliver excellence. Whether you&apos;re a startup looking to establish your online presence or
          an established business aiming to level up, Seranex is here to make it happen.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          We believe in the power of collaboration, creativity, and cutting-edge tools to bring your brand&apos;s digital identity
          to life. Let&apos;s create something amazing together.
        </p>
      </div>
    </section>
  );
}
