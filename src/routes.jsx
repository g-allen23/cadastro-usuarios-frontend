import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lista-usuarios",
    element: <ListUsers />,
  },
]);

export default router;
