import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

const ToolDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);
  let errorElement;

  const { data: tool } = useQuery(["tool", purchaseId], () =>
    fetch(
      `https://alpha-steelwork-backend.onrender.com/tool/purchase/${purchaseId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  const { displayName, email } = user || "";
  const {
    _id,
    image,
    name,
    description,
    minOrderQuantity,
    availQuantity,
    price,
  } = tool || "";

  if (quantity > parseInt(availQuantity)) {
    errorElement = (
      <p className="text-red-500">
        Sorry! We can't process order more than available quantity. If you need
        so, do no hesitate to contact us
      </p>
    );
  } else if (quantity < parseInt(minOrderQuantity) && quantity !== 0) {
    errorElement = (
      <p className="text-red-500">
        Sorry! You can not order less than minimum order quantity. If you need
        so, do no hesitate to contact our local distributor in you region.
      </p>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      product: _id,
      productName: name,
      customer: email,
      customerName: displayName,
      address: event.target.address.value,
      contact: event.target.contact.value,
      quantity: parseInt(quantity),
      price: parseInt(price),
      shouldPay: parseInt(price) * parseInt(quantity),
    };

    if (
      quantity > parseInt(minOrderQuantity) &&
      quantity <= parseInt(availQuantity)
    ) {
      fetch(`https://alpha-steelwork-backend.onrender.com/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(
              `You have ordered ${quantity} pieces. Please go to My orders to complete the payment`
            );
            event.target.reset();
          }
        });
    } else if (quantity > parseInt(availQuantity)) {
      toast.error("Quantity can not be more than available quantity");
    } else if (quantity <= parseInt(minOrderQuantity)) {
      toast.error("Quantity can not be less than minimum order quantity");
    }
  };

  return (
    <section className="min-h-screen">
      <div className="tool-details w-80 md:w-9/12 bg-base-100 mx-auto">
        <div className="md:flex md:items-center p-4">
          <div className="card-photo flex items-center justify-center border rounded-md md:w-[450px]">
            <figure>
              <InnerImageZoom src={`${image}`} alt="" zoomType="hover"/>
            </figure>
          </div>
          <div className="md:mx-4">
            <h2 className="text-xl">{name}</h2>
            <p className="relative">
              <span className="absolute text-primary font-bold">$</span>
              <span className="text-3xl font-bold pl-3">{price}</span>
              <span className="absolute bottom-0 font-bold">/piece</span>
            </p>
            <p className="text-sm my-1">{description}</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className="text-sm font-bold">
                      Minimum Order Quantity
                    </span>
                  </td>
                  <td>
                    <span className="text-sm">: {minOrderQuantity}/piece</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-sm font-bold">
                      Available Quantity
                    </span>
                  </td>
                  <td>
                    <span className="text-sm">: {availQuantity}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 className="mt-2 text-sm">
              Please Fill Up The Form Below To Complete The Purchase
            </h2>
          </div>
        </div>

        <div className="order-form p-4">
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 sm:gap-4 lg:gap-0 mx-auto"
          >
            <div>
              <label className="label">
                <span className="label-text font-semibold pl-3">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input rounded-md w-full max-w-xs"
                defaultValue={displayName}
                disabled
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input rounded-md w-full max-w-xs"
                defaultValue={email}
                disabled
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                name="productName"
                className="input rounded-md w-full max-w-xs"
                defaultValue={name}
                disabled
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold pl-3">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input rounded-md w-full max-w-xs"
                required
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">
                  Contact No
                </span>
              </label>
              <input
                type="number"
                name="contact"
                placeholder="Your Contact No"
                className="input rounded-md w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text font-semibold pl-3">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Order Quantity"
                className="input rounded-md w-full max-w-xs"
                defaultValue={minOrderQuantity}
                required
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errorElement}
                </span>
              </label>
              <input
                className="btn btn-primary w-full rounded-full text-white max-w-xs block my-4"
                type="submit"
                value="Order Now"
                disabled={
                  quantity < parseInt(minOrderQuantity) ||
                  quantity > parseInt(availQuantity)
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ToolDetails;
