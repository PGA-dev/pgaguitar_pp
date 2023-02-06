import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../site/SubHeader';
import IPIAImg from '../app/assets/img/p_region_PIA3761C_BLP_00_02.png';

const GuideSiteReferences = () => {
    return (
        <Container>
            <SubHeader current='Guide Site References' />
            <Row className='row'>
                <Col md='12'>
                    <div md='1' className='text-center'>
                        <img src={IPIAImg} alt='Ibanez RGA622' className='rounded img-fluid' />
                    </div>
                </Col>
                <Col md='6'>
                    <div>
                        <p>
                            Guide's links to all images and materials covered....
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='row-content align-items-center'>
                <Col sm='12'>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default GuideSiteReferences;