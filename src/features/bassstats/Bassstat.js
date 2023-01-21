
const BassStat = ({bassstat}) => {
    const { text, heading } = bassstat;
    return (
        <p>
            {heading}: {text}
        </p>
    );
};

export default BassStat;