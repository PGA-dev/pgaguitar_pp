import { Button, Col, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../sitemisc/validateContactForm";

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            agree: false,
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
                <Label check md={{ size: 5, offset: 2 }}>
                    <Field
                        name='agree'
                        type='checkbox'
                        className='form-check-input'
                    />{' '}
                    Image to upload?
                </Label>

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