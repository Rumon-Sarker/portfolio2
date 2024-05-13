import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (
        <section id="home" className="w-full py-20 flex border-b-2 border-b-black">
            <LeftBanner></LeftBanner>
            <RightBanner></RightBanner>
        </section>
    );
};

export default Banner;