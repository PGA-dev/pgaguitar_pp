import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1}} sm='2'>
                        <h5 style={footstyleHead}>Buying Guides</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link style={footstyleLink} to='/guidedirectory/0'>Guitar Body</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidedirectory/1'>Guitar Neck</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidedirectory/3'>Guitar Bridge</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidedirectory/2'>Guitar Strings</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidedirectory/4'>Guitar Pickups</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs='6' sm='3' className='text-center'>
                        <h5 style={footstyleHead}>Author Contact</h5>
                        <ul className='list-unstyled'>
                            <li >
                                <a style={footstyleLink} href="https://www.linkedin.com/in/paul-adam-86ba423b/">Author LI</a>
                            </li>
                            <li>
                                <a style={footstyleLink} className='btn btn-link' href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA'>Author's YouTube</a>
                            </li>
                            <li>
                                <a style={footstyleLink}
                                    role='button'
                                    className='btn btn-link'
                                    href='mailto:paulgadam@gmail.com'
                                >
                                    <i style={footstyleLink} className='' /> Author Email
                                </a>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/contact'>Contact Page</Link>
                            </li>
                        </ul>

                    </Col>

                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 style={footstyleHead}>Site Links</h5>
                        <ul  className='list-unstyled'>
                            <li>
                                <Link style={footstyleLink} to='/'>Site Home</Link>
                            </li>
                            <li>
                                <Link  style={footstyleLink} to='/guitardirectory'>Guitars</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidesitemap'>Guide Site Map</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/'>Site Home</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 style={footstyleHead}>Outside Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a style={footstyleLink} href="https://www.jemsite.com/">Jemsite</a>
                            </li>
                            <li>
                                <a style={footstyleLink} href="https://www.nucamp.co/">NuCamp</a>
                            </li>
                            <li>
                                <a style={footstyleLink} href="https://www.ibanez.com/usa/">Ibanez</a>
                            </li>
                            <li>
                                <a style={footstyleLink} href="https://www.dimarzio.com/">Dimarzio Pickups</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


const footstyleHead= {
    color: "magenta",
    padding: "5px",
    fontSize: "40px",
    fontFamily: "Papyrus"
};

const footstyleLink= {
    color: "aqua",
    fontSize: "24px",
    padding: "5px 3px",
    fontFamily: "Papyrus"
};

export default Footer;