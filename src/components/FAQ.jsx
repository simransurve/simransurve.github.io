import './FAQ.css'
import { FAQS } from '../constants/config'
import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      {/* Background Aurora / Abstract Shapes */}
      <div className="faq-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="faq__wrapper">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <div className="faq__list">
          {FAQS.map((faq, index) => (
            <div key={faq.id} className="faq__item">
              <button 
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq__question-text">{faq.title}</span>
                <span className={`faq__icon ${openIndex === index ? 'rotate' : ''}`}>
                  +
                </span>
              </button>
              <div className={`faq__answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

