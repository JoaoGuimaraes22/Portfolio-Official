import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-content content">
        <Fade>
          <h1 className="about-content-title subtitle">About Me</h1>
          <p className="about-content-description description">
            Find more about me
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default About;
