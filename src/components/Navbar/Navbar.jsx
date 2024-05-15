import { Link } from "react-scroll";
import { logo } from "../../assets";
import { navItems } from "../../constants";

const Navbar = () => {
    return (
        <div className="flex w-full sticky top-0 z-50 justify-between bg-bodyColor border-b-2 border-black items-center font-titleFont h-32">
            <div>
                <img className="w-28 rounded-lg" src={logo} alt="logo" />
            </div>
            <div>
                <ul className="flex gap-12 items-center">
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
            </div>
        </div>
    );
};

export default Navbar;