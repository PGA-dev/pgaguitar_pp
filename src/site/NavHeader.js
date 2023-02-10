import { useState, useEffect } from 'react';
//import {Col} from 'reactstrap';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './styleMod/Nav.module.css';

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
                            <NavLink className='nav-link' to='/' style={navHead1}>
                                <i style={{ color: "SlateBlue" }} className='fa fa-h-square fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle   nav caret style={navHead2}>
                                <div style={{color: 'aqua'}} className='fa fa-cogs fa-sm '><span style={navHead1} >Guide Directory</span></div>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  style={navList1}  href='/guidedirectory/0'>Guitar Body</DropdownItem>
                                <DropdownItem style={navList2} href='/guidedirectory/1'>Guitar Neck</DropdownItem>
                                <DropdownItem style={navList1} href='/guidedirectory/2'>Guitar Strings</DropdownItem>
                                <DropdownItem style={navList2} href='/guidedirectory/3'>Guitar Bridges</DropdownItem>
                                <DropdownItem style={navList1} href='/guidedirectory/4'>Guitar Pickups</DropdownItem>
                                <DropdownItem style={navList2} href='/guidedirectory/5'>Guitar Frets</DropdownItem>
                                <DropdownItem style={navList1} href='/guidedirectory/6'>Guitar Electronics</DropdownItem>
                                <DropdownItem style={navList2} href='/guidedirectory/7'>Guitar Picks</DropdownItem>
                                <DropdownItem style={navList1} href='/guidedirectory/8'>Guitar Brands</DropdownItem>
                                <DropdownItem style={navborder} divider />
                                <DropdownItem style={navList2} href='/guidedirectory'>Guide Directory</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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
                    <animated.div style={animatedStyle}>
                        <Form >
                            <FormGroup >
                                <Input className={styles.box}
                                    id="guideSearch"
                                    name="search"
                                    placeholder="Guide Search"
                                    type="search"
                                />
                            </FormGroup>
                        </Form>
                    </animated.div>
                </Nav>
            </Collapse>

        </Navbar>

    );
};
//(css alternative) stylesheet
const navHead1= {
    color: "magenta",
    fontFamily: "papyrus"
};

const navHead2= {
    color: "aqua",
    fontFamily: "papyrus"
};

const navList1= {
    color: "magenta",
    padding: "15px",
    margin: "5px 40px",
    fontSize: "25px",
    fontFamily: "papyrus"
};

const navList2= {
    color: "aqua",
    padding: "15px",
    margin: "5px 40px",
    fontSize: "25px",
    fontFamily: "papyrus"
};

const navborder= {
    color: "aqua",
    border: "aqua ridge 2px",
    fontFamily: "papyrus"
};




export default NavHeader;