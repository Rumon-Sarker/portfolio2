import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { contactImg } from "../../assets";

const ContactLeft = () => {
    return (
        <div className="w-[35%] flex flex-col gap-5 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-ahadowOne">
            <img className="w-full h-64 object-cover rounded-lg bg-gray-700" src={contactImg} alt="contact" />
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">Rumon Sarker</h2>
                <p className="text-lg font-normal text-gray-400">
                    Front end developer
                </p>
                <p className="text-base text-gray-400 flex items-center gap-3">Phone <span className="text-lightText">017 8352 6467</span></p>
                <p className="text-base text-gray-400 flex items-center gap-3">Email <span className="text-lightText">mdsrrumon1234@gmail.com</span></p>
            </div>
            <div className="mt-5">
                <h1 className="text-3xl font-titleFont mb-5 uppercase">Fiend Me In</h1>
                <div className="flex gap-8">
                    <span className="bannerIocons"><FaFacebook /></span>
                    <span className="bannerIocons"><FaLinkedin /></span>
                    <span className="bannerIocons"><FaTwitter /></span>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;