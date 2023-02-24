import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AdminDeleteOrderModal = ({ adminDeleteOrder, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, customerName, productName, quantity } = adminDeleteOrder || "";

  const handleConfirm = () => {
    fetch(`https://alpha-steelwork-backend.onrender.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order cancellation successful");
        }
        refetch();
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="admin-delete-single-order"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-success text-lg">
            Hello! Admin {user?.displayName}
          </h3>
          <p className="font-semibold text-red-500 pt-4">
            Customer Name : {customerName}
          </p>
          <p className="font-semibold text-red-500 pb-4">
            Product : {productName}
            <br />
            Order Quantity : {quantity}
          </p>
          <p>Are You sure you want to delete?</p>
          <p>Once deleted, the information will be erased from our database.</p>
          <div className="modal-action">
            <label
              htmlFor="admin-delete-single-order"
              className="btn hover:bg-red-600 border-0"
              onClick={handleConfirm}
            >
              Confirm
            </label>
            <label
              htmlFor="admin-delete-single-order"
              className="btn"
              onClick={() => window.location.reload()}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeleteOrderModal;
