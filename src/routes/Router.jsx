import { createBrowserRouter } from "react-router-dom";
import MessagePage from "../pages/MessagePage";

import ErrorNotFound from "../pages/ErrorNotFound";
import UserRegisterPager from "../pages/UserRegisterPager";
import UserLoginPage from "../pages/UserLoginPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MessagePage />,
  },
  {
    path: "/register",
    element: <UserRegisterPager />,
  },
  {
    path: "/login",
    element: <UserLoginPage />,
  },
  { path: "*", element: <ErrorNotFound /> },
]);

export default Router;
