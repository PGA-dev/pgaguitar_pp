import { Row, Col } from 'reactstrap';
import GuitarCard from "./GuitarCard";
import { selectAllGuitar } from './guitarSlice';
//Guitar Directory pull
const GuitarList = () => {
    const guitar = selectAllGuitar();
    return (
        <Row className='ms-auto'>
            {guitar.map((guitar) => {
                return (
                    <Col md='12' className='m-4' key={guitar.id}>
                        <GuitarCard guitar={guitar} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default GuitarList;
