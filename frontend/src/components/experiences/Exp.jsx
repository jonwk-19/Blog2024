import { useNavigate } from "react-router-dom";

export const Exp = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="experience">
        <div className="content">
          <h1>Experiences</h1>
          <ul>
            <li>
              <div className="experience-content hidden">
                <h2>Kinal</h2>
                <div className="experience-time">2022 - Present</div>
                <p>
                  As a student here, I have been developing my programming skills
                  and more. It has been a valuable period of learning and growth.
                </p>
              </div>
            </li>
            <li>
              <div className="experience-content hidden">
                <h2>Logistika360</h2>
                <div className="experience-time">Dec 2023 - Mar 2024</div>
                <p>
                  During my time at Logistika360, I worked as a full-stack developer,
                  utilizing technologies such as Flutter, SQL, JavaScript, C#, Java,
                  among others. It was an enriching experience contributing to various
                  projects and honing my skills.
                </p>
              </div>
            </li>
            <li>
              <div className="experience-content hidden">
                <h2>Personal Projects</h2>
                <div className="experience-time">2021 - Present</div>
                <p>
                  I have been dedicated to working on personal projects, focusing on
                  continuous improvement and skill enhancement. This ongoing journey
                  has allowed me to explore new technologies and refine existing ones,
                  contributing to my growth as a developer.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
