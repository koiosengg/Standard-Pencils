import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Packaging/Image 1.png";

function Packaging() {
  return (
    <section className="template home-packaging">
      <div className="template-heading">
        <h2>
          Explore Our
          <br />
          <span> Packaging Types </span> <br />
        </h2>
        <p>
          Built to support product safety, strong shelf presence, and seamless
          branding across multiple formats and market requirements.
        </p>
      </div>
      <div className="home-packaging-container">
        <article className="home-packaging-set">
          <div className="home-packaging-set-img image-zoom-frame">
            <img
              src={Image1}
              alt="Packaging Image"
              className="image-zoom-target"
            />
          </div>
          <div className="home-packaging-set-text">
            <div className="home-packaging-set-text-heading">
              <div className="home-packaging-set-text-heading-head">
                <span>Mono Carton</span>
                <h3>Paperboard folding carton</h3>
              </div>
              <p>
                Most common retail pack for color cosmetics; supports
                full‑surface printing, coatings, and premium finishes.
              </p>
            </div>
            <hr />
            <div className="home-packaging-set-text-content">
              <h4>Typical Use</h4>
              <p>
                Pencils (eye, lip, face), liquid eyeliner, mascara, liquid
                lipstick, lip oil, concealer, liquid highlighter
              </p>
            </div>
            <hr />
            <div className="home-packaging-set-text-content">
              <h4>Key Variants</h4>
              <div className="home-packaging-set-text-spans">
                <span>Straight tuck end (STE)</span>
                <span>Mascara</span>
                <span>Liquid Eyeliner</span>
                <span>Concealer</span>
                <span>Liquid Highlighter</span>
                <span>Liquid Lipstick</span>
                <span>Lip Oil</span>
              </div>
            </div>
          </div>
        </article>
        <Link to="/capabilities#packaging" className="primary-button">
          <p>View More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_205_44"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_205_44)">
              <path
                d="M7.01659 16.6667L5.83325 15.4833L11.3166 10L5.83325 4.51667L7.01659 3.33333L13.6833 10L7.01659 16.6667Z"
                fill="#111111"
              />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Packaging;
