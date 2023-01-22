import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedGuitar } from '../guitar/guitarSlice';
import { selectFeaturedMulti } from '../multiguitar/multiGuitarSlice';
//Used to map DisplayCards for HomePage...

const DisplayList = () => {
    const items = [selectFeaturedGuitar(), selectFeaturedMulti(),selectFeaturedMulti()];
    //mapping from CAMPSITES.js data array and PROMOTIONS.js data array...1 from each on Homepage

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md='12' className='mt-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;