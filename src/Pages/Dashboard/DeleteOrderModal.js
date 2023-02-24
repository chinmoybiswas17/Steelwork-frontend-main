import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { _id, customerName, productName, quantity } = deleteOrder || "";

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
        id="delete-my-order-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-success text-lg">
            Hello! {customerName}
          </h3>
          <p className="font-semibold text-red-500 py-4">
            Product : {productName}
            <br />
            Quantity : {quantity}
          </p>
          <p className="py-4">
            Are You sure you want to delete? Once deleted, the information will
            be erased from our database
          </p>
          <div className="modal-action">
            <label
              htmlFor="delete-my-order-modal"
              className="btn hover:bg-red-600 border-0"
              onClick={handleConfirm}
            >
              Confirm
            </label>
            <label htmlFor="delete-my-order-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
