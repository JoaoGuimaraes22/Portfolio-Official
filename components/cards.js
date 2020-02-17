import React from "react";

const Card = () => {
  return (
    <div className="cards">
      <div className="content">
        <h1 className="heading">Projects</h1>
        <p className="description">Hover over a project to see more.</p>
        <a className="card" href="#!">
          <div
            className="front"
            style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
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
            style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
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
            style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
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
            style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
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
            style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
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
            style={{ backgroundImage: "url(//source.unsplash.com/300x401)" }}
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
    </div>
  );
};

export default Card;
