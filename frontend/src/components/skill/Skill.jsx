/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

// export const Blog = ({ exp, skill, proyect }) => {
export const Skill = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="skills">
        <div className="content">
          <div className="development-wrapper">
            <h2 className="development-title">Skills</h2>
            <ul className="skills-bar-container">
              <li>
                <div className="progressbar-title">
                  <h3>HTML5</h3>
                  <span className="percent" id="html-pourcent"></span>
                </div>
                <div className="bar-container" data-percent="95">
                  <span className="progressbar" id="progress-html"></span>
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h3>CSS / SASS</h3>
                  <span className="percent" id="css-pourcent"></span>
                </div>
                <div className="bar-container" data-percent="85">
                  <span className="progressbar" id="progress-css"></span>
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h3>JavaScript / jQuery</h3>
                  <span className="percent" id="javascript-pourcent"></span>
                </div>
                <div className="bar-container" data-percent="80">
                  <span className="progressbar" id="progress-javascript"></span>
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h3>PHP</h3>
                  <span className="percent" id="php-pourcent"></span>
                </div>
                <div className="bar-container" data-percent="65">
                  <span className="progressbar" id="progress-php"></span>
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h3>AngularJS</h3>
                  <span className="percent" id="angular-pourcent"></span>
                </div>
                <div className="bar-container" data-percent="70">
                  <span className="progressbar" id="progress-angular"></span>
                </div>
              </li>
            </ul>
          </div>
          <div className="tools-knowledge-wrapper">
            <div className="tools-wrapper">
              <h2 className="title">Tools</h2>
              <ul className="tools">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Photoshop
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Adobe Illustrator
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Sublime text
                </li>
              </ul>
            </div>
            <div className="knowledge-wrapper">
              <h2 className="title">Knowledge</h2>
              <ul className="knowledge">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Wireframing
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Responsive design
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  ...
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </section>
      <section className="resume">
        <div className="content">
            <a href="#" target="_blank">
            <div className="btn-resume">
                <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                <span>Download my resume</span>
            </div>
            </a>
        </div>
    </section>
    </div>
  );
};
