import { backEndIcon, frontEnd, mernIcon } from "../../assets";
import Title from "../Layouts/Title";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    return (
        <section id="features" className="w-full py-20  pb-20  border-b-2 border-b-black">
            <Title title="Features" desc="What i Do" />
            <p className="text-xl font-titleFont leading-relaxed tracking-wid mb-12  ">As a Junior Frontend Developer, my aim is to grow alongside a dynamic team, honing my skills in HTML, CSS, JavaScript, React, Nextjs, Nodejs and MongoDb to craft engaging user experiences. Committed to learning and adapting swiftly,  I aspire to contribute creatively to projects, driven by a passion for innovation and a dedication to delivering high-quality solutions.</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
                <FeaturesCard title="Front End Development" icon={frontEnd}></FeaturesCard>
                <FeaturesCard title="Back End Development" icon={backEndIcon}></FeaturesCard>
                <FeaturesCard title="Mern Stack Development" icon={mernIcon}></FeaturesCard>

            </div>
        </section>
    );
};

export default Features;