import React from "react";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import Technologies from "./Technologies";

const Portfolio = () => {
  return (
    <section className="min-h-screen">
      <h2 className="text-5xl font-bold text-center py-8">Portfolio</h2>
      <Profile />
      <ProfileDetails />
      <Skills />
      <Technologies />
      <Projects />
    </section>
  );
};

export default Portfolio;
