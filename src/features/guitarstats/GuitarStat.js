
const GuitarStat = ({guitarstat}) => {
    const { text, heading } = guitarstat;
    return (
        <p style={{padding:'2px', fontFamily: 'papyrus', color: 'blueviolet'}} >
            {heading}:
            <div style={{padding:'2px', fontFamily: 'papyrus', color: 'aqua'}}>{text}</div>
        </p>
    );
};

export default GuitarStat;