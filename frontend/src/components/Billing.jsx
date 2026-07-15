import styles, { layout } from "../style";
import LottieAnimation from "./LottieAnimation";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <LottieAnimation
        url="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"
        className="relative z-[5] w-[100%] h-[100%]"
      />

      {/* gradient start */}
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We design &amp; build <br className="hidden sm:block" /> websites that
        convert.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        From landing pages to full e-commerce platforms, we build fast, responsive, and SEO-optimized websites that help your business grow online.
      </p>
    </div>
  </section>
);

export default Billing;
