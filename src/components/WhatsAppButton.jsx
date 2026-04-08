import './WhatsAppButton.css'
import { CONTACT_INFO } from '../constants/config'

function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="whatsapp" target="_blank" rel="noopener noreferrer">
      💬 WhatsApp
    </a>
  )
}

export default WhatsAppButton
