import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
const GuitarDetail = ({ guitar }) => {
    const { image, name } = guitar;

    return (
        <Col md='12' className='m-1'>
            <Card  id='gdetail' >
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>
                        <div>
                            <h4 className='text-center' m-2>
                                {name}
                            </h4>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default GuitarDetail;