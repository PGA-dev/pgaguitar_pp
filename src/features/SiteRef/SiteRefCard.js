import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap';


//Used in Site Map
const SiteRefCard = ({ links }) => {
    const { id, section, text, url, url2, url3, url4, url5, url6, url7, url8, url9, url10 } = links;

    return (
        <Card  className=' mb-4 link-card'>
            <CardHeader>{section}</CardHeader>
            <CardBody>
            <CardTitle>{text}</CardTitle>
            <CardText><a className='link-anchor' href={url}>{url}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url2}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url3}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url4}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url5}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url6}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url7}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url8}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url9}</a></CardText>
            <CardText><a className='link-anchor' href={url}>{url10}</a></CardText>
            </CardBody>
        </Card>
    );
}


export default SiteRefCard;