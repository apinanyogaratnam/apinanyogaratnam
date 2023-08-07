import Link from "next/link";

import { Technologies } from "@/constants/technologies";

import Button from "./button";
import TechnologyLogos from "./logo";

const About = () => {
    return (
        <div className="min-h-screen">
            <h1 className="text-center text-5xl text-black dark:text-white">About</h1>
            <div className="mt-10 space-y-20 p-5">
                <div className="flex flex-row">
                    <div className="w-1/2" />
                    <p className="w-1/2 text-xl text-black dark:text-white">
                        {`I'm a software engineer based in Toronto, Canada. I enjoy building things that live on the internet,
                    whether that be websites, applications, or anything in between. My goal is to always build products
                    that provide pixel-perfect, performant experiences. I am really passionate about data driven applications.`}
                    </p>
                </div>
                <div className="flex flex-row">
                    <p className="w-1/2 text-start text-lg text-black dark:text-white">
                        {/* {`I'm currently studying at the`}{" "}
                        <a
                            className="text-black dark:text-white"
                            href="https://www.utoronto.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of Toronto
                        </a>
                        {` pursuing a Bachelor of Science.`} */}
                        {`This journey started in January 2019 when I was close friends with someone who know a bit of programming.
                        I thought it was cool so I enrolled in the Computer Science course at SJPII High School. I was hooked. Copying
                        and pasting code from google drive to take home and go above and beyond with my projects was my thing. I was
                        in love with Java and realized that I wanted to pursue a career in software engineering. I applied to the
                        University of Toronto and got accepted into the Computer Science program. I started taking statistic courses
                        and realized I really enjoyed data and data driven applications. When I'm not in front of a computer screen, I'm probably playing basketball, video games, working out, or watching Netflix.`}
                    </p>
                    <div className="w-1/2" />
                </div>
                <div>
                    <p className="text-center text-lg text-black dark:text-white">
                        {`Here are a few technologies I've been working with recently:`}
                    </p>
                    <div className="mt-2 flex flex-row justify-center space-x-4 overflow-y-scroll">
                        {[
                            Technologies.PYTHON,
                            Technologies.REACT,
                            Technologies.NEXTJS,
                            Technologies.TYPESCRIPT,
                            Technologies.POSTGRESQL,
                            Technologies.DOCKER,
                            Technologies.AWS,
                            Technologies.ELASTICSEARCH,
                        ].map((tech: Technologies, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center rounded-md border-2 border-black px-4 py-2 text-black dark:border-white dark:text-white"
                            >
                                {TechnologyLogos[tech]}
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-center text-lg text-black dark:text-white">
                        {`Hackathons are my thing. I love building things from scratch and learning new technologies.
                    Here are the hackathons I've participated in:`}
                    </p>
                    <div className="mx-auto flex w-[80%] flex-row items-center space-x-4 overflow-y-scroll">
                        {[
                            // {
                            //     name: "MacHacks",
                            //     link: "https://machacks.ca",
                            //     year: 2021,
                            //     projectUrl: null,
                            //     github: null,
                            //     youtube: null,
                            //     wonPrize: false,
                            // },
                            // {
                            //     name: "YuHacks",
                            //     link: "https://yuhacks.ca",
                            //     year: 2021,
                            //     projectUrl: null,
                            //     github: null,
                            //     youtube: null,
                            //     wonPrize: false,
                            // },
                            {
                                name: "Nervos",
                                link: "https://gitcoin.co/hackathon/nervos/",
                                year: 2021,
                                projectUrl: null,
                                github: "https://github.com/apinanyogaratnam/nervos-hackathon",
                                youtube: null,
                                wonPrize: false,
                            },
                            {
                                name: "HackFS",
                                link: "https://ethglobal.com/events/hackfs2021",
                                year: 2021,
                                projectUrl: "https://ethglobal.com/showcase/landpeer-kng96",
                                github: "https://github.com/wemeta-labs/hackfs-2021",
                                youtube: null,
                                wonPrize: true,
                            },
                            {
                                name: "EthOnline",
                                link: "https://ethglobal.com/events/ethonline2021",
                                year: 2021,
                                projectUrl: "https://ethglobal.com/showcase/innovatract-o8eb6",
                                github: "https://github.com/TheChronicMonster/Innovatract",
                                youtube: "https://www.youtube.com/watch?v=fd-967u5cxE",
                                wonPrize: true,
                            },
                            {
                                name: "Hack the Valley",
                                link: "https://hackthevalley.io",
                                year: 2021,
                                projectUrl: "https://devpost.com/software/companion-htv5",
                                github: "https://github.com/Companion-HTV5",
                                youtube: null,
                                wonPrize: true,
                            },
                            {
                                name: "UniCode",
                                link: "https://www.unicodehacks.com",
                                year: 2021,
                                projectUrl: "https://ethglobal.com/showcase/decentralized-banking-functions-xqb6x",
                                github: "https://github.com/apinanyogaratnam/decentralized-banking-functions",
                                youtube: null,
                                wonPrize: false,
                            },
                            {
                                name: "ChainLink",
                                link: "https://chain.link/hackathon",
                                year: 2021,
                                projectUrl: "https://devpost.com/software/metaetf",
                                github: "https://github.com/apinanyogaratnam/chainlink-fall-2021",
                                youtube: "https://www.youtube.com/watch?v=OISg-5iYjsI",
                                wonPrize: false,
                            },
                            {
                                name: "Web3 Jam",
                                link: "https://ethglobal.com/events/web3jam",
                                year: 2021,
                                projectUrl: "https://ethglobal.com/showcase/nft-minter-4kqn6",
                                github: "https://github.com/apinanyogaratnam/nft-minter",
                                youtube: null,
                                wonPrize: true,
                            },
                            {
                                name: "Hack Western",
                                link: "https://hackwestern.com",
                                year: 2021,
                                projectUrl: "https://devpost.com/software/doctorize-ai",
                                github: "https://github.com/Doctorize-AI",
                                youtube: "https://www.youtube.com/watch?v=0aETKPnn_hg",
                                wonPrize: true,
                            },
                        ].map((hackathon, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center rounded-md border-2 border-black px-4 py-2 text-black dark:border-white dark:text-white"
                            >
                                {hackathon.name} {hackathon.year}
                                <div className="flex flex-row items-center space-x-4">
                                    {hackathon.projectUrl && (
                                        <Link href={hackathon.projectUrl || ""}>
                                            <Button label="Project" />
                                        </Link>
                                    )}

                                    {hackathon.github && (
                                        <Link href={hackathon.github || ""}>
                                            <Button label="Github" />
                                        </Link>
                                    )}

                                    <Link href={hackathon.link}>
                                        <Button label="Website" />
                                    </Link>

                                    {hackathon.youtube && (
                                        <Link href={hackathon.youtube || ""}>
                                            <Button label="Youtube" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
