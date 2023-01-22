import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import GuitarFlip from "../features/Flip/guitarFlip";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current={'Guitar Flip'} />
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

</Row>

        </Container>
    );
};



export default AboutPage;