import React from "react";

const Benefactor = ({ benefactor }) => {
  const { name, profession, image, speech } = benefactor || "";

  return (
    <div className="w-[300px] h-[300px] bg-accent text-white rounded-md">
      <div className="benefactor-header flex items-center p-4">
        <div className="avatar justify-center">
          <div className="w-16 mask rounded-full">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="ml-2">
          <h3 className="text-xl text-primary">{name}</h3>
          <p>{profession}</p>
        </div>
      </div>
      <hr className="border my-2 border-white" />
      <div className="benefactor-desc py-2 pl-4 pr-2">
        <p>{speech}</p>
      </div>
    </div>
  );
};

export default Benefactor;
