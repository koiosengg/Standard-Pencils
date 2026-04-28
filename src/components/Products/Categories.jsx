import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Products/Image1.png";
import Image2 from "../../assets/Products/Image2.png";
import Image3 from "../../assets/Products/Image3.png";
import Image4 from "../../assets/Products/Image4.png";
import Image5 from "../../assets/Products/Image5.png";
import Image6 from "../../assets/Products/Image6.png";
import Image7 from "../../assets/Products/Image7.png";
import Image8 from "../../assets/Products/Image8.png";



const categoryPills = ["Eyes", "Lips", "Face", "Nails", "Hair"];

const products = [
  {
    category: "Eyes",
    title: "Classic Kohl / Kajal",
    description:
      "Cosmetic-grade kajal pencils designed for OEM and private label manufacturing.",
    technicalSpec: "Slim Pencil",
    shadeRange: "1-3",
    image: Image1,
    imageAlt: "Classic Kohl Kajal pencil",
  },
  {
    category: "Lips",
    title: "Liquid Lip Color",
    description:
      "Private label lip color formats developed for smooth payoff and everyday wear.",
    technicalSpec: "Liquid Fill",
    shadeRange: "6-12",
    image: Image2,
    imageAlt: "Liquid lip color product",
  },
  {
    category: "Face",
    title: "Liquid Concealer",
    description:
      "Face-perfecting concealer formats suited for OEM and contract manufacturing.",
    technicalSpec: "Liquid Fill",
    shadeRange: "4-10",
    image: Image3,
    imageAlt: "Liquid concealer product",
  },
  {
    category: "Nails",
    title: "Nail Color",
    description:
      "Color-rich nail formats designed for private label ranges across seasonal collections.",
    technicalSpec: "Bottle Pack",
    shadeRange: "12+",
    image: Image4,
    imageAlt: "Nail color product",
  },
  {
    category: "Hair",
    title: "Hair Touch-Up Stick",
    description:
      "Targeted hair color touch-up solutions for roots, edges, and quick correction use.",
    technicalSpec: "Stick Format",
    shadeRange: "3-6",
    image: Image7,
    imageAlt: "Hair touch up stick product",
  },
  {
    category: "Eyes",
    title: "Liquid Eyeliner (Dip)",
    description:
      "Precision liquid eyeliner systems made for OEM and export-focused beauty brands.",
    technicalSpec: "Dip Pack",
    shadeRange: "2-4",
    image: Image8,
    imageAlt: "Liquid eyeliner dip product",
  },
  {
    category: "Eyes",
    title: "Brow Styling Gel",
    description:
      "Buildable brow gel formats created for shape, hold, and natural definition.",
    technicalSpec: "Mascara Pack",
    shadeRange: "3-5",
    image: Image5,
    imageAlt: "Brow styling gel product",
  },
  {
    category: "Lips",
    title: "Jumbo Lip Crayon",
    description:
      "Jumbo lip crayon formats combining easy glide, comfort, and rich color payoff.",
    technicalSpec: "Jumbo Pencil",
    shadeRange: "6-10",
    image: Image6,
    imageAlt: "Jumbo lip crayon product",
  },
];

function Categories() {
  const [activeCategory, setActiveCategory] = useState(categoryPills[0]);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="template product-categories">
      <div className="template-heading">
        <h2>
          Our Product
          <br />
          <span> Categories </span> <br />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
          vulputate. dolor sit amet consectetur
        </p>
      </div>
      <div className="product-categories-pills" aria-label="Product categories">
        {categoryPills.map((pill) => (
          <button
            key={pill}
            type="button"
            className={`product-categories-pill ${
              activeCategory === pill ? "is-active" : ""
            }`}
            onClick={() => setActiveCategory(pill)}
            aria-pressed={activeCategory === pill}
          >
            {pill}
          </button>
        ))}
      </div>
      <div className="product-categories-list">
        {filteredProducts.map((product, index) => (
          <article
            key={product.title}
            className={`product-category-row ${
              index % 2 === 1 ? "is-reversed" : ""
            }`}
          >
            <div className="product-category-visual image-zoom-frame">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="image-zoom-target"
              />
            </div>
            <div className="product-category-content">
              <div className="product-category-copy">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
              <div className="product-category-specs">
                <div className="product-category-spec-row">
                  <span>Technical Specs</span>
                  <strong>{product.technicalSpec}</strong>
                </div>
                <div className="product-category-spec-row">
                  <span>Shade Range</span>
                  <strong>{product.shadeRange}</strong>
                </div>
              </div>
              <Link to="/contact" className="product-category-button">
                <span>Enquire Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categories;
