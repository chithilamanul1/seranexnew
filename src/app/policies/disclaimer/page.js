"use client";
import React from "react";

export default function DisclaimerPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl text-left space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400" data-aos="fade-up">
          Disclaimer
        </h1>
        <p data-aos="fade-up" data-aos-delay="100">
          All content on this website is provided for informational purposes only. While we strive to keep information accurate,
          Seranex makes no guarantees regarding completeness or accuracy.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Use of this website and its services is at your own risk. Seranex shall not be held liable for any damages arising from
          reliance on this content.
        </p>
      </div>
    </section>
  );
}
