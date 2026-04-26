import './About.css'
import profilePic from '../assets/ProfilePic.png'

function About() {
  const specialties = [
    { icon: '🧠', label: 'Anxiety & Stress' },
    { icon: '💪', label: 'Resilience' },
    { icon: '💞', label: 'Relationships' },
    { icon: '🎯', label: 'Personal Growth' }
  ]

  const stats = [
    { number: '8+', label: 'Years' },
    { number: '500+', label: 'Clients' },
    { number: '95%', label: 'Satisfaction' }
  ]

  const approaches = [
    'CBT',
    'Psychodynamic',
    'Humanistic',
    'Mindfulness'
  ]

return (
    <section className="about" id="about">
      {/* Background Aurora / Abstract Shapes */}
      <div className="about-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="about__wrapper">
        <div className="about__header">
          <h2 className="about__title">About Me</h2>
        </div>

        <div className="about__cards-grid">
          {/* Card 1: Profile */}
          <div className="about__card about__card--profile">
            <div className="about__image-wrapper">
              <img
                src={profilePic}
                alt="Simran Surve, Clinical Psychotherapist"
                className="about__profile"
              />
              <div className="about__badge">Licensed & Certified</div>
            </div>
            <h3 className="about__card-title">Simran Surve</h3>
            <p className="about__card-subtitle">Clinical Psychotherapist & Counselor</p>
            <div className="about__card-stats">
              {stats.map((stat, index) => (
                <div key={index} className="about__mini-stat">
                  <div className="about__mini-stat-number">{stat.number}</div>
                  <div className="about__mini-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: About */}
          <div className="about__card about__card--about">
            <h3 className="about__card-title">About</h3>
            <p>
              I am a dedicated Clinical Psychotherapist with 8+ years of experience supporting individuals through emotional and mental health challenges. My practice is built on creating a safe, compassionate, and confidential space where you can explore your concerns and work towards meaningful, lasting change.
            </p>
          </div>

          {/* Card 3: Expertise */}
          <div className="about__card about__card--expertise">
            <h3 className="about__card-title">Areas of Expertise</h3>
            <div className="about__expertise-grid">
              {specialties.map((specialty, index) => (
                <div key={index} className="about__expertise-item">
                  <span className="about__expertise-icon">{specialty.icon}</span>
                  <span className="about__expertise-label">{specialty.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Credentials & Approaches */}
          <div className="about__card about__card--credentials">
            <div className="about__credentials-section">
              <h3 className="about__card-title">Qualifications</h3>
              <ul className="about__credentials-list">
                <li>MSc Clinical Psychology</li>
                <li>Professional Member</li>
                <li>GDPR & HIPAA Compliant</li>
              </ul>
            </div>
            <div className="about__approaches-section">
              <h4 className="about__approaches-title">Approaches</h4>
              <div className="about__approaches-list">
                {approaches.map((approach, index) => (
                  <span key={index} className="about__approach-tag">{approach}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About