import React from 'react';
import './IntroGlitch.css';
import { Link } from 'react-router-dom';

const IntroGlitch = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-text glitch">Bienvenue dans la Labitcherie 💋</h1>
      <nav className="intro-nav">
        <Link to="/accueil">Entrer</Link>
        <Link to="/vandi">Vandi le Sale</Link>
        <Link to="/lana">Lana Labitch</Link>
      </nav>
    </div>
  );
};

export default IntroGlitch;