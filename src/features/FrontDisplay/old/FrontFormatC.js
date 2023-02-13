//import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import { Link } from 'react-router-dom';
//used in DisplayList on Homepage...
const FrontFormatC = ({ frontitems }) => {
    const { altText, src } = frontitems;
    return (
        <>
                <img src={frontitems.src} alt={frontitems.altText} />
            
        </>
    );
};

export default FrontFormatC;