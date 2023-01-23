import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGuitarById } from '../features/guitar/guitarSlice';
import GuitarDetail from '../features/guitar/GuitarDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../components/SubHeader';

const GuitarDetailPage = () => {
    const { guitarid } = useParams();
    const guitar = selectGuitarById(guitarid);

    return (
        <Container>
            <Row>
                <SubHeader current={guitar.name} detail={true} />
                <GuitarDetail guitar={guitar} />
                <GuitarStatList guitarid={guitarid} />
            </Row>
        </Container>
    );
};

export default GuitarDetailPage;