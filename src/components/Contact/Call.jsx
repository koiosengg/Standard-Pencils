import React from "react";

function Call() {
  return (
    <section className="contact-call-section">
      <div className="contact-call-grid">
        <div className="contact-call-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5.5 4.5H8.736C9.105 4.5 9.431 4.741 9.54 5.093L10.282 7.486C10.381 7.804 10.296 8.151 10.061 8.387L8.845 9.603C9.772 11.47 11.286 12.984 13.153 13.911L14.369 12.695C14.605 12.46 14.952 12.375 15.27 12.474L17.663 13.216C18.015 13.325 18.256 13.651 18.256 14.02V17.256C18.256 17.67 17.92 18.006 17.506 18.006H16.75C10.26 18.006 4.75 12.496 4.75 6.006V5.25C4.75 4.836 5.086 4.5 5.5 4.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Call us at</p>
          <a href="tel:+9128938938938">+91 28938938938</a>
        </div>

        <div className="contact-call-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7.75C4 6.784 4.784 6 5.75 6H18.25C19.216 6 20 6.784 20 7.75V16.25C20 17.216 19.216 18 18.25 18H5.75C4.784 18 4 17.216 4 16.25V7.75Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M5 7L11.144 11.608C11.666 12 12.384 12 12.906 11.608L19 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Email us</p>
          <a href="mailto:info@stdpencil.com">info@stdpencil.com</a>
        </div>

        <div className="contact-call-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 21C15.5 17.27 18 14.31 18 10.75C18 7.022 15.314 4.5 12 4.5C8.686 4.5 6 7.022 6 10.75C6 14.31 8.5 17.27 12 21Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <p>Reach us at</p>
          <span>Bengaluru</span>
        </div>

        <div className="contact-call-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 4.75C8.001 4.75 4.75 8.001 4.75 12C4.75 15.999 8.001 19.25 12 19.25C15.999 19.25 19.25 15.999 19.25 12C19.25 8.001 15.999 4.75 12 4.75Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M12 4.75C13.88 6.706 14.948 9.325 15 12C14.948 14.675 13.88 17.294 12 19.25C10.12 17.294 9.052 14.675 9 12C9.052 9.325 10.12 6.706 12 4.75Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <p>Follow Us</p>
          <div className="contact-call-socials">
            <a href="/" aria-label="Facebook">
              f
            </a>
            <a href="/" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="/" aria-label="X">
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Call;
