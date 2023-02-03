import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
//used in DisplayList on Homepage...
const FrontCard = ({ item }) => {
    const { image, name, description, pageUrl} = item;
    return (
        
            <Card>
                <Link to={pageUrl}><CardImg src={image} alt={name} /></Link>
                <CardBody>
                    <CardTitle style={{ padding: '10px', fontFamily: 'papyrus', color: 'blueviolet' }}>{name}</CardTitle>
                    <CardText style={{ fontFamily: 'papyrus', color: 'aqua' }}>{description}</CardText>

                </CardBody>
            </Card>
        

    );
};

export default FrontCard;