import './About.css'
import profilePic from '../assets/ProfilePic.png'

function About() {
  const specialties = [
    { icon: '🧠', label: 'Anxiety & Stress' },
    { icon: '💪', label: 'Resilience' },
    { icon: '💞', label: 'Relationships' },
    { icon: '🎯', label: 'Personal Growth' },
    { icon: '🌱', label: 'Trauma Healing' },
    { icon: '💼', label: 'Career Growth' }
  ]

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Helped' },
    { number: '95%', label: 'Satisfaction Rate' }
  ]

  const approaches = [
    'CBT',
    'Psychodynamic',
    'Humanistic',
    'Mindfulness',
    'NLP',
    'Hypnotherapy'
  ]

  const qualifications = [
    'MSc Clinical Psychology',
    'Licensed Professional Member',
    'GDPR & HIPAA Compliant',
    'Certified NLP Practitioner'
  ]

  return (
    <section className="about" id="about">
      {/* Background Aurora */}
      <div className="about-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="about__wrapper">
        {/* Header */}
        <div className="about__header">
          <span className="about__label">Get To Know Me</span>
          <h2 className="about__title">
            About <span>Me</span>
          </h2>
          <p className="about__subtitle">
            Dedicated to guiding you through life's challenges with compassion, expertise, and evidence-based care.
          </p>
        </div>

        {/* Main Featured Card */}
        <div className="about__featured">
          <div className="about__featured-image">
            <div className="about__image-ring">
              <img
                src={profilePic}
                alt="Simran Surve, Clinical Psychotherapist"
                className="about__profile"
              />
            </div>
            <div className="about__badge">Licensed & Certified</div>
          </div>

          <div className="about__featured-content">
            <h3 className="about__name">Simran Surve</h3>
            <p className="about__role">Clinical Psychotherapist & Counselor</p>
            <p className="about__bio">
              I am a dedicated Clinical Psychotherapist with 8+ years of experience supporting individuals through emotional and mental health challenges. My practice is built on creating a safe, compassionate, and confidential space where you can explore your concerns and work towards meaningful, lasting change.
            </p>

            <div className="about__stats">
              {stats.map((stat, index) => (
                <div key={index} className="about__stat">
                  <div className="about__stat-number">{stat.number}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="about__cards-grid">
          {/* Expertise */}
          <div className="about__card about__card--expertise">
            <div className="about__card-header">
              <span className="about__card-icon">✨</span>
              <h3 className="about__card-title">Areas of Expertise</h3>
            </div>
            <div className="about__expertise-grid">
              {specialties.map((specialty, index) => (
                <div key={index} className="about__expertise-item">
                  <span className="about__expertise-icon">{specialty.icon}</span>
                  <span className="about__expertise-label">{specialty.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications */}
          <div className="about__card about__card--qualifications">
            <div className="about__card-header">
              <span className="about__card-icon">🎓</span>
              <h3 className="about__card-title">Qualifications</h3>
            </div>
            <ul className="about__credentials-list">
              {qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Approaches */}
          <div className="about__card about__card--approaches">
            <div className="about__card-header">
              <span className="about__card-icon">🧭</span>
              <h3 className="about__card-title">Therapeutic Approaches</h3>
            </div>
            <div className="about__approaches-list">
              {approaches.map((approach, index) => (
                <span key={index} className="about__approach-tag">{approach}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

