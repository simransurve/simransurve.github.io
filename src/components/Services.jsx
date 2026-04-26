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
        <h2>Therapy Services</h2>
        <div className="services__container">
          {SERVICES.map((service) => (
            <Card 
              key={service.id} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
