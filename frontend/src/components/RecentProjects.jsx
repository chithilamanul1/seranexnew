import styles from "../style";

const projects = [
    {
        id: "project-1",
        title: "Homelands Skyline",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "project-2",
        title: "Luxury Hotels",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    },
];

const RecentProjects = () => (
    <section className={`${styles.paddingY} flex-col bg-white dark:bg-transparent`}>
        <div className="w-full flex justify-center items-center flex-col mb-16">
            <h2 className="font-poppins font-light text-[40px] text-lightText dark:text-white leading-[40px]">
                Recently Completed
            </h2>
            <h1 className="font-poppins font-black text-[80px] text-lightText dark:text-white leading-[80px] tracking-tighter uppercase">
                Projects
            </h1>
        </div>

        <div className="w-full">
            <h3 className="font-poppins font-bold text-[40px] text-lightText dark:text-white text-center mb-10">
                Homelands <span className="font-light">Skyline</span>
            </h3>

            <div className="relative w-full h-[400px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl group">
                <img src={projects[0].image} alt="Homelands Skyline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                    <h4 className="font-poppins font-bold text-white text-[30px] mb-2">Trust Innovation & Excellence</h4>
                    <p className="font-poppins text-dimWhite text-[18px]">Unmatched Style</p>
                </div>
            </div>
        </div>
    </section>
);

export default RecentProjects;
