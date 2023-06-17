import Link from "next/link";

import { TechnologyLogos, Button } from "@/components";
import { Technologies, TechnologiesWebsite } from "@/constants/technologies";

const Experience: React.FC = () => {
    return (
        <div className="min-h-screen">
            <h1 className="text-center text-5xl text-black dark:text-white">Experience</h1>
            <div className="mt-10 flex flex-col items-center space-y-4 md:flex-row md:justify-around md:space-x-4 md:space-y-0">
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
                            Technologies.KIBANA,
                        ],
                        website: "https://www.ontopical.com",
                        linkedin: "https://www.linkedin.com/company/ontopical",
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
                        website: "https://www.wemeta.world",
                        linkedin: "https://www.linkedin.com/company/wemeta",
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
                        website: "https://www.sapfioneer.com",
                        linkedin: "https://www.linkedin.com/company/fioneer",
                    },
                ].map((company, index) => (
                    <div
                        key={index}
                        className="flex w-full flex-col items-center justify-between rounded-lg border-2 border-inherit p-2 text-center md:w-[30%]"
                    >
                        <h1 className="text-2xl font-bold text-black dark:text-white">{company.name}</h1>
                        <p className="text-black dark:text-white">Logo goes here</p>
                        <p className="text-lg text-black dark:text-white">
                            {company.start} - {company.end}
                        </p>
                        <p className="text-lg text-black dark:text-white">{company.position}</p>
                        <div className="flex flex-row text-lg text-black dark:text-white">
                            {company.technologies.map((technology: Technologies, index: number) => (
                                <Link href={TechnologiesWebsite[technology]} key={index} target="_blank" rel="noopener noreferrer">
                                    <div className="p-1">
                                        <span className="text-black dark:text-white">
                                            {TechnologyLogos[technology]}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-row items-center justify-center space-x-4">
                            <Button
                                label="LinkedIn"
                                onClick={() =>
                                    window.open(
                                        "https://drive.google.com/file/d/12A4kIJ4ebThgixk10x_iJrSWfyiVP0Es/view?usp=sharing",
                                        "_blank"
                                    )
                                }
                            />
                            <Link href={company.website} target="_blank" rel="noopener noreferrer">
                                <Button label="Website" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
