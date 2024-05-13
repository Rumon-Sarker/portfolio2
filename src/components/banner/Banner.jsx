import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {

    const [text] = useTypewriter({
        words: ['Web Developer', 'Front End Developer', 'Mern Stack Developer', 'Nextjs Developer!'],
        loop: 0,
        typeSpeed: 20,
        deleteSpeed: 30,
        delaySpeed: 1500

    });

    return (
        <section id="home" className="w-full py-20 flex border-b-2 border-b-black">
            <div className=" w-1/2 flex flex-col gap-8">
                <h3 className=" font-normal font-bodyFont text-3xl"> You are Welcome</h3>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm
                    <span className="text-designColor capitalize"> Rumon</span>
                </h1>
                <h3 className="text-4xl font-bold text-white">
                    <span className="">a {text}</span>
                    <Cursor cursorColor='orange' />
                </h3>
                <p className="text-base font-bodyFont leading-6 tracking-wid">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, temporibus possimus ad quod illo ipsum sapiente sit vitae sint tempore nemo! Nihil assumenda suscipit at quam nisi sequi nobis quisquam?</p>
                <div>
                    <h1 className="text-base font-titleFont mb-5 uppercase">Fiend Me In</h1>
                    <div className="flex gap-8">
                        <span className="bannerIocons"><FaFacebook /></span>
                        <span className="bannerIocons"><FaLinkedin /></span>
                        <span className="bannerIocons"><FaTwitter /></span>
                    </div>
                </div>
            </div>
            <div className="w-1/2">

            </div>

        </section>
    );
};

export default Banner;