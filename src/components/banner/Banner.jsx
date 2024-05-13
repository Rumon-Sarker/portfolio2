import LeftBanner from "./LeftBanner";
import bannerImg from "../../assets/images/bannerImg1.png"


const Banner = () => {

    return (
        <section id="home" className="w-full py-20 flex border-b-2 border-b-black">
            <LeftBanner></LeftBanner>
            <div className="w-1/2 flex mx-auto justify-center items-center relative">
                <img className="w-[400px] h-[400px] mt-4 rounded-full z-20" src={bannerImg} alt="bannerImg" />
                <div className="absolute bg-gradient-to-r from-slate-700 to-black w-[420px] h-[420px] rounded-full justify-center mx-auto items-center shadow-2xl shadow-gray-700">
                </div>
            </div>

        </section>
    );
};

export default Banner;