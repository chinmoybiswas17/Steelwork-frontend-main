import React from "react";

const Skill = ({ logo, name, animation }) => {
  return (
    <div className="h-64 w-52 p-4 text-center rounded-md hover:bg-amber-100 hover:shadow-xl duration-200 hover:scale-110">
      <img className={`h-28 mx-auto ${animation}`} src={logo} alt="logo" />
      <div className="divider"></div>
      <p className="text-2xl font-thin uppercase text-primary">{name}</p>
    </div>
  );
};

export default Skill;
