import './Hero.css'
import { CONTACT_INFO } from '../constants/config'

function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__title">Professional Online Therapy for Meaningful Change</h1>
      <p className="hero__tagline">
        Compassionate, evidence-based psychotherapy for anxiety, depression, relationships, and personal growth. Certified and experienced in helping clients worldwide.
      </p>
      <p className="hero__credentials">Licensed Psychotherapist • MSc Clinical Psychology • 8+ Years Experience</p>
      <div className="hero__features">
        <span>✓ Confidential & Secure</span>
        <span>✓ Flexible Scheduling</span>
        <span>✓ Global Clients</span>
      </div>
      <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="btn">
        Schedule Your Session
      </a>
    </header>
  )
}

export default Hero
