import { Card, CardText } from 'reactstrap';
import { linksUrl } from '../../sitemisc/linksUrl';



//Used in Site Map
const LinksCard = ({ links }) => {
    const { id, name, url } = links;

    const cardURL = linksUrl + url;
    return (
        <Card style={cardCSS} className=' mb-4'>
            <CardText><a id='linkCSS' href={cardURL}>{name}</a></CardText>
        </Card>

    );
}


const cardCSS = {
    margin: '20px',
    border: '5px solid slateblue'
}


export default LinksCard;