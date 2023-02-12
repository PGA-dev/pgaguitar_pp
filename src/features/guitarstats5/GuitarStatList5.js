import { Col } from 'reactstrap';
import GuitarStat5 from './GuitarStat5';
import { selectStatByGuitarId5 } from './guitarStatSlice5';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList5 = ({ guitarid }) => {
    const guitarstats5 = useSelector(selectStatByGuitarId5(guitarid));
    const isLoading = useSelector((state) => state.guitarstat5.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat5.errorMsg);

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
    if (guitarstats5 && guitarstats5.length > 0) {
        return (
            <Col md='12' className='m-1'>
                <h3 style={{ padding: '2px', fontFamily: 'papyrus', color: 'aqua' }}><b>Manufacturer Links</b></h3>
                {guitarstats5.map((guitarstat5) => {
                    return <GuitarStat5 key={guitarstat5.id} guitarstat5={guitarstat5} />;
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

export default GuitarStatList5;