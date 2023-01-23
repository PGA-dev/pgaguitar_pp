import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Ibanez from '../app/assets/img/Ibanez_logo.png';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>

                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Buying Guides</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/guitardirectory'>Guitars</Link>
                            </li>
                            <li>
                                <Link to='/bassdirectory'>Bass</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/'>Site Home</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>

                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:paulgadam@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> paulgadam@gmail.com.com
                        </a>
                    </Col>

                    <Col md='2'>
                        <div  md='1'className='text-center'>
                            <img src={Ibanez} alt='Ibanez logo' className='rounded img-fluid' />
                        </div>
                        <br></br>
                        <h4 id='siteRefs' className='text-center'>All images property/courtesey of Hoshino Gakki.com and Ibanez.com</h4>
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Contact Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="https://www.linkedin.com/in/paul-adam-86ba423b/">Author LI</a>
                            </li>
                            <li>
                                <a href="https://www.nucamp.co/">NuCamp</a>
                            </li>
                            <li>
                                <a href="https://www.ibanez.com/usa/">Ibanez</a>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Page</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;