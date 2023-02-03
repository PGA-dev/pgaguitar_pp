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
import GuideAboutPage from './pages/GuideAboutPage';

function App() {
  return (
    <div className='App'>
      <NavHeader />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='guideaboutpage' element={<GuideAboutPage />} />
        <Route path='guitardirectory' element={<GuitarDirectory />} />
        <Route
          path='guitardirectory/:guitarid'
          element={<GuitarDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
