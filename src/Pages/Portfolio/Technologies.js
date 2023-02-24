import React from "react";
import bootstrap from "../../assets/logo/bootstrap-brands.svg";
import tailwind from "../../assets/logo/tailwindcss.svg";
import reactRouter from "../../assets/logo/react-router.svg";
import github from "../../assets/logo/github-square-brands.svg";
import netlify from "../../assets/logo/netlify-seeklogo.com.svg";
import figma from "../../assets/logo/figma-brands.svg";
import firebase from "../../assets/logo/firebase-seeklogo.com.svg";
import heroku from "../../assets/logo/heroku-icon.svg";
import ecma6 from "../../assets/logo/es6.svg";
import debug from "../../assets/logo/debugging.svg";
import devtool from "../../assets/logo/devtool.svg";
import authentication from "../../assets/logo/authentication.svg";
import query from "../../assets/logo/react-query.svg";
import Technology from "./Technology";

const Technologies = () => {
  return (
    <section className="pb-12 md:pb-28">
      <h4 className="text-center text-5xl my-12 font-semibold">Technologies</h4>
      <div className="grid grid-cols-1 gap-y-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 md:max-w-4xl mx-auto">
        <Technology logo={bootstrap} name="bootstrap" />
        <Technology logo={tailwind} name="tailwind" />
        <Technology logo={ecma6} name="ES6" />
        <Technology logo={reactRouter} name="react router" />
        <Technology logo={authentication} name="authentication" />
        <Technology logo={devtool} name="devtool" />
        <Technology logo={debug} name="debug" />
        <Technology animation="animate-spin" logo={query} name="react query" />
        <Technology logo={github} name="github" />
        <Technology logo={netlify} name="netlify" />
        <Technology logo={figma} name="figma" />
        <Technology logo={firebase} name="firebase" />
        <Technology logo={heroku} name="heroku" />
      </div>
    </section>
  );
};

export default Technologies;
