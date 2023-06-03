import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import useTheme, { Theme } from "@/hooks/useTheme";

interface IProps {
    setCurrentSection: (section: number) => void;
};

const NavBar: React.FC = (props: IProps) => {
    const { theme, toggleTheme, oppositeTheme } = useTheme();
    const { setCurrentSection } = props;

    return (
        <nav className="flex flex-row items-center justify-around p-2">
            <div className="w-[33%] md:hidden">
                <RxHamburgerMenu size="1.5em" />
            </div>
            <div className="hidden w-[33%] flex-row items-center justify-around md:flex">
                <Link href="/" onClick={() => setCurrentSection(0)}>
                    <h1 className="text-black dark:text-white">Home</h1>
                </Link>
                <Link
                    href="#experience"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                        setCurrentSection(1);
                    }}
                >
                    <h1 className="text-black dark:text-white">Experience</h1>
                </Link>
                <Link
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        setCurrentSection(2);
                    }}
                >
                    <h1 className="text-black dark:text-white">Projects</h1>
                </Link>
                <Link
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                        setCurrentSection(3);
                    }}
                >
                    <h1 className="text-black dark:text-white">About</h1>
                </Link>
            </div>
            <div className="flex w-[33%] items-center justify-center">
                <div className="flex h-10 w-24 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                    AY
                </div>
            </div>
            <div className="w-[33%]">
                <div className="hidden flex-row items-center justify-center md:flex">
                    <div className="flex flex-row space-x-2 text-black dark:text-white">
                        <Link
                            href="https://www.linkedin.com/in/apinanyogaratnam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillLinkedin size="1.5em" className="h-8 w-8 rounded-full bg-blue-500 p-1" />
                        </Link>
                        <Link
                            className="rounded-full bg-blue-500 p-1"
                            href="https://stackoverflow.com/users/13776723/apinanyogaratnam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaStackOverflow size="1.5em" className="" />
                        </Link>
                        <Link href="https://twitter.com/apiyogaratnam">
                            <FiTwitter size="1.5em" className="h-8 w-8 rounded-full bg-blue-400 p-1" />
                        </Link>
                        <Link href="https://github.com/apinanyogaratnam">
                            <AiFillGithub size="1.5em" className="h-8 w-8 rounded-full bg-black p-1" />
                        </Link>
                    </div>
                    <div className="ml-2 mt-2">
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input
                                type="checkbox"
                                value=""
                                className="peer sr-only"
                                onChange={toggleTheme}
                                checked={theme === Theme.DARK}
                            />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Toggle {oppositeTheme} mode
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
