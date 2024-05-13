import { FaFacebook, FaJs, FaLinkedin, FaNode, FaReact, FaTwitter } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const LeftBanner = () => {
    // typeWriter 
    const [text] = useTypewriter({
        words: ['Web Developer', 'Front End Developer', 'Mern Stack Developer', 'Nextjs Developer!'],
        loop: 0,
        typeSpeed: 20,
        deleteSpeed: 30,
        delaySpeed: 1500

    });
    return (
        <div className=" w-1/2 flex flex-col gap-8 md:border-l-2 md:pl-6 border-designColor">
            <h3 className=" font-normal font-bodyFont text-3xl"> You are Welcome</h3>
            <h1 className="text-6xl font-bold text-white">
                {" Hi, I'm"}
                <span className="text-designColor capitalize"> Rumon</span>
            </h1>
            <h3 className="text-4xl font-bold text-white">
                <span className="">a {text}</span>
                <Cursor cursorColor='orange' />
            </h3>
            {/* <p className="text-base font-bodyFont leading-6 tracking-wid">I am a junior Frontend developer in React & Nextjs.

            </p> */}
            <div className="flex justify-between mt-12">
                <div>
                    <h1 className="text-3xl font-titleFont mb-5 uppercase">Fiend Me In</h1>
                    <div className="flex gap-8">
                        <span className="bannerIocons"><FaFacebook /></span>
                        <span className="bannerIocons"><FaLinkedin /></span>
                        <span className="bannerIocons"><FaTwitter /></span>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-titleFont mb-5 uppercase">My Best Skill</h1>
                    <div className="flex gap-8">
                        <span className="bannerIocons"><FaReact /></span>
                        <span className="bannerIocons"><FaJs /></span>
                        <span className="bannerIocons"><RiNextjsFill /></span>
                        <span className="bannerIocons"><FaNode /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBanner;