import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const servicesList = [
    {
        id: "web-dev",
        category: "Websites",
        title: "Web Development",
        description: "Premium, responsive, and high-performance websites built to grow your brand and convert visitors.",
        price: "Starting from 25,000 LKR",
        details: "Custom design, SEO-friendly structure, and lightning-fast loading speeds."
    },
    {
        id: "seo",
        category: "Growth",
        title: "SEO Optimization",
        description: "Drive organic traffic and rank #1 on Google with our advanced search engine optimization strategies.",
        price: "Starting from 15,000 LKR",
        details: "Keyword research, on-page optimization, and monthly performance tracking."
    },
    {
        id: "mobile-apps",
        category: "Mobile",
        title: "Mobile Applications",
        description: "Beautiful, fast, and native iOS & Android apps tailored to your business needs and users.",
        price: "Starting from 75,000 LKR",
        details: "Cross-platform development, smooth animations, and secure backend integration."
    },
    {
        id: "software-ai",
        category: "Enterprise",
        title: "Software & AI Solutions",
        description: "Custom intelligent software, workflow automation, and AI digital staff built around your workflows.",
        price: "On Inquiry",
        details: "Tailored integrations, AI agents, and dedicated support."
    }
];

const Services = () => (
    <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
            <div className={`${styles.boxWidth} py-20`}>
                <div className="text-center mb-16">
                    <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] mb-4">
                        Our Services
                    </h1>
                    <p className="font-poppins text-dimWhite text-[18px] max-w-[600px] mx-auto">
                        Services that get you out of operational failure and drive your business forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                    {servicesList.map((service) => (
                        <div
                            key={service.id}
                            className="bg-black-gradient p-8 rounded-3xl border border-gray-800 hover:border-secondary/50 transition-all duration-500 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-semibold tracking-wider uppercase text-dimWhite bg-white/5 px-3 py-1 rounded-full">
                                        {service.category}
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-secondary group-hover:text-secondary transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-dimWhite mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <p className="text-sm text-dimWhite/60 mb-6 italic">
                                    {service.details}
                                </p>
                            </div>
                            <div className="border-t border-gray-800/80 pt-6 mt-auto">
                                <div className="flex justify-between items-center">
                                    <span className="text-gradient font-bold text-lg">{service.price}</span>
                                    <button className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-primary font-semibold px-4 py-2 rounded-xl transition-all text-sm">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
);

export default Services;
