import React from "react";
import "./styles.css";
import Logo from "./images/Apophenia_LogoA_White.png";

export default function App() {
  const handleLogoClick = () => {
    window.location.href = "mailto:info@apophenia.eu";
  };

  return (
    <>
      <div className="vimeo-wrapper">
        <iframe
          title="Microbial Menage"
          src="https://player.vimeo.com/video/801803036?h=74ea60f1d7&badge=0&background=1&amp;autoplay=1&loop=1&byline=1&title=0"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>

      <div className="logo">
        <img
          src={Logo}
          className="logo"
          alt="ALogo"
          onClick={handleLogoClick}
        />
      </div>

      <div className="variable-logo">
        <p>A</p>
      </div>
    </>
  );
}
