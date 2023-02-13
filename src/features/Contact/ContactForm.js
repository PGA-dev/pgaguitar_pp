import { Button, Col, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../../sitemisc/validateContactForm";
import { postContact } from "./contactSlice";
import { useDispatch } from "react-redux";

const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        const contact ={
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            country: values.country,
            date: new Date(Date.now()).toDateString(),
            feedback: values.feedback
        }
        
        console.log('form values:', values);
        console.log('JSON format:', JSON.stringify(values));
        dispatch(postContact(contact));
        alert(`Your Contact info and Feedback has been recieved`);
        resetForm();
        
    };
    return <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            feedback: ''
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}

    >
        <Form>
            <FormGroup row>
                <Label htmlFor='firstName' md='2'>
                    First Name
                </Label>
                <Col md='10'>
                    <Field className='form-control' name='firstName' placeholder='FirstName' />
                    <ErrorMessage name='firstName'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='lastName' md='2'>
                    Last Name
                </Label>
                <Col md='10'>
                    <Field className='form-control' name='lastName' placeholder='LastName' />
                    <ErrorMessage name='lastName'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='email' md='2'>
                    Email
                </Label>
                <Col md='10'>
                    <Field className='form-control' name='email' placeholder='Email' />
                    <ErrorMessage name='email'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='country' md='2'>
                    Country
                    </Label>
                <Col md='10'>
                    <Field className='form-control' name='country' placeholder='country' />
                    <ErrorMessage name='country'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='feedback' md='2'>
                    Your Feedback
                </Label>
                <Col md='10'>
                    <Field className='form-control' name='feedback' as='textarea' rows='4' />
                    <ErrorMessage name='feedback'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                    <Button type='submit' color='success'>
                        Send Feedback
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    </Formik>
}

export default ContactForm;