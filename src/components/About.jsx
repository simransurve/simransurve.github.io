import './About.css'

function About() {
  const expertise = [
    { icon: '🧠', title: 'Anxiety & Stress', desc: 'Evidence-based techniques for anxiety, panic, and chronic stress' },
    { icon: '💔', title: 'Depression & Grief', desc: 'Compassionate support for emotional challenges' },
    { icon: '🤝', title: 'Relationships', desc: 'Guidance for relationship and communication issues' },
    { icon: '💼', title: 'Career & Growth', desc: 'Support for career transitions and personal development' }
  ]

  const sessionFormats = [
    { icon: '💻', title: 'Online Sessions', desc: 'Secure audio/video consultations from the comfort of your home' },
    { icon: '🏢', title: 'In-Person Sessions', desc: 'Face-to-face therapy in a clinic' }
  ]

  const credentials = [
    'Clinical Psychology',
    '8+ Years of Clinical Experience',
    'Evidence-Based Therapies (CBT, DBT, Psychodynamic)',
    'Psychometric Testing & Assessment',
    'GDPR & HIPAA Compliant Practice'
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
          <span className="about__label">About The Therapist</span>
          <h2 className="about__title">
            <span>Simran Shubham Surve</span>
          </h2>
          <p className="about__subtitle">
            Clinical Psychotherapist & Counsellor dedicated to transforming lives through evidence-based care
          </p>
        </div>

        {/* Featured Content - Professional Bio */}
        <div className="about__featured">
          <div className="about__featured-content">
            <div className="about__credentials-badge">
              <h3 className="about__role">Licensed Clinical Psychotherapist & Counsellor</h3>
              <div className="credentials-list">
                {credentials.map((cred, idx) => (
                  <span key={idx} className="credential-item">✓ {cred}</span>
                ))}
              </div>
            </div>
            
            <p className="about__bio">
              I am a dedicated Clinical Psychotherapist with <span className="bio-highlight">8+ years of specialized experience</span> helping individuals navigate emotional challenges, build resilience, and create lasting change. My practice combines <span className="bio-highlight">evidence-based therapeutic techniques</span> with a deeply <span className="bio-highlight">compassionate, confidential, and non-judgmental approach</span>. Whether you're struggling with anxiety, relationships, career transitions, or personal growth, I'm here to support your journey.
            </p>

            {/* Expertise Grid */}
            <div className="about__expertise">
              <h3 className="expertise__title">Areas of Specialization</h3>
              <div className="expertise__grid">
                {expertise.map((item, idx) => (
                  <div key={idx} className="expertise-card">
                    <div className="expertise-card__icon">{item.icon}</div>
                    <h4 className="expertise-card__title">{item.title}</h4>
                    <p className="expertise-card__desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Formats */}
            <div className="about__session-formats">
              <h3 className="session-formats__title">Session Formats Available</h3>
              <div className="session-formats__grid">
                {sessionFormats.map((format, idx) => (
                  <div key={idx} className="session-card">
                    <div className="session-card__icon">{format.icon}</div>
                    <h4 className="session-card__title">{format.title}</h4>
                    <p className="session-card__desc">{format.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Approach */}
            <div className="about__approach-section">
              <h3 className="approach__header">My Therapeutic Philosophy</h3>
              <div className="approach-cards">
                <div className="approach-card">
                  <div className="approach-card__num">01</div>
                  <h4>Evidence-Based</h4>
                  <p>Using scientifically proven methods like CBT, DBT, and Psychodynamic therapy</p>
                </div>
                <div className="approach-card">
                  <div className="approach-card__num">02</div>
                  <h4>Client-Centered</h4>
                  <p>Your goals and pace guide our work with personalized therapeutic approaches</p>
                </div>
                <div className="approach-card">
                  <div className="approach-card__num">03</div>
                  <h4>Confidential & Ethical</h4>
                  <p>Complete confidentiality and professional ethics as the foundation of trust</p>
                </div>
                <div className="approach-card">
                  <div className="approach-card__num">04</div>
                  <h4>Holistic Care</h4>
                  <p>Addressing emotional, mental, social, and physical wellbeing together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

