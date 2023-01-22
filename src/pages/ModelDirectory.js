import { Container } from 'reactstrap';
import ModelList from '../features/Model/ModelList';
import SubHeader from '../components/SubHeader';

const ModelDirectory = () => {
    return (
        <Container>
            <SubHeader current='modeldirectory' />
            <ModelList />
        </Container>
    );
};

export default ModelDirectory;