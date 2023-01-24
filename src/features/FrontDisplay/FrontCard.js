import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//used in DisplayList on Homepage...
const FrontCard = ({ item }) => {
    const { image, name, description } = item;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle style={{padding:'10px', fontFamily: 'papyrus', color: 'blueviolet'}}>{name}</CardTitle>
                <CardText style={{fontFamily: 'papyrus', color: 'aqua'}}>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default FrontCard;