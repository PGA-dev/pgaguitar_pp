import { Row, Col } from 'reactstrap';
import BassCard from "../bass/BassCard";
import { selectAllBass } from '../bass/bassSlice';

const BassList = () => {
    const Basses = selectAllBass();
    return (
        <Row className='ms-auto'>
            {Basses.map((bass) => {
                return (
                    <Col md='12' className='m-4' key={bass.id}>
                        <BassCard bass={bass} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default BassList;
