import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Choose from "./Home/Choose";
import Para from "./Home/Para";
import About from "./Home/About";
import Categories from "./Home/Categories";
import Capabilities from "./Home/Capabilities";
import Packaging from "./Home/Packaging";
import Success from "./Home/Success";
import FDA from "./Home/FDA";
import Manufacturing from "./Home/Manufacturing";
import Snapshots from "./Home/Snapshots";
import Testimony from "./Home/Testimony";
import Partner from "./Home/Partner";
import Gallery from "./Home/Gallery";
import Questions from "./Capabilities/Questions";
import { HomePageStructuredData } from "../structured-data/index.jsx";

function Home() {
  return (
    <>
      <HomePageStructuredData />
      <Banner/>
      <Marquee />
      <Choose />
      <Para
        line1="Standard Pencil is a story of staying relevant, generation after generation."
        line2="By honouring our roots while continuously reinventing what beauty manufacturing can become."
        body="What began as a focused manufacturing vision has grown into a trusted partner for brands navigating an ever-evolving beauty industry. Through continuous innovation, stronger compliance systems, deeper product research, and an uncompromising belief in quality, we continue building products that help brands stay ahead, adapt faster, and create lasting impact in the market."
      />
      <About />
      <Categories />
      <Capabilities />
      <Gallery
        cardDesc="Products That Power Beauty Brands"
        cardLabel="OEM Manufacturing"
        titleLine1="Our Manufacturing"
        titleLine2="Capabilities"
        description="Combining technical expertise, process control, and product innovation to bring high-performing cosmetic products to market."
      />
      <Packaging />
      <Success
        description="A structured, quality-first workflow that transforms your product vision into retail-ready formulations, packaging, and finished products with complete confidence."
      />
      <FDA />
      <Manufacturing />
      <Snapshots
        line1="Your Promise"
        line2="we deliver"
        description="Every batch is built on measurable standards, controlled processes, and documentation your brand can confidently stand behind."
        card1Title="Quality Control at Every Stage"
        card1Desc="From raw material qualification to final assembly, every production stage undergoes strict checks for consistency, accuracy, safety, and performance."
        card2Title="Claims, Testing & Compliance Support"
        card2Desc="From lead-free and dermatologist-tested to region-specific compliance, we develop formulations backed by testing, documentation, and market-ready validation."
      />
      <Testimony />
      <Questions />
      <Partner />
    </>
  );
}

export default Home;
