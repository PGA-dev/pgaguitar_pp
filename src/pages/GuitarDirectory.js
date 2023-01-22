import { Container } from 'reactstrap';
import GuitarList from '../features/guitar/GuitarList';
import SubHeader from '../components/SubHeader';

const GuitarDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='GuitarDirectory' />
            <GuitarList />
        </Container>
    );
};

export default GuitarDirectoryPage;