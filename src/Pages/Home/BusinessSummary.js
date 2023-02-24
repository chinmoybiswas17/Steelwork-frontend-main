import {
  faArrowAltCircleRight,
  faFlag,
  faMoneyBillTrendUp,
  faPeopleGroup,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Stats from "./Stats";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const BusinessSummary = () => {
  return (
    <section>
      <h2 className="text-5xl font-semibold text-center pb-20 pt-32">
        We have acquired trust all over the world
      </h2>
      <div className="grid grid-cols-1 gap-y-12 justify-items-center lg:grid-cols-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faFlag} size="4x" className="" />
          <div className="font-bold text-5xl my-5">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 100 }}>
                  {isVisible ? <CountUp end={40} /> : null}+{" "}
                  <h5 className="font-semibold text-3xl">Countries</h5>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPeopleGroup} size="4x" className="" />
          <div className="font-bold text-5xl my-5">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 100 }}>
                  {isVisible ? <CountUp end={100} /> : null}+{" "}
                  <h5 className="font-semibold text-3xl">Customers</h5>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faMoneyBillTrendUp} size="4x" className="" />
          <div className="font-bold text-5xl my-5">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 100 }}>
                  {isVisible ? <CountUp end={350} /> : null}M+{" "}
                  <h5 className="font-semibold text-3xl">Revenue/y</h5>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faScrewdriverWrench} size="4x" className="" />
          <div className="font-bold text-5xl my-5">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 100 }}>
                  {isVisible ? <CountUp end={75} /> : null}+{" "}
                  <h5 className="font-semibold text-3xl">Tools</h5>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
      <Stats />

      <div className="max-w-screen-sm w-full lg:w-2/4 flex justify-evenly items-center mx-auto mt-12 px-2">
        <h2 className="font-semibold text-2xl">Connect with us Now</h2>
        <a href="#contactUs">
          <button className="btn btn-lg btn-primary rounded-full text-white animate-pulse">
            Contact Us
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              size="lg"
              className="ml-4"
            />
          </button>
        </a>
      </div>
    </section>
  );
};

export default BusinessSummary;
