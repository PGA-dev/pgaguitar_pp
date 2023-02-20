import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
const GuitarDetail = ({ guitar }) => {

    const { image, name } = guitar;

    return (
        <Col md='12' className='m-1'>
            <Card id='bgcard2'>
                <CardImg id='crdimg2' top src={image} alt={name} />
                <CardBody>
                    <CardText id='gdetail' className='text-center'>
                        {name}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default GuitarDetail;