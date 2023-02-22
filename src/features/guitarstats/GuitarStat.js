//import { Col } from "reactstrap";


//style={{ padding: '2px', fontFamily: 'papyrus', color: '#49fb35' }}
const GuitarStat = ({ guitarstat }) => {
    const { nameMan, nameMan2, nameMan3, nameMan4, nameMan5, Manufacture1URL, Manufacture2URL, Manufacture3URL, Manufacture4URL, Manufacture5URL } = guitarstat;
    return (
        <>
            <ul className='list-unstyled m-2 p-1' style={{ fontFamily: 'papyrus' }} >
                <li>
                    <a href={Manufacture1URL} target="_blank" rel="noreferrer">{nameMan}</a>
                </li>
                <li>
                    <a href={Manufacture2URL} target="_blank" rel="noreferrer">{nameMan2}</a>
                </li>
                <li>
                    <a href={Manufacture3URL} target="_blank" rel="noreferrer">{nameMan3}</a>
                </li>
                <li>
                    <a href={Manufacture4URL} target="_blank" rel="noreferrer">{nameMan4}</a>
                </li>
                <li>
                    <a href={Manufacture5URL} target="_blank" rel="noreferrer">{nameMan5}</a>
                </li>
            </ul>
        </>
    );
};


export default GuitarStat;