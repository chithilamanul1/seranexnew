import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import ownerImg from "../assets/owner.jpg";

const Company = () => (
    <div className="w-full overflow-hidden bg-lightBg dark:bg-primary text-lightText dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-24`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-lightBg dark:bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow transition-colors duration-300`}>
            <div className={`${styles.boxWidth} py-20`}>

                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <div className="flex-1">
                        <h1 className="font-poppins font-semibold xs:text-[56px] text-[48px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                            Founded on <span className="text-gradient">Freedom</span>
                        </h1>
                    </div>
                    <div className="flex-1 md:text-right mt-6 md:mt-0">
                        <p className="text-lightDimText dark:text-dimWhite text-lg font-medium">Systems create clarity</p>
                        <p className="text-lightDimText dark:text-dimWhite text-lg font-medium">Clarity creates freedom</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-12 mb-20">
                    <p className={`${styles.paragraph} max-w-[900px] text-[18px] leading-[32px] text-lightDimText dark:text-dimWhite`}>
                        Seranex Lanka builds software that gives businesses freedom. Not the fake kind. Not "more features." Not "digital transformation." Real freedom comes when your business stops depending on messy processes, repeated manual work, disconnected tools, and constant human fixing just to function. That's what we solve. We build custom intelligent software and AI digital staff that remove operational friction, reduce unnecessary thinking, and help businesses run with more clarity, speed, and control. Because software should not make work heavier. It should remove the weight.
                    </p>
                </div>

                {/* Delivering Freedom Section */}
                <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1">
                        <h2 className="font-poppins font-semibold text-[40px] text-lightText dark:text-white mb-10">
                            Delivering freedom to
                        </h2>

                        <div className="flex flex-col gap-6">
                            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-lightText dark:text-white group-hover:text-secondary transition-colors">Our Clients</h3>
                            </div>
                            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-lightText dark:text-white group-hover:text-secondary transition-colors">Our Team</h3>
                            </div>
                            <div className="border-b border-gray-200 dark:border-gray-800 pb-6 group cursor-pointer">
                                <h3 className="text-2xl font-medium text-lightText dark:text-white group-hover:text-secondary transition-colors">Shareholders</h3>
                            </div>
                        </div>

                        <button className="mt-12 bg-gray-100 dark:bg-black-gradient border border-secondary text-lightText dark:text-white font-medium py-4 px-8 rounded-full hover:bg-secondary hover:text-white dark:hover:text-primary transition-all duration-300 flex items-center gap-2">
                            Tell Us About Your Problem
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>

                    <div className="flex-1 w-full mt-10 md:mt-0">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative h-[500px]">
                            <img src={ownerImg} alt="Chithila Manul" className="w-full h-full object-cover object-top" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                                <div>
                                    <h4 className="text-white font-bold text-2xl mb-1">Chithila Manul</h4>
                                    <p className="text-secondary font-medium">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
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

export default Company;
