import { Col } from 'reactstrap';
import GuitarStat from './GuitarStat';
import { selectStatByGuitarId } from './guitarStatSlice';

const GuitarStatList = ({ guitarid }) => {
    const guitarstats = selectStatByGuitarId(guitarid);

    if (guitarstats && guitarstats.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Model Features</h4>
                {guitarstats.map((guitarstat) => {
                    return <GuitarStat key={guitarstat.id} guitarstat={guitarstat} />;
                })}
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            We don't have any information on this model yet.
        </Col>
    );
};

export default GuitarStatList;