import { technologyLogos } from "@/components/logo";
import { Technologies } from "@/constants/technologies";

const Experience: React.FC = () => {
    return (
        <div className="min-h-screen" id="experience">
            <h1 className="text-center text-5xl text-black dark:text-white">Experience</h1>
            <div className="mt-10 flex flex-col md:flex-row items-center space-y-4 md:justify-around md:space-x-4 md:space-y-0">
                {[
                    {
                        name: "Ontopical",
                        start: "Feb 2023",
                        end: "Present",
                        position: "Software Engineer",
                        technologies: [
                            Technologies.PYTHON,
                            Technologies.REACT,
                            Technologies.TYPESCRIPT,
                            Technologies.NEXTJS,
                            Technologies.POSTGRESQL,
                            Technologies.DOCKER,
                            Technologies.AWS,
                            Technologies.ELASTICSEARCH,
                        ],
                    },
                    {
                        name: "WeMeta",
                        start: "July 2021",
                        end: "Feb 2023",
                        position: "Software Engineer",
                        technologies: [
                            Technologies.PYTHON,
                            Technologies.REACT,
                            Technologies.TYPESCRIPT,
                            Technologies.NEXTJS,
                            Technologies.POSTGRESQL,
                            Technologies.DOCKER,
                            Technologies.AWS,
                            Technologies.KAFKA,
                        ],
                    },
                    {
                        name: "SAP Fioneer",
                        start: "Jan 2022",
                        end: "Aug 2022",
                        position: "Software Engineer",
                        technologies: [
                            Technologies.JAVA,
                            Technologies.SPRING,
                            Technologies.REACT,
                            Technologies.JAVASCRIPT,
                            Technologies.POSTGRESQL,
                            Technologies.DOCKER,
                            Technologies.AZURE,
                            Technologies.KAFKA,
                            Technologies.KOTLIN,
                        ],
                    },
                ].map((company, index) => (
                    <div
                        key={index}
                        className="flex w-[30%] flex-col justify-between rounded-lg border-2 border-inherit p-2 text-center items-center"
                    >
                        <h1 className="text-2xl font-bold text-black dark:text-white">{company.name}</h1>
                        <p className="text-black dark:text-white">Logo goes here</p>
                        <p className="text-lg text-black dark:text-white">
                            {company.start} - {company.end}
                        </p>
                        <p className="text-lg text-black dark:text-white">{company.position}</p>
                        <p className="text-lg text-black dark:text-white">
                            {company.technologies.map((technology: Technologies, index: number) => (
                                <span key={index} className="text-black dark:text-white">
                                    {technologyLogos[technology]}
                                </span>
                            ))}
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

export default Experience;
