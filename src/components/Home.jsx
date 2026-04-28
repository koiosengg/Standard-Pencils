import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Choose from "./Home/Choose";
import Para from "./Home/Para";
import About from "./Home/About";
import Categories from "./Home/Categories";
import Capabilities from "./Home/Capabilities";
import Packaging from "./Home/Packaging";
import FDA from "./Home/FDA";
import Manufacturing from "./Home/Manufacturing";
import Snapshots from "./Home/Snapshots";
import Testimony from "./Home/Testimony";
import Partner from "./Home/Partner";
import Gallery from "./Home/Gallery";
import Questions from "./Capabilities/Questions";

function Home() {
  return (
    <>
      <Banner/>
      <Marquee />
      <Choose />
      <Para />
      <About />
      <Categories />
      <Capabilities />
      <Gallery />
      <Packaging />
      <FDA />
      <Manufacturing />
      <Snapshots />
      <Testimony />
      <Questions />
      <Partner />
    </>
  );
}

export default Home;
