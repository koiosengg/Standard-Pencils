import React from "react";

const formulationSections = [
  {
    id: "01",
    title: "Nature Led Formulations",
    items: [
      {
        title: "Clean / Botanical Base",
        icon: "leaf",
        description:
          'High level of plant-derived oils, waxes, butters, and pigments. Reduced use of synthetic ingredients; focus on "gentler" systems.',
        useCase:
          "Brands with nature, Ayurveda, wellness, organic or vegan positioning. Ideal for EU/US clean-beauty private label lines.",
      },
      {
        title: "Sensitive Skin Friendly",
        icon: "plus",
        description:
          "Built to minimize irritation: simplified ingredient lists, low fragrance, ophthalmologist / dermatologist tested where needed.",
        useCase:
          "Eye products (kajal, waterline, brow) and base/face sticks where irritation risk is a concern. Especially pharmacy and doctor-backed brands.",
      },
    ],
  },
  {
    id: "02",
    title: "Performance-Driven Formulations",
    items: [
      {
        title: "Sensitive Skin Friendly",
        icon: "plus",
        description:
          "Built to minimize irritation: simplified ingredient lists, low fragrance, ophthalmologist / dermatologist tested where needed.",
        useCase:
          "Eye products (kajal, waterline, brow) and base/face sticks where irritation risk is a concern. Especially pharmacy and doctor-backed brands.",
      },
      {
        title: "Clean / Botanical Base",
        icon: "leaf",
        description:
          'High level of plant-derived oils, waxes, butters, and pigments. Reduced use of synthetic ingredients; focus on "gentler" systems.',
        useCase:
          "Brands with nature, Ayurveda, wellness, organic or vegan positioning. Ideal for EU/US clean-beauty private label lines.",
      },
      {
        title: "Sensitive Skin Friendly",
        icon: "plus",
        description:
          "Built to minimize irritation: simplified ingredient lists, low fragrance, ophthalmologist / dermatologist tested where needed.",
        useCase:
          "Eye products (kajal, waterline, brow) and base/face sticks where irritation risk is a concern. Especially pharmacy and doctor-backed brands.",
      },
    ],
  },
  {
    id: "03",
    title: "Custom / Brand-Specific Formulations",
    items: [
      {
        title: "Sensitive Skin Friendly",
        icon: "plus",
        description:
          "Built to minimize irritation: simplified ingredient lists, low fragrance, ophthalmologist / dermatologist tested where needed.",
        useCase:
          "Eye products (kajal, waterline, brow) and base/face sticks where irritation risk is a concern. Especially pharmacy and doctor-backed brands.",
      },
      {
        title: "Clean / Botanical Base",
        icon: "leaf",
        description:
          'High level of plant-derived oils, waxes, butters, and pigments. Reduced use of synthetic ingredients; focus on "gentler" systems.',
        useCase:
          "Brands with nature, Ayurveda, wellness, organic or vegan positioning. Ideal for EU/US clean-beauty private label lines.",
      },
      {
        title: "Clean / Botanical Base",
        icon: "leaf",
        description:
          'High level of plant-derived oils, waxes, butters, and pigments. Reduced use of synthetic ingredients; focus on "gentler" systems.',
        useCase:
          "Brands with nature, Ayurveda, wellness, organic or vegan positioning. Ideal for EU/US clean-beauty private label lines.",
      },
      {
        title: "Sensitive Skin Friendly",
        icon: "plus",
        description:
          "Built to minimize irritation: simplified ingredient lists, low fragrance, ophthalmologist / dermatologist tested where needed.",
        useCase:
          "Eye products (kajal, waterline, brow) and base/face sticks where irritation risk is a concern. Especially pharmacy and doctor-backed brands.",
      },
    ],
  },
];

function FormulationIcon({ type }) {
  if (type === "leaf") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 14.667V8.4"
          stroke="#FF6A3D"
          strokeWidth="1.333"
          strokeLinecap="round"
        />
        <path
          d="M8 8.666C6.222 8.666 4.667 7.111 4.667 5.333C4.667 3.556 6.311 1.889 8 1.333C9.689 1.889 11.333 3.556 11.333 5.333C11.333 7.111 9.778 8.666 8 8.666Z"
          stroke="#FF6A3D"
          strokeWidth="1.333"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.667" stroke="#FF6A3D" strokeWidth="1.333" />
      <path
        d="M8 4.667V11.333M4.667 8H11.333"
        stroke="#FF6A3D"
        strokeWidth="1.333"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Formulations() {
  return (
    <section className="formulations">
      <div className="formulations-container">
        <div className="formulations-header">
          <span className="formulations-eyebrow">Our</span>
          <h2 className="formulations-title">Formulations</h2>
          <p className="formulations-copy">
            Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
            vulputate. dolor sit amet consectetur
          </p>
        </div>

        <div className="formulations-groups">
          {formulationSections.map((section) => (
            <div className="formulations-group" key={section.id}>
              <div className="formulations-group-header">
                <div className="formulations-group-heading">
                  <h3>{section.title}</h3>
                  <span />
                </div>
                <p>{section.id}</p>
              </div>

              <div
                className={`formulations-grid formulations-grid-${section.items.length}`}
              >
                {section.items.map((item, index) => (
                  <article
                    className="formulations-card"
                    key={`${section.id}-${item.title}-${index}`}
                  >
                    <div className="formulations-card-top">
                      <div className="formulations-card-title-row">
                        <div className="formulations-card-icon">
                          <FormulationIcon type={item.icon} />
                        </div>
                        <h4>{item.title}</h4>
                      </div>
                      <p>{item.description}</p>
                    </div>

                    <div className="formulations-card-divider" />

                    <div className="formulations-card-bottom">
                      <span>When To Propose To Clients</span>
                      <p>{item.useCase}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formulations;
