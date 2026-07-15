import React, { useState, useEffect } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const CaseStudies = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        fetch('/api/portfolio')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPortfolioItems(data);
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="w-full overflow-hidden bg-primary text-white min-h-screen flex flex-col justify-between">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} flex-grow`}>
                <div className={`${styles.boxWidth} py-20`}>
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
                            Case Studies
                        </h1>
                        <a href="/admin" className="text-secondary hover:underline font-semibold">
                            Admin Panel
                        </a>
                    </div>
                    <p className={`${styles.paragraph} max-w-[800px] mb-10`}>
                        See how we help businesses around the world save time and grow faster with smart software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioItems.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="group block">
                                <div className="bg-black-gradient rounded-3xl overflow-hidden border border-gray-800 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                    <div className="p-8 pb-0 flex-grow">
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-sm font-medium text-dimWhite">{item.category}</span>
                                            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-secondary group-hover:text-secondary transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-8">{item.title}</h3>
                                    </div>
                                    <div className="h-64 w-full relative bg-gray-900 mt-auto overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>
                            </a>
                        ))}
                        {portfolioItems.length === 0 && (
                            <div className="col-span-2 text-center py-20 bg-black-gradient rounded-3xl border border-gray-800">
                                <p className="text-dimWhite text-lg">No case studies available yet.</p>
                                <a href="/admin" className="text-secondary font-medium mt-2 inline-block hover:underline">Add one in the Admin pane</a>
                            </div>
                        )}
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
};

export default CaseStudies;
