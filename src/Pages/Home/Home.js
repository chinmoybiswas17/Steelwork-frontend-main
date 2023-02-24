import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Tools from "./Tools";
import Review from "./Review";
import Welcome from "./Welcome";
import Benefits from "./Benefits";
import ContactUs from "./ContactUs";
import Started from "./Started";
import Benefactors from "./Benefactors";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Started />
      <Benefits />
      <Tools />
      <Review />
      <BusinessSummary />
      <Benefactors />
      <ContactUs />
    </div>
  );
};

export default Home;
