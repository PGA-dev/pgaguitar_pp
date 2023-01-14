import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
//Used to map DisplayCards for HomePage...

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];
//mapping from CAMPSITES.js data array and PROMOTIONS.js data array...1 from each on Homepage

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='mt-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;