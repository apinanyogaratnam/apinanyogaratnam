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
            <div onClick={onClick} className="relative group">
                <h1 className="text-black dark:text-white">{title}</h1>
                <span className="h-[1px] inline-block w-0 bg-black dark:bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-500">&nbsp;</span>
            </div>
        </Link>
    );
};

export default CustomLink;
