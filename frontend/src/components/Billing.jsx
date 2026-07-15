import styles, { layout } from "../style";
import LottieAnimation from "./LottieAnimation";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <LottieAnimation
        url="https://assets1.lottiefiles.com/packages/lf20_v1yudj19.json"
        className="relative z-[5] w-[100%] h-[100%]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-lightText dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
        Easily manage your <br className="sm:block hidden" /> business operations
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-lightDimText dark:text-dimWhite`}>
        We build custom dashboards and management systems that give you full control over your business. Track sales, manage inventory, and monitor performance all in one place.
      </p>
    </div>
  </section>
);

export default Billing;
