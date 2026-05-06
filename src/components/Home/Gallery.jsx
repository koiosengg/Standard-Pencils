import React, { useRef, useState, useEffect } from "react";
import Image1 from "../../assets/Home/Gallery/Image 1.png";
import Image2 from "../../assets/Home/Gallery/Image 2.png";
import Image3 from "../../assets/Home/Gallery/Image 3.png";
import Arrow from "../../assets/Home/Gallery/Arrow.svg";

const galleryItems = [
  { type: "text", label: "OEM Manufacturing", desc: "Lorem ipsum dolor sit amet consectetur." },
  { type: "img", src: Image1 },
  { type: "img", src: Image2 },
  { type: "img", src: Image3 },
  { type: "img", src: Image1 },
  { type: "img", src: Image2 },
  { type: "img", src: Image3 },
];

const GAP = 8;

function Gallery() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [itemOffsets, setItemOffsets] = useState([]);
  const [maxIndex, setMaxIndex] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const updateOffsets = () => {
      const slide = slideRef.current;
      const container = containerRef.current;
      if (!slide || !container) return;

      const children = Array.from(slide.children);
      const offsets = [];
      const widths = [];
      let current = 0;

      for (let i = 0; i < children.length; i++) {
        offsets.push(current);
        widths.push(children[i].offsetWidth);
        current += children[i].offsetWidth + GAP;
      }

      const containerWidth = container.offsetWidth;
      const lastItemEnd = offsets[offsets.length - 1] + widths[widths.length - 1];
      const SLIDE_PADDING = 160;
      const newMaxTranslate = Math.max(0, lastItemEnd + SLIDE_PADDING - containerWidth);

      let max = 0;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (offsets[i] <= newMaxTranslate) {
          max = i;
          break;
        }
      }

      setItemOffsets(offsets);
      setMaxIndex(max);
      setMaxTranslate(newMaxTranslate);
    };

    requestAnimationFrame(updateOffsets);
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  const translateX = activeIndex >= maxIndex ? maxTranslate : (itemOffsets[activeIndex] || 0);
  const isFirst = activeIndex <= 0;
  const isLast = activeIndex >= maxIndex;

  const handleNext = () => {
    if (isLast) return;
    setActiveIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isFirst) return;
    setActiveIndex(prev => prev - 1);
  };

  return (
    <section className="home-gallery">
      <div className="home-gallery-container" ref={containerRef}>
        <div
          className="home-gallery-slide"
          ref={slideRef}
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: "transform 0.5s ease",
            display: "flex",
          }}
        >
          {galleryItems.map((item, i) =>
            item.type === "text" ? (
              <div className="home-gallery-set" key={i}>
                <p>{item.desc}</p>
                <h3>{item.label}</h3>
              </div>
            ) : (
              <img
                key={i}
                src={item.src}
                alt="Gallery"
                className="home-gallery-img"
              />
            )
          )}

        </div>

        <div className="home-gallery-buttons desktop">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className="home-gallery-button"
            style={{
              opacity: isFirst ? 0.4 : 1,
              cursor: isFirst ? "default" : "pointer",
              pointerEvents: isFirst ? "none" : "auto",
            }}
          >
            <img
              src={Arrow}
              alt="Previous"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={isLast}
            className="home-gallery-button"
            style={{
              opacity: isLast ? 0.4 : 1,
              cursor: isLast ? "default" : "pointer",
              pointerEvents: isLast ? "none" : "auto",
            }}
          >
            <img src={Arrow} alt="Next" />
          </button>
        </div>
      </div>

      <div className="home-gallery-heading">
        <h2>
          Our Manufacturing <br />
          Capabilities
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
          vulputate. dolor sit amet consectetur
        </p>
      </div>
    </section>
  );
}

export default Gallery;
