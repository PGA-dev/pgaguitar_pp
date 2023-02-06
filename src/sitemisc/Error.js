//import { Col } from "reactstrap";


const Error = ({ errMsg }) => {
    return (
        <>
            <h4 style={errorStyle}>{errMsg}</h4>
        </>
    );
};

const errorStyle= {
    color: "aqua",
    padding: "2px",
    fontSize: "24px",
    fontFamily: "Papyrus"
};

export default Error;