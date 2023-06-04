interface IProps {
    company: {
        name: string;
        logo: string;
        startDate: string;
        endDate: string;
        position: string;
        technologies: string[];
        description: string;
        website: string;
        linkedin: string;
    };
    children: React.ReactNode;
}

const Card = (props: IProps) => {
    const { company } = props;

    return (
        <div className="flex w-[30%] flex-col justify-between rounded-lg border-2 border-inherit p-2 text-center">
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
    );
};

export default Card;
