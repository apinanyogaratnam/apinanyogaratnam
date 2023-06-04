import { DiCss3 } from "react-icons/di";
import { FaReact, FaPython, FaJava, FaHtml5, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiMicrosoftazure,
    SiElasticsearch,
    SiKibana,
    SiLogstash,
    SiRedis,
    SiApachekafka,
    SiKotlin,
    SiSpring,
    SiPostgresql,
    SiFlask,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { Technologies } from "@/constants/technologies";

const TechnologyLogos: { [key in Technologies]?: JSX.Element } = {
    [Technologies.REACT]: <FaReact />,
    [Technologies.PYTHON]: <FaPython />,
    [Technologies.JAVA]: <FaJava />,
    [Technologies.TYPESCRIPT]: <SiTypescript />,
    [Technologies.JAVASCRIPT]: <SiJavascript />,
    [Technologies.NEXTJS]: <TbBrandNextjs />,

    [Technologies.HTML]: <FaHtml5 />,
    [Technologies.CSS]: <DiCss3 />,
    [Technologies.NODEJS]: <FaNodeJs />,
    [Technologies.EXPRESS]: <SiExpress />,
    [Technologies.MONGODB]: <SiMongodb />,
    [Technologies.POSTGRESQL]: <SiPostgresql />,
    [Technologies.FLASK]: <SiFlask />,
    [Technologies.SPRING]: <SiSpring />,
    [Technologies.AWS]: <FaAws />,
    [Technologies.DOCKER]: <FaDocker />,
    [Technologies.AZURE]: <SiMicrosoftazure />,
    [Technologies.ELASTICSEARCH]: <SiElasticsearch />,
    [Technologies.KIBANA]: <SiKibana />,
    [Technologies.LOGSTASH]: <SiLogstash />,
    [Technologies.REDIS]: <SiRedis />,
    [Technologies.KAFKA]: <SiApachekafka />,
    [Technologies.KOTLIN]: <SiKotlin />,
};

export default TechnologyLogos;
