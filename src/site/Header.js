import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (

        <Row className='text-center'>
            <Col id='headerhead' >
                <h1 m='12' id='title' style={headstyle} >Players Index: A Modern Buyers Guide for Guitar Gear</h1>
                <animated.div style={animatedStyle}>
                    <h5 style={{ color: "aqua", padding: "6px", fontSize: "45px", fontFamily: "Arial-bold" }} className='text-center'>A Guitar Player's Best Friend</h5>
                </animated.div>
            </Col>
        </Row>

    );
};
const headstyle = {
    color: "SlateBlue",
    padding: "8px",
    fontSize: "65px",
    fontFamily: "Papyrus"
};

export default Header;