import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const News = () => (
    <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
            <div className={`${styles.boxWidth} py-20`}>
                <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                    Latest News
                </h1>
                <p className={`${styles.paragraph} max-w-[800px] mb-10`}>
                    Stay updated with the latest trends in software development and AI automation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <span className="text-secondary text-sm font-semibold">July 15, 2026</span>
                        <h3 className="text-2xl font-bold my-4 text-white">How AI Agents are Changing Small Businesses</h3>
                        <p className="text-dimWhite mb-4">
                            AI agents are no longer just for tech giants. Small businesses are using them to automate customer support, invoicing, and data entry.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <span className="text-secondary text-sm font-semibold">June 28, 2026</span>
                        <h3 className="text-2xl font-bold my-4 text-white">Why Simple Software is Better than Complex Features</h3>
                        <p className="text-dimWhite mb-4">
                            Many companies waste money on software features they never use. We explain why building simple, focused software is the key to success.
                        </p>
                    </div>
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

export default News;
