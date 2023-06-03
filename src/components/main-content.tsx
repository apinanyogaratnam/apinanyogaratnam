import Image from "next/image";

const MainContent: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="mt-20 flex flex-row justify-center space-x-4">
                <div
                    className="relative hidden w-[40%] border-4 border-black dark:border-white md:block"
                    style={{ height: "600px" }}
                >
                    <div className="h-full overflow-hidden">
                        <Image
                            src="/headshot.jpeg"
                            alt="Apinan Yogaratnam"
                            fill
                            // className="absolute z-0"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
                <div className="flex w-[35%] flex-col justify-between p-2">
                    <h1 className="text-left text-7xl font-extrabold text-[hsl(280,100%,70%)]">
                        Turning Vision Into Reality With Code And Design.
                    </h1>
                    <p className="text-xl text-black dark:text-white">
                        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                        applications. Explore my latest projects, showcasing my expertise in web development.
                    </p>
                    <div className="flex flex-row items-center justify-start space-x-4">
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
