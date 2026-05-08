import React from "react";
import Marquee from "./Home/Marquee";
import Para from "./Home/Para";
import Categories from "./Products/Categories";
import Capabilities from "./Home/Capabilities";
import Packaging from "./Home/Packaging";
import Testimony from "./Home/Testimony";
import Questions from "./Capabilities/Questions";
import Banner from "./Capabilities/Banner";
import Partner from "./Home/Partner";
import { ProductsPageStructuredData } from "../structured-data/index.jsx";


function Product() {
  return (
    <>
      <ProductsPageStructuredData />
      <Banner />
      <Marquee />
      <Para />
      <Categories />
      <Capabilities />
      <Packaging />
      <Testimony />
      <Questions />
       <Partner />
    </>
  );
}

export default Product;
