import React, { useState } from "react";

const questions = [
  {
    question: "What is your minimum order quantity (MOQ) for cosmetic pencils?",
    answer:
      "Our MOQ for OEM cosmetic pencil manufacturing depends on the product type, formulation, and packaging format. We offer flexible batch sizes to support startups, private label brands, and large-scale cosmetic companies.",
  },
  {
    question: "Do you offer custom formulation for eye and lip products?",
    answer:
      "Yes, we specialise in custom cosmetic formulation for eye care and lip care products, including kajal, eyeliner, lip liners, and crayons—tailored to your brand's performance, claims, and market positioning.",
  },
  {
    question: "Can you match an existing product or benchmark?",
    answer:
      "We provide benchmark-based cosmetic product development, helping brands replicate or improve existing formulations in terms of texture, pigment payoff, and long-wear performance.",
  },
  {
    question: "What types of cosmetic products do you manufacture?",
    answer:
      "We are an OEM cosmetic manufacturer focused on eye and lip categories such as kajal, eyeliner, eyebrow pencils, lip liners, and cosmetic crayons, along with select face and liquid formats.",
  },
  {
    question: "Do you provide packaging and branding support?",
    answer:
      "Yes, we offer cosmetic packaging solutions including cartons, blister packs, and custom formats, ensuring compatibility with your product and strong retail and export presentation.",
  },
  {
    question: "Is your facility FDA and CDSCO compliant?",
    answer:
      "Our facility is FDA-approved and CDSCO-compliant, ensuring all products are manufactured in line with cosmetic regulatory standards for safety, quality, and documentation.",
  },
  {
    question: "Can you support export and international compliance requirements?",
    answer:
      "Yes, we support export-focused cosmetic manufacturing, including EU, US, and international compliance, documentation, and region-specific formulation adjustments.",
  },
  {
    question: "What is the typical product development timeline?",
    answer:
      "Our cosmetic product development timeline depends on formulation complexity, testing, and approvals, but follows a structured OEM process from sampling to bulk production.",
  },
  {
    question: "Do you offer dermatologist-tested or claim-based formulations?",
    answer:
      "Yes, we develop claim-led cosmetic formulations such as dermatologist-tested, hypoallergenic, paraben-free, vegan, and long-wear, based on your brand requirements.",
  },
  {
    question: "Can you handle large-scale production?",
    answer:
      "We are equipped for scalable cosmetic manufacturing, with high-capacity filling lines ensuring consistent quality across small and large production volumes.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with startups, MSMEs, private label brands, and established cosmetic companies, offering flexible OEM solutions based on your scale and growth stage.",
  },
  {
    question: "How do we get started with a project?",
    answer:
      "To begin, share your requirements through our enquiry form. As an OEM cosmetic manufacturer, we will evaluate your brief and guide you through formulation, sampling, and production.",
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const visibleQuestions = showAllQuestions ? questions : questions.slice(0, 5);

  const toggleQuestion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  const toggleQuestionsVisibility = () => {
    setShowAllQuestions((currentValue) => {
      const nextValue = !currentValue;

      if (!nextValue && openIndex > 4) {
        setOpenIndex(-1);
      }

      return nextValue;
    });
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
          {visibleQuestions.map((item, index) => {
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

                {isOpen ? (
                  <p className="questions-answer">{item.answer}</p>
                ) : null}
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="primary-button questions-more-button"
          onClick={toggleQuestionsVisibility}
        >
          <p>{showAllQuestions ? "View Less" : "View More"}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="questions-view-more-mask"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#questions-view-more-mask)">
              <path
                d="M7.01659 16.6667L5.83325 15.4833L11.3166 10L5.83325 4.51667L7.01659 3.33333L13.6833 10L7.01659 16.6667Z"
                fill="#111111"
              />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Questions;
