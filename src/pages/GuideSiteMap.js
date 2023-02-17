import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../site/SubHeader';
import I622Img from '../app/assets/img/p_region_RGA622XH_BK_00_01.png';

const GuideSiteMap = () => {
    return (
        <Container>
            <SubHeader current='Guide Site Map' />
            <Row className='row'>
                <Col md='12'>
                    <div md='1' className='text-center'>
                        <img src={I622Img} alt='Ibanez RGA622' className='rounded img-fluid' />
                    </div>
                </Col>
                <Col md='6'>
                    <div>
                        <p>
                            Site Map futures are looking good....
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='row-border align-items-center'>
                <Col sm='12'>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default GuideSiteMap;