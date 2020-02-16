import Particles from "react-particles-js";
import { particlesConfig } from "../config-public/particles-config";

const Landing = () => {
  return (
    <div id="landing" className="page-section">
      <Particles className="particles" params={particlesConfig} />
    </div>
  );
};

export default Landing;
