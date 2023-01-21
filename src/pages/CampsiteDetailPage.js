import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { guitarId } = useParams();
    const guitar = selectCampsiteById(guitarId);

    return (
        <Container>
            <Row>
                <SubHeader current={guitar.name} detail={true} />
                <CampsiteDetail guitar={guitar} />
                <GuitarStatList guitarId={guitarId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;