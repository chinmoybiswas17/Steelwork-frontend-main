import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./Pages/Shared/Navbar";
import ToolDetails from "./Pages/Home/ToolDetails";
import AllTool from "./Pages/Home/AllTool";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Payment from "./Pages/Dashboard/Payment";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div className="App bg-base-200 bg-opacity-25">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="allTool" element={<AllTool />} />
        <Route
          path="tool/purchase/:purchaseId"
          element={
            <RequireAuth>
              <ToolDetails />
            </RequireAuth>
          }
        />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="payment/:payForId" element={<Payment />}></Route>
          <Route path="addAReview" element={<AddAReview />}></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProducts"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
