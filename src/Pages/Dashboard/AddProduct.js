import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      image: event.target.image.value,
      name: event.target.name.value,
      description: event.target.description.value,
      minOrderQuantity: event.target.minOrderQuantity.value,
      availQuantity: event.target.availQuantity.value,
      price: event.target.price.value,
    };

    fetch("https://alpha-steelwork-backend.onrender.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
        } else {
          toast.error("Some error occurred.Please try again");
        }
        event.target.reset();
      });
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-primary my-4 ml-3">
        Add Product
      </h2>
      <div className="add-product form">
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto"
        >
          <div>
            <label className="label">
              <span className="label-text font-semibold pl-2">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Photo Link Of Product"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold pl-2">
                Minimum Order Quantity
              </span>
            </label>
            <input
              type="number"
              name="minOrderQuantity"
              placeholder="Minimum Order Quantity"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">
                Available Quantity
              </span>
            </label>
            <input
              type="number"
              name="availQuantity"
              placeholder="Available Quantity"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />
            <label className="label">
              <span className="label-text font-semibold pl-2">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input rounded-md w-full max-w-xs pl-1 ml-2"
              required
            />

            <input
              className="btn btn-primary text-white w-full rounded-full max-w-xs block my-4 mx-auto sm:mx-0"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
