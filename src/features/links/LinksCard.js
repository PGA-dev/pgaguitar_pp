import { Card, CardText } from 'reactstrap';
//import { Link } from 'react-router-dom';


//Used in Site Map
const LinksCard = ({ links }) => {
    const { id, name, url } = links;

    return (
        <Card style={cardCSS}>
            <CardText><a style={linkCSS} href={url}>{name}</a></CardText>
        </Card>

    );
}

const linkCSS = {
    color: "aqua",
    padding: "15px",
    margin: "20px",
    fontSize: "35px",
    fontFamily: "Papyrus",
    textDecoration: 'none'
};

const cardCSS = {
    margin: "20px",
};

export default LinksCard;