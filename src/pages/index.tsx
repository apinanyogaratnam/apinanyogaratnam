import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

import { About, Experience, MainContent, NavBar, Projects } from "@/components";

const sectionIds = ["main-content", "experience", "projects", "about"];

const Home: NextPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionIndex = sectionIds.indexOf(entry.target.id);
                        setCurrentSection(sectionIndex);
                    }
                });
            },
            { threshold: 0.7 }
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((section) => {
            section && observer.observe(section);
        });

        return () => {
            currentRefs.forEach((section) => {
                section && observer.unobserve(section);
            });
        };
    }, []);

    const scrollToNextSection = () => {
        if (currentSection < sectionRefs.current.length - 1) {
            const nextSection = sectionRefs.current[currentSection + 1];
            nextSection && nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Head>
                <title>{"Apinan Yogaratnam"}</title>
                <meta name="description" content="Apinan Yogaratnam's portfolio website" />
                <meta name="robots" content="all" />
                <meta name="google-site-verification" content="twY8lbCJJels95CDKkgjuwivtaNa1lU8AWo6rbKMBwc" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="ts bg-white p-2 dark:bg-gray-900">
                <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">WORK IN PROGRESS</h1>
                <BsArrowUpCircle
                    className="fixed bottom-5 right-5 cursor-pointer text-4xl text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setCurrentSection(0);
                    }}
                />
                <BsArrowDownCircle
                    className="fixed bottom-5 right-16 cursor-pointer text-4xl text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    onClick={scrollToNextSection}
                />
                <NavBar setCurrentSection={setCurrentSection} />
                <div id="main-content" ref={(ref) => (sectionRefs.current[0] = ref)}>
                    <MainContent />
                </div>
                <div id="experience" ref={(ref) => (sectionRefs.current[1] = ref)}>
                    <Experience />
                </div>
                <div id="projects" ref={(ref) => (sectionRefs.current[2] = ref)}>
                    <Projects />
                </div>
                <div id="about" ref={(ref) => (sectionRefs.current[3] = ref)}>
                    <About />
                </div>
                {/* <iframe
                    title="Spotify Embed: Recommendation Playlist "
                    src={`https://open.spotify.com/embed/playlist/5Pyrebtw931dV0rYGJtYnA?utm_source=generator&theme=0`}
                    width="100%"
                    height="100%"
                    style={{ minHeight: "360px" }}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                /> */}
            </main>
        </>
    );
};

export default Home;
