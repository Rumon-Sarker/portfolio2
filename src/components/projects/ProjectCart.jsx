import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCart = ({ title, img, used, desc }) => {
    return (
        <div className="w-full h-auto py-10 p-2 rounded-lg shadow-ahadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100" >
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img className="w-full h-64 object-cover group-hover:scale-110 duration-500" src={img} alt="project" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="w-full mt-5 flex flex-col gap-6 ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl uppercase text-designColor font-bodyFont">{title}</h1>
                        <div className="flex gap-4">
                            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                <FaGithub />
                            </span>
                            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                <FaGlobe />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="font-bodyFont">
                    <span>{desc}</span>
                </div>
                <div className="flex gap-4 text-gray-600 mt-4 -mb-6 font-semibold">
                    <span>{used.freamwork}</span>
                    <span>{used.backend}</span>
                    <span>{used.dataBase}</span>
                </div>
            </div>
        </div >
    );
};

export default ProjectCart;