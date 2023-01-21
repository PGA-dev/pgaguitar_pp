import { Container } from 'reactstrap';
import GuitarList from '../features/guitar/GuitarList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <GuitarList />
        </Container>
    );
};

export default CampsitesDirectoryPage;