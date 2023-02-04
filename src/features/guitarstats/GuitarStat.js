
const GuitarStat = ({ guitarstat }) => {
    const { nameMan, Manufacture1URL, Manufacture2URL, Manufacture3URL } = guitarstat;
    return (
        <>
            <p style={{ padding: '2px', fontFamily: 'papyrus', color: 'blueviolet' }} >
                <ul><span style={{fontsize: '35px', color: 'blue'}}>{nameMan}</span>
                    <li>
                        
                        {Manufacture1URL}
                    </li>
                    <li>
                        
                        {Manufacture2URL}
                    </li>
                    <li>
                        
                        {Manufacture3URL}
                    </li>
                </ul>
                <div style={{ padding: '2px', fontFamily: 'papyrus', color: 'aqua' }}></div>
            </p>
        </>
    );
};

export default GuitarStat;