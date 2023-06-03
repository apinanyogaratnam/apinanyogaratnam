import { type NextPage } from "next";
import Head from "next/head";
import { BsArrowUpCircle } from "react-icons/bs";

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
            <main className="ts bg-white p-2 dark:bg-gray-900">
                <BsArrowUpCircle className="fixed bottom-5 right-5 cursor-pointer text-4xl text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
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
