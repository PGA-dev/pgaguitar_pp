import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Footer = () => {

    //keep padding, margins, fontFamily and fontWeights in for posible mod later
    const footstyleHead = {
        color: "magenta",
        padding: "5px",
        fontSize: "40px",
        fontFamily: "Papyrus",
        fontWeight: 500,
        textDecoration: 'none'
    };

    const footstyleHeadHover = {
        color: "magenta",
        padding: "5px",
        fontSize: "40px",
        fontFamily: "Papyrus",
        fontWeight: 700,
        textDecoration: 'underline'
    };

    const footstyleLink = {
        color: "aqua",
        fontSize: "24px",
        padding: "5px 3px",
        fontFamily: "Papyrus",
        textDecoration: 'none'
    };

    const footstyleClick = {
        color: "slateblue",
        fontSize: "24px",
        padding: "5px 3px",
        fontFamily: "Papyrus",
        fontWeight: 100,
        textDecoration: 'none'
    };

    const footstyleHover = {
        color: "magenta",
        fontSize: "24px",
        padding: "5px 3px",
        fontFamily: "Papyrus",
        fontWeight: 900,
        textDecoration: 'none'
    };

    const footstyleClick2 = {
        color: "magenta",
        fontSize: "24px",
        padding: "5px 3px",
        fontFamily: "Papyrus",
        fontWeight: 100,
        textDecoration: 'none'
    };

    const footstyleHover2 = {
        color: "slateblue",
        fontSize: "24px",
        padding: "5px 3px",
        fontFamily: "Papyrus",
        fontWeight: 900,
        textDecoration: 'none'
    };
    // Both functions and their nested callbacks provide slightly different changes for links
    const useFeet = () => {
        const [style, setStyle] = useState(footstyleLink);
        const onMouseEnter = () => setStyle(footstyleHover)
        const onClick = () => setStyle(footstyleClick)
        const onMouseLeave = () => setStyle(footstyleLink)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }

    const useFeet2 = () => {
        const [style, setStyle] = useState(footstyleLink);
        const onMouseEnter = () => setStyle(footstyleHover2)
        const onClick = () => setStyle(footstyleClick2)
        const onMouseLeave = () => setStyle(footstyleLink)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }

    const useFeetHead = () => {
        const [style, setStyle] = useState(footstyleHead);
        const onMouseEnter = () => setStyle(footstyleHeadHover)
        const onMouseLeave = () => setStyle(footstyleHead)
        return { style, onMouseEnter, onMouseLeave }
    }

    // individual style calls for each link and heading
    const bgh = useFeetHead();
    const ach = useFeetHead();
    const slh = useFeetHead();
    const olh = useFeetHead();

    const bg1 = useFeet();
    const bg2 = useFeet2();
    const bg3 = useFeet();
    const bg4 = useFeet2();
    const bg5 = useFeet();

    const ac1 = useFeet();
    const ac2 = useFeet2();
    const ac3 = useFeet();
    const ac4 = useFeet2();
    const ac5 = useFeet();

    const sl1 = useFeet();
    const sl2 = useFeet2();
    const sl3 = useFeet();
    const sl4 = useFeet2();
    const sl5 = useFeet();

    const ol1 = useFeet();
    const ol2 = useFeet2();
    const ol3 = useFeet();
    const ol4 = useFeet2();
    const ol5 = useFeet();


    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 {...bgh}>Buying Guides</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link {...bg1} to='/guidedirectory/0'>Guitar Body</Link>
                            </li>
                            <li>
                                <Link {...bg2} to='/guidedirectory/1'>Guitar Neck</Link>
                            </li>
                            <li>
                                <Link {...bg3} to='/guidedirectory/3'>Guitar Bridge</Link>
                            </li>
                            <li>
                                <Link {...bg4} to='/guidedirectory/2'>Guitar Strings</Link>
                            </li>
                            <li>
                                <Link {...bg5} to='/guidedirectory/4'>Guitar Pickups</Link>
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
                        <ul className='list-unstyled'>
                            <li>
                                <Link style={footstyleLink} to='/'>Site Home</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidesiteref'>References</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guidesitemap'>Site Map</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/guideaboutpage'>About Page</Link>
                            </li>
                            <li>
                                <Link style={footstyleLink} to='/about'>Author About</Link>
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


export default Footer;