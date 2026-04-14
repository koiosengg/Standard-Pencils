import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Choose from "./Home/Choose";
import Para from "./Home/Para";
import About from "./Home/About";
import Categories from "./Home/Categories";
import Capabilities from "./Home/Capabilities";

function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Choose />
      <Para />
      <About />
      <Categories />
      <Capabilities />
    </>
  );
}

export default Home;
