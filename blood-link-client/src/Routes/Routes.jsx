import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import FindDoners from "../Pages/FindDoners/FindDoners";
import DonateBlood from "../Pages/DonateBlood/DonateBlood";

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
          path: '/DonateBlood',
          element: <DonateBlood/>
        },
        {
          path: '/findDoners',
          element: <FindDoners/>
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