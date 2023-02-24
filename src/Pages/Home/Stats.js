import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div>
      <div className="text-center hidden md:block pt-24">
        <div className="stats stats-vertical lg:stats-horizontal bg-transparent items-end hover:bg-white hover:shadow-2xl duration-300 py-8">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">
              We launched our official instagram this year
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary md:text-6xl">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={25} /> : null}.6K{" "}
                    <p className="stat-desc">7% more than last month</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Revenue Increased</div>
            <div className="stat-value text-secondary md:text-6xl">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp duration={2} end={2} /> : null}.5M
                    <p className="stat-desc">11% more than last month</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?w=128&h=128"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="stat-title">Customer comebacks</div>
            <div className="stat-value md:text-6xl">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={86} /> : null}%
                    <p className="stat-desc">
                      Mostly comes back with larger orders
                    </p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-16 md:hidden">
        <div className="stats w-11/12 stats-vertical lg:stats-horizontal shadow">
          <div className="stat w-full px-1">
            <div className="text-[#a19e9e] w-64 mx-auto">
              We launched our official instagram this year
            </div>
            <div className="stat-title w-64 mx-auto">Total Likes</div>
            <div className="stat-value">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={25} /> : null}.6K{" "}
                    <p className="stat-desc">7% more than last month</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>

          <div className="stat w-full p-1">
            <div className="stat-title">Revenue Increased</div>
            <div className="stat-value">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp duration={2} end={2} /> : null}.5M
                    <p className="stat-desc">↗︎ 400 (22%)</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>

          <div className="stat w-full p-1">
            <div className="stat-title">Customer comebacks</div>
            <div className="stat-value">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp start={2} end={86} /> : null}%
                    <p className="stat-desc">
                      Mostly comes back with larger orders
                    </p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
