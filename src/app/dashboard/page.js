"use client";
import React from "react";

export default function DashboardPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400" data-aos="fade-up">
          Dashboard
        </h1>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Welcome to your dashboard. Here you can manage your projects, check messages, and monitor activities in a centralized place.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          All your data is securely stored and updated in real-time, giving you complete control over your workflow.
        </p>
      </div>
    </section>
  );
}
