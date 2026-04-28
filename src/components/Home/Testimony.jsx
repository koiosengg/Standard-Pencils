import React from "react";

function Testimony() {
  return (
    <section className="template">
      <div className="template-heading">
        <h2>
          Trusted by <br />
          <span> Brands Across Industries</span> <br />
        </h2>
        <p>
          Supporting diverse business segments with reliable manufacturing,<br/>
           tailored formulations, and scalable production capabilities.
        </p>
      </div>
      <div className="home-testimony">
        <article className="home-testimony-set">
          <h3>Pharma & <br/>Therapeutic Brands</h3>
          <p>Focused on safety, compliance, and formulations suited for sensitive applications and regulated markets. </p>
        </article>
        <article className="home-testimony-set">
          <h3>
            Export &
            <br />
            International <br />
            Markets
          </h3>
          <p>Adapted to meet global standards, regional and cross-border compliance requirements. </p>
        </article>
        <article className="home-testimony-set">
          <h3>MSMEs & <br/>Growing Brands</h3>
          <p>Flexible production and development support to help emerging 
            brands scale efficiently and sustainably with confidence. </p>
        </article>
        <article className="home-testimony-set">
          <h3>
            Private Label -<br />
            D2C Brands
          </h3>
          <p>End-to-end OEM solutions for brands looking to launch,
             differentiate, and grow in highly competitive global and digital markets. </p>
        </article>
      </div>
    </section>
  );
}

export default Testimony;
