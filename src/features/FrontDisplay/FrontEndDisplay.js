import { Col, Row } from 'reactstrap';
import FrontFormat from './FrontFormat';
import { selectFeaturedGuitar1, selectFeaturedGuitar2, selectFeaturedGuitar3 } from '../guitar/guitarSlice';
import Error from '../../sitemisc/Error';
import Loading from '../../sitemisc/Loading';
import { useSelector } from "react-redux";

//Used to map DisplayCards for HomePage...

const FrontEndDisplay = () => {
    const features = useSelector((state) => [
        selectFeaturedGuitar1(state),
        selectFeaturedGuitar2(state),
        selectFeaturedGuitar3(state)
    ]);
    console.log('features:', features);
return(
    <Row>
        {features.map((feature, idx) => {
            const { frontFeature, isLoading, errMsg } = feature;
            if (isLoading) {
                return <Loading key={idx} />;
            }
            if (errMsg) {
                return <Error errMsg={errMsg} key={idx} />;
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