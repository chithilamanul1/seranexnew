"use client";
import React from "react";

export default function FAQPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400 text-center" data-aos="fade-up">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h2 className="text-xl font-semibold">Q: How do I start a project?</h2>
            <p>A: Contact us via the form or email and we&apos;ll guide you through the next steps.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Q: What services do you offer?</h2>
            <p>A: Web development, design, software solutions, and consulting tailored to your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

