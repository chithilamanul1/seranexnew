import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Contact = () => (
    <div className="w-full overflow-hidden bg-lightBg dark:bg-primary text-lightText dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-24`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-lightBg dark:bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow transition-colors duration-300`}>
            <div className={`${styles.boxWidth} py-20`}>
                <div className="mb-16 text-center">
                    <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px] mb-4">
                        Contact <span className="text-gradient">Us</span>
                    </h1>
                    <p className={`${styles.paragraph} max-w-[800px] mx-auto text-lightDimText dark:text-dimWhite`}>
                        Get in touch with us today to discuss how we can help your business grow with custom software and AI solutions.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 max-w-[1000px] mx-auto">
                    {/* Contact Info */}
                    <div className="flex-1 bg-white dark:bg-black-gradient rounded-[30px] p-8 border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
                        <h3 className="text-2xl font-bold text-lightText dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lightText dark:text-white text-lg">Phone / WhatsApp</h4>
                                    <p className="text-lightDimText dark:text-dimWhite">+94 72 838 2638</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lightText dark:text-white text-lg">Email</h4>
                                    <p className="text-lightDimText dark:text-dimWhite">hello@seranex.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lightText dark:text-white text-lg">Location</h4>
                                    <p className="text-lightDimText dark:text-dimWhite">Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-[1.5] bg-white dark:bg-black-gradient rounded-[30px] p-8 border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
                        <h3 className="text-2xl font-bold text-lightText dark:text-white mb-6">Send us a message</h3>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-lightDimText dark:text-dimWhite mb-1">First Name</label>
                                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-lightText dark:text-white" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-lightDimText dark:text-dimWhite mb-1">Last Name</label>
                                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-lightText dark:text-white" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-lightDimText dark:text-dimWhite mb-1">Email Address</label>
                                <input type="email" required className="w-full px-4 py-3 bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-lightText dark:text-white" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-lightDimText dark:text-dimWhite mb-1">Message</label>
                                <textarea required rows="4" className="w-full px-4 py-3 bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-lightText dark:text-white resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className={`bg-lightBg dark:bg-primary ${styles.paddingX} ${styles.flexCenter} transition-colors duration-300`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
);

export default Contact;
