import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const ITypeDetail = ({ itype }) => {
    if (itype) {
        const { id, image, name, description } = itype;

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

export default ITypeDetail;