import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Careers = () => (
    <div className="w-full overflow-hidden bg-lightBg dark:bg-primary text-lightText dark:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-24`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-lightBg dark:bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow transition-colors duration-300`}>
            <div className={`${styles.boxWidth} py-20`}>
                <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                    Careers
                </h1>
                <p className={`${styles.paragraph} max-w-[800px] mb-10 text-lightDimText dark:text-dimWhite`}>
                    Join our team and help us build the future of intelligent automation and custom software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-white dark:bg-black-gradient border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-lightText dark:text-secondary">Sales Executive</h3>
                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Commission Based</span>
                        </div>
                        <p className="text-lightDimText dark:text-dimWhite mb-4">
                            We are looking for a highly motivated Sales Executive to outreach to potential clients and bring in new business. You will be responsible for identifying leads and closing deals for our custom software and AI solutions.
                        </p>
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">Remote / Flexible</span>
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

export default Careers;
