import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectbyBassId } from '../features/Bass/bassSlice';
import BassDetail from '../features/Bass/BassDetail'
import SubHeader from '../components/SubHeader';