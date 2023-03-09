import { Card, CardText } from 'reactstrap';
import { linksUrl } from '../../sitemisc/linksUrl';
import { useState } from 'react';

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
    border: '3px solid slateblue',
    borderRadius: '35px'
}



export default LinksCard;