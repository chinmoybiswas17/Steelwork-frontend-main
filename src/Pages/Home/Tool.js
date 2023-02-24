import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    image,
    name,
    description,
    minOrderQuantity,
    availQuantity,
    price,
  } = tool;
  const navigate = useNavigate();

  const handlePurchase = (_id) => {
    navigate(`/tool/purchase/${_id}`);
  };

  return (
    <div className="card border h-[480px] bg-base-100 p-1 hover:shadow-xl duration-100 rounded-md">
      <div className="mx-auto">
        <figure className="h-60 w-60">
          <img className="rounded" src={image} alt="tool" />
        </figure>
      </div>
      <div className="px-1">
        <h2 className="text-xl">{name}</h2>
        <p className="relative">
          <span className="absolute text-primary font-bold">$</span>
          <span className="text-3xl font-bold pl-3">{price}</span>
        </p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">
          Minimum Order Quantity : {minOrderQuantity}/piece
        </p>
        <p className="text-sm">Available Quantity : {availQuantity}</p>
        <div className="card-actions pt-4">
          <button
            onClick={() => handlePurchase(_id)}
            className="btn rounded-full w-full btn-primary text-white text-sm"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
