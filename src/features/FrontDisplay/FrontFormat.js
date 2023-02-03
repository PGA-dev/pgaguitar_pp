import { Card, CardSubtitle, CardFooter, CardImg, CardTitle, CardBody } from 'reactstrap';
//used in DisplayList on Homepage...
const FrontFormat = ({ feature }) => {
    const { image, name, description } = feature;
    return (
        <Card  id='frontcard'  style={{marginBottom: '2rem', color: 'aqua' }}>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle style={{ padding: '10px', fontFamily: 'papyrus', color: 'blueviolet' }}>{name}</CardTitle>
                <CardSubtitle style={{ fontFamily: 'papyrus', color: 'aqua' }}>{description}</CardSubtitle>
            </CardBody>
        </Card >
    );
};

export default FrontFormat;