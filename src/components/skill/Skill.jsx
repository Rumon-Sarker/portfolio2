
import Title from "../Layouts/Title";
import SkillTem from "./SkillTem";
const Skill = () => {
    return (
        <section id="skill" className="w-full py-20  border-b-2 border-b-black">
            <Title title="My Skill" desc="Developments Skills" />
            <div className="md:flex  md:gap-20">
                <div className="mt-3 md:w-1/2 flex flex-col gap-6">
                    <SkillTem name="Html" value={90} />
                    <SkillTem name="Css" value={80} />
                    <SkillTem name="Jsvascript" value={90} />
                    <SkillTem name="React" value={85} />
                    <SkillTem name="Mongodb" value={78} />
                </div>
                <div className="mt-3 md:w-1/2 flex flex-col gap-6">
                    <SkillTem name="Next js" value={75} />
                    <SkillTem name="node js" value={80} />
                    <SkillTem name="Github" value={85} />
                    <SkillTem name="Tailwind css" value={80} />
                </div>
            </div>
        </section>
    );
};

export default Skill;