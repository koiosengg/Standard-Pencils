import React from "react";

const progressSteps = Array.from({ length: 7 }, (_, index) => index);

function Form() {
  const handlePhoneInput = (e) => {
    // Allow only numbers
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };
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

          <form
            className="contact-form-fields"
            action="https://formspree.io/f/mzdoaolo"
            method="POST"
          >
            {/* Honeypot spam filter - hidden from real users */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Reply-to configuration */}
            <input type="hidden" name="_replyto" value="email" />

            <label className="contact-form-field">
              <span>
                Brand Name<b>*</b>
              </span>
              <input
                type="text"
                name="brand_name"
                placeholder="Type your answer here"
                required
                maxLength="100"
                autoComplete="organization"
              />
            </label>

            <label className="contact-form-field">
              <span>
                Company Name<b>*</b>
              </span>
              <input
                type="text"
                name="company_name"
                placeholder="Type your answer here"
                required
                maxLength="100"
                autoComplete="organization"
              />
            </label>

            <label className="contact-form-field">
              <span>
                Contact Person<b>*</b>
              </span>
              <input
                type="text"
                name="contact_person"
                placeholder="Type your answer here"
                required
                maxLength="100"
                autoComplete="name"
              />
            </label>

            <label className="contact-form-field">
              <span>
                Email<b>*</b>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Type your answer here"
                required
                maxLength="254"
                autoComplete="email"
              />
            </label>

            <label className="contact-form-field">
              <span>
                Phone / WhatsApp Number<b>*</b>
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Type your answer here"
                required
                maxLength="15"
                autoComplete="tel"
                pattern="[0-9]+"
                title="Please enter numbers only"
                onInput={handlePhoneInput}
              />
            </label>

            <label className="contact-form-field">
              <span>
                Country<b>*</b>
              </span>
              <div className="contact-form-select-wrap">
                <select name="country" defaultValue="" required>
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
              <input
                type="url"
                name="website_instagram"
                placeholder="Type your answer here"
                maxLength="200"
                autoComplete="url"
              />
            </label>

            <button type="submit" className="contact-form-button">
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
