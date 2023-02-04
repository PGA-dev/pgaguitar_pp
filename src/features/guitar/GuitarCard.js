import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
//Used in guitar Directory for list
const GuitarCard = ({ guitar }) => {
    const { id, image, name } = guitar;
    return (
        <Link to={`${id}`}>
            <Card id='bgcard'>
                <CardImg width='100%' src={image} alt={name} style={{ height: 1000}}/>
                <CardImgOverlay>
                    <CardTitle style={{ padding: '330px 500px 5px 10px', fontFamily: 'papyrus', color: 'aqua' }}>Explore the {name} Guide</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}


export default GuitarCard;