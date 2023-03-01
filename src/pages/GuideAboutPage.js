import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../site/SubHeader';
import I8527Img from '../app/assets/img/p_region_RG8527Z_SDE_00_03.png';

const GuitarBodyPage = () => {
    return (
        <Container>
            <SubHeader current='About Guide' />
            <Row className='row'>
                <Col md='12'>
                    <div md='1' className='text-center'>
                        <img src={I8527Img} alt='Ibanez logo' className='rounded img-fluid' />
                    </div>
                </Col>
                <Col md='6'>
                    <div>
                        <p>
                            Some fancy text for our future guitar guide
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='align-items-center'>
                <Col sm='12'>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default GuitarBodyPage;