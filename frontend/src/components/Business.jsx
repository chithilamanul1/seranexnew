import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card bg-white dark:bg-transparent border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:border-transparent shadow-sm dark:shadow-none transition-all duration-300`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gray-100 dark:bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain filter dark:invert-0 invert" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-lightText dark:text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-lightDimText dark:text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
        You focus on growth, <br className="sm:block hidden" /> we’ll handle the software.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-lightDimText dark:text-dimWhite`}>
        With the right custom software and AI tools, you can automate repetitive tasks, reduce manual errors, and scale your business faster. We build solutions that fit your exact needs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
