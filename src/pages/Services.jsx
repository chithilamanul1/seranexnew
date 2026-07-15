import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Services = () => (
    <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
            <div className={`${styles.boxWidth} py-20`}>
                <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                    Our Services
                </h1>
                <p className={`${styles.paragraph} max-w-[800px] mb-10`}>
                    We offer high-quality, simple, and effective services to help your business grow and save time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Custom Software</h3>
                        <p className="text-dimWhite mb-4">
                            We build custom software that fits your business perfectly. No complex features, just what you need to get the job done.
                        </p>
                        <span className="text-purple-400 font-semibold">Starting from $59/hour</span>
                    </div>
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">AI Digital Workers</h3>
                        <p className="text-dimWhite mb-4">
                            Our AI workers handle repetitive tasks like copying data, reading emails, and updating systems 24/7.
                        </p>
                        <span className="text-purple-400 font-semibold">Pay for Results</span>
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

export default Services;
