import {
  faBuilding,
  faHelmetSafety,
  faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <section>
      <div className="hero mt-8 sm:mt-14 lg:mt-24 lg:mb-20 mb-14">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl text-primary font-bold mt-8 sm:mt-0 mb-4">
              <Typewriter
                options={{
                  strings: ["Welcome to Alpha Steelwork"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <div className="sm:text-xl">
              A Great Place to Work-Certified organization. We are spread across
              five continents with an employee base of over 65,000.
            </div>
          </div>
          <div className="col-span-3 grid gap-y-10 grid-cols-1 md:grid-cols-3 bg-white border rounded-xl hover:shadow-2xl duration-300 lg:animate-bounce py-14">
            <div className="text-center md:flex md:justify-around">
              <div>
                <FontAwesomeIcon
                  icon={faHelmetSafety}
                  size="6x"
                ></FontAwesomeIcon>
                <p className="py-2 text-2xl">
                  We are professional <br />
                  <span className="text-xl font-thin">Blacksmiths</span>
                </p>
              </div>
              <div className="min-h-full border-l-2 border-l-gray-400 hidden md:block"></div>
            </div>
            <hr className="block md:hidden w-80 mx-auto border-b-2" />
            <div className="text-center  md:flex md:justify-around">
              <div>
                <FontAwesomeIcon
                  icon={faHouseChimneyWindow}
                  size="6x"
                ></FontAwesomeIcon>
                <p className="py-2 text-2xl">
                  Licensed & ensured <br />
                  <span className="text-xl font-thin">Industry</span>
                </p>
              </div>
              <div className="min-h-full border-l-2 border-l-gray-400 hidden md:block"></div>
            </div>
            <hr className="block md:hidden w-80 mx-auto border-b-2" />

            <div className="text-center">
              <FontAwesomeIcon icon={faBuilding} size="6x"></FontAwesomeIcon>
              <p className="py-2 text-2xl">
                Number One Company
                <br />
                <span className="text-xl font-thin">In Region</span>
              </p>
            </div>
            <hr className="block md:hidden w-80 mx-auto border-b-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
