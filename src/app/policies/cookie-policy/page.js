"use client";
import React from "react";

export default function CookiePolicyPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl text-left space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400" data-aos="fade-up">
          Cookie Policy
        </h1>
        <p data-aos="fade-up" data-aos-delay="100">
          We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Cookies help us provide personalized content, analyze traffic, and enhance overall functionality.
        </p>
      </div>
    </section>
  );
}
