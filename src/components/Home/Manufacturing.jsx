import React from "react";
import Image1 from "../../assets/Home/Manufacturing/Image 1.png";

function Manufacturing() {
  return (
    <section className="home-manufacturing">
      <img src={Image1} alt="Manufacturing Image" />
      <div className="home-manufacturing-text">
        <h2>
          Decades of Manufacturing Experience with
          <br className="desktop" /> Indian and Global Beauty Brands
        </h2>
        <p>
          A proven track record of partnering with FMCG, pharma, export-focused,
           and private label brands, ensuring dependable manufacturing and consistent product performance.
        </p>
      </div>
    </section>
  );
}

export default Manufacturing;
