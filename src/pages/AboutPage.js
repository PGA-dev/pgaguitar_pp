import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import GuitarFlip from "../features/Flip/guitarFlip";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current={'Guitar Flip'} />
            <Row className='row-content'>
                <Col sm='6'>
<GuitarFlip />
                </Col>

                <Col >

                              <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h2>Flip</h2>
                        </CardHeader>
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};



export default AboutPage;