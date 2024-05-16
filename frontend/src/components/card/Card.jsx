/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./card.scss";
// import { useProyect } from "../../shared/hooks/useProyect";

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
                                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
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
                                    <a href="#">Node.JS</a>
                                </li>
                                <li>
                                    <a href="#">JavaScritp</a>
                                </li>
                                <li>
                                    <a href="#">MongoDB</a>
                                </li>
                                <li>
                                    <a href="#">Thunder</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>Online Store</h1>
                    <h2>Alone</h2>
                    <p>
                        Develop a comprehensive guide on building a Node.js backend system integrated with MongoDB for an e-commerce platform, focusing on backend functionalities and data management strategies.
                    </p>
                    <p className="read-more">
                        <a href="https://github.com/jdomingo2022206/onlineStore" target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
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
                    <h1>Almacenadora</h1>
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
                                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
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
                                    <a href="#">Node.JS</a>
                                </li>   
                                <li>
                                    <a href="#">MongoDB</a>
                                </li>
                                <li>
                                    <a href="#">Thunder</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>TellMe</h1>
                    <h2>Alone</h2>
                    <p>
                    Delve into the architecture and design principles behind a Twitter-like social media platform built exclusively with Node.js and MongoDB. Scalable and efficient backend systems for social networking applications.
                    </p>
                    <p className="read-more">
                        <a href="https://github.com/jdomingo2022206/tellMe" target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="meta">
                    <div
                        className="photo"
                        style={{
                            backgroundImage:
                                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
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
                    <h1>MyBlog</h1>
                    <h2>Alone</h2>
                    <p>
                    Detail the creation process of a blog project utilizing React for the frontend and Node.js with MongoDB for the backend. Explore the challenges and successes in integrating frontend and backend elements, highlighting how React's UI capabilities complement Node.js's server-side functions for a cohesive blogging platform.
                    </p>
                    <p className="read-more">
                        <a href="https://github.com/jdomingo2022206/Blog2024" target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
