import styles from "../style";

const NewStats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 border-y border-gray-200 dark:border-gray-800 py-10 bg-white dark:bg-transparent`}>
        <div className="flex-1 flex flex-col justify-center items-center m-3 border-r border-gray-200 dark:border-gray-800 last:border-r-0">
            <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                12+
            </h4>
            <p className="font-poppins font-semibold xs:text-[24px] text-[18px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                YEARS
            </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center m-3 border-r border-gray-200 dark:border-gray-800 last:border-r-0">
            <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                1600+
            </h4>
            <p className="font-poppins font-semibold xs:text-[24px] text-[18px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                CLIENTS
            </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center m-3 border-r border-gray-200 dark:border-gray-800 last:border-r-0">
            <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                40+
            </h4>
            <p className="font-poppins font-semibold xs:text-[24px] text-[18px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                AWARDS
            </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center m-3">
            <h4 className="font-poppins font-bold xs:text-[60px] text-[40px] xs:leading-[70px] leading-[50px] text-lightText dark:text-white">
                60+
            </h4>
            <p className="font-poppins font-semibold xs:text-[24px] text-[18px] xs:leading-[30px] leading-[24px] text-lightText dark:text-white uppercase mt-2">
                EMPLOYEES
            </p>
        </div>
    </section>
);

export default NewStats;
