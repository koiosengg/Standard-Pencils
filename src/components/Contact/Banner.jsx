import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Banner/Image 1.png";
import Image2 from "../../assets/Home/Banner/Image 2.png";
import Image3 from "../../assets/Home/Banner/Image 3.png";
import Image4 from "../../assets/Home/Banner/Image 4.png";
import Image5 from "../../assets/Home/Banner/Image 5.png";
import Image6 from "../../assets/Home/Banner/Image 6.png";

function Banner() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
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
    <section className="banner-capabilities">
      <div className="banner-capabilities-container">
        <div className="banner-capabilities-img">
          <img
            src={images[currentIndex]}
            alt="Capabilities Banner"
            className={animate ? "active" : "inactive"}
          />
        </div>

        <div className="banner-capabilities-content">
          <div className="banner-capabilities-text">
            <h1>
              We'd Love to 
              <span>Hear From You</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
              vulputate. dolor sit amet consectetur
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Banner;
