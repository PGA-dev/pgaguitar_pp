import { Col } from 'reactstrap';
import GuitarStat4 from './GuitarStat4';
import { selectStatByGuitarId4 } from './guitarStatSlice4';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList4 = ({ guitarid }) => {
    const guitarstats4 = useSelector(selectStatByGuitarId4(guitarid));
    const isLoading = useSelector((state) => state.guitarstat4.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat4.errorMsg);

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

    if (guitarstats4 && guitarstats4.length > 0) {
        return (
            <Col md='12' className='m-1'>
                <h4 ><b>Stat4</b></h4>
                {guitarstats4.map((guitarstat4) => {
                    return <GuitarStat4 key={guitarstat4.id} guitarstat4={guitarstat4} />;
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

export default GuitarStatList4;