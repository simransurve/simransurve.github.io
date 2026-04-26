import { useEffect, useRef } from 'react'
import './Card.css'

function Card({ title, description, emoji, tag, type = 'default', author, role }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className={`card card--${type}`}>
      {emoji && <div className="card__emoji">{emoji}</div>}
      {tag && <span className="card__tag">{tag}</span>}
      <h3 className="card__title">{title}</h3>
      {type === 'testimonial' ? (
        <>
          <div className="card__quote-mark">"</div>
          <p className="card__description"><em>{description}</em></p>
          <div className="card__author">{author}</div>
          <div className="card__role">{role}</div>
        </>
      ) : (
        <p className="card__description">{description}</p>
      )}
    </div>
  )
}

export default Card

