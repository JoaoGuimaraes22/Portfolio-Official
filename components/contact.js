import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact-content content">
        <Fade>
          <h1 className="contact-content-title subtitle">Contact me</h1>
          <p className="contact-content-description description">
            Be it for work, or anything else, email me, I'll respond ASAP
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
