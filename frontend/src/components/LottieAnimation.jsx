import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

const LottieAnimation = ({ url, className = "", style = {} }) => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.warn("Failed to load Lottie animation:", err));
    }, [url]);

    if (!animationData) {
        return <div className={className} style={{ ...style, minHeight: 200 }} />;
    }

    return (
        <Lottie
            animationData={animationData}
            loop
            autoplay
            className={className}
            style={style}
        />
    );
};

export default LottieAnimation;
