import { Col } from 'reactstrap';
import GuitarStat from './GuitarStat';
import { selectStatByGuitarId } from './guitarStatSlice';

const GuitarStatList = ({ guitarId }) => {
    const guitarstats = selectStatByGuitarId(guitarId);

    if (guitarstats && guitarstats.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {guitarstats.map((guitarstat) => {
                    return <GuitarStat key={guitarstat.id} guitarstat={guitarstat} />;
                })}
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default GuitarStatList;