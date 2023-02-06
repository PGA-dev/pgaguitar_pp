import { useSelector } from "react-redux";
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGuitarById } from '../features/guitar/guitarSlice';
import GuitarDetail from '../features/guitar/GuitarDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../site/SubHeader';
import Error from '../../sitemisc/Error';
import Loading from '../../sitemisc/Loading';


const GuitarDetailPage = () => {
    const { guitarid } = useParams();
    const guitar = useSelector(selectGuitarById(guitarid));
    console.log('guitar', guitar)

    const isLoading = useSelector((state) => state.guitar.isLoading);
    const errMsg = useSelector((state) => state.guitar.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail guitar={guitar} />
                <CommentsList guitarid={guitarid} />
            </>
        );
    }
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