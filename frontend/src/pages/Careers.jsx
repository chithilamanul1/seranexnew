import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Careers = () => (
    <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
            <div className={`${styles.boxWidth} py-20`}>
                <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                    Careers
                </h1>
                <p className={`${styles.paragraph} max-w-[800px] mb-10`}>
                    Join our team and help us build the future of intelligent automation and custom software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Full Stack Developer</h3>
                        <p className="text-dimWhite mb-4">
                            We are looking for a Full Stack Developer experienced with React, Node.js, and MongoDB.
                        </p>
                        <span className="text-purple-400 font-semibold">Remote / Full-time</span>
                    </div>
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">AI Engineer</h3>
                        <p className="text-dimWhite mb-4">
                            We are looking for an AI Engineer to help us build and deploy intelligent AI agents.
                        </p>
                        <span className="text-purple-400 font-semibold">Remote / Full-time</span>
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

export default Careers;
