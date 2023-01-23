import { Row, Col } from 'reactstrap';
import { selectAllIType } from './itypeSlice';
import IType from "./IType";


const ITypeList = () => {
    const itypes = selectAllIType();
    return (
        <Row className='ms-auto'>
            {itypes.map((itype) => {
                return (
                    <Col md='12' className='m-4' key={itype.id}>
                        <IType itype={itype} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ITypeList;