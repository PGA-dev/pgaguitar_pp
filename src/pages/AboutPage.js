import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../site/SubHeader";
import GuitarFlip from "../features/Flip/guitarFlip";
import profile from "../../src/app/assets/img/profile.png";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current={'About the Author'} />
            <Row>
                <Col>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
            <Row className='row-border ms-auto'>
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
                        <CardHeader className=" mt-1 bg text-left" style={{ border: "5px ridge #e6e3fa", borderRadius: "2%", backgroundColor: "black", color: "aqua", padding: "12px", fontSize: "50px", fontFamily: "papyrus" }}>
                            <Row className="row-right"><div className=""><img style={{ height: 290 }} width='25%' src={profile} alt='Author' ></img></div></Row>
                            <Row><div m='2'>About the Author</div></Row>
                        </CardHeader>
                        <CardBody className="bg" style={{ border: "5px ridge #e6e3ea", backgroundColor: "black", color: "aqua", padding: "6px", fontSize: "35px", fontFamily: "papyrus" }}>
                            <div style={{ color: 'magenta', fontFamily: 'Arial-bold' }}>
                                <ul>
                                    <li>
                                        <p>Guitar Player for 40 years</p>
                                    </li>
                                    <li>
                                        <p> Bass Player for 20 years</p>
                                    </li>
                                    <li>
                                        <p> Guitar Teacher</p>
                                    </li>
                                    <li>
                                        <p> React Programmer -- on a good day</p>
                                    </li>
                                    <li>
                                        <p> Ibanez player for 35 years</p>
                                    </li>
                                </ul>
                            </div>
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