import { createBrowserRouter } from "react-router-dom";
import MessagePage from "../pages/MessagePage";
import HelloWorld from "../pages/HelloWorld";
import ErrorNotFound from "../pages/ErrorNotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MessagePage />,
  },
  { path: "*", element: <ErrorNotFound /> },
]);

export default Router;
