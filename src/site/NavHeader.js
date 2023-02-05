import { useState, useEffect } from 'react';
//import {Col} from 'reactstrap';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const NavHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    const animatedStyle2 = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (

            <Navbar id='navhead' dark color='primary' sticky='top' expand='lg'>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='me-auto' navbar>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/' style={{ color: "magenta" }}>
                                <i style={{ color: "SlateBlue" }} className='fa fa-h-square fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                        <NavItem>
                            <NavLink className='nav-link' to='/guidedirectory' style={{ color: "magenta" }}>
                                <i style={{ color: "aqua" }} className='fa fa-cogs fa-sm' /> Guides
                            </NavLink>
                        </NavItem>
                        </animated.div>
                        <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/guideaboutpage' style={{ color: "magenta" }}>
                                <i style={{ color: "SlateBlue" }} className='fa fa-gear fa-sm' /> About the Guide
                            </NavLink>
                        </NavItem>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                        <NavItem>
                            <NavLink className='nav-link' to='/about' style={{ color: "magenta" }}>
                                <i style={{ color: "aqua" }} className='fa fa-gg fa-lg' /> Your Guide
                            </NavLink>
                        </NavItem>
                        </animated.div>
                        <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact' style={{ color: "magenta" }}>
                                <i style={{ color: "SlateBlue" }} className='fa fa-thumbs-up fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                        </animated.div>
                    </Nav>
                </Collapse>
            </Navbar>

    );
};

export default NavHeader;