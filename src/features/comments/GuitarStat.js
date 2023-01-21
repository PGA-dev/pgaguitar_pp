//import { formatDate } from "../../utils/formatDate";

const GuitarStat = ({comment}) => {
    const { text: commentText, rating, author, date } = comment;
    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars -- {author}
        </p>
    );
};

export default GuitarStat;