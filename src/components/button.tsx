interface IProps {
    onClick: () => void;
    label: string;
}

const Button = (props: IProps) => {
    const { onClick, label } = props;
    return (
        <button
            className="mt-4 flex flex-row rounded-md border-2 border-black bg-black px-4 py-2 text-white transition-colors duration-300 hover:border-black hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-900 dark:hover:text-white"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
