'use client';
import { useState } from 'react';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 py-6">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={onClick}
            >
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pt-4 text-white/70">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
        question: "What is the typical timeline for a web development project?",
        answer: "A typical project timeline ranges from 4 to 12 weeks, depending on the complexity and scope. We provide a detailed project plan with milestones after our initial discovery call."
    },
    {
        question: "How does your 'Project Bounty' referral program work?",
        answer: "Our 'Project Bounty' program rewards you for referring new clients to us. Once the referred client signs a contract and makes their first payment, you'll receive a commission based on the project's value. Contact us for more details!"
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern web technologies, including React, Next.js, and Node.js for web development, and native iOS/Android or Flutter for mobile apps. We also have extensive experience with various cloud providers like AWS and Vercel."
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes, we offer flexible support and maintenance packages to ensure your website or application remains secure, up-to-date, and performant after launch. We can tailor a plan to fit your specific needs."
    },
  ];

  return (
    <main className="flex-grow py-16 sm:py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
      </section>
    </main>
  );
}