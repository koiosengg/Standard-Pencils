import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Banner/Image 1.jpg";
import Image2 from "../../assets/Home/Banner/Image 2.png";
import Image3 from "../../assets/Home/Banner/Image 3.png";
import Image4 from "../../assets/Home/Banner/Image 4.jpg";
import Image5 from "../../assets/Home/Banner/Image 5.jpg";

function Banner() {
  const images = [Image1, Image2, Image3, Image4, Image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimate(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-banner">
      <div className="home-banner-container">
        <div className="home-banner-img">
          <img
            src={images[currentIndex]}
            alt="Home Banner"
            className={animate ? "active" : "inactive"}
          />
        </div>

        <div className="home-banner-content">
          <div className="home-banner-text">
            <h1>
              OEM <span>Cosmetic Manufacturing</span> with 40+ Years of
              Expertise in Eye Care & Lip Care
            </h1>
            <p>
              FDA-approved facility with scalable production, multiple formats, and proven experience with leading cosmetic brands.Delivering manufacturing to your exact specifications.
            </p>
          </div>

          <div className="home-banner-buttons">
            <Link className="secondary-button">
              <p>Get your Product Solution</p>
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