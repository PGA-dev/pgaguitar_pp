
const BassStat = ({bassstat}) => {
    const { id, text, heading } = bassstat;
    return (
        <p>
            {heading}: {text}
        </p>
    );
};

export default BassStat;