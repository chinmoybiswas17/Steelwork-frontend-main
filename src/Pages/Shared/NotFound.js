import React from "react";
import notFound from "../../assets/404.jpg";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center">
      <img src={notFound} alt="notFound" />
    </section>
  );
};

export default NotFound;
