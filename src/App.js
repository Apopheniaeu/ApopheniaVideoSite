import React from "react";
import "./styles.css";
import Logo from "./images/Apophenia_LogoA_White.png";

export default function App() {
  return (
    <>
      <p className="variable-logo">A</p>

      <div class="vimeo-wrapper">
        <iframe
          title="Microbial Menage"
          src="https://player.vimeo.com/video/763046666?h=74ea60f1d7&amp;badge=0&amp;background=1&autoplay=1&loop=1&byline=0&title=0"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>

      <div class="logo">
        <img src={Logo} className="logo" alt="ALogo" />
      </div>
    </>
  );
}