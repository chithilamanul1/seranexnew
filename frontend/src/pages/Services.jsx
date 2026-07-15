import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import WhatWeOffer from "../components/WhatWeOffer";

const Services = () => (
    <div className="w-full overflow-hidden bg-lightBg dark:bg-primary text-lightText dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-24`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-lightBg dark:bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow transition-colors duration-300`}>
            <div className={`${styles.boxWidth} py-20`}>
                <WhatWeOffer />

                {/* SEO Content Section */}
                <div className="mt-24 max-w-[800px] mx-auto text-center md:text-left">
                    <h2 className="font-poppins font-bold text-[24px] md:text-[32px] text-lightText dark:text-white mb-6 text-center">
                        Best Web Design Company Sri Lanka
                    </h2>
                    <h3 className="font-poppins font-semibold text-[18px] md:text-[22px] text-purple-600 dark:text-purple-400 mb-8 text-center">
                        Start Your Website with the Best Web Design Company Sri Lanka
                    </h3>

                    <div className="space-y-6 font-poppins text-[15px] md:text-[16px] text-lightDimText dark:text-dimWhite leading-relaxed">
                        <p>
                            Start your website with the best web design company Sri Lanka and free up the real digital potential of your commercial enterprise. In today's highly competitive online world, your website is not simply a place clients visit; it's the strongest tool for building brand credibility, creating trust, and driving measurable outcomes. At Seranex Lanka, we focus on designing high-performance websites that increase your online presence and supply actual enterprise results.
                        </p>
                        <p>
                            As the best web design company in Sri Lanka, we offer end-to-end website solutions tailored to your goals. Our process begins with understanding your brand, target audience, and industry landscape. We then transform those insights into visually striking, conversion-centered website designs that convey your message clearly and convert site visitors into loyal customers.
                        </p>
                        <p>
                            Our custom web design services cover business websites, eCommerce platforms, booking systems, portfolio sites, and fully bespoke digital solutions. Every project we deliver is developed with clean coding standards, mobile-first layouts, fast-loading performance, SEO-ready structures, and integration with today's latest digital technologies and tools, giving your business a website that works smart, loads fast, and wins trust.
                        </p>
                        <p>
                            Recognized as a leading and best web design company Sri Lanka, Seranex Lanka ensures all websites are built to scale as your business grows. Whether you expand your services, shift your strategy, or enter new markets, your website will always be ready to support your next step.
                        </p>
                        <p>
                            In addition, we implement industry-leading security practices and continuous optimization techniques—protecting your data, safeguarding your customers, and keeping your digital presence stable, safe, and future-proof. With Seranex Lanka as your digital partner, you get more than just a website; you get a powerful digital asset designed to accelerate your business growth.
                        </p>
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
