import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="experience-content content">
        <Fade>
          <h1 className="experience-content-title subtitle">Experience</h1>
          <p className="experience-content-description description">
            What I've done professionally
          </p>
        </Fade>
        <div className="experience-content-container">
          <div className="experience-box experience-box-1">
            <div className="text">
              <h3 className="text-title small-title">Becoming a developer</h3>
              <div className="text-desc">
                <p className="text-desc-d text-desc-d1">
                  Throughout the years, I've learned a lot, mainly self-taught,
                  about various tech related subjects on my path to become the
                  best version of me possible.
                </p>
                <p className="text-desc-d text-desc-d2">
                  My path was the following:
                </p>
                <ul className="text-desc-list">
                  <li className="text-desc-list-item">
                    Building full stack website with the MERN stack.
                  </li>
                  <li className="text-desc-list-item">
                    Developing virtual assistants using Azure ML, NLP and C#.
                  </li>
                  <li className="text-desc-list-item">
                    Developing a news app for a local programming competition,
                    called "AppsForGood".
                  </li>
                  <li className="text-desc-list-item">
                    Making Augmented Reality mobile applications with Unity and
                    C#.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-box-img-container">
              <img src="/media/imgs/app.jpeg"></img>
            </div>
          </div>

          <div className="experience-box experience-box-2">
            <div className="text">
              <h3 className="text-title small-title">
                My first job at Unipartner
              </h3>
              <div className="text-desc">
                <p className="text-desc-d text-desc-d1">
                  Unipartner IT Services is an IT services private company,
                  recognized with the EMEA Microsoft Centre of Competence, with
                  over 200 employees, that works with commercial enterprises,
                  financial instituitions and government organizations to solve
                  their IT and business needs.
                </p>
                <p className="text-desc-d text-desc-d2">
                  I started working there at 18 years old and worked for a year.
                  There, I worked as a full-stack developer mainly using the
                  Microsoft Tech Stack and React. What I did was:
                </p>
                <ul className="text-desc-list">
                  <li className="text-desc-list-item">
                    Building full stack website with the MERN stack.
                  </li>
                  <li className="text-desc-list-item">
                    Developing virtual assistants using Azure ML, NLP and C#.
                  </li>
                  <li className="text-desc-list-item">
                    Developing a news app for a local programming competition,
                    called "AppsForGood".
                  </li>
                  <li className="text-desc-list-item">
                    Making Augmented Reality mobile applications with Unity and
                    C#.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-box-img-container experience-box-img-container-2">
              <img src="/media/imgs/app.jpeg"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
