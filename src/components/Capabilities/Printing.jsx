import React from "react";
import Image1 from "../../assets/Printing/Image 1.png";
import Image2 from "../../assets/Printing/Image 2.png";
import Image3 from "../../assets/Printing/Image 3.png";

const cards = [
  {
    title: "Hot Foil Stamping",
    description:
      "Ideal for premium eye, lip, face and gift sets we decorate logos, brand names, borders, icons, seals, shade bands, and limited-edition elements with flawless precision.",
    tags: ["Cartons", "Pencil Barrels", "Mascara", "Lip/Gloss Bottles"],
    image: Image1,
  },
  {
    title: "Silk Screen/Screen Printing",
    description:
      "Ideal for premium eye, lip, face and gift sets we decorate logos, brand names, borders, icons, seals, shade bands, and limited-edition elements with flawless precision.",
    tags: ["Cartons", "Pencil Barrels", "Mascara", "Lip/Gloss Bottles"],
    image: Image2,
  },
  {
    title: "Laser Batch Coding/Laser Marking",
    description:
      "Ideal for premium eye, lip, face and gift sets we decorate logos, brand names, borders, icons, seals, shade bands, and limited-edition elements with flawless precision.",
    tags: ["Cartons", "Pencil Barrels", "Mascara", "Lip/Gloss Bottles"],
    image: Image3,
  },
];

function Printing() {
  return (
    <section className="printing">
      <div className="printing-container">
        <div className="printing-text">
          <span className="printing-eyebrow">Explore Our</span>
          <h2 className="printing-heading">Printing Technique</h2>
          <p className="printing-copy">
            Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
            vulputate, dolor sit amet consectetur.
          </p>
        </div>

        <div className="printing-slider">
          <div className="printing-track">
            {cards.map((card) => (
              <article key={card.title} className="printing-card">
                <div className="printing-card-media image-zoom-frame">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="printing-card-image image-zoom-target"
                  />
                </div>
                <div className="printing-card-body">
                  <h3 className="printing-card-title">{card.title}</h3>
                  <p className="printing-card-description">
                    {card.description}
                  </p>
                  <div className="printing-card-tags">
                    {card.tags.map((tag) => (
                      <span key={tag} className="printing-card-tag">
                        {tag}
                      </span>
                    ))}
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

export default Printing;
