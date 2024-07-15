import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaCodepen, FaEnvelope, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function generateCaptcha() {
    const Numb1 = Math.floor(Math.random() * 10).toString();
    const Numb2 = Math.floor(Math.random() * 10).toString();
    const Numb3 = Math.floor(Math.random() * 10).toString();
    const Numb4 = Math.floor(Math.random() * 10).toString();
    return Numb1 + Numb2 + Numb3 + Numb4;
  }

  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
    setCaptchaInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (captcha === captchaInput) {
      console.log("Formulario enviado correctamente");
      alert("E-mail enviado correctamente");
      clearForm();
      navigate("/"); // Redirige a la página de inicio
    } else {
      console.log("Captcha incorrecto");
      alert("Captcha incorrecto. Por favor, inténtalo de nuevo.");
      setCaptcha(generateCaptcha()); 
      setCaptchaInput(""); 
    }
  }

  return (
    <div>
      <section id="contact" className="contact">
        <div className="content">
          <h1>Contact Me</h1>
          <br />
          <div className="socials">
            <div className="social">
              <a href="https://github.com/jdomingo2022206" target="_blank" rel="noopener noreferrer" className="github">
                <FaGithub />
              </a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/jonathan-domingo-58b292314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FaLinkedin />
              </a>
            </div>
            <div className="social">
              <a href="https://candidato.gt.computrabajo.com/candidate/cv/" target="_blank" rel="noopener noreferrer" className="codepen">
                <FaCodepen />
              </a>
            </div>
            <div className="social">
              <a href="jdomingo-2022206@kinal.edu.gt" target="_blank" rel="noopener noreferrer" className="email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div id="form" className="form">
            <form onSubmit={handleSubmit} className="contact-form">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="name"
                placeholder="Enter your name"
                tabIndex={1}
              />
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email"
                placeholder="Enter your email"
                tabIndex={2}
              />
              <span id="captcha">Captcha: {captcha}</span>
              <input
                type="text"
                name="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="captcha"
                maxLength="4"
                size="4"
                placeholder="Enter captcha code"
                tabIndex={3}
              />
              <span>Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="message"
                placeholder="Enter your message"
                tabIndex={4}
              ></textarea>
              <input
                type="submit"
                name="submit"
                value="Send e-mail"
                className="submit"
                tabIndex={5}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
