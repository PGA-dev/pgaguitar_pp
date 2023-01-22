import { Row, Col} from 'reactstrap';
import { selectAllModels } from './modelSlice';
import Model from "./Model";


const ModelList = () => {
    const models = selectAllModels();
    return (
        <Row className='ms-auto'>
            {models.map((model) => {
                return (
                    <Col md='12' className='m-4' key={model.id}>
                        <Model model={model} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ModelList;