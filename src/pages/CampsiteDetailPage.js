import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGuitarById } from '../features/guitar/guitarSlice';
import GuitarDetail from '../features/guitar/GuitarDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { guitarId } = useParams();
    const guitar = selectGuitarById(guitarId);

    return (
        <Container>
            <Row>
                <SubHeader current={guitar.name} detail={true} />
                <GuitarDetail guitar={guitar} />
                <GuitarStatList guitarId={guitarId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;