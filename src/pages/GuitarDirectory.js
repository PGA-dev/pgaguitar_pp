import { Container } from 'reactstrap';
import GuitarList from '../features/guitar/GuitarList';
import SubHeader from '../site/SubHeader';

const GuitarDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='guidedirectory' />
            <GuitarList />
        </Container>
    );
};

export default GuitarDirectoryPage;