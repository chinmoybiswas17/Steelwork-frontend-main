import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ManageProductsModal = ({ modalTool, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, image } = modalTool || "";

  const handleConfirm = () => {
    fetch(`https://alpha-steelwork-backend.onrender.com/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product deleted successfully");
          refetch();
        }
      });
  };

  const handleCancel = () => {
    toast("Please reload the page to select and delete other tool");
    window.location.reload();
  };

  return (
    <div className="max-w-sm">
      <input
        type="checkbox"
        id="delete-product-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-sm">
          <h3 className="font-bold text-success">Hello! {user?.displayName}</h3>
          <div className="my-6">
            <img src={image} className="w-28" alt={name} />
            <p className="font-bold">{name}</p>
            <p className="font-semibold text-gray-400">{_id}</p>
            <p className="font-semibold">
              Are you sure you want to delete this product?
            </p>
            <p className="font-semibold">
              Once deleted it will be removed from database. <br /> Also will
              not appear on home/all tool page.
            </p>
          </div>
          <div className="modal-action">
            <label
              htmlFor="delete-product-modal"
              className="btn hover:bg-red-600 border-0"
              onClick={handleConfirm}
            >
              Confirm
            </label>
            <label
              htmlFor="delete-product-modal"
              className="btn"
              onClick={handleCancel}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsModal;
