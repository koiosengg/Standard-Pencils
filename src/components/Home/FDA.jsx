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
          From 'dermatologist-tested' to '24-hour wear', 'ophthalmologist approved' to 'hypoallergenic'.
           If there's a claim your market wants, we have the science and the certification to make it real.
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
            Whatever performance claims your brand wants to make we build the
            formulation to back it with documentation.
          </p>
        </div>
        <article className="home-fda-set">
          <span>1</span>
          <h3>
            Dermatologist
            <br /> Tested / Recommended
          </h3>
          <p>
            Validated for skin compatibility,supporting safe use across sensitive 
            skin and eye applications with clinically tested assurance.
          </p>
        </article>
        <article className="home-fda-set">
          <span>2</span>
          <h3>
            Lead-Free
            <br /> Formulations
          </h3>
          <p>
            Developed to address safety concerns around eye products, 
            ensuring reduced risk of irritation and regulatory compliance.
          </p>
        </article>
        <article className="home-fda-set">
          <span>3</span>
          <h3>
            Paraben-Free
            <br /> Systems
          </h3>
          <p>
            Formulated to meet clean-label preferences and modern regulatory expectations.
          </p>
        </article>
        <article className="home-fda-set">
          <span>4</span>
          <h3>
            Hypoallergenic
            <br /> Development
          </h3>
          <p>
            Designed to minimise the risk of allergic reactions,
            suitable for sensitive users and broader acceptance.
          </p>
        </article>
        <article className="home-fda-set">
          <span>5</span>
          <h3>
            Heavy Metal / Cadmium
            <br /> Controlled
          </h3>
          <p>
            Strict quality checks ensure formulations are free
             from heavy metals and meet global safety standards.
          </p>
        </article>
        <article className="home-fda-set">
          <span>6</span>
          <h3>
            FDA-Compliant
            <br /> Manufacturing Facility
          </h3>
          <p>
            Produced in an FDA and CDSCO-compliant facility,
             ensuring adherence to manufacturing regulations.
          </p>
        </article>
      </div>
    </section>
  );
}

export default FDA;
