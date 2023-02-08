//import { Col } from "reactstrap";

const GuitarStat2 = ({ guitarstat2 }) => {
    const { nameMan,nameMan2, nameMan3, nameMan4,  nameMan5, Manufacture1URL, Manufacture2URL, Manufacture3URL, Manufacture4URL, Manufacture5URL } = guitarstat2;
    return (
        <>
                <ul className='list-unstyled' style={{ padding: '2px', fontFamily: 'papyrus', color: 'blueviolet' }}>
                    <li>
                        <a href={Manufacture1URL}>{nameMan}</a>
                    </li>
                    <li>
                    <a href={Manufacture2URL}>{nameMan2}</a>
                    </li>
                    <li>
                    <a href={Manufacture3URL}>{nameMan3}</a>
                    </li>
                    <li>
                    <a href={Manufacture4URL}>{nameMan4}</a>
                    </li>
                    <li>
                    <a href={Manufacture5URL}>{nameMan5}</a>
                    </li>
                </ul>
        </>
    );
};

export default GuitarStat2;