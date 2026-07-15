import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Services = () => (
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
                        Our <span className="text-gradient">Services</span>
                    </h1>
                    <p className={`${styles.paragraph} max-w-[800px] mx-auto text-lightDimText dark:text-dimWhite`}>
                        We build custom software and AI digital staff that remove operational friction, reduce unnecessary thinking, and help businesses run with more clarity, speed, and control.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">

                    {/* Basic Plan */}
                    <div className="bg-white dark:bg-black-gradient rounded-[30px] p-8 border border-gray-200 dark:border-gray-800 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-lg dark:shadow-none">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-lightText dark:text-white mb-2">Starter</h3>
                            <p className="text-lightDimText dark:text-dimWhite text-sm h-10">Perfect for small businesses needing a simple digital presence.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-lightText dark:text-white">$499</span>
                            <span className="text-lightDimText dark:text-dimWhite">/project</span>
                        </div>
                        <ul className="flex-grow space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">5 Page Website</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Mobile Responsive Design</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Basic SEO Setup</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Contact Form Integration</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl font-medium text-primary bg-blue-gradient hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-gray-100 dark:bg-black-gradient-2 rounded-[30px] p-8 border-2 border-secondary flex flex-col transform md:-translate-y-4 shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">
                            MOST POPULAR
                        </div>
                        <div className="mb-8 mt-2">
                            <h3 className="text-2xl font-bold text-lightText dark:text-white mb-2">Professional</h3>
                            <p className="text-lightDimText dark:text-dimWhite text-sm h-10">For growing businesses needing custom features and automation.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-lightText dark:text-white">$1,499</span>
                            <span className="text-lightDimText dark:text-dimWhite">/project</span>
                        </div>
                        <ul className="flex-grow space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Custom Web Application</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Database Integration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">User Authentication</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Basic AI Automation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Admin Dashboard</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl font-medium text-primary bg-blue-gradient hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white dark:bg-black-gradient rounded-[30px] p-8 border border-gray-200 dark:border-gray-800 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-lg dark:shadow-none">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-lightText dark:text-white mb-2">Enterprise</h3>
                            <p className="text-lightDimText dark:text-dimWhite text-sm h-10">Full-scale digital transformation and AI integration.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-lightText dark:text-white">Custom</span>
                        </div>
                        <ul className="flex-grow space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Complex System Architecture</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Advanced AI Digital Staff</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Third-party API Integrations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Dedicated Support Team</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-lightDimText dark:text-dimWhite">Cloud Infrastructure Setup</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl font-medium text-white bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Contact Sales
                        </button>
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

export default Services;
