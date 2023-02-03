import { Card, CardSubtitle, CardImg, CardTitle, CardBody,CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
//used in DisplayList on Homepage...
const FrontFormat = ({ feature }) => {
    const { image, name, pageUrl } = feature;
    return (
        <Link to={pageUrl}>
            <Card id='bgcard'>
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle style={{ padding: '330px 500px 5px 10px', fontFamily: 'papyrus', color: 'aqua' }}>{name} Guide</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default FrontFormat;