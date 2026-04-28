import React from "react";
import Image1 from "../../assets/Format/Image 1.png";
import Image2 from "../../assets/Format/Image 2.png";
import Image3 from "../../assets/Format/Image 3.png";

const formats = [
  {
    title: "Slim Round",
    image: Image1,
    diameter: "4.0mm x 6.0mm",
    weight: "3.5g - 4.5g",
    material: "Polystyrene (PS)",
  },
  {
    title: "Jumbo/Chubby",
    image: Image2,
    diameter: "4.0mm x 6.0mm",
    weight: "3.5g - 4.5g",
    material: "Polystyrene (PS)",
  },
  {
    title: "Medium Round",
    image: Image3,
    diameter: "4.0mm x 6.0mm",
    weight: "3.5g - 4.5g",
    material: "Polystyrene (PS)",
  },
];

function Format() {
  return (
    <section className="format">
      <div className="format-container">
        <div className="format-header">
          <span className="format-eyebrow">Our</span>
          <h2 className="format-title">Format Type</h2>
          <p className="format-copy">
            Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
            vulputate, dolor sit amet consectetur.
          </p>
        </div>

        <div className="format-slider">
          <div className="format-track">
            {formats.map((format) => (
              <article key={format.title} className="format-card">
                <div className="format-card-image-wrap image-zoom-frame">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="format-card-image image-zoom-target"
                  />
                </div>
                <div className="format-card-body">
                  <h3 className="format-card-title">{format.title}</h3>
                  <div className="format-card-details">
                    <div className="format-card-detail">
                      <span>Core Diameter</span>
                      <p>{format.diameter}</p>
                    </div>
                    <div className="format-card-detail">
                      <span>Est Total Weight</span>
                      <p>{format.weight}</p>
                    </div>
                  </div>
                  <div className="format-card-material">
                    <span>Barrel Material</span>
                    <p>{format.material}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Format;
