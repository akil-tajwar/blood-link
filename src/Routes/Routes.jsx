import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/blogs',
          element: <Blogs/>
        },
        {
          path: '/profile',
          element: <Profile/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element:<Signup/>
        }
      ]
    },
  ]);