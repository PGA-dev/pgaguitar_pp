import { Row, Col } from 'reactstrap';
import GuitarCard from "./GuitarCard";
import { selectAllCampsites } from './guitarSlice';

const CampsitesList = () => {
    const guitar = selectAllCampsites();
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

export default CampsitesList;
