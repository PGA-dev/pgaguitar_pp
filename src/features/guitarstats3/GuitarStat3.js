//import { Col } from "reactstrap";

const GuitarStat3 = ({ guitarstat3 }) => {
    const { nameMan, nameMan2, nameMan3, nameMan4, nameMan5, Manufacture1URL, Manufacture2URL, Manufacture3URL, Manufacture4URL, Manufacture5URL } = guitarstat3;
    return (
        <>
            <ul className='list-unstyled' style={{ padding: '2px', fontFamily: 'papyrus', color: 'blueviolet' }}>
                <li>
                    <a style={gslia3} href={Manufacture1URL}>{nameMan}</a>
                </li>
                <li>
                    <a style={gslia3} href={Manufacture2URL}>{nameMan2}</a>
                </li>
                <li>
                    <a style={gslia3} href={Manufacture3URL}>{nameMan3}</a>
                </li>
                <li>
                    <a style={gslia3} href={Manufacture4URL}>{nameMan4}</a>
                </li>
                <li>
                    <a style={gslia3} href={Manufacture5URL}>{nameMan5}</a>
                </li>
            </ul>
        </>
    );
};

const gslia3 = {
    color: 'aqua',
    fontFamily: 'papyrus',
    fontWeight: 700,
    textDecoration: 'none'
}

export default GuitarStat3;