/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./card.scss";
import taskManagerImage from "../../assets/taskManager2.png";
import ebankImage from "../../assets/ebank.png";
import clothesImage from "../../assets/clothes.png";
import lodgyImage from "../../assets/lodgy.png";


export const Card = ({ }) => {
    // const { getProyect, loading, proyect } = useProyect();
    const navigate = useNavigate();

    /*useEffect(() => {
        getProyect();
    }, []);*/

    return (
        <div>
            <div className="blog-card">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                // "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                                `url(${ebankImage})`,
                        }}
                    ></div>
                    <ul className="details">
                        <li className="author">
                            <a href="#">Jonwk</a>
                        </li>
                        <li className="date">Mar. 2024</li>
                        <li className="tags">
                            <ul>
                                <li>
                                    <a href="#">NodeJS</a>
                                </li>
                                <li>
                                    <a href="#">ReactJS</a>
                                </li>
                                <li>
                                    <a href="#">MongoDB</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>E-Bank</h1>
                    <h2>Group</h2>
                    <p>
                    This project aims to develop a web API using Node.js, React, and MongoDB for managing banking operations such as user registration, account management, transactions, and currency conversion. The application is divided into two main sections: administrator and client, each with specific functionalities.
                    </p>
                    <p className="read-more">
                        <a href="https://ebank-2024.web.app" target="_blank">Go to Proyect</a>
                    </p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                // "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
                                `url(${taskManagerImage})`,
                        }}
                    ></div>
                    <ul className="details">
                        <li className="author">
                            <a href="#">Jonwk</a>
                        </li>
                        <li className="date">Apr. 2024</li>
                        <li className="tags">
                            <ul>
                                <li>
                                    <a href="#">MongoDB</a>
                                </li>
                                <li>
                                    <a href="#">Node.JS</a>
                                </li>
                                <li>
                                    <a href="#">React.JS</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>TaskManager</h1>
                    <h2>Group</h2>
                    <p>
                    Explore the development journey of a task management application leveraging Node.js and MongoDB for the backend, and React for the frontend. Discuss the seamless integration of frontend and backend components to create an efficient and user-friendly task management system.
                    </p>
                    <p className="read-more">
                        <a href="https://github.com/KinalDropCode/Almacenadora" target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
            <div className="blog-card">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                // "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
                                `url(${clothesImage})`,
                        }}
                    ></div>
                    <ul className="details">
                        <li className="author">
                            <a href="#">Jonwk</a>
                        </li>
                        <li className="date">Apr. 2024</li>
                        <li className="tags">
                            <ul>
                                <li>
                                    <a href="#">JavaSE</a>
                                </li>   
                                <li>
                                    <a href="#">MySQL</a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Clothes Store</h1>
                    <h2>Group</h2>
                    <p>
                    Project for managing a clothing store, built using Java EE and MySQL. The system facilitates inventory management, sales tracking, and customer relationship management, providing a comprehensive solution for efficient store operations.
                    </p>
                    <p className="read-more">
                        <a href="https://github.com/jdomingo2022206/clothes_store" target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                // "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
                                `url(${lodgyImage})`,
                        }}
                    ></div>
                    <ul className="details">
                        <li className="author">
                            <a href="#">Jonwk</a>
                        </li>
                        <li className="date">May. 2024</li>
                        <li className="tags">
                            <ul>
                                <li>
                                    <a href="#">MongoDB</a>
                                </li>
                                <li>
                                    <a href="#">Node.JS</a>
                                </li>
                                <li>
                                    <a href="#">React.JS</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Lodgy</h1>
                    <h2>Group</h2>
                    <p>
                    We developed a hotel management system that handles user management, reservations, room allocation, and guest registration. This system allows for efficient control and organization of hotel operations, ensuring smooth guest experiences and effective management of resources.
                    </p>
                    <p className="read-more">
                        <a href="https://github.com/KinalDropCode/Lodgy-Frontend" target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
