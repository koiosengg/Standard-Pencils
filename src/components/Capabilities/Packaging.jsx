import React, { useRef, useState } from "react";
import Image1 from "../../assets/Home/Packaging/Image 1.png";
import Image2 from "../../assets/Format/Image 2.png";

const packagingSlideSets = [
  {
    eyebrow: "Mono Carton",
    title: "Paperboard folding carton",
    description:
      "Most common retail pack for color cosmetics; supports full-surface printing, coatings, and premium finishes.",
    image: Image1,
    typicalUse:
      "Pencils (eye, lip, face), liquid eyeliner, mascara, liquid lipstick, lip oil, concealer, liquid highlighter",
    variants: [
      "Straight tuck end (STE)",
      "Mascara",
      "Liquid Eyeliner",
      "Concealer",
      "Liquid Highlighter",
      "Liquid Lipstick",
      "Lip Oil",
    ],
  },
  {
    eyebrow: "Stick Pack",
    title: "Twist-up cosmetic stick",
    description:
      "Portable cylindrical format for solid formulas; supports color matching, label decoration, and cap-led branding.",
    image: Image2,
    typicalUse:
      "Foundation sticks, contour sticks, blush sticks, balm sticks, sunscreen sticks, deodorant sticks",
    variants: [
      "Round barrel",
      "Oval barrel",
      "Clear cap",
      "Matte finish",
      "Color matched shell",
      "Tamper band",
      "Label wrap",
    ],
  },
];

const packagingSlides = Array.from({ length: 3 }).flatMap((_, groupIndex) =>
  packagingSlideSets.map((slide) => ({
    ...slide,
    id: `${slide.eyebrow}-${groupIndex + 1}`,
  }))
);

function Packaging() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef(null);

  const goToPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? packagingSlides.length - 1 : current - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) =>
      current === packagingSlides.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      goToPreviousSlide();
    }

    if (swipeDistance < -swipeThreshold) {
      goToNextSlide();
    }

    touchStartX.current = null;
  };

  return (
    <section className="template home-packaging" id="packaging">
      <div className="template-heading">
        <h2>
          Explore Our
          <br />
          <span> Packaging Types </span> <br />
        </h2>
        <p>
          Built to support product safety, strong shelf presence, and seamless
          branding across multiple formats and market requirements.
        </p>
      </div>
      <div className="home-packaging-container">
        <div
          className="home-packaging-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="home-packaging-carousel-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {packagingSlides.map((slide) => (
              <article className="home-packaging-set" key={slide.id}>
                <div className="home-packaging-set-img image-zoom-frame">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="image-zoom-target"
                  />
                </div>
                <div className="home-packaging-set-text">
                  <div className="home-packaging-set-text-heading">
                    <div className="home-packaging-set-text-heading-head">
                      <span>{slide.eyebrow}</span>
                      <h3>{slide.title}</h3>
                    </div>
                    <p>{slide.description}</p>
                  </div>
                  <hr />
                  <div className="home-packaging-set-text-content">
                    <h4>Typical Use</h4>
                    <p>{slide.typicalUse}</p>
                  </div>
                  <hr />
                  <div className="home-packaging-set-text-content">
                    <h4>Key Variants</h4>
                    <div className="home-packaging-set-text-spans">
                      {slide.variants.map((variant) => (
                        <span key={variant}>{variant}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div
          className="home-packaging-carousel-controls"
          aria-label="Packaging carousel controls"
        >
          <button
            type="button"
            className="home-packaging-carousel-button"
            onClick={goToPreviousSlide}
            aria-label="Previous packaging type"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="home-packaging-carousel-dots" aria-hidden="true">
            {packagingSlides.map((slide, index) => (
              <span
                key={slide.id}
                className={
                  index === activeSlide
                    ? "home-packaging-carousel-dot active"
                    : "home-packaging-carousel-dot"
                }
              />
            ))}
          </div>
          <button
            type="button"
            className="home-packaging-carousel-button"
            onClick={goToNextSlide}
            aria-label="Next packaging type"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Packaging;
