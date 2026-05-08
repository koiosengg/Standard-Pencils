import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Snapshots/Image 1.png";
import Image2 from "../../assets/Home/Snapshots/Image 2.png";

function Snapshots({ 
  line1 = "Our Quality",
  line2 = "Snapshots",
  description = "Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in vulputate. dolor sit amet consectetur",
  card1Title = "Lorem Ipsum Dolor Sit",
  card1Desc = "Lorem ipsum dolor sit amet consectetur. At ut tellus quis velin vulputate. dolor sit amet consectetur",
  card2Title = "Lorem Ipsum Dolor Sit",
  card2Desc = "Lorem ipsum dolor sit amet consectetur. At ut tellus quis velin vulputate. dolor sit amet consectetur"
}) {
  return (
    <section className="home-snapshots">
      <div className="home-snapshots-left">
        <div className="template-heading">
          <h2>
            {line1} <br />
            <span> {line2}</span> <br />
          </h2>
          <p>{description}</p>
        </div>
        <div className="home-snapshots-left-container desktop">
          <article className="home-snapshots-left-set">
            <h3>{card1Title}</h3>
            <p>{card1Desc}</p>
          </article>
          <article className="home-snapshots-left-set">
            <h3>{card2Title}</h3>
            <p>{card2Desc}</p>
          </article>
        </div>
      </div>
      <div className="home-snapshots-right">
        <div className="home-snapshots-right-set">
          <div className="home-snapshots-right-set-img image-zoom-frame">
            <img
              src={Image1}
              alt="Snapshots Image"
              className="image-zoom-target"
            />
            <Link to="/contact" className="secondary-button">
              <p>Talk to us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_232_23"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_232_23)">
                  <path
                    d="M7.01659 16.6668L5.83325 15.4835L11.3166 10.0002L5.83325 4.51683L7.01659 3.3335L13.6833 10.0002L7.01659 16.6668Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <article className="home-snapshots-left-set mobile">
            <h3>{card1Title}</h3>
            <p>{card1Desc}</p>
          </article>
        </div>
        <div className="home-snapshots-right-set">
          <div className="home-snapshots-right-set-img image-zoom-frame">
            <img
              src={Image2}
              alt="Snapshots Image"
              className="image-zoom-target"
            />
          </div>
          <article className="home-snapshots-left-set mobile">
            <h3>{card2Title}</h3>
            <p>{card2Desc}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Snapshots;
