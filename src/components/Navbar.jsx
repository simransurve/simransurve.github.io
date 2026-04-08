import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Simran Surve</div>
      <div className="navbar__links">
        <a href="#about" className="navbar__link">About</a>
        <a href="#services" className="navbar__link">Services</a>
        <a href="#testimonials" className="navbar__link">Testimonials</a>
        <a href="#contact" className="navbar__link">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
