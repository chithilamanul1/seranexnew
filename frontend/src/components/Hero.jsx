import styles from "../style";
import GetStarted from "./GetStarted";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-lightText dark:text-white ss:text-[72px] ss:leading-[100.8px]">
            Smart Software <br className="hidden sm:block" />{" "}
            <span className="text-gradient">&amp; AI Agents</span>{" "}
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-lightText dark:text-white ss:text-[68px] ss:leading-[100.8px]">
          Built for Your Business.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] text-lightDimText dark:text-dimWhite`}>
          We build custom software that does the hard work for you. Trusted by top brands to save time, reduce mistakes, and deliver results fast.
        </p>
      </div>

      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <LottieAnimation
          url="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
          className="relative z-[5] w-[100%] h-[100%]"
        />

        {/* gradient start */}
        <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
        <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
        <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[50%] w-[50%]" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
