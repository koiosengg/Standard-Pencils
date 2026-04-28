import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [years, setYears] = useState(0);
  const [countries, setCountries] = useState(0);
  const [brands, setBrands] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const animate = (setter, target, duration = 1500) => {
      let start = 0;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animate(setYears, 40);
    animate(setCountries, 5);
    animate(setBrands, 20);
  }, [startCount]);

  return (
    <section className="home-about" ref={sectionRef}>
      <div className="home-about-left">
        <h2 className="home-about-set">
          <span>{years}+</span>Years of <br />
          experience
        </h2>
        <h2 className="home-about-set">
          <span>{countries}+</span>Countries Global <br />
          Presence
        </h2>
        <h2 className="home-about-set">
          <span>{brands}+</span>Trusted <br /> Brands
        </h2>
      </div>

      <div className="home-about-right">
        <p className="home-about-para">
          Trusted Across Industries. Proven at Scale.<br/>
          With decades of experience and global brand<br/> partnerships, we support pharma, export markets, <br/>
          MSMEs, and private label D2C brands with consistent, reliable manufacturing.{" "}
        </p>

        <Link to="/about">
          Read more about us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_221_26"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_221_26)">
              <path
                d="M7.01659 16.6666L5.83325 15.4833L11.3166 9.99992L5.83325 4.51659L7.01659 3.33325L13.6833 9.99992L7.01659 16.6666Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default About;
