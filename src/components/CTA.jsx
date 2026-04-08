import './CTA.css'
import { CONTACT_INFO } from '../constants/config'

function CTA() {
  return (
    <section className="section cta">
      <h2>Get Started Today</h2>
      <p className="cta__text">
        Ready to take the first step towards positive change? Let&apos;s work together.
      </p>
      <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
        Book Your First Session
      </a>
    </section>
  )
}

export default CTA
