import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import { manualProjects } from "../constants";

const CaseStudies = () => {
    const portfolioItems = manualProjects;

    return (
        <div className="w-full overflow-hidden bg-lightBg dark:bg-primary text-lightText dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
            <div className={`${styles.paddingX} ${styles.flexCenter} pt-24`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-lightBg dark:bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow transition-colors duration-300`}>
                <div className={`${styles.boxWidth} py-20`}>
                    <div className="mb-10">
                        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px]">
                            Our Work
                        </h1>
                    </div>
                    <p className={`${styles.paragraph} max-w-[800px] mb-10 text-lightDimText dark:text-dimWhite`}>
                        See how we help businesses around the world save time and grow faster with smart software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioItems.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="group block">
                                <div className="bg-white dark:bg-black-gradient rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                    <div className="p-8 pb-0 flex-grow">
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-sm font-medium text-lightDimText dark:text-dimWhite">{item.category}</span>
                                            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-secondary group-hover:text-secondary transition-colors text-lightText dark:text-white">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold text-lightText dark:text-white mb-8">{item.title}</h3>
                                    </div>
                                    <div className="h-64 w-full relative bg-gray-100 dark:bg-gray-900 mt-auto overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>
                            </a>
                        ))}
                        {portfolioItems.length === 0 && (
                            <div className="col-span-2 text-center py-20 bg-white dark:bg-black-gradient rounded-3xl border border-gray-200 dark:border-gray-800">
                                <p className="text-lightDimText dark:text-dimWhite text-lg">No projects available yet. Check back soon!</p>
                            </div>
                        )}
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
};

export default CaseStudies;
