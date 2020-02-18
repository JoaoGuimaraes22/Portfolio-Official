import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = () => {
  const getAge = () => {
    const date = new Date();
    const currYear = date.getFullYear();
    const myAge = currYear - 2001;
    return myAge.toString();
  };

  return (
    <section className="about section" id="about">
      <div className="about-content content">
        <Fade>
          <h1 className="about-content-title subtitle">About Me</h1>
          <p className="about-content-description description">
            Find more about me
          </p>
        </Fade>
        <div className="about-content-container ">
          <Zoom>
            <div className="about-main-text">
              <p className="about-main-text-desc-1 about-main-text-desc filler">
                Hello! I'm João Guimarães, I'm a {getAge()} years old fullstack
                software developer who loves building things that live on the
                web.
                <br />
              </p>
              <p className="about-main-text-desc-2 about-main-text-desc filler">
                My greatest passions are technology, volleyball and personal
                finance.
              </p>
              <p className="about-main-text-desc-3 about-main-text-desc filler">
                My focus is on the development of modern and efficient websites,
                web apps or services to provide users or companies with fully
                responsive, pixel-perfect interfaces and exceptional efficient
                interaction.
              </p>
            </div>
          </Zoom>
          <div className="about-img-container">
            <a href="https://github.com/JoaoGuimaraes22" target="_blank">
              <Zoom>
                <img
                  src="/media/imgs/Me.jpg"
                  style={{ height: "auto", width: "100%" }}
                  className="about-img-container-img"
                ></img>
              </Zoom>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
