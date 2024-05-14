/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export const AboutMe = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <div className="content">
          <div className="header">
            <h1>Simple Responsive Portfolio</h1>
          </div>
        </div>
      </section>
      <section className="about-myself">
        <div className="content">
          <h2>Hi !</h2>
          <p>
            I'm <span>Jonathan Domingo</span>.. I am a lover of 
            <span>Programming and cybersecurity</span> they have an inexplicable
            attraction for me. <span>Since I was little</span> I marveled at this world.
            Craft solutions to complex problems and design systems that
            challenge the limits of imagination. However, it is not only the act
            of programming, but also the relationship between code and security.
            In the field of cybersecurity, I find purpose in safeguarding
            information. The intrigue of finding vulnerabilities and
            strengthening them. It is a field in which I am just beginning but
            without a doubt it is already part of me. This is a small blog that
            will talk <span>more about me below.</span>
          </p>
        </div>
      </section>
    </div>
  );
};
