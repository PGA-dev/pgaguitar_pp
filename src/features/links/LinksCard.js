import { Card, CardText } from 'reactstrap';
import { linksUrl } from '../../sitemisc/linksUrl';
import { useState } from 'react';

//Used in Site Map
const LinksCard = ({ links }) => {
    const { id, name, url } = links;


    const link = {
        color: 'aqua',
        padding: '15px',
        margin: '20px',
        fontSize: '35px',
        fontFamily: 'papyrus',
        fontWeight: '700',
        textDecoration: 'none'
    }
    const linkHover = {
        color: '#a424ff',
        padding: '15px',
        margin: '20px',
        fontSize: '37px',
        fontFamily: 'papyrus',
        fontWeight: '900',
        textDecoration: 'none'
    }

    const cardCSS = {
        margin: '20px',
        border: '3px solid slateblue',
        borderRadius: '35px'
    }

    const useLink = () => {
        const [style, setStyle] = useState(link);
        const onMouseEnter = () => setStyle(linkHover)
        const onClick = () => setStyle(linkHover)
        const onMouseLeave = () => setStyle(link)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }
    const useL = useLink();


    const cardURL = linksUrl + url;
    return (
        <Card style={cardCSS} className=' mb-4'>
            <CardText><a id='linkCSS' href={cardURL}>{name}</a></CardText>
        </Card>

    );
}




export default LinksCard;