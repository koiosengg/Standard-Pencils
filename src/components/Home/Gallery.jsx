import React, { useRef, useState, useEffect } from "react";
import Image1 from "../../assets/Home/Gallery/Image 1.png";
import Image2 from "../../assets/Home/Gallery/Image 2.png";
import Image3 from "../../assets/Home/Gallery/Image 3.png";
import Arrow from "../../assets/Home/Gallery/Arrow.svg";

function Gallery() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [step, setStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      const container = containerRef.current;
      const slide = slideRef.current;

      if (container && slide) {
        const cWidth = container.offsetWidth;
        const sWidth = slide.scrollWidth;

        setContainerWidth(cWidth);
        setSlideWidth(sWidth);

        const totalSteps = Math.ceil(sWidth / cWidth);
        setMaxSteps(totalSteps);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // ✅ ADD EXTRA 160px FOR LAST SLIDE
  const maxTranslate = Math.max(0, slideWidth - containerWidth + 160);

  const translateX = Math.max(0, Math.min(step * containerWidth, maxTranslate));

  // ✅ EDGE DETECTION
  const isFirst = step === 0;
  const isLast = translateX >= maxTranslate;

  const handleNext = () => {
    if (!isLast) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setStep((prev) => prev - 1);
    }
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
          <div className="home-gallery-set">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h3>OEM Manufacturing</h3>
          </div>

          <div className="home-gallery-item image-zoom-frame">
            <img
              src={Image1}
              alt="Gallery"
              className="home-gallery-img image-zoom-target"
            />
          </div>
          <div className="home-gallery-item image-zoom-frame">
            <img
              src={Image2}
              alt="Gallery"
              className="home-gallery-img image-zoom-target"
            />
          </div>
          <div className="home-gallery-item image-zoom-frame">
            <img
              src={Image3}
              alt="Gallery"
              className="home-gallery-img image-zoom-target"
            />
          </div>
          <div className="home-gallery-item image-zoom-frame">
            <img
              src={Image1}
              alt="Gallery"
              className="home-gallery-img image-zoom-target"
            />
          </div>
          <div className="home-gallery-item image-zoom-frame">
            <img
              src={Image2}
              alt="Gallery"
              className="home-gallery-img image-zoom-target"
            />
          </div>
          <div className="home-gallery-item image-zoom-frame">
            <img
              src={Image3}
              alt="Gallery"
              className="home-gallery-img image-zoom-target"
            />
          </div>
        </div>

        <div className="home-gallery-buttons desktop">
          <button
            onClick={handlePrev}
            className="home-gallery-button"
            style={{
              opacity: isFirst ? 0.4 : 1,
              cursor: isFirst ? "default" : "pointer",
            }}
          >
            <img
              src={Arrow}
              alt="Arrow"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>

          <button
            onClick={handleNext}
            className="home-gallery-button"
            style={{
              opacity: isLast ? 0.4 : 1,
              cursor: isLast ? "default" : "pointer",
            }}
          >
            <img src={Arrow} alt="Arrow" />
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
