'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// ContactInfo component remains the same
const ContactInfo = () => (
    <div className="space-y-8 lg:mt-20">
        <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
            <div className="space-y-3 text-white/80">
                <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-theme-blue">call</span>
                    <span>+94 (076) 8290-477</span>
                </p>
                <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-theme-blue">mail</span>
                    <span>info@seranex.org</span>
                </p>
                <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-theme-blue">location_on</span>
                    <span>412 Mahawathana Avenue, Benthota, Sri Lanka</span>
                </p>
            </div>
        </div>
        <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.6.57-2.46.67.89-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.28 14.38 20.28 8.43c0-.21 0-.42-.01-.63.961-.689 1.799-1.56 2.46-2.548l-.047-.02z"/></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm11 0h-3v-5.61c0-3.32-3.7-2.98-3.7 0V19h-3V8h3v1.76c1.23-1.81 4.74-2.39 4.74.82V19z"/></svg>
                </a>
            </div>
        </div>
    </div>
);


const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('Message Sent! We will be in touch shortly.');
                event.target.reset();
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        } finally {
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div className="space-y-8">
            <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Contact Us</h2>
                <p className="text-white/70 text-lg">We're here to help. Reach out to us for any inquiries or to discuss your project.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <input name="name" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-base placeholder:text-white/40 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Your Name" required />
                <input name="email" type="email" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-base placeholder:text-white/40 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Your Email" required />
                <input name="subject" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-base placeholder:text-white/40 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Subject"/>
                <textarea name="message" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-base min-h-[120px] placeholder:text-white/40 focus:ring-theme-blue focus:border-theme-blue transition-colors duration-200" placeholder="Your Message" required></textarea>
                
                <button type="submit" className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50" disabled={status === 'Sending...'}>
                    {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            
            {status && (
                <div className={`p-3 text-center rounded-lg font-semibold ${status.includes('Sent') ? 'bg-green-900/50 text-green-400 border border-green-500/30' : 'bg-red-900/50 text-red-400 border border-red-500/30'}`}>
                    {status}
                </div>
            )}
        </div>
    );
};

export default function Contact() {
    return (
        <main className="flex-grow container mx-auto px-6 py-12 md:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                </Suspense>
                <ContactInfo />
            </div>
        </main>
    );
}