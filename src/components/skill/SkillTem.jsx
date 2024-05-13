import { motion } from "framer-motion";
const SkillTem = ({ name, value }) => {
    return (
        <div className="overflow-x-hidden">
            <p className="text-xl uppercase font-bold">{name}:</p>
            <span className="w-full h-3 inline-flex bg-gray-500 rounded-md mt-2">
                <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    style={{ width: `${value}%` }}
                    className={`h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-800 rounded-md relative`}>
                    <span className="absolute -top-7 right-0">{value}%</span>
                </motion.span>
            </span>
        </div>
    );
};

export default SkillTem;