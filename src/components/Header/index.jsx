import React, { useEffect, useState } from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false)
  },[location ])
  return (
    <header className='header'>
         <div className="header__row container">
            <Link to='/' className="header__logo">
               <img src={logo} alt="logo" />
            </Link>
            <nav className={`header__nav ${open ? 'active' : ''}`}>
              <ul className="header__list">
                <li><Link to='/' className="header__link">Acasa</Link></li>             
                <li><Link to="blog" className="header__link">Blog</Link></li>
                <li><Link to='contact' className="header__link">Contacte</Link></li>
                <li><a href="tel:+37306888888" className="header__link">+373068 88888</a></li>
              </ul>
            </nav>
            <button onClick={() => setOpen(!open)}  className='header__burger'>Menu</button> 
         </div>
    </header>
  )
}
