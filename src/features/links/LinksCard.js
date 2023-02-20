import { Card, CardText } from 'reactstrap';



//Used in Site Map
const LinksCard = ({ links }) => {
    const { id, name, url } = links;

    return (
        <Card style={cardCSS}>
            <CardText><a id='linkCSS' href={url}>{name}</a></CardText>
        </Card>

    );
}


const cardCSS = {
    margin: '20px',
    border: '5px solid slateblue'
}

export default LinksCard;