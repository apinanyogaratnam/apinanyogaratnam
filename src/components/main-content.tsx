import Image from "next/image";

const MainContent: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="mt-10 flex flex-col items-center justify-center md:mt-20 md:flex-row md:space-x-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-black dark:border-white md:h-[600px] md:w-[34%] md:rounded-none">
                    <Image
                        src="/headshot.jpeg"
                        alt="Apinan Yogaratnam"
                        fill
                        loading="eager"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="flex h-full w-full flex-col justify-between p-2 md:h-[550px] md:w-[35%]">
                    <h1 className="text-left text-center text-3xl font-extrabold text-[hsl(280,100%,70%)] md:text-left md:text-5xl lg:text-7xl">
                        Turning Vision Into Reality With Code And Design.
                    </h1>
                    <p className="mt-5 text-center text-lg text-black dark:text-white md:text-left md:text-xl">
                        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                        applications. Explore my latest projects, showcasing my expertise in web development.
                    </p>
                    <div className="flex flex-row items-center justify-center space-x-4 md:justify-start">
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

export default MainContent;
