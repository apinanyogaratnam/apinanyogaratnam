import { type NextPage } from "next";
import Head from "next/head";

import About from "@/components/about";
import Experience from "@/components/experience";
import MainContent from "@/components/main-content";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Apinan's portfolio"}</title>
                <meta name="description" content="Apinan Yogaratnam portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white p-2 dark:bg-gray-900">
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
