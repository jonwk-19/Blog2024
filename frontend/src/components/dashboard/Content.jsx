/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { Blog } from "../blog/Blog.jsx";

export const Content = ({}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="dashboard" element={<Blog />}/>
            </Routes>
        </div>
    )
}