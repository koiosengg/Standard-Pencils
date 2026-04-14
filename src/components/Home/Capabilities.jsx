import React from "react";
import { Link } from "react-router-dom";

function Capabilities() {
  return (
    <section className="home-capabilities">
      <div className="home-capabilities-container">
        <div className="home-capabilities-container-text">
          <h2>
            Colour that stays. <br /> Texture that speaks. <br /> Formulas that
            feel like yours.
          </h2>
          <p>
            Explore the full range of what we develop, and find the approach
            that <br className="desktop" /> fits your next product.
          </p>
        </div>
        <Link to="/">
          Explore Now{" "}
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
      </div>
    </section>
  );
}

export default Capabilities;
