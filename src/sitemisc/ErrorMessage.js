//import { Col } from "reactstrap";


const ErrorMessage = ({ errorMsg }) => {
    return (
        <>
        <h1 style={errorHead}>Aaaaahhhhhh...you broke it!!!!</h1>
            <h4 style={errorStyle}>{errorMsg}</h4>
        </>
    );
};

const errorStyle = {
    color: "magenta",
    padding: "2px",
    fontSize: "40px",
    fontFamily: "papyrus"
};

const errorHead = {
    color: "red",
    padding: "2px",
    fontSize: "40px",
    fontFamily: "papyrus"
};

export default ErrorMessage;