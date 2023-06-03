import { type NextPage } from "next";
import Head from "next/head";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

import About from "@/components/about";
import Experience from "@/components/experience";
import MainContent from "@/components/main-content";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";

const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

        // Scroll smoothly to the element
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
};

const Home: NextPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const sectionIds = ["main-content", "experience", "projects", "about"];

    const scrollToNextSection = () => {
        if (currentSection < sectionIds.length - 1) {
            const nextSectionId = sectionIds[currentSection + 1];
            const nextSection = document.getElementById(nextSectionId);

            if (nextSection) {
                const nextSectionPosition = nextSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: nextSectionPosition, behavior: "smooth" });
                setCurrentSection(currentSection + 1);
            }
        }
    };
    return (
        <>
            <Head>
                <title>{"Apinan's portfolio"}</title>
                <meta name="description" content="Apinan Yogaratnam portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="ts bg-white p-2 dark:bg-gray-900">
                <BsArrowUpCircle
                    className="fixed bottom-5 right-5 cursor-pointer text-4xl text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
                <BsArrowDownCircle
                    className="fixed bottom-5 right-16 cursor-pointer text-4xl text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                />
                <NavBar />
                <MainContent />
                <Experience />
                <Projects />
                <About />
            </main>
        </>
    );
};

export default Home;
