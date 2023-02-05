import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGuitarById } from '../features/guitar/guitarSlice';
import GuitarDetail from '../features/guitar/GuitarDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../site/SubHeader';

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
            <Row>
                <div>
                    <h5>
                        this is my h5 heading
                    </h5>
                </div>
            </Row>
            <Row>
                <div>
                    <h5>
                        this is my h5 heading2
                    </h5>
                </div>
            </Row>
            <Row>
                <div>
                    <h5>
                        this is my h5 heading3
                    </h5>
                </div>
            </Row>
        </Container>
    );
};

export default GuitarDetailPage;