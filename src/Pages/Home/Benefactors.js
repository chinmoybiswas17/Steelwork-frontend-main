import React from "react";
import Typewriter from "typewriter-effect";

// images
import thakur from "../../assets/thakur.jpeg";
import burhan from "../../assets/burhan.jpg";
import jakir from "../../assets/jakir.jpg";
import mash from "../../assets/mash.jpg";
import shujon from "../../assets/shujon.jpg";
import fonoy from "../../assets/fonoy.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom Styles
import styles from "./SwiperStyles/Benefactors.module.css";

// import required modules
import { EffectCube, Pagination, Autoplay, Navigation, Keyboard } from "swiper";
import Benefactor from "./Benefactor";

const Benefactors = () => {
  const benefactors = [
    {
      _id: 1,
      name: "Thakur Saad",
      image: thakur,
      profession: "Software Developer",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 2,
      name: "Kazi Samia",
      image: burhan,
      profession: "Heavy Industry Investor",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 3,
      name: "Zaowad Nasif",
      image: jakir,
      profession: "Marine Investor",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 4,
      name: "Jannatul Maisha",
      image: mash,
      profession: "Business Analyst",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 5,
      name: "Aditto Roy",
      image: shujon,
      profession: "Chef & Investor",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
    {
      _id: 6,
      name: "Fonoy Acharjee",
      image: fonoy,
      profession: "Software Engineer",
      speech:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus a necessitatibus? Hic magnam esse voluptatibus quaerat, repudiandae quam nihil voluptate fugit!",
    },
  ];

  return (
    <>
      <h2
        id="benefactors-cube"
        className="text-5xl font-semibold text-center pt-32"
      >
        Top Benefactors
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <section className="flex flex-1 items-center justify-center">
          <div className="lg:w-10/12">
            <h3 className="text-3xl text-primary font-bold mt-8 md:mt-0 mb-4">
              <Typewriter
                options={{
                  strings: ["Our Most Trusted Advisors"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <p className="sm:text-xl">
              Meet our most most trusted clients who have worked with us for
              over a decade. They have guided us, advised us and invested in our
              company. They played a vital role to develope our company and made
              us who we are now.
            </p>
          </div>
        </section>
        <section className="h-[400px] sm:h-[450px]">
          <div className="relative lg:h-[500px]">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              loop={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={{
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[EffectCube, Autoplay, Pagination, Keyboard, Navigation]}
              className={`mySwiper ${styles.swiper}`}
            >
              {benefactors.map((benefactor) => (
                <SwiperSlide key={benefactor._id}>
                  <Benefactor benefactor={benefactor} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};

export default Benefactors;
