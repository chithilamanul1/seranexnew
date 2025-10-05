"use client";
import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-8 py-20">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-400 text-center" data-aos="fade-up">
          Contact Us
        </h1>
        <p className="text-lg leading-relaxed text-center" data-aos="fade-up" data-aos-delay="100">
          Have questions or want to start a project? We&apos;re here to help. Reach out and our team will get back to you promptly.
        </p>

        <form className="bg-gray-800 rounded-lg p-8 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            rows="6"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold py-3 px-6 rounded mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
