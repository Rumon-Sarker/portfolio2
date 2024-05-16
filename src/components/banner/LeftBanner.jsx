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
        <div className="lgl:w-1/2 w-full flex flex-col gap-20 md:border-l-2 md:pl-4 border-designColor">
            <div className="flex flex-col gap-5">
                <h3 className="font-bodyFont  text-xl"> You are Welcome</h3>
                <h1 className="text-6xl font-bold text-white">
                    {" Hi, I'm"}
                    <span className="text-designColor capitalize"> Rumon</span>
                </h1>
                <h3 className="md:text-4xl text-3xl font-bold text-white">
                    <span className="">a {text}</span>
                    <Cursor cursorColor='orange' />
                </h3>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-12 justify-between">
                <div>
                    <h1 className="text-base font-titleFont mb-5 uppercase">Fiend Me In</h1>
                    <div className="flex md:gap-3 gap-1">
                        <a href="https://www.facebook.com/md.srrumon121" target="_blank">
                            <span className="bannerIocons"><FaFacebook /></span>
                        </a>
                        <a href="https://www.linkedin.com/in/md-rumon-sarker-589209241" target="_blank">
                            <span className="bannerIocons"><FaLinkedin /></span>
                        </a>
                        <a href="https://twitter.com/Rumon_Sarker1" target="_blank">
                            <span className="bannerIocons"><FaTwitter /></span>
                        </a>
                    </div>
                </div>
                <div>
                    <h1 className="text-base font-titleFont mb-5 uppercase">My Best Skill</h1>
                    <div className="flex md:gap-4 gap-2">
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