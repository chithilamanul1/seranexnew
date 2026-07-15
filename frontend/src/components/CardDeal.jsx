import styles, { layout } from "../style";
import Button from "./Button";
import LottieAnimation from "./LottieAnimation";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
        Find a better software <br className="sm:block hidden" /> solution in few simple steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-lightDimText dark:text-dimWhite`}>
        Stop struggling with off-the-shelf software that doesn't fit your workflow. We analyze your business, design a custom solution, and build it fast so you can see results immediately.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <LottieAnimation
        url="https://assets9.lottiefiles.com/packages/lf20_1m1of81p.json"
        className="relative z-[5] w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
