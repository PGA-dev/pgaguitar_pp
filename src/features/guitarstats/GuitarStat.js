//import { formatDate } from "../../utils/formatDate";

const GuitarStat = ({guitarstat}) => {
    const { text, heading } = guitarstat;
    return (
        <p>
            {heading}: {text}
        </p>
    );
};

export default GuitarStat;