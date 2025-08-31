import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile, CgUser } from "react-icons/cg";
import { FiSettings, FiLogOut } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const menu = (
    <ul className="flex font-medium lg:flex-row flex-col lg:gap-10 gap-4 text-lg">
      <Link to="/" className="hover:text-yellow-300 transition duration-300">
        <li>Home</li>
      </Link>
      <Link to="/donateBlood" className="hover:text-yellow-300 transition duration-300">
        <li>Donate Blood</li>
      </Link>
      <Link to="/findDoners" className="hover:text-yellow-300 transition duration-300">
        <li>Find Donors</li>
      </Link>
    </ul>
  );

  return (
    <div className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-red-500 text-white p-1 shadow-lg w-11/12 lg:w-3/4 mx-auto mt-8 rounded-full border border-white/20">
        <div className="flex justify-between items-center">
          {/* Left section */}
          <div className="flex items-center gap-3">
            {/* Mobile dropdown */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] py-4 px-6 shadow-lg menu menu-sm dropdown-content text-black bg-white/90 rounded-2xl w-56 space-y-3 font-semibold"
              >
                {menu}
              </ul>
            </div>
            <p className="text-2xl font-bold tracking-wide pl-2">
              <span className="">Blood</span> Link
            </p>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block">{menu}</div>

          {/* Right section */}
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full border-2 border-white shadow-lg hover:scale-105 transition">
                    {isLoading ? (
                      <button
                        className="flex items-center justify-center w-full"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <FaUser className="h-10 w-10 p-2" />
                      </button>
                    ) : (
                      <img
                        src={
                          userData.length > 0
                            ? userData[0].image
                            : user.photoURL
                        }
                        alt="User"
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white/95 rounded-2xl w-52 space-y-2"
                >
                  <li>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 hover:text-red-600"
                    >
                      <CgProfile className="text-lg" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 hover:text-red-600"
                    >
                      <FiSettings className="text-lg" /> Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 hover:text-red-600 w-full"
                    >
                      <FiLogOut className="text-lg" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-white text-red-500 hover:bg-gray-200  rounded-full font-semibold px-5 py-2 shadow-md transition">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
