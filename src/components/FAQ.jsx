import './FAQ.css'
import Card from './Card'
import { FAQS } from '../constants/config'

function FAQ() {
  return (
    <section className="section faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq__container">
        {FAQS.map((faq) => (
          <Card key={faq.id} title={faq.title} description={faq.description} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
