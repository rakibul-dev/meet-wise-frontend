import { createBrowserRouter, Navigate } from "react-router-dom";
import MessagePage from "../pages/MessagePage";

import ErrorNotFound from "../pages/ErrorNotFound";
import UserRegisterPager from "../pages/UserRegisterPager";
import UserLoginPage from "../pages/UserLoginPage";
import PeoplesPage from "../pages/PeoplesPage";
import PeoplesLayout from "../layouts/PeoplesLayout";
import PeopleDetailsPage from "../pages/PeopleDetailsPage";
import FriendsPageLayout from "../layouts/FriendsPageLayout";
import FriendsPage from "../pages/FriendsPage";
import ChatLayout from "../layouts/ChatLayout";
import ChatPage from "../pages/ChatPage";

const Router = createBrowserRouter([
  { path: "/", element: <Navigate to={"/conversations"} /> },
  {
    path: "/",
    element: <ChatLayout />,
    children: [
      { path: "conversations/:id/:reciverId", element: <ChatPage /> },
      { path: "conversations", element: <MessagePage /> },
    ],
  },
  {
    path: "/register",
    element: <UserRegisterPager />,
  },
  {
    path: "/",
    element: <PeoplesLayout />,
    children: [
      {
        path: "peoples",
        element: <PeoplesPage />,
      },
      {
        path: "peoples/:id",
        element: <PeopleDetailsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <FriendsPageLayout />,
    children: [{ path: "/friends", element: <FriendsPage /> }],
  },
  {
    path: "/login",
    element: <UserLoginPage />,
  },
  { path: "*", element: <ErrorNotFound /> },
]);

export default Router;
