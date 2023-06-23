import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen">
            <h1 className="text-center text-5xl text-black dark:text-white">Projects</h1>
            <div className="mt-10 w-full grid-cols-3 md:grid">
                {[
                    {
                        name: "Api Key Management System",
                        type: "personal",
                        website: "https://akms.vercel.app",
                        github: "https://github.com/apinanyogaratnam/akms",
                        logo: "/no-image.png",
                    },
                    {
                        name: "AI3",
                        type: "freelance",
                        website: "https://ai3-client-git-main-ai3coadmin.vercel.app",
                        github: "https://github.com/ai3coadmin/ai3-client",
                        logo: "/ai3-project-logo.png",
                    },
                    {
                        name: "Currency Converter ChatGPT Plugin",
                        type: "personal",
                        website: "https://currency-convert-chatgpt-plugin.vercel.app", // TODO: make a landing page for this
                        github: "https://github.com/apinanyogaratnam/currency-convert-chatgpt-plugin",
                        logo: "/currency-converter-chatgpt-plugin-logo.png",
                    },
                ].map((company, index) => (
                    <div className="p-2" key={index}>
                        <div className="flex w-full flex-col items-center justify-between rounded-lg border-2 border-inherit p-2 text-center">
                            <h1 className="text-2xl font-bold text-black dark:text-white">{company.name}</h1>
                            <Image
                                src={company.logo || ""}
                                alt={company.name}
                                width={200}
                                height={200}
                                className="h-[200px] w-[350px] rounded-lg"
                            />
                            <p className="text-lg text-black dark:text-white">{company.type}</p>
                            <p className="text-lg text-black dark:text-white">
                                Python, React, Typescript, Nextjs, Postgres, Docker, AWS, Elasticsearch
                            </p>
                            <div className="flex flex-row items-center justify-center space-x-4">
                                <Link href={company.github} target="_blank" rel="noopener noreferrer" aria-label="Link to GitHub">
                                    <Button label="GitHub" />
                                </Link>
                                <Link href={company.website} target="_blank" rel="noopener noreferrer" aria-label="Link to website">
                                    <Button label="Website" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
