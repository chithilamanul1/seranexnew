import Head from 'next/head';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | SERANEX</title>
        <meta name="description" content="Get in touch with the SERANEX team to start a conversation about your next project. We're ready to help you build something great." />
      </Head>

      <div className="w-full pt-24 sm:pt-32">
        {/* Page Header */}
        <section className="text-center px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter animate-fade-in-down">
              Let's Build Together.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 animate-fade-in-up [animation-delay:0.2s]">
              Have an idea, a question, or a project you're ready to start? We're here to listen. Reach out to us, and let's begin the conversation.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <ContactInfoItem 
                icon={<FaEnvelope />}
                title="Email Us"
                content="contact@seranex.org"
                link="mailto:contact@seranex.org"
                description="The best way to reach us for project inquiries and detailed questions."
              />
              <ContactInfoItem 
                icon={<FaPhone />}
                title="Call Us"
                content="+94 728328638 "
                link="https://wa.link/qmj41a"
                description="For urgent matters or to schedule an initial consultation call."
              />
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form action="https://formspree.io/f/xldppzbj" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email Address</label>
                  <input type="email" name="email" id="email" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Message</label>
                  <textarea name="message" id="message" rows={4} required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"></textarea>
                </div>
                <button type="submit" className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-transform transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Footer is already in your layout.js */}
      </div>
    </>
  );
}

// Reusable Contact Info Component
const ContactInfoItem = ({ icon, title, content, link, description }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-gray-800 border border-blue-500/50 rounded-lg">
      <div className="text-xl text-blue-500">{icon}</div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <a href={link} className="text-lg text-blue-400 hover:text-blue-300 transition-colors">{content}</a>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  </div>
);


