import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const BassDetail = ({ bass }) => {
    if (bass) {
        const { id, image, name, description } = bass;

        return (
            <Col md='5' className='m-1'>
                <Card>
                    <CardImg top src={image} alt={name} />
                    <CardBody>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }; return null;
};

export default BassDetail;