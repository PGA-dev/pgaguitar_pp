
const GuitarStat = ({ guitarstat }) => {
    const { Manufacture1URL, Manufacture2URL, Manufacture3URL } = guitarstat;
    return (
        <p style={{ padding: '2px', fontFamily: 'papyrus', color: 'blueviolet' }} >
            <ul>
                <li>
                    { Manufacture1URL}
                </li>
                <li>
                    {Manufacture2URL }
                </li>
                <li>
                    { Manufacture3URL}
                </li>
            </ul>
            <div style={{ padding: '2px', fontFamily: 'papyrus', color: 'aqua' }}></div>
        </p>
    );
};

export default GuitarStat;