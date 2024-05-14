import React from "react";
import { useEffect } from "react";
import { LoadSpinner } from "../../components/LoadSpinner";
import { Content } from "../../components/dashboard/Content.jsx";
import "../../components/blog/blog.scss";
// import "../../components/blog/blog.css";
import "../../components/blog/blog.js"; // Importar blog.js para activar el script

export const DashboardPage = () => {
  useEffect(() => {
    console.log("Estamos en dashboard");
  }, []);

  // Si necesitas una carga mientras se activa el script, puedes descomentar la siguiente línea
  // if (isFetching) {
  //   return <LoadSpinner />;
  // }

  return (
    <div className="dashboard-container">
      <Content />
    </div>
  );
};
