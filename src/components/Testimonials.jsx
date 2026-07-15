import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col `}
  >
    <div className="blue__gradient absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full" />

    <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
      <h2 className={styles.heading2}>
        What our partners <br className="hidden sm:block" /> are saying about us
      </h2>
      <div className="mt-6 w-full md:mt-0">
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Everything you need to automate your business and grow faster.
        </p>
      </div>
    </div>

    <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
