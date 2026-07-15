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
