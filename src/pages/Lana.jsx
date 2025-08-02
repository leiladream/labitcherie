import React from 'react';
import './Lana.css';

const Lana = () => {
  return (
    <div className="lana-page">
      <h1 className="lana-logo">LANA LABITCH</h1>
      <img src="/assets/lana-avatar.png" alt="Avatar Lana" className="lana-avatar" />
      <p className="lana-bio">
        Divine. Glamour. Digitale. Lana Labitch incarne une féminité pixelisée, sensuelle et explosive. 💋✨
      </p>
      <iframe
        title="SoundCloud Lana"
        width="100%"
        height="120"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ton_user/lana-track&color=%23ff99cc"
      ></iframe>
    </div>
  );
};

export default Lana;
