import styles from "../style";

const NewStats = () => (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6 border-y border-gray-200 dark:border-gray-800 py-10 bg-white dark:bg-transparent`}>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-gray-200 dark:divide-gray-800">
            <div className="flex flex-col justify-center items-center">
                <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                    4+
                </h4>
                <p className="font-poppins font-semibold xs:text-[24px] text-[16px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                    YEARS
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                    20+
                </h4>
                <p className="font-poppins font-semibold xs:text-[24px] text-[16px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                    PROJECTS
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                    5+
                </h4>
                <p className="font-poppins font-semibold xs:text-[24px] text-[16px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                    PARTNERS
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                    10+
                </h4>
                <p className="font-poppins font-semibold xs:text-[24px] text-[16px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                    EXPERTS
                </p>
            </div>
        </div>
    </section>
);

export default NewStats;
