import React from "react";

function Para({ 
  line1 = "Standard Pencil is a Lorem ipsum dolor sit amet consectetur. Aliquam diam felis elit malesuada fringilla.",
  line2 = "Dictum quis commodo cursus volutpat diam mauris quam.",
  body = "Standard Pencil is a Lorem ipsum dolor sit amet consectetur. Aliquam diam felis elit malesuada fringilla. Dictum quis commodo cursus. Lorem ipsum dolor sit amet consectetur."
}) {
  return (
    <section className="home-para">
      <div className="home-para-container">
        <h2>
          <span>{line1}</span> {line2}
        </h2>
        <p>{body}</p>
      </div>
    </section>
  );
}

export default Para;
