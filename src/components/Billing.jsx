import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
      />

      {/* gradient start */}
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily automate your <br className="hidden sm:block" /> billing &amp;
        invoicing
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Stop manually copying data from emails or documents. Our custom invoicing software automatically generates, sends, and tracks invoices for you.
      </p>
    </div>
  </section>
);

export default Billing;
