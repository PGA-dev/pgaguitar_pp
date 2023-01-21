import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import BassDirectory from './pages/BassDirectory';
import BassDetail from './features/Bass/BassDetail';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route
          path='directory/:guitarId'
          element={<CampsiteDetailPage />}
        />
        <Route path='bassdir' element={<BassDirectory />} />
        <Route
          path='bassdir/:guitarId'
          element={<BassDetail />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
