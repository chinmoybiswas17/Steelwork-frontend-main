import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const navigate = useNavigate();

  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://alpha-steelwork-backend.onrender.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="pt-32">
      <h2 className="text-5xl font-semibold text-center mb-8">
        Tools We Manufacture
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-8">
        {tools.slice(0, 8).map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
      <div className="text-center my-4">
        <button
          className="btn rounded-full btn-primary text-white text-sm"
          onClick={() => navigate("allTool")}
        >
          More &nbsp;
          <FontAwesomeIcon icon={faArrowRight} size="sm"></FontAwesomeIcon>
        </button>
      </div>
    </section>
  );
};

export default Tools;
