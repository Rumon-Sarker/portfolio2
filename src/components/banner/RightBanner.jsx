import { bannerImg1 } from "../../assets";

const RightBanner = () => {
    return (
        <div className="w-1/2 flex mx-auto justify-center items-center relative">
            <img className="w-[400px] h-[400px] mt-4 rounded-full z-20" src={bannerImg1} alt="bannerImg" />
            <div className="absolute bg-gradient-to-r from-slate-700 to-black w-[420px] h-[420px] rounded-full justify-center mx-auto items-center shadow-2xl shadow-gray-700">
            </div>
        </div>
    );
};

export default RightBanner;