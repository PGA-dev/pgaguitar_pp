import { Container } from 'reactstrap';
import ITypeList from '../features/itype/ITypeList';
import SubHeader from '../site/SubHeader';

const ITypeDirectory = () => {
    return (
        <Container>
            <SubHeader current='guidetypedirectory' />
            <ITypeList />
        </Container>
    );
};

export default ITypeDirectory;