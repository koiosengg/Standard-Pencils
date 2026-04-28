import React from "react";

const progressSteps = Array.from({ length: 7 }, (_, index) => index);

function Form() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-shell">
        <div className="contact-form-heading">
          <h2>
            We are always ready to
            <br />
            <span>help you and answer your questions</span>
          </h2>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-progress" aria-hidden="true">
            {progressSteps.map((step) => (
              <span
                key={step}
                className={`contact-form-progress-step ${
                  step === 0 ? "is-active" : ""
                }`}
              />
            ))}
          </div>

          <div className="contact-form-copy">
            <h3>Contact Information</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At ut tellus quis vel in
              vulputate. dolor sit amet consectetur
            </p>
          </div>

          <form className="contact-form-fields">
            <label className="contact-form-field">
              <span>
                Brand Name<b>*</b>
              </span>
              <input type="text" placeholder="Type your answer here" />
            </label>

            <label className="contact-form-field">
              <span>
                Company Name<b>*</b>
              </span>
              <input type="text" placeholder="Type your answer here" />
            </label>

            <label className="contact-form-field">
              <span>
                Contact Person<b>*</b>
              </span>
              <input type="text" placeholder="Type your answer here" />
            </label>

            <label className="contact-form-field">
              <span>
                Email<b>*</b>
              </span>
              <input type="email" placeholder="Type your answer here" />
            </label>

            <label className="contact-form-field">
              <span>
                Phone / WhatsApp Number<b>*</b>
              </span>
              <input type="tel" placeholder="Type your answer here" />
            </label>

            <label className="contact-form-field">
              <span>
                Country<b>*</b>
              </span>
              <div className="contact-form-select-wrap">
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="uae">United Arab Emirates</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#8C8C8C"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </label>

            <label className="contact-form-field">
              <span>Website / Instagram (optional)</span>
              <input type="text" placeholder="Type your answer here" />
            </label>

            <button type="button" className="contact-form-button">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="contact-form-note">
          <h3>What Happens after you Submit?</h3>
          <p>
            Our team reviews every enquiry personally.
            <br />
            Within 1-2 business day, you'll hear from a real person not an
            automated reply.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Form;
