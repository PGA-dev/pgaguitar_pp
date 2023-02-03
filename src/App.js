import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './site/Header';
import Footer from './site/Footer';
import NavHeader from './site/NavHeader';
import GuitarDirectory from './pages/GuitarDirectory';
import GuitarDetailPage from './pages/GuitarDetailPage';
import './App.css';
import AboutPage from './pages/AboutPage';
import BassDirectory from './pages/BassDirectory';
import BassDetailPage from './pages/BassDetailPage';
import GuitarBodyPage from './pages/GuitarBody';

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='guitarbody' element={<GuitarBodyPage />} />
        <Route path='guitardirectory' element={<GuitarDirectory />} />
        <Route
          path='guitardirectory/:guitarid'
          element={<GuitarDetailPage />}
        />
        <Route
          path='guitardirectory/:guitarid/:guitarbody'
          element={<GuitarBodyPage />}
        />
        <Route path='bassdirectory' element={<BassDirectory />} />
        <Route
          path='bassdirectory/:bassid'
          element={<BassDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
