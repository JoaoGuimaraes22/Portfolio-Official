import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section className="cards section" id="projects">
      <div className="content">
        <Fade>
          <h1 className="subtitle heading">Projects</h1>
          <p className="description">Hover over a project to see more.</p>
        </Fade>

        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(/media/imgs/logo.jpg)" }}
          >
            <p>Projecto 1</p>
          </div>
          <div className="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>

        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(/media/imgs/app.jpeg)" }}
          >
            <p>Projecto 2</p>
          </div>
          <div className="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>

        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(/media/imgs/test.jpg)" }}
          >
            <p>Projecto 3</p>
          </div>
          <div className="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>

        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(/media/imgs/app.jpeg)" }}
          >
            <p>Projecto 4</p>
          </div>
          <div className="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>

        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(/media/imgs/predios.jpg)" }}
          >
            <p>Projecto 5</p>
          </div>
          <div className="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>

        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(/media/imgs/tech.jpeg)" }}
          >
            <p>Projecto 6</p>
          </div>
          <div className="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
