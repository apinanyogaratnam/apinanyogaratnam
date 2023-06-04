import { FaReact } from "react-icons/fa";

import { Technologies } from "@/constants/technologies";

export const technologyLogos: { [key in Technologies]?: JSX.Element } = {
    [Technologies.REACT]: <FaReact />,
};
