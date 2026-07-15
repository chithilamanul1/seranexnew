import styles from "../style";

const offers = [
    {
        id: "offer-1",
        title: "Fully Custom Coded. No Templates, No Builders",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
        id: "offer-2",
        title: "Unique Premium Responsive Designs",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055685.png",
    },
    {
        id: "offer-3",
        title: "100% Mobile Responsive",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055661.png",
    },
    {
        id: "offer-4",
        title: "Result-Focused Content",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
    },
    {
        id: "offer-5",
        title: "Tailored to Your Business",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    },
    {
        id: "offer-6",
        title: "Lead-Driven Architecture",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055663.png",
    },
    {
        id: "offer-7",
        title: "Search Engine Optimized",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055669.png",
    },
    {
        id: "offer-8",
        title: "Rapid Action Support",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055664.png",
    },
];

const WhatWeOffer = () => (
    <section className={`${styles.paddingY} flex-col bg-white dark:bg-transparent`}>
        <div className="w-full flex justify-center items-center flex-col mb-16">
            <h2 className="font-poppins font-light text-[40px] text-lightText dark:text-white leading-[40px]">
                What We
            </h2>
            <h1 className="font-poppins font-black text-[80px] text-lightText dark:text-white leading-[80px] tracking-tighter uppercase">
                Offer
            </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {offers.map((offer) => (
                <div key={offer.id} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-[120px] h-[120px] rounded-full bg-gray-100 dark:bg-black-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <img src={offer.icon} alt={offer.title} className="w-[60%] h-[60%] object-contain filter dark:invert-0 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="font-poppins font-semibold text-[18px] text-lightText dark:text-white max-w-[200px] leading-[24px]">
                        {offer.title}
                    </h4>
                </div>
            ))}
        </div>
    </section>
);

export default WhatWeOffer;
