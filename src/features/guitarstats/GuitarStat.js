import {  Card, CardHeader, CardBody } from "reactstrap";


//style={{ padding: '2px', fontFamily: 'papyrus', color: '#49fb35' }}
const GuitarStat = ({ guitarstat }) => {
    const { head, text } = guitarstat;
    return (
        <Card>
            <CardHeader>{head}</CardHeader>
            <CardBody>{text}</CardBody>
        </Card>
    );
};


export default GuitarStat;