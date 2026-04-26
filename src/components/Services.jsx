import './Services.css'
import Card from './Card'
import { SERVICES } from '../constants/config'

function Services() {
  return (
    <section className="services" id="services">
      {/* Background Aurora / Abstract Shapes */}
      <div className="services-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="services__wrapper">
        <div className="services__header">
          <div className="services__label">What We Offer</div>
          <h2 className="services__title">
            Our <span>Services</span>
          </h2>
          <p className="services__subtitle">
            Comprehensive mental health and wellness solutions tailored to your unique journey. From therapy to corporate wellness, we are here for you.
          </p>
        </div>

        <div className="services__container">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              emoji={service.emoji}
              title={service.title}
              description={service.description}
              tag={service.tag}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

