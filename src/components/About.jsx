import './About.css'
import NewProfileImage from '../assets/NewProfileImage.jpg'
import { useEffect, useRef } from 'react'

function About() {

  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-stats')
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

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

        {/* Stats Section */}
        
        <div className="about__featured">
          <div className="about__featured-image">
            <div className="about__image-ring">
              <img
                src={NewProfileImage}
                alt="Simran Surve, Clinical Psychotherapist"
                className="about__profile"
              />
            </div>
          </div>

          <div className="about__featured-content">
            <h3 className="about__name">Simran Surve</h3>
            <p className="about__role">Clinical Psychotherapist & Counselor</p>
            <p className="about__bio">
              I am a dedicated Clinical Psychotherapist with 8+ years of experience supporting individuals through emotional and mental health challenges. My practice is built on creating a safe, compassionate, and confidential space where you can explore your concerns and work towards meaningful, lasting change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

