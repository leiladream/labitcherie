import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil-container">
      <h1 className="logo-glitch" data-text="LABITCHERIE">LABITCHERIE</h1>
      <p className="slogan">Two souls, one label. Underground & Glam 🔥💋</p>
      <div className="nav-buttons">
        <Link to="/vandi" className="btn-vandi">💀 Vandi le Sale</Link>
        <Link to="/lana" className="btn-lana">💋 Lana Labitch</Link>
      </div>
    </div>
  );
};

export default Accueil;