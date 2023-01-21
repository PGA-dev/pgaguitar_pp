import { Col } from 'reactstrap';
import BassStat from './BassStat';
import {selectStatByBassId} from './bassStatsSlice'

const BassStatList = ({ bassid }) => {
    const bassstats = selectStatByBassId(bassid);

    if (bassstats && bassstats.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {bassstats.map((bassstat) => {
                    return <BassStat key={bassstat.id} bassstat={bassstat} />;
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

export default BassStatList;