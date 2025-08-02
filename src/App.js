import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import IntroGlitch from './components/IntroGlitch';
import Accueil from './pages/Accueil';
import Vandi from './pages/Vandi';
import Lana from './pages/Lana';

const HomeRedirect = () => {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      navigate('/accueil');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return showIntro ? <IntroGlitch /> : null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/vandi" element={<Vandi />} />
        <Route path="/lana" element={<Lana />} />
      </Routes>
    </Router>
  );
}

export default App;