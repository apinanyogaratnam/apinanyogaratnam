import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import useTheme, { Theme } from "@/hooks/useTheme";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineOpenInNew } from "react-icons/md";

const NavBar: React.FC = () => {
    const { theme, toggleTheme, oppositeTheme } = useTheme();

    return (
        <nav className="flex flex-row items-center justify-around p-5">
            <div className="w-[33%] md:hidden">
                <RxHamburgerMenu size="1.5em" />
            </div>
            <div className="hidden w-[33%] flex-row items-center justify-around md:flex">
                <Link href="/">
                    <h1 className="text-black dark:text-white">Home</h1>
                </Link>
                <Link href="/experience">
                    <h1 className="text-black dark:text-white">Experience</h1>
                </Link>
                <Link href="/projects">
                    <h1 className="text-black dark:text-white">Projects</h1>
                </Link>
                <Link href="/about">
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

const MainContent: React.FC = () => {
    return (
        <div className="mt-20 flex flex-row items-center justify-center space-x-4">
            <div className="w-[27%]">
                <div className="overflow-hidden border-4 border-black dark:border-white">
                    <img src="/headshot.jpeg" alt="Apinan Yogaratnam" />
                </div>
            </div>
            <div className="w-[27%]">
                <h1 className="text-justify text-6xl font-extrabold text-[hsl(280,100%,70%)]">
                    Bridging Imagination and Reality Through Code
                </h1>
                <p className="text-black dark:text-white">
                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                    Explore my latest projects, showcasing my expertise in web development.
                </p>
                <button
                    className="mt-4 flex flex-row rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                    onClick={() =>
                        window.open(
                            "https://drive.google.com/file/d/12A4kIJ4ebThgixk10x_iJrSWfyiVP0Es/view?usp=sharing",
                            "_blank"
                        )
                    }
                >
                    Resume
                    <span className="transition-colors duration-0">
                        <MdOutlineOpenInNew size="1.5em" className="" />
                    </span>
                </button>
            </div>
        </div>
    );
};

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Apinan's portfolio"}</title>
                <meta name="description" content="Apinan Yogaratnam portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={`min-h-screen bg-white dark:bg-slate-800`}>
                    <NavBar />
                    <MainContent />
                </div>
            </main>
        </>
    );
};

export default Home;
