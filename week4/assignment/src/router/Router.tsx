import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserInfo from "../pages/MyPgae/UserInfo";
import UserSearch from "../pages/MyPgae/UserSearch";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/mypage/info",
    element: <UserInfo />,
  },
  {
    path: "/mypage/search",
    element: <UserSearch />,
  },
]);

export default router;
