import React from 'react';
import './Vandi.css';

const Vandi = () => {
  return (
    <div className="vandi-page">
      <h1 className="vandi-logo">VANDI LE SALE</h1>
      <img src="/assets/vandi-avatar.png" alt="Avatar Vandi" className="vandi-avatar" />
      <p className="vandi-bio">
        Brut. Sombre. Surnaturel. Vandi le Sale est un cri du bitume, une énergie occulte aux sons glitchés. 💀🔥
      </p>
      <iframe
        title="SoundCloud Vandi"
        width="100%"
        height="120"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ton_user/vandi-track&color=%23000000"
      ></iframe>
    </div>
  );
};

export default Vandi;
