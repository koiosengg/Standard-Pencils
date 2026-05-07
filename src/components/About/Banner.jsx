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
  }, [images.length]);

  return (
    <section className="banner-about">
      <div className="banner-about-container">
        <div className="banner-about-img">
          <img
            src={images[currentIndex]}
            alt="About Banner"
            className={animate ? "active" : "inactive"}
          />
        </div>

        <div className="banner-about-content">
          <div className="banner-about-text">
            <h1>
              A legacy of Pure OEM Cosmetic <br /> Pencil Manufacturing <br />
              <span>Since 1984</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
              vulputate. dolor sit amet consectetur
            </p>
          </div>

          <div className="banner-about-buttons">
            <Link to='/contact' className="secondary-button">
              <p>Let’s Start a Project</p>
            </Link>
            <Link to='/capabilities' className="primary-button">
              <p>Our Capabilities</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
