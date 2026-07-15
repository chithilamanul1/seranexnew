import styles from "../style";

const processSteps = [
    {
        id: "step-1",
        title: "Job Card Creation",
        content: "We initiate the project with a detailed job card outlining deliverables, timelines, and responsibilities.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
        id: "step-2",
        title: "Information Gathering",
        content: "We collaborate with you to understand your brand, goals, audience, and technical requirements.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055685.png",
    },
    {
        id: "step-3",
        title: "Sitemap & Dependencies Approval",
        content: "A clear sitemap and list of functional requirements are prepared and approved to define project scope.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055661.png",
    },
    {
        id: "step-4",
        title: "UI Design & Approval",
        content: "Custom user interface designs are created and reviewed for visual appeal, UX flow, and brand alignment.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
    },
    {
        id: "step-5",
        title: "Content Write-Up & Approval",
        content: "Website content is written or refined to ensure clarity, SEO alignment, and consistency with your brand.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    },
    {
        id: "step-6",
        title: "Development & UAT Test Link",
        content: "We build the website and provide a test link (UAT) for you to review functionality, layout, and content.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055663.png",
    },
    {
        id: "step-7",
        title: "QA Testing & UAT Approval",
        content: "Thorough quality assurance testing is conducted across devices and browsers before final approval.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055669.png",
    },
    {
        id: "step-8",
        title: "Final Deployment (Go Live)",
        content: "Once approved, we launch the site on your live server ensuring everything runs smoothly and securely.",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055664.png",
    },
];

const OurProcess = () => (
    <section className={`${styles.paddingY} flex-col bg-white dark:bg-transparent`}>
        <div className="w-full flex justify-center items-center flex-col mb-16">
            <h2 className="font-poppins font-light text-[40px] text-lightText dark:text-white leading-[40px]">
                Our
            </h2>
            <h1 className="font-poppins font-black text-[80px] text-lightText dark:text-white leading-[80px] tracking-tighter uppercase">
                Process
            </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {processSteps.map((step) => (
                <div key={step.id} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-[120px] h-[120px] rounded-full bg-gray-100 dark:bg-black-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <img src={step.icon} alt={step.title} className="w-[50%] h-[50%] object-contain filter dark:invert-0 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="font-poppins font-bold text-[18px] text-lightText dark:text-white mb-3">
                        {step.title}
                    </h4>
                    <p className="font-poppins font-normal text-[14px] text-lightDimText dark:text-dimWhite leading-[24px]">
                        {step.content}
                    </p>
                </div>
            ))}
        </div>
    </section>
);

export default OurProcess;
