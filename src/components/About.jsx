import './About.css'

function About() {
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
            Dedicated to guiding you through life's challenges with compassion and expertise.
          </p>
        </div>

        {/* Featured Content */}
        <div className="about__featured">
          <div className="about__featured-content">
            <h2 className="about__name">Simran Shubham Surve</h2>
            <p className="about__credentials">Clinical Psychotherapist & Counsellor</p>
            
            <p className="about__bio">
              I am a dedicated Clinical Psychotherapist with <span className="bio-highlight">8+ years of experience</span> supporting individuals through emotional and mental health challenges. My practice is built on creating a <span className="bio-highlight">safe, compassionate space</span> where you can explore your concerns and work towards meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

