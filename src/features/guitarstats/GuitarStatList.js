import { Col } from 'reactstrap';
import GuitarStat from './GuitarStat';
import { selectStatByGuitarId } from './guitarStatSlice';
import Error from '../../sitemisc/ErrorMessage';
import Loading from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList = ({ guitarid }) => {
    const guitarstats = useSelector(selectStatByGuitarId(guitarid));
    const isLoading = useSelector((state) => state.guitarstat.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat.errorMsg);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (errorMsg) {
        return (
            <Error errorMsg={errorMsg} />
        );
    }

    if (guitarstats && guitarstats.length > 0) {
        return (
            <Col md='12' className='m-1'>
                <h4 style={{ padding: '2px', fontFamily: 'papyrus', color: 'aqua' }}><b>External Links</b></h4>
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

export default GuitarStatList;