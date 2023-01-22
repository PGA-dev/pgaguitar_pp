import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";


const AboutPage = () => {
    return (
        <Container>
            <SubHeader current={'Guitar Flip'} />
            <Row className='row-content'>
                <Col sm='6'>

                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h2>Flip</h2>
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
                <Col >

          
                </Col>
            </Row>

        </Container>
    );
};



export default AboutPage;