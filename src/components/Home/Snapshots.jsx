import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Home/Snapshots/Image 1.png";
import Image2 from "../../assets/Home/Snapshots/Image 2.png";

function Snapshots() {
  return (
    <section className="home-snapshots">
      <div className="home-snapshots-left">
        <div className="template-heading">
          <h2>
            Our Quality <br />
            <span> Snapshots</span> <br />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
            vulputate. dolor sit amet consectetur
          </p>
        </div>
        <div className="home-snapshots-left-container desktop">
          <article className="home-snapshots-left-set">
            <h3>Lorem Ipsum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis velin
              vulputate. dolor sit amet consectetur
            </p>
          </article>
          <article className="home-snapshots-left-set">
            <h3>Lorem Ipsum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis velin
              vulputate. dolor sit amet consectetur
            </p>
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
            <h3>Lorem Ipsum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis velin
              vulputate. dolor sit amet consectetur
            </p>
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
            <h3>Lorem Ipsum Dolor Sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis velin
              vulputate. dolor sit amet consectetur
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Snapshots;
