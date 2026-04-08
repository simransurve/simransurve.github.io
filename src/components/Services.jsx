import './Services.css'
import Card from './Card'
import { SERVICES } from '../constants/config'

function Services() {
  return (
    <section className="section services" id="services">
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
    </section>
  )
}

export default Services
