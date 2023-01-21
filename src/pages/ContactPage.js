import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Buying Guide Contact' />
            <Row className='row'>
                <Col xs='12'>
                    <hr />
                </Col>
                <Col md='6'>
                    <ContactForm />
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

export default ContactPage;