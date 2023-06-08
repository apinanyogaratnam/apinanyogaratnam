import Link from "next/link";

interface IProps {
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const HamburgerMenu = (props: IProps) => {
    const { setIsMenuOpen } = props;

    return (
        <div
            className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white dark:bg-gray-900"
            onClick={() => setIsMenuOpen(false)}
        >
            <Link href="/">
                <h1 className="mb-4 text-black dark:text-white">Home</h1>
            </Link>
            <Link href="#experience">
                <h1 className="mb-4 text-black dark:text-white">Experience</h1>
            </Link>
            <Link href="#projects">
                <h1 className="mb-4 text-black dark:text-white">Projects</h1>
            </Link>
            <Link href="#about">
                <h1 className="mb-4 text-black dark:text-white">About</h1>
            </Link>
            {/* Add more links as needed */}
        </div>
    );
};

export default HamburgerMenu;
