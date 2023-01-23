import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectBassById } from '../features/bass/bassSlice';
import BassDetail from '../features/bass/BassDetail';
import BassStatList from '../features/bassstats/BassStatList';
import SubHeader from '../components/SubHeader';

const BassDetailPage = () => {
    const { bassid } = useParams();
    const bass = selectBassById(bassid);

    return (
        <Container>
            <Row>
                <SubHeader current={bass.name} detail={true} />
                <BassDetail bass={bass} />
                <BassStatList bassid={bassid} />
            </Row>
        </Container>
    );
};

export default BassDetailPage;