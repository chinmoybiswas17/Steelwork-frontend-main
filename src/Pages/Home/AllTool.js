import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const AllTool = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://alpha-steelwork-backend.onrender.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="min-h-screen py-16">
      <h2 className="text-5xl font-semibold text-center pb-8">All Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-8">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </section>
  );
};

export default AllTool;
