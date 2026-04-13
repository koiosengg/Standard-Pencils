import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Banner/Image 1.png";

function Banner() {
  return (
    <section className="home-banner">
      <div className="home-banner-container">
        <div className="home-banner-img">
          <img src={Image1} alt="Home Banner Image" />
        </div>
        <div className="home-banner-content">
          <div className="home-banner-text">
            <h1>
              OEM <span>Cosmetic Manufacturing</span> with 40+ Years of
              Expertise in Eye Care & Lip Care
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
              vulputate. dolor sit amet consectetur
            </p>
          </div>
          <div className="home-banner-buttons">
            <Link className="secondary-button">
              <p>Let’s Start a Project</p>
            </Link>
            <Link className="primary-button">
              <p>Our Capabilities</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
