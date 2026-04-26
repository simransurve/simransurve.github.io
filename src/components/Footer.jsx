import "./Footer.css";
import { CONTACT_INFO, AVAILABILITY, COPY_YEAR } from "../constants/config";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__bg-decoration"></div>
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__section footer__section--contact">
            <div className="footer__icon-wrap footer__icon-wrap--contact">
              <span className="footer__icon">✉️</span>
            </div>
            <h4>Get In Touch</h4>
            <a href={`mailto:${CONTACT_INFO.email}`} className="footer__link">
              {CONTACT_INFO.email}
            </a>
            <p className="footer__subtext">Reach out for consultations</p>
          </div>

          <div className="footer__section footer__section--availability">
            <div className="footer__icon-wrap footer__icon-wrap--availability">
              <span className="footer__icon">🕒</span>
            </div>
            <h4>Availability</h4>
            <p className="footer__availability-text">
              <strong>Mon - Fri:</strong> {AVAILABILITY.weekdays}
              <br />
              <strong>Weekends:</strong> {AVAILABILITY.weekends}
            </p>
          </div>

          <div className="footer__section footer__section--social">
            <div className="footer__icon-wrap footer__icon-wrap--social">
              <span className="footer__icon">🤝</span>
            </div>
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="social-link email"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                className="social-link linkedin"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                </svg>
              </a>
              <a
                href={CONTACT_INFO.instagram}
                className="social-link instagram"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="currentColor"
                  ></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {COPY_YEAR} Simran Surve. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Confidentiality & Privacy Protected | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

