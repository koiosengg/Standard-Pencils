import React from "react";
import Image1 from "../../assets/Home/Choose/Image 1.png";
import Image2 from "../../assets/Home/Choose/Image 2.png";
import Image3 from "../../assets/Home/Choose/Image 3.png";
import Image4 from "../../assets/Home/Choose/Image 4.png";

function Choose() {
  return (
    <section className="template home-choose">
      <div className="template-heading">
        <h2>
          Why Leading <br />
          <span> Beauty Brands Choose Us</span> <br />
        </h2>
        <p>
         Built on decades of manufacturing experience, we deliver consistent quality,
        process reliability, and scalable solutions trusted by leading cosmetic brands.
        </p>
      </div>
      <div className="home-choose-container">
        <article className="home-choose-set">
          <div className="home-choose-img">
            <img src={Image1} alt="Image 1" />
          </div>
          <div className="home-choose-text">
            <h3>45+ Years of Manufacturing Expertise</h3>
            <p>
              Since 1981, we’ve specialised exclusively in cosmetic pencil
              manufacturing, supporting brands across decades and categories.
            </p>
          </div>
        </article>
        <article className="home-choose-set">
          <div className="home-choose-img">
            <img src={Image2} alt="Image 2" />
          </div>
          <div className="home-choose-text">
            <h3>Trusted by Indian & Global Cosmetic Brands</h3>
            <p>
              Long-term OEM partnerships with established FMCG and beauty
              brands.
            </p>
          </div>
        </article>
        <article className="home-choose-set">
          <div className="home-choose-img">
            <img src={Image3} alt="Image 3" />
          </div>
          <div className="home-choose-text">
            <h3>
              Pure OEM. <br /> No Retail.
            </h3>
            <p>We don’t compete with our partners. We manufacture for them.</p>
          </div>
        </article>
        <article className="home-choose-set">
          <div className="home-choose-img">
            <img src={Image4} alt="Image 4" />
          </div>
          <div className="home-choose-text">
            <h3>Specialized in the Custom Formulation & packaging</h3>
            <p>
              From kajal to eyeliners and lip liners, our processes are
              engineered for consistencyat scale.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Choose;
