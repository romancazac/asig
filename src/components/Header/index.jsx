import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
         <div className="header__row container">
            <Link to='/' className="header__logo">
               <img src={logo} alt="logo" />
            </Link>
            <nav className="header__nav">
              <ul className="header__list">
                <li><Link to='/' className="header__link">Acasa</Link></li>             
                <li><a href="#" className="header__link">Blog</a></li>
                <li><a href="#" className="header__link">Contacte</a></li>
                <li><a href="tel:+37306888888" className="header__link">+373068 88888</a></li>
              </ul>
            </nav>
         </div>
    </header>
  )
}
