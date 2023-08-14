import React from 'react'
import logo from '../../assets/img/logo.png'
import './style.scss'
import i1 from '../../assets/img/icons/mess.svg'
import i2 from '../../assets/img/icons/vb.svg'
import i3 from '../../assets/img/icons/insta.svg'
import i4 from '../../assets/img/icons/wt.svg'
import methode from '../../assets/img/footer/01.png'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
         <div className="footer__row">
            <div className="footer__column">
               <a href="#" className="footer__logo">
                  <img src={logo} alt="logo" />
               </a>
               <ul className="footer__social social">
                  <li className="social__list"><a href="#" className="scoail__link"><img src={i1} alt="" /></a></li>
                  <li className="social__list"><a href="#" className="scoail__link"><img src={i2}alt="" /></a></li>
                  <li className="social__list"><a href="#" className="scoail__link"><img src={i3} alt="" /></a></li>
                  <li className="social__list"><a href="#" className="scoail__link"><img src={i4} alt="" /></a></li>
               </ul>
               <ul className="footer__items items-footer">
                  <li className="items-footer__li"><a href='mailto:exemple@gmail.com'>exemple@gmail.com</a></li>
                  <li className="items-footer__li">S.R.L. Asig ONLINE</li>
                  <li className="items-footer__li">IDNO: 00222333344411</li>
                  <li className="items-footer__li">str. Stefan cel Mare 42, Chișinău</li>
               </ul>
               <img src={methode} alt="logo-pay" className="footer__methode" />
               <span className='footer__author'>© 2023. Toate drepturile rezervate.</span>
            </div>
            <div className="footer__column">
               <h4 className="footer__title">Asigurări</h4>
               <ul className="footer__links links-footer">
                  <li className="links-footer__li"><Link to='green-card' className="links-footer__link">Carte Verde</Link></li>
                  <li className="links-footer__li"><Link to='rca' className="links-footer__link">RCA</Link></li>
                  <li className="links-footer__li"><Link to='medical' className="links-footer__link">Medicala pentru călătorii</Link></li>
               </ul>
            </div>
            <div className="footer__column">
               <h4 className="footer__title">Despre noi</h4>
               <ul className="footer__links links-footer">
                  <li className="links-footer__li"><Link to='contact' className="links-footer__link">Contact</Link></li>
                  <li className="links-footer__li"><Link to='blog' className="links-footer__link">Blog</Link></li>
                 
               </ul>
            </div>
            <div className="footer__column">
               <h4 className="footer__title">Legal</h4>
               <ul className="footer__links links-footer">
                  <li className="links-footer__li"><a href="#" className="links-footer__link">Termeni și condiții</a></li>
                  <li className="links-footer__li"><a href="#" className="links-footer__link">Politica de confidențialitate</a></li>
                 
               </ul>
            </div>
         </div>
      </div>
    </footer>
  )
}
