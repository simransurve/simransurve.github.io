import './Footer.css'
import { CONTACT_INFO, AVAILABILITY, COPY_YEAR } from '../constants/config'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>Contact Information</h4>
          <p>Email: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></p>
          <p>Phone: <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a></p>
        </div>
        
        <div className="footer__section">
          <h4>Availability</h4>
          <p>Monday - Friday: {AVAILABILITY.weekdays}<br />
          {AVAILABILITY.weekends}</p>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__section footer__section--bottom">
          <p>© {COPY_YEAR} Simran Surve. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Confidentiality & Privacy Protected | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
