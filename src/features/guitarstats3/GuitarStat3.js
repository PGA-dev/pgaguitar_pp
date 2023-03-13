import {  Card, CardHeader, CardBody } from "reactstrap";

const GuitarStat3 = ({ guitarstat3 }) => {
    const { head, text } = guitarstat3;
    return (
        <Card>
            <CardHeader>{head}</CardHeader>
            <CardBody>{text}</CardBody>
        </Card>
    );
};


export default GuitarStat3;