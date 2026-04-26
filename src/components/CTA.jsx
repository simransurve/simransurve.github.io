import './CTA.css'
import { CONTACT_INFO } from '../constants/config'

function CTA() {
  return (
    <section className="cta">
      {/* Background Aurora / Abstract Shapes */}
      <div className="cta-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="cta__wrapper">
        <h2>Get Started Today</h2>
        <p className="cta__text">
          Ready to take the first step towards positive change? Let's work together.
        </p>
        <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
          Book Your First Session
        </a>
      </div>
    </section>
  )
}

export default CTA
