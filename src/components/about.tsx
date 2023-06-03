const About = () => {
    return (
        <div className="min-h-screen" id="about">
            <h1 className="text-center text-5xl text-black dark:text-white">About</h1>
            <div className="mt-10 space-y-10 p-5">
                <div>
                    <p className="text-center text-xl text-black dark:text-white">
                        {`I'm a software engineer based in Toronto, Canada. I enjoy building things that live on the internet,
                    whether that be websites, applications, or anything in between. My goal is to always build products
                    that provide pixel-perfect, performant experiences.`}
                    </p>
                </div>
                <div>
                    <p className="text-center text-lg text-black dark:text-white">
                        {`I'm currently studying at the`}{" "}
                        <a
                            className="text-black dark:text-white"
                            href="https://www.utoronto.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of Toronto
                        </a>
                        {` pursuing a Bachelor of Science.`}
                    </p>
                </div>
                <div>
                    <p className="text-center text-lg text-black dark:text-white">
                        {`I am really passionate about data driven applications.`}
                    </p>
                </div>
                <div>
                    <p className="text-center text-lg text-black dark:text-white">
                        {`Here are a few technologies I've been working with recently:`}
                    </p>
                    <div className="mt-2 flex flex-row justify-center space-x-4">
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
                </div>
                <div>
                    <p className="text-center text-lg text-black dark:text-white">
                        {`Hackathons are my thing. I love building things from scratch and learning new technologies.
                    Here are the hackathons I've participated in:`}
                    </p>
                    <div className="flex flex-row justify-center space-x-4">
                        {[
                            {
                                name: "MacHacks",
                                link: "https://machacks.ca",
                                year: 2021,
                                projectUrl: null,
                                github: null,
                                youtube: null,
                                wonPrize: false,
                            },
                            {
                                name: "YuHacks",
                                link: "https://yuhacks.ca",
                                year: 2021,
                                projectUrl: null,
                                github: null,
                                youtube: null,
                                wonPrize: false,
                            },
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
                                className="flex flex-row items-center justify-center rounded-md border-2 border-black px-4 py-2 text-black dark:text-white"
                            >
                                {hackathon.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
