import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ( {guitar} ) => {
    const { id, image, name, description } = guitar;

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
};

export default CampsiteDetail;