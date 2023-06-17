import Link from "next/link";
import { GrClose } from "react-icons/gr";

import useTheme, { Theme } from "@/hooks/useTheme";

interface IProps {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const HamburgerMenu = (props: IProps) => {
    const { setIsMenuOpen } = props;
    const { theme, toggleTheme, oppositeTheme } = useTheme();

    return (
        <>
            <div
                className="fixed right-0 top-0 z-[60] cursor-pointer p-2 text-black dark:text-white"
                onClick={() => setIsMenuOpen(false)}
            >
                <GrClose size="1.5em" />
            </div>
            <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white dark:bg-gray-900">
                <Link href="/" onClick={() => setIsMenuOpen(false)} aria-label="Link to home">
                    <h1 className="mb-4 text-black dark:text-white">Home</h1>
                </Link>
                <Link href="#experience" onClick={() => setIsMenuOpen(false)} aria-label="Link to experience">
                    <h1 className="mb-4 text-black dark:text-white">Experience</h1>
                </Link>
                <Link href="#projects" onClick={() => setIsMenuOpen(false)} aria-label="Link to projects">
                    <h1 className="mb-4 text-black dark:text-white">Projects</h1>
                </Link>
                <Link href="#about" onClick={() => setIsMenuOpen(false)} aria-label="Link to about">
                    <h1 className="mb-4 text-black dark:text-white">About</h1>
                </Link>
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
        </>
    );
};

export default HamburgerMenu;
