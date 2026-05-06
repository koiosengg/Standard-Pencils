import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Categories/Image 1.png";
import Image2 from "../../assets/Home/Categories/Image 2.png";
import Image3 from "../../assets/Home/Categories/Image 3.png";
import Image4 from "../../assets/Home/Categories/Image 4.png";
import Image5 from "../../assets/Home/Categories/Image 5.png";
import Image6 from "../../assets/Home/Categories/Image 6.png";

const categories = [
  {
    title: "Classic Kohl/Kajal",
    description:
      "Traditional soft kohl pencil with a smooth, blendable formula designed for rich colour payoff and effortless application.",
    image: Image1,
  },
  {
    title: "Liquid Lipstick",
    description:
      "High-performance liquid lipstick designed for long wear, rich pigment payoff, and smooth, even application.",
    image: Image2,
  },
  {
    title: "Liquid Concealer",
    description:
      "High-coverage liquid formula designed for smooth application and effective spot and under-eye correction.",
    image: Image3,
  },
  {
    title: "Nail Whitener",
    description:
      "Hard, precision core pencil designed to enhance, brighten, and define the natural nail tip.",
    image: Image4,
  },
  {
    title: "Eyebrow Definer",
    description:
      "Firm, matte formula for controlled application and natural-looking brow definition.",
    image: Image5,
  },
  {
    title: "Root Touch Up Stick",
    description:
      "Pigmented, easy-glide stick for quick, precise, and natural-looking grey root coverage.",
    image: Image6,
  },
];

function Categories() {
  return (
    <section className="template home-categories-section">
      <div className="template-heading">
        <h2>
          Our Product
          <br />
          <span> Categories </span> <br />
        </h2>
        <p>
          Versatile eye, lip, and face formats developed for high performance, 
          consistent quality, and seamless brand integration.
        </p>
      </div>
      <div className="home-categories">
        {categories.map((category) => (
          <article className="home-categories-set" key={category.title}>
            <div className="home-categories-set-img">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="home-categories-set-text">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
        <div className="home-categories-button">
          <Link to="/product" className="primary-button">
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
      </div>
    </section>
  );
}

export default Categories;
