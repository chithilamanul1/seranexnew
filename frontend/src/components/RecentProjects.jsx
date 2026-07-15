import { useState, useEffect } from "react";
import styles from "../style";

const RecentProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/portfolio');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setProjects(data);
                }
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section className={`${styles.paddingY} flex-col bg-white dark:bg-transparent`}>
            <div className="w-full flex justify-center items-center flex-col mb-16 text-center px-4">
                <h2 className="font-poppins font-light text-[32px] md:text-[40px] text-lightText dark:text-white leading-[40px] md:leading-[50px]">
                    Recently Completed
                </h2>
                <h1 className="font-poppins font-black text-[50px] md:text-[80px] text-lightText dark:text-white leading-[50px] md:leading-[80px] tracking-tighter uppercase mt-2">
                    Projects
                </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.length > 0 ? projects.map((project) => (
                    <div key={project.id} className="w-full">
                        <h3 className="font-poppins font-bold text-[30px] md:text-[40px] text-lightText dark:text-white text-center mb-6">
                            {project.title}
                        </h3>

                        <a href={project.link} target="_blank" rel="noreferrer" className="block relative w-full h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-2xl group">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h4 className="font-poppins font-bold text-white text-[24px] md:text-[30px] mb-2">{project.title}</h4>
                                <p className="font-poppins text-dimWhite text-[16px] md:text-[18px]">{project.category}</p>
                            </div>
                        </a>
                    </div>
                )) : (
                    <p className="text-center text-lightDimText dark:text-dimWhite w-full col-span-full">No projects found. Add some from the admin panel.</p>
                )}
            </div>
        </section>
    );
};

export default RecentProjects;
