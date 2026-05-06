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

const partnerImages = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

function Partner() {
  return (
    <section className="home-capabilities home-partner">
      <div className="home-capabilities-container">
        <div className="home-capabilities-container-text">
          <h2>
            Looking for a Reliable Cosmetic <br /> Manufacturing Partner?
          </h2>
          <p>
            From formulation to final output, we ensure your products are developed<br className="desktop" />
             with precision, consistency, and complete reliability. 
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
            {[0, 1, 2, 3].map((groupIndex) => (
              <div
                className="home-partner-marquee-group"
                aria-hidden={groupIndex > 0}
                key={groupIndex}
              >
                {partnerImages.map((image, imageIndex) => (
                  <img
                    src={image}
                    alt={groupIndex === 0 ? "Product Image" : ""}
                    key={`${groupIndex}-${imageIndex}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
