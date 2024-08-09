import colorImage from '../assets/color.png';
import generatorImage from '../assets/password.jpg';
import websiteImage from '../assets/Littlelemon.png';
import { Link } from 'react-router-dom';  

function Project() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="project-heading">Projects</span>
          <span className="project-desc">
            All my projects include links to the code and live version. Click the button to learn more about each one.
          </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={colorImage}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Color Scheme Generator</h3>
              <p className="projects__row-content-desc">
                An app that generates a color scheme based on user selections.
              </p>
              <Link to="/colorgenerator" className="btn btn--med btn--theme dynamicBgClr">
                Learn more
              </Link>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={websiteImage}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Little Lemon Website</h3>
              <p className="projects__row-content-desc">
                A website that allows customers to order food online for pickup or delivery. They can also reserve a table.
              </p>
              <Link to="/littlelemon" className="btn btn--med btn--theme dynamicBgClr">
                Learn more
              </Link>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={generatorImage}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Password Generator</h3>
              <p className="projects__row-content-desc">
                An app that generates random passwords based on a few user inputs, e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript.
              </p>
              <Link to="/passwordgenerator" className="btn btn--med btn--theme dynamicBgClr">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;