import { Container } from 'reactstrap';
import BassList from '../features/bass/BassList';
import SubHeader from '../components/SubHeader';

const BassDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='bassdirectory' />
            <BassList />
        </Container>
    );
};

export default BassDirectoryPage;