import React from "react";

const Projects = () => {
  return (
    <section className="mb-20 mx-10">
      <h4 className="text-center text-5xl my-12 font-semibold">Projects</h4>
      <div className="card max-w-sm bg-base-100 mx-auto hover:bg-amber-100 hover:shadow-xl duration-200 hover:scale-110">
        <div className="p-6">
          <a href="https://webster-car-warehouse.web.app">
            <h6 className="font-semibold hover:text-blue-600 hover:underline duration-200 text-xl mb-2">
              Webster car warehouse
            </h6>
          </a>
          <a href="https://visa-plus.web.app/">
            <h6 className="font-semibold hover:text-blue-600 hover:underline duration-200 text-xl mb-2">
              Visa plus
            </h6>
          </a>
          <a href="https://cheese-plaza.netlify.app/">
            <h6 className="font-semibold hover:text-blue-600 hover:underline duration-200 text-xl mb-2">
              Cheese Plaza
            </h6>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
