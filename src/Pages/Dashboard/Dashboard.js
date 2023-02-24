import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <section className="min-h-screen">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mx-2 lg:ml-4">
          <h2 className="text-5xl font-bold mt-4 ml-3">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side lg:mr-4">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="ul-style menu p-4 overflow-y-auto w-80 bg-accent text-white">
            <li className="li-style">
              <Link to="/dashboard">My Profile</Link>
            </li>
            {admin ? (
              <>
                <li className="li-style">
                  <Link to="/dashboard/manageOrders">Manage All Orders</Link>
                </li>
                <li className="li-style">
                  <Link to="/dashboard/addProducts">Add A Product</Link>
                </li>
                <li className="li-style">
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
                <li className="li-style">
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
              </>
            ) : (
              <>
                <li className="li-style">
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
                <li className="li-style">
                  <Link to="/dashboard/addAReview">Add A Review</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
