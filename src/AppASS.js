import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './site/Header';
import Footer from './site/Footer';
import NavHeader from './site/NavHeader';
import GuideDirectory from './pages/GuideDirectory';
import GuitarDetailPage from './pages/GuitarDetailPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AboutPage from './pages/AboutPage';
import GuideAboutPage from './pages/GuideAboutPage';
import { fetchGuitarStat } from './features/guitarstats/guitarStatSliceASS';
//import { useState } from 'react';

function App() {
  //const [style, changeStyle] = useState("#00000f"); must get this working on page change
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchGuitar());
      dispatch(fetchGuitarStat());
  }, [dispatch]);


  return (
    <div style={{ background: '#000000', opacity:'.98', color: 'aqua'}} >
    <div className='App'>
      <NavHeader />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />}  />
        <Route path='about' element={<AboutPage />} />
        <Route path='guideaboutpage' element={<GuideAboutPage />} />
        <Route path='guidedirectory' element={<GuideDirectory />} />
        <Route
          path='guidedirectory/:guitarid'
          element={<GuitarDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
    </div>
  );
}

export default App;
