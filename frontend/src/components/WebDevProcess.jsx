import React from "react";
import styles from "../style";

const processSteps = [
    {
        id: "step-1",
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, target audience, and operational bottlenecks to craft a tailored digital strategy.",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        bg: "bg-gradient-to-br from-gray-900 to-black",
        icon: (
            <svg className="w-8 h-8 text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        ),
    },
    {
        id: "step-2",
        title: "UI/UX Design",
        description: "Creating intuitive, premium, and conversion-focused interfaces that your users will love.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bg: "bg-gradient-to-br from-gray-800 to-gray-900",
        icon: (
            <svg className="w-8 h-8 text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
        ),
    },
    {
        id: "step-3",
        title: "Custom Development",
        description: "Building robust, scalable, and secure software using modern tech stacks. No bloated templates.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
        bg: "bg-gradient-to-b from-purple-900/40 to-black",
        icon: (
            <svg className="w-8 h-8 text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
        ),
    },
    {
        id: "step-4",
        title: "Testing & QA",
        description: "Rigorous testing across all devices and browsers to ensure a flawless user experience.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bg: "bg-gradient-to-br from-gray-900 to-black",
        icon: (
            <svg className="w-8 h-8 text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
    },
    {
        id: "step-5",
        title: "Launch & Scale",
        description: "Deploying your solution to production and providing ongoing support to help you scale.",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        bg: "bg-gradient-to-r from-gray-900 to-gray-800",
        icon: (
            <svg className="w-8 h-8 text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
        ),
    },
];

const WebDevProcess = () => {
    return (
        <section className={`${styles.paddingY} flex-col bg-white dark:bg-transparent`}>
            <div className="w-full flex justify-center items-center flex-col mb-16 text-center px-4">
                <h2 className="font-poppins font-light text-[32px] md:text-[40px] text-lightText dark:text-white leading-[40px] md:leading-[50px]">
                    Our Proven
                </h2>
                <h1 className="font-poppins font-black text-[50px] md:text-[80px] text-lightText dark:text-white leading-[50px] md:leading-[80px] tracking-tighter uppercase mt-2">
                    Process
                </h1>
                <p className={`${styles.paragraph} max-w-[700px] mt-6 text-lightDimText dark:text-dimWhite`}>
                    We don't just write code. We engineer solutions designed to remove operational bottlenecks and drive growth.
                </p>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
                    {processSteps.map((step) => (
                        <div
                            key={step.id}
                            className={`relative overflow-hidden rounded-3xl p-8 flex flex-col justify-end group border border-gray-200 dark:border-gray-800/50 hover:border-secondary/50 transition-colors duration-500 ${step.colSpan} ${step.rowSpan} ${step.bg}`}
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute -inset-px bg-gradient-to-r from-secondary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>

                            <div className="relative z-10">
                                {step.icon}
                                <h3 className="font-poppins font-semibold text-2xl text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="font-poppins text-dimWhite text-sm leading-relaxed max-w-[90%]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebDevProcess;
