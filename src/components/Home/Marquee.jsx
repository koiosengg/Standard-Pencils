import React from "react";
import Image1 from "../../assets/Home/Marquee/Image 1.png";
import Image2 from "../../assets/Home/Marquee/Image 2.png";
import Image3 from "../../assets/Home/Marquee/Image 3.png";
import Image4 from "../../assets/Home/Marquee/Image 4.png";

const images = [Image1, Image2, Image3, Image4];

function Marquee() {
  return (
    <section className="home-marquee">
      <h2>Trusted by Growing Business Worldwide</h2>
      <div className="home-marquee-container side-white-blur">
        <div className="home-marquee-wrapper">
          <div className="home-marquee-marquee">
            {[...images, ...images, ...images, ...images].map((src, i) => (
              <img key={i} src={src} alt="Trusted brand partner" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marquee;
