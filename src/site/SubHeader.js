import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {

    return (
        <Row style={headstyleNav} >
            <Col>
                <Breadcrumb style={headstyleNobar}>
                    <BreadcrumbItem >
                        <Link style={headstyleNav} to='/'>Home</Link>
                    </BreadcrumbItem >
                    {detail && (
                        <BreadcrumbItem >
                            <Link style={headstyleNav} to='/guidedirectory'>Guide Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem style={headstyleCurrent} active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <hr />
            </Col>
        </Row>
    );

};

const headstyleNav = {
    color: "aqua",
    padding: "25px",
    fontSize: "48px",
    fontFamily: "Papyrus"
};

const headstyleCurrent = {
    color: "slateblue",
    padding: "0px 10px",
};

const headstyleNobar = {
    border: '0px black'
};


export default SubHeader;