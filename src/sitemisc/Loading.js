import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col>
            <i style={spinStyle} className='fa fa-spinner fa-pulse fa-3x fa-fw ' />
            <p style={loadStyle}>Loading...</p>
        </Col>
    );
};

const loadStyle= {
    color: "aqua",
    padding: "2px",
    fontSize: "24px",
    fontFamily: "Papyrus"
};

const spinStyle= {
    color: "aqua"
};

export default Loading;