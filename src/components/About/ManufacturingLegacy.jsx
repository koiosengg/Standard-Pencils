function ManufacturingLegacy() {
  const mosaicTiles = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <section className="about-manufacturing">
      <div className="about-manufacturing-content">
        <div className="about-manufacturing-heading">
          <h2>
            <span>Our</span> Manufacturing
            <br />
            Legacy
          </h2>
          <p className="about-manufacturing-intro">
            Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
            vulputate. dolor sit amet consectetur
          </p>
        </div>

        <div className="about-manufacturing-copy">
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim erat mattis sed
            tincidunt amet rutrum. Sed neque a venenatis sagittis nascetur vel.
            Ut urna elementum id auctor dignissim sit pellentesque purus justo.
            Ultricies porttitor elementum pellentesque vulputate eu lobortis
            libero magna. Massa ut nibh turpis neque. Lorem ipsum dolor sit amet
            consectetur. Enim erat mattis sed tincidunt amet rutrum.
            Sed neque a venenatis sagittis nascetur vel.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Enim erat mattis sed
            tincidunt amet rutrum. Sed neque a venenatis sagittis nascetur vel.
          </p>
        </div>
      </div>

      <div className="about-manufacturing-visual">
        <div className="about-manufacturing-visual-head">
          <h3>
            Built for Brands,
            <br />
            Not Shelves
          </h3>
        </div>

        <div className="about-manufacturing-mosaic" aria-hidden="true">
          {mosaicTiles.map((tile) => (
            <div
              key={tile}
              className={`about-manufacturing-tile about-manufacturing-tile-${tile}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManufacturingLegacy;
