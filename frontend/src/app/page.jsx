"use client";
import React from "react";
import styles from "../style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  NewStats,
  DigitalMarketing,
  WhatWeOffer,
  RecentProjects,
  OurProcess,
} from "../components";

export default function Home() {
  return (
  <div className="w-full overflow-hidden bg-lightBg dark:bg-primary transition-colors duration-300">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-lightBg dark:bg-primary transition-colors duration-300 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-lightBg dark:bg-primary transition-colors duration-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NewStats />
        <DigitalMarketing />
        <WhatWeOffer />
        <RecentProjects />
        <OurProcess />
      </div>
    </div>

    {/* Clients section with permanent black background */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} transition-colors duration-300 py-12`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
      </div>
    </div>

    <div className={`bg-lightBg dark:bg-primary transition-colors duration-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  );
}
