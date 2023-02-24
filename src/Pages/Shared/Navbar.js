import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import fire from "../../assets/logo/fire.svg";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleSignOut}>Sing Out</button>{" "}
          </li>
          <li className="text-primary">
            <Link to="/dashboard">{user.displayName}</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar text-white bg-accent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
            >
              {menuitems}
            </ul>
          </div>
          <img
            src={fire}
            alt="fire"
            className="h-7 w-7 lg:ml-4 bg-white rounded-full"
          />
          <Link
            to="/"
            className="btn btn-ghost normal-case border-0 pl-1 hover:text-primary hover:rounded-full text-xl"
          >
            Alpha Steelwork
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex bg-accent">
          <ul className="menu menu-horizontal p-0 bg-accent">{menuitems}</ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="10"
            htmlFor="dashboard-drawer"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
