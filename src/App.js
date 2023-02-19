import React from "react";
import "./styles.css";
import Logo from "./images/Apophenia_LogoA_White.png";

export default function App() {
  useEffect(() => {
    const iframe = document.getElementById("my-video");
    const player = new window.Vimeo.Player(iframe);

    player.on("play", () => {
      const variableLogo = document.querySelector(".variable-logo");
      variableLogo.style.animationPlayState = "running";
    });
  }, []);

  return (
    <>
      <div class="vimeo-wrapper">
        <iframe
          id="my-video"
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

      <div className="variable-logo">
        <p>A</p>
      </div>
    </>
  );
}
