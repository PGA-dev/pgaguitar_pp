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
                        <CardHeader className=" mt-1 bg text-left" style={{  border: "5px ridge #e6e3fa", borderRadius: "2%", backgroundColor: "LightGrey", color: "Blue",padding: "12px", fontSize: "60px", fontFamily: "lobster"}}>
                           About the Author
                        </CardHeader>
                        <CardBody className="bg" style={{ border: "5px ridge #e6e3ea",backgroundColor: "LightSteelBlue", color: "SkyBlue",padding: "6px", fontSize: "45px",fontFamily: "Lucida Handwriting"}}>
                            Body for my guitar card and such
                            <p> asdlfkajsdflkajsdfasdf</p>
                            <p> asdlfkajsdflkajsdfasdf</p>
                            <p> asdlfkajsdflkajsdfasdf</p>
                            <p> asdlfkajsdflkajsdfasdf</p>
                            <p> asdlfkajsdflkajsdfasdf</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
        </Container>
    );
};



export default AboutPage;