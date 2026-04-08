import './Testimonials.css'
import Card from './Card'
import { TESTIMONIALS } from '../constants/config'

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonials__container">
        {TESTIMONIALS.map((testimonial) => (
          <Card 
            key={testimonial.id}
            type="testimonial"
            title={testimonial.message}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
