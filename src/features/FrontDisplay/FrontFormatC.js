//import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
//used in DisplayList on Homepage...
const FrontFormatC = ({ frontitems }) => {
    const { altText, src } = frontitems;
    return (
        <>
            <Link to={src}>
                <img src={frontitems.src} alt={altText} />
            </Link>
        </>

    );
};

export default FrontFormatC;