import { Link } from "react-scroll";
import { logo } from "../../assets";
import { navItems } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [showmenu, setShowMenu] = useState(false);
    return (
        <div className="flex w-full sticky top-0 z-50 justify-between bg-bodyColor border-b-2 border-black items-center font-titleFont h-32">
            <div>
                <img className="w-28 rounded-lg" src={logo} alt="logo" />
            </div>
            <div>
                <ul className="hidden mdl:inline-flex gap-12 items-center">
                    {
                        navItems?.map(({ id, title, link }) =>
                            <li className="text-base font-normal hover:text-designColor duration-500 tracking-wide cursor-pointer font-bodyFont" key={id}>
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}

                                >
                                    {title}
                                </Link>
                            </li>)
                    }
                </ul>
                {
                    !showmenu ? <span onClick={() => setShowMenu(!showmenu)} className="text-xl bg-black mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-designColor cursor-pointer">
                        <FiMenu />
                    </span>
                        : ""
                }

                {
                    showmenu && (
                        <div className="w-[70%] flex flex-col pt-12  gap-12 mdl:hidden h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-5 scrolbar_hide">
                            <div>
                                <img className="w-20 rounded-lg" src={logo} alt="logo" />
                            </div>
                            <span onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-gray-500 hover:text-designColor duration-500 pt-4 text-2xl font-semibold font-titleFont  cursor-pointer">
                                {/* X */}
                                <MdClose />
                            </span>
                            <div>
                                <ul className="flex flex-col gap-6">
                                    {
                                        navItems?.map(({ id, title, link }) =>
                                            <li className="text-base font-normal hover:text-designColor duration-500 tracking-wide cursor-pointer font-bodyFont" key={id}>
                                                <Link
                                                    onClick={() => setShowMenu(false)}
                                                    activeClass="active"
                                                    to={link}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={50}
                                                    duration={500}

                                                >
                                                    {title}
                                                </Link>
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;