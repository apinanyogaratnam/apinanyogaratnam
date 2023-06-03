import Link from "next/link";

interface IProps {
    href: string;
    title: string;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CustomLink = (props: IProps) => {
    const { href, title, onClick } = props;
    return (
        <Link href={href}>
            <div onClick={onClick} className="group relative">
                <h1 className="text-black dark:text-white">{title}</h1>
                <span className="ease absolute bottom-0.5 left-0 inline-block h-[1px] w-0 bg-black transition-[width] duration-500 group-hover:w-full dark:bg-white">
                    &nbsp;
                </span>
            </div>
        </Link>
    );
};

export default CustomLink;
