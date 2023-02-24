import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import benefitBg from "../../assets/benefit-bg.jpg";

const Benefits = () => {
  return (
    <section
      style={{
        background: `url(${benefitBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
      }}
      className="min-h-screen py-32 px-8"
    >
      <h2 className="text-5xl font-semibold text-center text-white mb-8">
        Why Choose Our Services?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-8">
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Quality Control System
            </h2>
            <p>
              We enhance our industry operations by relieving you of the worries
              associated with freight forwarding.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              100% Satisfaction Guarantee
            </h2>
            <p>
              An integrated approach to providing engineering services allows
              our clients to benefit from the commercial and logistical
              advantages.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Highly Professional Staff
            </h2>
            <p>
              We are one of the Nations largest automotive parts recyclers and a
              widely recognized leader utilizing advanced computerized
              techniques.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Accurate Testing Processes
            </h2>
            <p>
              We will work with you on your project, large or small. Together we
              will fine-tune your new construction, remodeling or renovation
              plans.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Reliability
            </h2>
            <p>Reliable, Effective &Technically Advanced Products!</p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Excellent Craftsmanship
            </h2>
            <p>
              Industic Engineering has been built on engineering excellence
              crafted through unstinted dedication to quality, innovation and a
              constant objective to serve the global market & decade young
              industry expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
