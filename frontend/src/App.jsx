import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
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
} from "./components";
import Company from "./pages/Company";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

const Home = () => (
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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/services" element={<Services />} />
      <Route path="/our-work" element={<CaseStudies />} />
      <Route path="/news" element={<News />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
