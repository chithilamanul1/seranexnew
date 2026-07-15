import styles from "../style";

const DigitalMarketing = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} bg-white dark:bg-transparent`}>
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <h2 className="font-poppins font-light text-[60px] leading-[60px] text-lightText dark:text-white">
                All In One
            </h2>
            <h1 className="font-poppins font-black text-[100px] leading-[90px] text-lightText dark:text-white tracking-tighter">
                DIGITAL
            </h1>
            <h1 className="font-poppins font-black text-[100px] leading-[90px] text-lightText dark:text-white tracking-tighter">
                MARKETING
            </h1>
        </div>

        <div className={`flex-1 flex flex-col justify-center md:ml-10 ml-0 md:mt-0 mt-10`}>
            <p className="font-poppins font-normal text-[16px] leading-[28px] text-lightDimText dark:text-dimWhite mb-6 text-justify">
                At Seranex, the best digital marketing agency in Sri Lanka, we offer end-to-end solutions to elevate your brand's online presence. As a main digital marketing agency in Sri Lanka, our search engine optimization strategies are designed to enhance visibility, boost technical performance, and optimize content to rank better on SERPs, attracting the proper target audience organically. Complementing this, our social media advertising and marketing campaigns have interacted with users effectively, reworking informal scrollers into unswerving customers and positioning your brand on the center of meaningful conversations. Partner with a dependable digital marketing company in Sri Lanka to develop your commercial enterprise online.
            </p>
            <p className="font-poppins font-normal text-[16px] leading-[28px] text-lightDimText dark:text-dimWhite text-justify">
                In addition, as the best digital marketing agency, we specialize in Google paid search campaigns, delivering highly targeted PPC ads and Google Display Ads that drive conversions and maximize ROI. Our comprehensive Reports & Analysis service transforms raw data into actionable insights, allowing you to understand user behavior and refine your strategies for continuous digital growth. Partnering with a leading digital marketing agency in Sri Lanka and a trusted digital marketing company in Sri Lanka, Seranex ensures every aspect of your online marketing is handled strategically for sustainable success.
            </p>
        </div>
    </section>
);

export default DigitalMarketing;
