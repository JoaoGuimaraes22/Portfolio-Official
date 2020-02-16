import Particles from "react-particles-js";
import { particlesConfig } from "../config-public/particles-config";

const Landing = () => {
  return (
    <div id="landing page-section">
      <Particles class="particles" params={particlesConfig} />
    </div>
  );
};

export default Landing;
