import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import useTheme, { Theme } from "@/hooks/useTheme";

const NavBar: React.FC = () => {
    const { theme, toggleTheme, oppositeTheme } = useTheme();

    return (
        <nav className="flex flex-row items-center justify-around p-2">
            <div className="w-[33%] md:hidden">
                <RxHamburgerMenu size="1.5em" />
            </div>
            <div className="hidden w-[33%] flex-row items-center justify-around md:flex">
                <Link href="/">
                    <h1 className="text-black dark:text-white">Home</h1>
                </Link>
                <Link
                    href="#experience"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <h1 className="text-black dark:text-white">Experience</h1>
                </Link>
                <Link
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <h1 className="text-black dark:text-white">Projects</h1>
                </Link>
                <Link
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
                    <h1 className="text-black dark:text-white">Social Links</h1>
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
