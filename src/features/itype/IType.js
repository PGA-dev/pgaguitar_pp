import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const IType = ({ itype }) => {
    if (itype) {
        const { id, image, name } = itype;
        return (
            <Link to={`${id}`}>
                <Card>
                    <CardImg width='100%' src={image} alt={name} />
                    <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>
        );
    };
    return null;
}


export default IType;