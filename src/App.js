import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import GuitarDirectory from './pages/GuitarDirectory';
import GuitarDetailPage from './pages/GuitarDetailPage';
import './App.css';
import BassDirectory from './pages/BassDirectory';
import BassDetail from './features/Bass/BassDetail';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='directory' element={<GuitarDirectory />} />
        <Route
          path='directory/:guitarid'
          element={<GuitarDetailPage />}
        />
        <Route path='bassdir' element={<BassDirectory />} />
        <Route
          path='bassdir/:bassid'
          element={<BassDetail />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
