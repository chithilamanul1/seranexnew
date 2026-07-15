import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Company = () => (
    <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
            <div className={`${styles.boxWidth} py-20`}>
                <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mb-6">
                    About Seranex Lanka
                </h1>
                <p className={`${styles.paragraph} max-w-[800px] mb-10`}>
                    We are a team of passionate developers and AI engineers building smart software solutions for businesses worldwide. Our mission is to make technology work for you, saving you time and reducing errors.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                        <p className="text-dimWhite">
                            To be the leading provider of intelligent automation and custom software solutions, empowering businesses to operate seamlessly.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-black-gradient border border-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
                        <p className="text-dimWhite">
                            To deliver high-quality, reliable, and easy-to-use software that automates repetitive tasks and drives business growth.
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

export default Company;
