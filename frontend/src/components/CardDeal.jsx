import styles, { layout } from "../style";
import Button from "./Button";
import LottieAnimation from "./LottieAnimation";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Custom software <br className="hidden sm:block" /> built around your workflow.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        We analyze how your business works, find the bottlenecks, and build software that removes them. Clean code, modern tech, real results.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <LottieAnimation
        url="https://assets9.lottiefiles.com/packages/lf20_myejiggj.json"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
