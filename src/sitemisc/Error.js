//import { Col } from "reactstrap";


const Error = ({ errMsg }) => {
    return (
        <>
            <h4 style={errorStyle}>{errMsg}</h4>
        </>
    );
};

const errorStyle = {
    color: "magenta",
    padding: "2px",
    fontSize: "40px",
    fontFamily: "papyrus"
};

export default Error;