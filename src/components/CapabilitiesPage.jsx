import React from "react";
import Marquee from "./Home/Marquee";
import About from "./Home/About";
import Categories from "./Capabilities/Categories";
import Printing from "./Capabilities/Printing";
import Format from "./Capabilities/Format";
import Formulations from "./Capabilities/Formulations";
import Capabilities from "./Home/Capabilities";
import Packaging from "./Capabilities/Packaging";
import Manufacturing from "./Home/Manufacturing";
import Testimony from "./Home/Testimony";
import Questions from "./Capabilities/Questions";
import Partner from "./Home/Partner";
import Gallery from "./Home/Gallery";
import Banner from "./Capabilities/Banner";
import { CapabilitiesPageStructuredData } from "../structured-data/index.jsx";

function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesPageStructuredData />
      <Banner />
      <Marquee />
      <Categories />
      <Printing />
      <Packaging />
      <About />
      <Format />
      <Formulations />
      <Capabilities />
      <Gallery />
      <Manufacturing />
      <Testimony />
      <Questions />
      <Partner />
    </>
  );
}

export default CapabilitiesPage;
