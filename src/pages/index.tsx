import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import useTheme, { Theme } from "@/hooks/useTheme";

import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar: React.FC = () => {
  const { theme, toggleTheme, oppositeTheme } = useTheme();

  return (
    <nav className="flex flex-row justify-around items-center p-5">
      <div className="w-[33%] md:hidden">
        <RxHamburgerMenu size="1.5em" />
      </div>
      <div className="hidden md:flex flex-row justify-around items-center w-[33%]">
        <Link href="/">
          <h1 className="text-black dark:text-white">Home</h1>
        </Link>
        <Link href="/experience">
          <h1 className="text-black dark:text-white">Experience</h1>
        </Link>
        <Link href="/projects">
          <h1 className="text-black dark:text-white">Projects</h1>
        </Link>
        <Link href="/about">
          <h1 className="text-black dark:text-white">About</h1>
        </Link>
      </div>
      <div className="w-[33%] flex justify-center items-center">
        <div className="rounded-full w-24 h-10 bg-black dark:bg-white text-white dark:text-black flex justify-center items-center">
          AY
        </div>
      </div>
      <div className="w-[33%]">
        <div className="invisible md:visible flex flex-row justify-center items-center">
          <h1 className="text-black dark:text-white">
            Social Links
          </h1>
          <div className="mt-2 ml-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme}
                checked={theme === Theme.DARK}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle {oppositeTheme} mode</span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Apinan's portfolio"}</title>
        <meta name="description" content="Apinan Yogaratnam portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`min-h-screen bg-white dark:bg-slate-800`}>
          <NavBar />
        </div>
      </main>
    </>
  );
};

export default Home;
