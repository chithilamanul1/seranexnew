import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get a custom software <br className="hidden sm:block" /> solution in few easy steps.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        We analyze your business processes, design a custom solution, and build it for you. No complex steps, just results.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="h-[100%] w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
