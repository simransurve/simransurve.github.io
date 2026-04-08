import './About.css'
import { THERAPIST_INFO } from '../constants/config'

function About() {
  return (
    <section className="section about" id="about">
      <h2>About Me</h2>
      <div className="about__content">
        <div className="about__image">
          <img src="profile.jpg" alt={`${THERAPIST_INFO.name}, Licensed Psychotherapist`} className="about__profile" />
        </div>
        <div className="about__text">
          <p>
            {THERAPIST_INFO.bio}
          </p>
          <p>
            {THERAPIST_INFO.specialties}
          </p>
          <ul className="about__list">
            {THERAPIST_INFO.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
