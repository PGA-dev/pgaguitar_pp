import { Container } from 'reactstrap';
import DisplayList from '../features/FrontDisplay/FrontEndDisplay';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <DisplayList />
        </Container>
    );
};

export default HomePage;