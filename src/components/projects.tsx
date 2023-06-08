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
                        website: "",
                        github: "https://github.com/apinanyogaratnam/akms",
                    },
                    { name: "AI3", type: "freelance", website: "https://ai3-client-git-main-ai3coadmin.vercel.app" },
                ].map((company, index) => (
                    <div className="p-2" key={index}>
                        <div className="flex w-full flex-col justify-between rounded-lg border-2 border-inherit p-2 text-center">
                            <h1 className="text-2xl font-bold text-black dark:text-white">{company.name}</h1>
                            <p className="text-black dark:text-white">Image goes here</p>
                            <p className="text-lg text-black dark:text-white">{company.type}</p>
                            <p className="text-lg text-black dark:text-white">
                                Python, React, Typescript, Nextjs, Postgres, Docker, AWS, Elasticsearch
                            </p>
                            <div className="flex flex-row items-center justify-center space-x-4">
                                <Button
                                    label="GitHub"
                                    onClick={() =>
                                        window.open(
                                            "https://drive.google.com/file/d/12A4kIJ4ebThgixk10x_iJrSWfyiVP0Es/view?usp=sharing",
                                            "_blank"
                                        )
                                    }
                                />
                                <Button label="Website" onClick={() => window.open(company.website, "_blank")} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
