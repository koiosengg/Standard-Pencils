import React from "react";
import Logo from "../../assets/Home/FDA/Logo.svg";

function FDA() {
  return (
    <section className="template home-fda">
      <div className="template-heading">
        <h2>
          FDA Approved
          <br />
          <span> Compliance Partner </span> <br />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
          vulputate. dolor sit amet consectetur
        </p>
      </div>
      <div className="home-fda-container">
        <div className="home-fda-section">
          <div className="home-fda-section-heading">
            <img src={Logo} alt="Quality" />
            <h3>
              Make <span>Any Claim</span>
              <br className="desktop" /> your Brand Needs
            </h3>
          </div>
          <p>
            Our manufacturing facility is fully FDA and CDSCO compliant.
            Whatever performance claims your brand wants to make — we build the
            formulation to back it with documentation.
          </p>
        </div>
        <article className="home-fda-set">
          <span>1</span>
          <h3>
            Dermatologist
            <br /> Tested
          </h3>
          <p>
            Clinical patch-test protocols with certified dermatologists. Full
            documentation package for brand marketing use.
          </p>
        </article>
        <article className="home-fda-set">
          <span>2</span>
          <h3>
            Ophthalmologist
            <br /> Approved
          </h3>
          <p>
            Clinical patch-test protocols with certified dermatologists. Full
            documentation package for brand marketing use.
          </p>
        </article>
        <article className="home-fda-set">
          <span>3</span>
          <h3>
            Long-Wear &
            <br /> Waterproof Claims
          </h3>
          <p>
            Clinical patch-test protocols with certified dermatologists. Full
            documentation package for brand marketing use.
          </p>
        </article>
        <article className="home-fda-set">
          <span>4</span>
          <h3>
            Natural &
            <br /> Organic Claims
          </h3>
          <p>
            Clinical patch-test protocols with certified dermatologists. Full
            documentation package for brand marketing use.
          </p>
        </article>
        <article className="home-fda-set">
          <span>5</span>
          <h3>
            Free-From
            <br /> Formulations
          </h3>
          <p>
            Clinical patch-test protocols with certified dermatologists. Full
            documentation package for brand marketing use.
          </p>
        </article>
        <article className="home-fda-set">
          <span>6</span>
          <h3>
            CDSCO &
            <br /> Regulatory Docs
          </h3>
          <p>
            Clinical patch-test protocols with certified dermatologists. Full
            documentation package for brand marketing use.
          </p>
        </article>
      </div>
    </section>
  );
}

export default FDA;
