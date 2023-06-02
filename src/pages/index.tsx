import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import useTheme, { Theme } from "@/hooks/useTheme";

import { RxHamburgerMenu } from "react-icons/rx";

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

const MainContent: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="mt-20 flex flex-row justify-center space-x-4">
                <div
                    className="relative hidden w-[40%] border-4 border-black dark:border-white md:block"
                    style={{ height: "600px" }}
                >
                    <div className="h-full overflow-hidden">
                        <Image
                            src="/headshot.jpeg"
                            alt="Apinan Yogaratnam"
                            fill
                            // className="absolute z-0"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
                <div className="flex w-[35%] flex-col justify-between p-2">
                    <h1 className="text-left text-7xl font-extrabold text-[hsl(280,100%,70%)]">
                        Turning Vision Into Reality With Code And Design.
                    </h1>
                    <p className="text-xl text-black dark:text-white">
                        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                        applications. Explore my latest projects, showcasing my expertise in web development.
                    </p>
                    <div className="flex flex-row items-center justify-start space-x-4">
                        <button
                            className="mt-4 flex flex-row rounded-md border-2 border-black bg-black px-4 py-2 text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/12A4kIJ4ebThgixk10x_iJrSWfyiVP0Es/view?usp=sharing",
                                    "_blank"
                                )
                            }
                        >
                            Resume
                            <span className="transition-colors duration-0"></span>
                        </button>
                        <button className="mt-2">
                            <p className="text-black underline dark:text-white">Contact</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <div className="min-h-screen" id="experience">
            <h1 className="text-center text-5xl text-black dark:text-white">Experience</h1>
            <div className="mt-10 flex flex-col md:flex-row md:justify-around md:space-x-4">
                {[{ name: "Ontopical" }, { name: "WeMeta" }, { name: "SAP Fioneer" }].map((company, index) => (
                    <div
                        key={index}
                        className="flex w-[30%] flex-col justify-between rounded-lg border-2 border-inherit p-2 text-center"
                    >
                        <h1 className="text-2xl font-bold text-black dark:text-white">{company.name}</h1>
                        <p className="text-black dark:text-white">Logo goes here</p>
                        <p className="text-lg text-black dark:text-white">Feb 2023 - Present</p>
                        <p className="text-lg text-black dark:text-white">Software Engineer</p>
                        <p className="text-lg text-black dark:text-white">
                            Python, React, Typescript, Nextjs, Postgres, Docker, AWS, Elasticsearch
                        </p>
                        <div className="flex flex-row items-center justify-center space-x-4">
                            <button
                                className="mt-4 flex flex-row rounded-md border-2 border-black bg-black px-4 py-2 text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                                onClick={() =>
                                    window.open(
                                        "https://drive.google.com/file/d/12A4kIJ4ebThgixk10x_iJrSWfyiVP0Es/view?usp=sharing",
                                        "_blank"
                                    )
                                }
                            >
                                LinkedIn
                            </button>
                            <button
                                className="mt-4 flex flex-row rounded-md border-2 border-black bg-black px-4 py-2 text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                                onClick={() => window.open("https://ontopical.com", "_blank")}
                            >
                                Website
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen" id="projects">
            <h1 className="text-center text-5xl text-black dark:text-white">Projects</h1>
            <div className="mt-10 flex flex-col md:flex-row md:justify-around md:space-x-4">
                {[{ name: "Ontopical", type: "personal", website: "https://example.com" }, { name: "One Cart Home", type: "freelance", website: "https://example.com" }, { name: "SAP Fioneer", type: "personal", website: "https://example.com" }, {name: "AI3", type: "freelance", website: "https://ai3-client-git-main-ai3coadmin.vercel.app"}].map((company, index) => (
                    <div
                        key={index}
                        className="flex w-[30%] flex-col justify-between rounded-lg border-2 border-inherit p-2 text-center"
                    >
                        <h1 className="text-2xl font-bold text-black dark:text-white">{company.name}</h1>
                        <p className="text-black dark:text-white">Logo goes here</p>
                        <p className="text-lg text-black dark:text-white">{company.type}</p>
                        <p className="text-lg text-black dark:text-white">Feb 2023 - Present</p>
                        <p className="text-lg text-black dark:text-white">Software Engineer</p>
                        <p className="text-lg text-black dark:text-white">
                            Python, React, Typescript, Nextjs, Postgres, Docker, AWS, Elasticsearch
                        </p>
                        <div className="flex flex-row items-center justify-center space-x-4">
                            <button
                                className="mt-4 flex flex-row rounded-md border-2 border-black bg-black px-4 py-2 text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                                onClick={() =>
                                    window.open(
                                        "https://drive.google.com/file/d/12A4kIJ4ebThgixk10x_iJrSWfyiVP0Es/view?usp=sharing",
                                        "_blank"
                                    )
                                }
                            >
                                GitHub
                            </button>
                            <button
                                className="mt-4 flex flex-row rounded-md border-2 border-black bg-black px-4 py-2 text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                                onClick={() => window.open(company.website, "_blank")}
                            >
                                Website
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="min-h-screen" id="about">
            <h1 className="text-center text-5xl text-black dark:text-white">About</h1>
            <div>
                <p className="text-center text-lg text-black dark:text-white">
                    {`I'm a software engineer based in Toronto, Canada. I enjoy building things that live on the internet,
                    whether that be websites, applications, or anything in between. My goal is to always build products
                    that provide pixel-perfect, performant experiences.`}
                </p>
            </div>
            <div>
                <p className="text-center text-lg text-black dark:text-white">
                    Shortly after graduating from{" "}
                    <a
                        className="text-black dark:text-white"
                        href="https://www.ryerson.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        University of Toronto
                    </a>
                    , I joined the engineering team at{" "}
                    <a
                        className="text-black dark:text-white"
                        href="https://www.somewhere.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Somewhere
                    </a>{" "}
                    where I work on a wide variety of interesting and meaningful projects on a daily basis.
                </p>
            </div>
            <div>
                <p className="text-center text-lg text-black dark:text-white">
                    Here are a few technologies I've been working with recently:
                </p>
                <div className="flex flex-row justify-center space-x-4">
                    {["Python", "React", "Nextjs", "Typescript", "Postgres", "Docker", "AWS", "Elasticsearch"].map(
                        (tech, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center justify-center rounded-md border-2 border-black px-4 py-2 text-black dark:text-white"
                            >
                                {tech}
                            </div>
                        )
                    )}
                </div>
                <p className="text-center text-lg text-black dark:text-white">
                    {`When I'm not in front of a computer screen, I'm probably playing basketball, video games, working out, or watching Netflix.`}
                </p>
                <p className="text-center text-lg text-black dark:text-white">
                    {`Hackathons are my thing. I love building things from scratch and learning new technologies.
                    Here are the hackathons I've participated in:`}
                </p>
                <div className="flex flex-row justify-center space-x-4">
                    {["Hack the North", "Hack the North", "Hack the North", "Hack the North"].map((hackathon, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-center rounded-md border-2 border-black px-4 py-2 text-black dark:text-white"
                        >
                            {hackathon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Apinan's portfolio"}</title>
                <meta name="description" content="Apinan Yogaratnam portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-slate-950">
                <NavBar />
                <MainContent />
                <Experience />
                <Projects />
                <About />
            </main>
        </>
    );
};

export default Home;
