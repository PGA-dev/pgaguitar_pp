import { useSelector } from "react-redux";
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGuitarById } from '../features/guitar/guitarSlice';
import GuitarDetail from '../features/guitar/GuitarDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../site/SubHeader';
import ErrorMessage from '../sitemisc/ErrorMessage';
import LoadingMessage from '../sitemisc/LoadingMessage';


const GuitarDetailPage = () => {
    const { guitarid } = useParams();
    const guitar = useSelector(selectGuitarById(guitarid));
    console.log('guitar', guitar)

    const isLoading = useSelector((state) => state.guitar.isLoading);
    const errorMsg = useSelector((state) => state.guitar.errorMsg);
    let content = null;

    if (isLoading) {
        content = <LoadingMessage />;
    } else if (errorMsg) {
        content = <ErrorMessage errorMsg={errorMsg} />;
    } else {
        content = (
            <>
                <GuitarDetail guitar={guitar} />
                <GuitarStatList guitarid={guitarid} />
            </>
        );
    }
    return (
        <Container>
            {guitar && <SubHeader current={guitar.name} detail={true} />}
            <Row>{content}</Row>
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