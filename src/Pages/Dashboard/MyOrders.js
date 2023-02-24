import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["order", user?.email], () =>
    fetch(`https://alpha-steelwork-backend.onrender.com/order?customer=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
        toast.error("Access Token damaged or expired");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="min-h-screen">
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">My Orders</h2>
      <div className="my-orders-table">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th className="text-center">Status/TransactionId</th>
                <th>Cancellation</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((o, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{o?.productName}</td>
                  <td>{o?.quantity}</td>
                  <td className="text-center">
                    {!o.paid && (
                      <div
                        className="tooltip tooltip-secondary"
                        data-tip="Complete Payment"
                      >
                        <button
                          className="btn btn-secondary btn-sm text-white"
                          onClick={() =>
                            navigate(`/dashboard/payment/${o._id}`)
                          }
                        >
                          pay
                        </button>
                      </div>
                    )}
                    {o.paid && (
                      <>
                        <p className="text-primary">Paid</p>
                        <div
                          className="tooltip tooltip-secondary"
                          data-tip="Transaction Id"
                        >
                          <p className="text-gray-700 font-semibold">
                            {o.transactionId}
                          </p>
                        </div>
                      </>
                    )}
                  </td>
                  <td>
                    {!o.paid ? (
                      <div
                        className="tooltip tooltip-primary"
                        data-tip="Cancel This Order"
                      >
                        <label
                          htmlFor="delete-my-order-modal"
                          className="btn modal-button btn-primary btn-sm text-white "
                          onClick={() => setDeleteOrder(o)}
                        >
                          Delete
                        </label>
                      </div>
                    ) : (
                      <div
                        className="tooltip tooltip-primary"
                        data-tip="Can not cancel order after payment"
                      >
                        <p className="text-gray-700 font-semibold">Disabled</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteOrder && (
        <DeleteOrderModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
        ></DeleteOrderModal>
      )}
    </section>
  );
};

export default MyOrders;
