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
                    {`Here are a few technologies I've been working with recently:`}
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
                    {["Hack the North", "Hack the North", "Hack the North", "Hack the North"].map(
                        (hackathon, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center justify-center rounded-md border-2 border-black px-4 py-2 text-black dark:text-white"
                            >
                                {hackathon}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
