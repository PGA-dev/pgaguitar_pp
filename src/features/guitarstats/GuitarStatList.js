import { Col } from 'reactstrap';
import GuitarStat from './GuitarStat';
import { selectStatByGuitarId } from './guitarStatSlice';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList = ({ guitarid }) => {
    const guitarstats = useSelector(selectStatByGuitarId(guitarid));
    const isLoading = useSelector((state) => state.guitarstat.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat.errorMsg);

    if (isLoading) {
        return (
            <LoadingMessage />
        );
    }

    if (errorMsg) {
        return (
            <ErrorMessage errorMsg={errorMsg} />
        );
    }

    if (guitarstats && guitarstats.length > 0) {
        return (
            <Col md='12' className='m-1 p-2'>
                <h4>External Links</h4>
                {guitarstats.map((guitarstat) => {
                    return <GuitarStat key={guitarstat.id} guitarstat={guitarstat} />;
                })}
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1' style={{ padding: '5px', fontFamily: 'papyrus', color: 'blueviolet' }}>
            We don't have any stats on this model yet.
        </Col>
    );
};

// const gslhead = {
//     padding: '2px',
//     fontFamily: 'papyrus',
//     color: '#a424ff',
//     fontSize: '40px',
//     fontWeight: 900
// }

export default GuitarStatList;