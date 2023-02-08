import { useSelector } from "react-redux";
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectGuitarById } from '../features/guitar/guitarSlice';
import GuitarDetail from '../features/guitar/GuitarDetail';
import GuitarStatList from '../features/guitarstats/GuitarStatList';
import SubHeader from '../site/SubHeader';
import ErrorMessage from '../sitemisc/ErrorMessage';
import LoadingMessage from '../sitemisc/LoadingMessage';
import GuitarStatList2 from '../features/guitarstats2/GuitarStatList2';

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
                <GuitarStatList2 guitarid={guitarid} />
                <GuitarStatList guitarid={guitarid} />
            </>
        );
    }
    return (
        <Container>
            {guitar && <SubHeader current={guitar.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default GuitarDetailPage;