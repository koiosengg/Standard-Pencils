import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Categories/Image 1.png";
import Image2 from "../../assets/Home/Categories/Image 2.png";
import Image3 from "../../assets/Home/Categories/Image 3.png";
import Image4 from "../../assets/Home/Categories/Image 4.png";
import Image5 from "../../assets/Home/Categories/Image 5.png";
import Image6 from "../../assets/Home/Categories/Image 6.png";

function Categories() {
  return (
    <section className="template">
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
        <article className="home-categories-set">
          <div className="home-categories-set-img">
            <img src={Image1} alt="Classic Kohl/Kajal" />
          </div>
          <div className="home-categories-set-text">
            <h3>Classic Kohl/Kajal</h3>
            <p>
              Traditional soft kohl pencil with a smooth, blendable formula 
              designed for rich colour<br/> payoff and effortless application.{" "}
            </p>
          </div>
        </article>
        <article className="home-categories-set">
          <div className="home-categories-set-img">
            <img src={Image2} alt="Liquid Lipstick" />
          </div>
          <div className="home-categories-set-text">
            <h3>Liquid Lipstick</h3>
            <p>
              High-performance liquid lipstick designed<br/> for long wear, 
              rich pigment payoff, and<br/> smooth, even application.{" "}
            </p>
          </div>
        </article>
        <article className="home-categories-set">
          <div className="home-categories-set-img">
            <img src={Image3} alt="Liquid Concealer" />
          </div>
          <div className="home-categories-set-text">
            <h3>Liquid Concealer</h3>
            <p>
             High-coverage liquid formula designed for<br/> smooth application
              and effective spot and <br/>under-eye correction.{" "}
            </p>
          </div>
        </article>
        
       
       
        <div className="home-categories-button">
          <Link to="/" className="primary-button">
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
