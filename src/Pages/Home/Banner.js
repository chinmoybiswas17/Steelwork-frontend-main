import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import bannerSm from "../../assets/bannerSm.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="relative">
        <div>
          <img
            src={banner}
            alt="banner"
            className="max-h-screen hidden md:block w-full"
          />
          <img
            src={bannerSm}
            alt="banner"
            className="min-h-screen block md:hidden max-w-full"
          />
        </div>
        <div className="absolute top-52 right-0 left-0">
          <div>
            <h1
              className="md:text-7xl text-4xl text-white font-bold text-center my-4"
              style={{
                textShadow: "0 0 50px black, 0 0 50px black, 0 0 10px yellow",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Alpha Steelwork"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 4000,
                }}
              />
            </h1>
            <h2
              className="text-2xl md:text-4xl text-white font-semibold text-center my-4"
              style={{
                textShadow: "0 0 50px black, 0 0 50px black, 0 0 10px yellow",
              }}
            >
              We manufacture products with world class quality{" "}
            </h2>
          </div>
          <div className="text-center">
            <button
              className="btn md:btn-lg btn-primary rounded text-white"
              onClick={() => navigate("/allTool")}
            >
              Our Products
            </button>
            <button
              className="btn md:btn-lg btn-primary rounded ml-4 text-white"
              onClick={() => navigate("/blogs")}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
