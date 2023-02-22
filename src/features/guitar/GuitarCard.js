import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
//Used in guitar Directory for list
const GuitarCard = ({ guitar }) => {
    const { id, image, name } = guitar;
    //padding: '330px 500px 5px 10px'
    return (
        <Link to={`${id}`}>
            <Card id='bgcard'>
                <CardImg width='100%' src={image} alt={name} style={{ height: 1000 }} />
                <CardImgOverlay>
                    <CardTitle style={ctGuide}>Explore the {name} Guide</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}

const ctGuide = {
    color: '#a424ff',
    backgroundColor: 'black',
    opacity: .90,
    margin: '45px',
    padding: '10px',
    fontFamily: 'papyrus'
}

export default GuitarCard;