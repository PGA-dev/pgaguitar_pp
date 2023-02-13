import { Col, Row } from 'reactstrap';
import FrontFormat from './FrontFormat';
import { selectFeaturedGuitar1, selectFeaturedGuitar2, selectFeaturedGuitar3 } from '../guitar/guitarSlice';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

//Used to map DisplayCards for HomePage...

const FrontEndDisplay = () => {
    const features = useSelector((state) => [
        selectFeaturedGuitar1(state),
        selectFeaturedGuitar2(state),
        selectFeaturedGuitar3(state)
    ]);
    console.log('features:', features);
    return (
        <Row>
            {features.map((feature, idx) => {
                const { frontFeature, isLoading, errorMsg } = feature;
                if (isLoading) {
                    return <LoadingMessage key={idx} />;
                }
                if (errorMsg) {
                    return <ErrorMessage errorMsg={errorMsg} key={idx} />;
                }
                return (
                    frontFeature && (
                        <Col md='12' className='mt-5' key={idx}>
                            <FrontFormat feature={frontFeature} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default FrontEndDisplay;