import './About.css'
import { useState } from 'react'

function About() {
  const specializations = [
    {
      icon: '🧠',
      title: 'Anxiety & Stress',
      description: 'Evidence-based techniques to manage anxiety, panic, and chronic stress',
      color: '#7c3aed'
    },
    {
      icon: '💔',
      title: 'Depression & Grief',
      description: 'Compassionate support for depression, grief, and emotional processing',
      color: '#2563eb'
    },
    {
      icon: '🤝',
      title: 'Relationship Issues',
      description: 'Guidance for relationship challenges, communication, and intimacy',
      color: '#db2777'
    },
    {
      icon: '💼',
      title: 'Work & Burnout',
      description: 'Support for career transitions, burnout recovery, and professional growth',
      color: '#0891b2'
    },
    {
      icon: '🌱',
      title: 'Personal Growth',
      description: 'Coaching for self-discovery, confidence building, and life purpose',
      color: '#059669'
    },
    {
      icon: '✨',
      title: 'Trauma Recovery',
      description: 'Safe space to process trauma and build resilience',
      color: '#f59e0b'
    }
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

        {/* Featured Content - Enhanced */}
        <div className="about__featured">
          <div className="about__featured-content">
            <div className="about__featured-header">
              <h3 className="about__name">Simran Surve</h3>
              <p className="about__credentials">Clinical Psychotherapist & Counselor</p>
            </div>
            <p className="about__bio">
              I am a dedicated Clinical Psychotherapist with <span className="bio-highlight">8+ years of experience</span> supporting individuals through emotional and mental health challenges. My practice is built on creating a <span className="bio-highlight">safe, compassionate, and confidential space</span> where you can explore your concerns and work towards meaningful, lasting change.
            </p>
            
            {/* Key Stats */}
            <div className="about__stats-inline">
              <div className="stat-item">
                <div className="stat-value">8+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">500+</div>
                <div className="stat-label">Clients Helped</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">95%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="about__specializations">
          <div className="specializations__header">
            <h2 className="specializations__title">Specializations</h2>
            <p className="specializations__subtitle">Areas of expertise and therapeutic focus</p>
          </div>
          <div className="specializations__grid">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-card" style={{'--card-color': spec.color}}>
                <div className="card__glow"></div>
                <div className="card__content">
                  <div className="card__icon">{spec.icon}</div>
                  <h3 className="card__title">{spec.title}</h3>
                  <p className="card__description">{spec.description}</p>
                </div>
                <div className="card__border"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="about__approach">
          <h2 className="approach__title">My Therapeutic Approach</h2>
          <div className="approach__grid">
            <div className="approach-item">
              <div className="approach-item__icon">🎯</div>
              <h3>Evidence-Based</h3>
              <p>I use scientifically-proven therapeutic techniques including CBT, DBT, and mindfulness-based approaches</p>
            </div>
            <div className="approach-item">
              <div className="approach-item__icon">🤲</div>
              <h3>Client-Centered</h3>
              <p>Your needs and pace guide our work. I adapt my approach to what works best for you</p>
            </div>
            <div className="approach-item">
              <div className="approach-item__icon">🔒</div>
              <h3>Confidential</h3>
              <p>Complete confidentiality and professional ethics are the foundation of our therapeutic relationship</p>
            </div>
            <div className="approach-item">
              <div className="approach-item__icon">🌟</div>
              <h3>Holistic</h3>
              <p>I consider your emotional, mental, social, and physical wellbeing in our work together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

