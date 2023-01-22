import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import GuitarDirectory from './pages/GuitarDirectory';
import GuitarDetailPage from './pages/GuitarDetailPage';
import './App.css';
import ModelDirectory from './pages/ModelDirectory';
import BassDetail from './features/Model/ModelDetail';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='modeldirectory' element={<ModelDirectory />} />
        <Route
          path='modeldirectory/:modelid'
          element={<BassDetail />}
        />
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
