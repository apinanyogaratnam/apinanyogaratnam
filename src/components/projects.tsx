const Projects: React.FC = () => {
    return (
        <div className="min-h-screen" id="projects">
            <h1 className="text-center text-5xl text-black dark:text-white">Projects</h1>
            <div className="mt-10 w-full grid-cols-3 md:grid">
                {[
                    { name: "Ontopical", type: "personal", website: "https://example.com" },
                    { name: "One Cart Home", type: "freelance", website: "https://example.com" },
                    { name: "SAP Fioneer", type: "personal", website: "https://example.com" },
                    { name: "AI3", type: "freelance", website: "https://ai3-client-git-main-ai3coadmin.vercel.app" },
                ].map((company, index) => (
                    <div className="p-2" key={index}>
                        <div className="flex w-full flex-col justify-between rounded-lg border-2 border-inherit p-2 text-center">
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
