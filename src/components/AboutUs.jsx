import React from "react";
import Marquee from "./Home/Marquee";
import Choose from "./Home/Choose";
import Para from "./Home/Para";
import About from "./Home/About";
import Categories from "./About/Categories";
import Capabilities from "./Home/Capabilities";
import Manufacturing from "./Home/Manufacturing";
import Testimony from "./Home/Testimony";
import Partner from "./Home/Partner";
import Gallery from "./Home/Gallery";
import ManufacturingLegacy from "./About/ManufacturingLegacy";
import Banner from "./About/Banner";

function AboutUs() {
  return (
    <>
      <Banner />
      <Marquee />
      <Choose />
      <Para />
      <ManufacturingLegacy />
      <About />
      <Categories />
      <Capabilities />
      <Gallery />
      <Manufacturing />
      <Testimony />
      <Partner />
    </>
  );
}

export default AboutUs;
