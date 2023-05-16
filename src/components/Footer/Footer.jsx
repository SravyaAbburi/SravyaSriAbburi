import React from 'react'
import './footer.css'

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Sravya Sri Abburi</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#projects" className="footer__link">Projects</a>
            </li>
        </ul>
        <div className="footer__social">
        <a href='https://www.linkedin.com/in/sravya-abburi-12482b104/' className='footer__social-link' target='_blank'><i className="bx bxl-linkedin"></i></a>
    <a href='https://github.com/SravyaAbburi' className='footer__social-link' target='_blank'> <i className="bx bxl-github"></i></a>
    
        </div>
        <span className="footer__copy">&#169;  All rigths reserved</span>
    </div>
   </footer>
  )
}

export default Footer