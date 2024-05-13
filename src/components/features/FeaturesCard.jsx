import { HiArrowRight } from "react-icons/hi";

const FeaturesCard = ({ title, icon }) => {
    return (
        <div className="w-full px-12 h-80 py-10 rounded-lg shadow-ahadowOne flex text-center mx-auto items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
            <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-9 translate-y-10 hover:translate-y-0 transform duration-500 ">
                    <div>
                        <img className="w-32 mx-auto" src={icon} alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="text-3xl font-titleFont font-bold text-gray-300">{title}</h4>
                        <span className="text-3xl text-designColor">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;