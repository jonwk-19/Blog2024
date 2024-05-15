/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

// export const Blog = ({ exp, skill, proyect }) => {
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
                <h2>Company</h2>
                <div className="experience-time">Jan - Jun 2016</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias debitis praesentium itaque veniam dolorum cupiditate  
                  asperiores optio beatae, qui perferendis ipsam odit modi nemo
                  natus corrupti neque quos distinctio facilis?
                </p>
              </div>
            </li>
            <li>
              <div className="experience-content hidden">
                <h2>Company</h2>
                <div className="experience-time">Jul - Dec 2015</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati quas, reiciendis quis sequi voluptatem consectetur
                  adipisci accusamus hic vel vero ea ad iure! Natus, ipsum, enim
                  aspernatur fugit voluptatibus similique?
                </p>
              </div>
            </li>
            <li>
              <div className="experience-content hidden">
                <h2>Company</h2>
                <div className="experience-time">Mar - Jun 2015</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati quas, reiciendis quis sequi voluptatem consectetur
                  adipisci accusamus hic vel vero ea ad iure! Natus, ipsum, enim
                  aspernatur fugit voluptatibus similique?
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
