import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";

export const App = () => {
  console.log("Estamos en App");
  let element = useRoutes(routes);

  return (
    <>
      {element}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
