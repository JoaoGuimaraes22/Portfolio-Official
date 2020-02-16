import Particles from "react-particles-js";
import { particlesConfig } from "../config-public/particles-config";

const Landing = () => {
  return (
    <div id="landing" className="landing page-section">
      <Particles className="particles" params={particlesConfig} />
      <div className="landing-main">
        <h1 className="landing-main-title title">João Guimarães</h1>
        <h3 className="landing-main-subtitle subtitle">Full Stack Engineer</h3>
        <p className="landing-main-subtext filler">
          If it's hard to say, just call me John
        </p>
        <a className="landing-main-button btn-light" href="#">
          See more
        </a>
      </div>
    </div>
  );
};

export default Landing;
