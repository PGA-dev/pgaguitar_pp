import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
    return (
        <Row style={headstyleNav}>

            <Col className="text-left" >
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link style={headstyleNav} to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link style={headstyleNav} to='/guidedirectory'>Guide Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <hr />
            </Col>
        </Row>
    );
};

const headstyleNav= {
    color: "slateblue",
    padding: "15px",
    fontSize: "35px",
    fontFamily: "Papyrus"
};

export default SubHeader;