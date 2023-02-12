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
import { fetchGuitarStat } from './features/guitarstats/guitarStatSlice';
import { fetchGuitar } from './features/guitar/guitarSlice';
import GuideSiteMap from './pages/GuideSiteMap';
import GuideSiteReferences from './pages/GuideSiteRef';
import { fetchGuitarStat2 } from './features/guitarstats2/guitarStatSlice2';
import { fetchContact } from './features/Contact/contactSlice';
import { fetchGuitarStat3 } from './features/guitarstats3/guitarStatSlice3';
import { fetchGuitarStat4 } from './features/guitarstats4/guitarStatSlice4';

//import { useState } from 'react';

function App() {
  //const [style, changeStyle] = useState("#00000f"); must get this working on page change
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuitar());
    dispatch(fetchGuitarStat());
    dispatch(fetchGuitarStat2());
    dispatch(fetchGuitarStat3());
    dispatch(fetchGuitarStat4());
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div style={{ background: '#000000', opacity: '.98', color: 'aqua' }} >
      <div className='App'>
        <NavHeader />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='guideaboutpage' element={<GuideAboutPage />} />
          <Route path='guidesiteref' element={<GuideSiteReferences />} />
          <Route path='guidesitemap' element={<GuideSiteMap />} />
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
