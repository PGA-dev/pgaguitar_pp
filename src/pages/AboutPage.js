import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import GuitarFlip from "../features/Flip/guitarFlip";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current={'About the Index'} />
            <Row>
                <Col>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
            <Row className='row-content ms-auto'>
                <GuitarFlip />
            </Row>
            <Row>
                <Col>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card>
                    <CardHeader className="bg-primary">
                        Header for my card
                    </CardHeader>
                    <CardBody className="bg-danger">
                        Body for my guitar card and such
                    </CardBody>
                </Card>
                </Col>
            </Row>

        </Container>
    );
};



export default AboutPage;