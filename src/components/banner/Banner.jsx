import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (
        <section id="home" className="w-full pt-10 pb-20 gap-12 xl:gap-0 flex flex-col lgl:flex-row border-b-2 border-b-black">

            <LeftBanner></LeftBanner>
            <RightBanner></RightBanner>
        </section>
    );
};

export default Banner;