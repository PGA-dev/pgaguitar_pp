import { Col, Row } from 'reactstrap';
import FrontFormat from './FrontFormat';
import { selectFeaturedGuitar1, selectFeaturedGuitar2, selectFeaturedGuitar3 } from '../guitar/guitarSlice';

//Used to map DisplayCards for HomePage...

const FrontEndDisplay = () => {
    const features = [selectFeaturedGuitar1(), selectFeaturedGuitar2(), selectFeaturedGuitar3(),];
    //mapping from CAMPSITES.js data array and PROMOTIONS.js data array...1 from each on Homepage

    return (
        <Row>
            {features.map((feature, idx) => {
                return (
                    <Col md='12' className='mt-5' key={idx}>
                        <FrontFormat feature={feature} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default FrontEndDisplay;