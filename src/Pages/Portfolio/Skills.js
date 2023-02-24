import React from "react";
import html from "../../assets/logo/html5-brands.svg";
import css from "../../assets/logo/css3-brands.svg";
import js from "../../assets/logo/js-square-brands.svg";
import reactSvg from "../../assets/logo/react.svg";
import node from "../../assets/logo/node-brands.svg";
import mongodb from "../../assets/logo/database-solid.svg";
import responsive from "../../assets/logo/Responsive_Web_Design_Logo.svg";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="pb-12 md:pb-28">
      <h4 className="text-center text-5xl my-12 font-semibold">Skills</h4>
      <div className="grid grid-cols-1 gap-y-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 md:max-w-4xl mx-auto">
        <Skill logo={html} name="html" />
        <Skill logo={css} name="css" />
        <Skill logo={js} name="javascript" />
        <Skill animation="animate-spin" logo={reactSvg} name="react" />
        <Skill logo={node} name="node" />
        <Skill logo={mongodb} name="mongodb" />
        <Skill logo={responsive} name="Responsive Design" />
      </div>
    </section>
  );
};

export default Skills;
