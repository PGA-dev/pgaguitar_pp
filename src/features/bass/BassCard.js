import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const BassCard = ({ bass }) => {
    const { id, image, name } = bass;
    return (
        <Link to={`${id}`}>
            <Card id='bgcard' outline >
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                <CardTitle style={{ padding: '330px 500px 5px 10px', fontFamily: 'papyrus', color: 'aqua' }}>Explore the {name} Guide</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}


export default BassCard;