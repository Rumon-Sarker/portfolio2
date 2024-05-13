import { backEndIcon, mernIcon } from "../../assets";
import Title from "../Layouts/Title";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    return (
        <section id="features" className="w-full py-20  pb-20  border-b-2 border-b-black">
            <Title title="Features" desc="What i Do" />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
                <FeaturesCard title="Front End Development" icon={backEndIcon}></FeaturesCard>
                <FeaturesCard title="Back End Development" icon={backEndIcon}></FeaturesCard>
                <FeaturesCard title="Mern Stack Development" icon={mernIcon}></FeaturesCard>

            </div>
        </section>
    );
};

export default Features;