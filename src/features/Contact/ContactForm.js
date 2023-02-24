import { Button, Col, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../../sitemisc/validateContactForm";
import { postContact } from "./contactSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        const contact = {
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
        setTimeout(() => {
            alert(`Your Contact info and Feedback has been recieved`);
        }, 2500);
        resetForm();
    };


    //****CSS Sort of...****     
    const [buttonText, setButtonText] = useState("Send Feedback");
    const useActive = () => {
        const [style, setStyle] = useState(btnContact);
        const onMouseEnter = () => setStyle(btnHover)
        const onClick = () => {
            setButtonText('Submitting...');
            setStyle(btnActive)
            setTimeout(() => {
                setButtonText("Send Feedback");
            }, 700);
        }
        const onMouseLeave = () => setStyle(btnContact)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }

    const btnContact = {
        display: 'inline-block',
        textDecoration: 'none',
        outline: 'none',
        color: 'aqua',
        backgroundColor: '#09155a',
        border: '5px solid grey',
        borderRadius: '15px',
        boxShadow: '0 3px rgb(88, 88, 104)'
    }

    const btnHover = {
        backgroundColor: 'dark blue',
        border: '5px solid grey',
        borderRadius: '15px',
        boxShadow: '0 2px aqua',
        transitionDuration: '0.5s',
        color: 'indigo'
    }

    const btnActive = {
        backgroundColor: 'black',
        color: 'aqua',
        border: '5px solid aqua',
        borderRadius: '15px',
        boxShadow: '0 4px rgb(120, 120, 120)',
        transform: 'translateY(5px)',
        transitionDuration: '0.2s'
    }


    const errorText = {
        backgroundColor: 'black',
        color: 'magenta',
        padding: '1px',
        margin: '10px 0px 1px',
        textDecoration: 'underline',
        fontSize: "27px",
        fontWeight: 700
    }

    const active = useActive();

    //style={labelText}
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
                <Label className="label-text" htmlFor='firstName' md='3'>
                    First Name
                </Label>
                <Col md='12'>
                    <Field className='form-control' name='firstName' placeholder='FirstName' />
                    <ErrorMessage name='firstName'>
                        {(msg) => <p style={errorText}>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="label-text" htmlFor='lastName' md='3'>
                    Last Name
                </Label>
                <Col md='12'>
                    <Field className='form-control' name='lastName' placeholder='LastName' />
                    <ErrorMessage name='lastName'>
                        {(msg) => <p style={errorText}>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="label-text" htmlFor='email' md='3'>
                    Email
                </Label>
                <Col md='12'>
                    <Field className='form-control' name='email' placeholder='Email' />
                    <ErrorMessage name='email'>
                        {(msg) => <p style={errorText}>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="label-text" htmlFor='country' md='3'>
                    Country
                </Label>
                <Col md='12'>
                    <Field className='form-control' name='country' placeholder='country' />
                    <ErrorMessage name='country'>
                        {(msg) => <p style={errorText}>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="label-text" htmlFor='feedback' md='4'>
                    Feedback
                </Label>
                <Col md='12'>
                    <Field className='form-control' name='feedback' placeholder='We appreciate your feedback' as='textarea' rows='4' />
                    <ErrorMessage name='feedback'>
                        {(msg) => <p style={errorText}>{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{ size: 10, offset: 0 }}>
                    <Button className="btn"
                        {...active}
                        type="submit"
                    >{buttonText}
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    </Formik>
};

export default ContactForm;