import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Partner/Image 1.png";
import Image2 from "../../assets/Home/Partner/Image 2.png";
import Image3 from "../../assets/Home/Partner/Image 3.png";
import Image4 from "../../assets/Home/Partner/Image 4.png";
import Image5 from "../../assets/Home/Partner/Image 5.png";
import Image6 from "../../assets/Home/Partner/Image 6.png";
import Image7 from "../../assets/Home/Partner/Image 7.png";
import Image8 from "../../assets/Home/Partner/Image 8.png";
import Image9 from "../../assets/Home/Partner/Image 9.png";
import Image10 from "../../assets/Home/Partner/Image 10.png";

function Partner() {
  return (
    <section className="home-capabilities home-partner">
      <div className="home-capabilities-container">
        <div className="home-capabilities-container-text">
          <h2>
            Looking for a Reliable Cosmetic <br /> Manufacturing Partner?
          </h2>
          <p>
            Explore the full range of what we develop, and find the approach
            that <br className="desktop" /> fits your next product.
          </p>
        </div>
        <Link to="/">
          Start an enquiry{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_221_50"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_221_50)">
              <path
                d="M7.01659 16.6668L5.83325 15.4835L11.3166 10.0002L5.83325 4.51683L7.01659 3.3335L13.6833 10.0002L7.01659 16.6668Z"
                fill="#111111"
              />
            </g>
          </svg>
        </Link>
        <div className="home-partner-wrapper">
          <div className="home-partner-marquee">
            <img src={Image1} alt="Product Image" />
            <img src={Image2} alt="Product Image" />
            <img src={Image3} alt="Product Image" />
            <img src={Image4} alt="Product Image" />
            <img src={Image5} alt="Product Image" />
            <img src={Image6} alt="Product Image" />
            <img src={Image7} alt="Product Image" />
            <img src={Image8} alt="Product Image" />
            <img src={Image9} alt="Product Image" />
            <img src={Image10} alt="Product Image" />
            <img src={Image1} alt="Product Image" />
            <img src={Image2} alt="Product Image" />
            <img src={Image3} alt="Product Image" />
            <img src={Image4} alt="Product Image" />
            <img src={Image5} alt="Product Image" />
            <img src={Image6} alt="Product Image" />
            <img src={Image7} alt="Product Image" />
            <img src={Image8} alt="Product Image" />
            <img src={Image9} alt="Product Image" />
            <img src={Image10} alt="Product Image" />
            <img src={Image1} alt="Product Image" />
            <img src={Image2} alt="Product Image" />
            <img src={Image3} alt="Product Image" />
            <img src={Image4} alt="Product Image" />
            <img src={Image5} alt="Product Image" />
            <img src={Image6} alt="Product Image" />
            <img src={Image7} alt="Product Image" />
            <img src={Image8} alt="Product Image" />
            <img src={Image9} alt="Product Image" />
            <img src={Image10} alt="Product Image" />
            <img src={Image1} alt="Product Image" />
            <img src={Image2} alt="Product Image" />
            <img src={Image3} alt="Product Image" />
            <img src={Image4} alt="Product Image" />
            <img src={Image5} alt="Product Image" />
            <img src={Image6} alt="Product Image" />
            <img src={Image7} alt="Product Image" />
            <img src={Image8} alt="Product Image" />
            <img src={Image9} alt="Product Image" />
            <img src={Image10} alt="Product Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
