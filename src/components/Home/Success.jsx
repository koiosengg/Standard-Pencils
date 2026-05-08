import React from "react";
import SuccessImage from "../../assets/Home/Success/Image 1.png";

const processSteps = [
  {
    number: "001",
    title: ["Brief & Product", "Alignment"],
    body: [
      "Shade, texture, format, performance",
      "claim, packaging type, and skin ",
      "compatibility defined and locked",
      "before a single gram of formulation is",
      "touched.",
    ],
  },
  {
    number: "002",
    title: ["Raw Material", "Qualification"],
    body: [
      "Every input pigments, waxes, ",
      "actives, solvents is evaluated ",
      "against cosmetic-grade safety",
      "standards before it enters our",
      "production floor.",
    ],
  },
  {
    number: "003",
    title: ["In-House R&D &", "Shade Development"],
    body: [
      "Our formulation team develops,",
      "optimises, and validates the bulk",
      "texture, pigmentation, stability, and",
      "performance refined through pilot",
      "batches before full production begins.",
    ],
  },
  {
    number: "004",
    title: ["Packaging", "Compatibility Testing"],
    body: [
      "Formulations are tested against",
      "selected packaging barrel,",
      "container, closure to confirm",
      "compatibility and shelf-life integrity",
      "before scale-up.",
    ],
  },
  {
    number: "005",
    title: ["Precision Filling &", "Assembly"],
    body: [
      "Formulations are filled using ",
      "specialised equipment calibrated for",
      "cosmetic-grade accuracy across",
      "sharpenable, retractable, and mould-",
      "fill formats.",
    ],
  },
  {
    number: "006",
    title: ["In-Process Quality", "Checks"],
    body: [
      "Checks at every production stage ",
      "fill weight, consistency, colour match,",
      "structural integrity before the next ",
      "stage begins.",
    ],
  },
  {
    number: "007",
    title: ["Decoration &", "Finishing"],
    body: ["Gold foiling, colour printing, and batch", "coding completed in-house."],
  },
  {
    number: "008",
    title: ["Lab Testing", "Every Batch"],
    body: [
      "BIS parameter testing, Stability testing,",
      "Microbial safety testing, Heavy metal",
      "testing",
    ],
  },
];

const renderLines = (lines) =>
  lines.map((line, index) => (
    <span className="home-success-card-line" key={`${line}-${index}`}>
      {line}
    </span>
  ));

function Success({
  description = "Lorem ipsum dolor sit amet consectetur. Enim erat mattis sed tincidunt amet rutrum. Sed neque a venenatis sagittis nascetur vel. Ut urna elementum id auctor dignissim sit pellentesque purus justo."
}) {
  return (
    <section className="home-success">
      <div className="home-success-hero">
        <div className="home-success-image" aria-hidden="true">
          <img src={SuccessImage} alt="" />
        </div>
        <div className="home-success-copy">
          <div className="home-success-heading">
            <p>
              <span className="home-success-heading-line">
                Complete Cosmetic
              </span>
            </p>
            <h2>
              <span className="home-success-heading-line">
                Manufacturing
              </span>
              <br />
              <span className="home-success-heading-line">
                Process <span className="home-success-heading-accent">Designed for</span>
              </span>
              <br />
              <span className="home-success-heading-line">
                <span className="home-success-heading-accent">
                  Your Brand&rsquo;s Success
                </span>
              </span>
            </h2>
          </div>
          <p className="home-success-description">
            {description}
          </p>
          <div className="home-success-stats" aria-label="Manufacturing success metrics">
            <div>
              <strong>1984</strong>
              <span>Your Trusted Partner in Cosmetic Manufacturing Excellence</span>
            </div>
            <div>
              <strong>78%</strong>
              <span>Maintaining Client Retention Across Projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-success-process">
        <div className="home-success-process-grid">
          {processSteps.map((step) => (
            <article className="home-success-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{renderLines(step.title)}</h3>
              <p>{renderLines(step.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Success;
