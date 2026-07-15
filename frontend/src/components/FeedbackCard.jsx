import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-white dark:bg-transparent border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:border-transparent shadow-sm dark:shadow-none transition-all duration-300">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain filter dark:invert-0 invert" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-lightText dark:text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-lightText dark:text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-lightDimText dark:text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
