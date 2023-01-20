import { Row, Col} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites} from './campsitesSlice';

const CampsitesList = () => {
    const guitar = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {guitar.map((guitar) => {
                return (
                    <Col md='12' className='m-4' key={guitar.id}>
                        <CampsiteCard guitar={guitar} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;
