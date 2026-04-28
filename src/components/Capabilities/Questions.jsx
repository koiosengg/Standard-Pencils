import React, { useState } from "react";

const questions = [
  {
    question: "What is your minimum order quantity (MOQ) forcosmetic pencils?",
    answer:
      "Our MOQ for OEM cosmetic pencil manufacturing depends on the product type, formulation, and packaging format. We offer flexible batch sizes to support startups, private label brands, and large-scale cosmetic companies.",
  },
  {
    question: "Do you offer custom formulation for eye andlip products?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Atut tellus quis Lorem ipsum dolor sit amet consectetur. Atut tellus quis",
  },
  {
    question: "Can you match an existing product or benchmark?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Atut tellus quis Lorem ipsum dolor sit amet consectetur. Atut tellus quis",
  },
  {
    question: "What types of cosmetic products do you manufacture?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Atut tellus quis Lorem ipsum dolor sit amet consectetur. Atut tellus quis",
  },
  {
    question: "Do you provide packaging and branding support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Atut tellus quis Lorem ipsum dolor sit amet consectetur. Atut tellus quis",
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="questions">
      <div className="questions-container">
        <div className="questions-header">
          <span className="questions-eyebrow">Frequently</span>
          <h2 className="questions-title">Asked Questions</h2>
          <p className="questions-copy">
            Everything you need to know about working with us, from development
            and production to compliance and delivery.
          </p>
        </div>

        <div className="questions-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`questions-item ${isOpen ? "is-open" : ""}`}
                key={`${item.question}-${index}`}
              >
                <button
                  type="button"
                  className="questions-trigger"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="questions-trigger-icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#1E1E1E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen ? <p className="questions-answer">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Questions;
