import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Ibanez from '../app/assets/img/Ibanez_logo.png';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>

                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 style={{ color: "purple" }}>Buying Guides</h5>
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
                        <h5 style={{ color: "purple" }}>Author Contact</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="https://www.linkedin.com/in/paul-adam-86ba423b/">Author LI</a>
                            </li>
                            <li>
                                <a className='btn btn-link' href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA'>Author's YouTube</a>
                            </li>
                            <li>
                                <a
                                    role='button'
                                    className='btn btn-link'
                                    href='mailto:paulgadam@gmail.com'
                                >
                                    <i className='' /> Author Email
                                </a>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Page</Link>
                            </li>
                        </ul>

                    </Col>

                    <Col md='2'>
                        <div md='1' className='text-center'>
                            <img src={Ibanez} alt='Ibanez logo' className='rounded img-fluid' />
                        </div>
                        <br></br>
                        <h4 id='siteRefs' className='text-center' style={{ color: "purple" }}>All images property/courtesey of Hoshino Gakki.com and Ibanez.com</h4>
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 style={{ color: "purple" }}>Outside Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="https://www.jemsite.com/">Jemsite</a>
                            </li>
                            <li>
                                <a href="https://www.nucamp.co/">NuCamp</a>
                            </li>
                            <li>
                                <a href="https://www.ibanez.com/usa/">Ibanez</a>
                            </li>
                            <li>
                                <a href="https://www.dimarzio.com/">Dimarzio Pickups</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;