import { Container } from 'reactstrap';
import FrontEndDisplay from '../features/FrontDisplay/FrontEndDisplay';
import SubHeader from '../site/SubHeader';


const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <FrontEndDisplay />
        </Container>
    );
};

export default HomePage;