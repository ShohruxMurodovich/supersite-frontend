import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import facebook from "../../Assets/images/facebook.svg"
import instagram from "../../Assets/images/instagram.svg"
import linkedin from "../../Assets/images/linkedin.svg"
import twitter from "../../Assets/images/twitter.svg"
import logo from "../../Assets/images/logo.png"
import tel from "../../Assets/images/tel.svg"
import email from "../../Assets/images/email.svg"

import "./header.css"

export default function Header() {

  const [click , setClick] = useState(false)

  const handleClick = () => {
    if(!click){
      setClick(true)
    }else{
      setClick(false)
    }
  }
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-top__inner">
            <div className="header-top__wrapper">
              <p className='header-top__text'>Follow us:</p>
              <div className="header-top__messangers">
                <a href="#" className='header-top__messanger'><img src={facebook} alt="facebook logo" /></a>
                <a href="#" className='header-top__messanger'><img src={twitter} alt="twitter logo" /></a>
                <a href="#" className='header-top__messanger'><img src={linkedin} alt="linkedin logo" /></a>
                <a href="#" className='header-top__messanger'><img src={instagram} alt="instagram logo" /></a>
              </div>
            </div>

            <div className="header-top__wrapper header-top__wrapper-2">
              <div className="header-top__telephone">
                <img src={tel} alt="telephone icon" />
                <a href="tel:61383766284">+61 3 8376 6284</a>
              </div>
              <div className="header-top__email">
                <img src={email} alt="email icon" />
                <a href="mailto:Info@letsclean.com">Info@letsclean.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={click ? "header-bottom header-active" : "header-bottom"}>

          <ul className='header-bottom__list header-bottom__list-1'>
            <li className='header-bottom__item first'><NavLink to={"/"}>Home</NavLink></li>
            <li className='header-bottom__item'><NavLink to={"/about"}>About US</NavLink></li>
            <li className='header-bottom__item'><NavLink to={"/service"}>Services</NavLink></li>
          </ul>

          <img className='header-bottom__logo' src={logo} alt="site logo" />

          <ul className="header-bottom__list header-bottom__list-2">
            <li className='header-bottom__item dropdown'><a href='#'>Pages &#9660;</a>
              <ul className="dropdown__list">
                <li className="dropdown__item"><a href="#">Gallery</a></li>
                <li className="dropdown__item"><a href="#">Testimonial</a></li>
                <li className="dropdown__item"><a href="#">Faq</a></li>
                <li className="dropdown__item"><a href="#">Coming Soon</a></li>
              </ul>
            </li>
            <li className='header-bottom__item'><NavLink to={"/blog"}>Blog</NavLink></li>
            <li className='header-bottom__item last'><a href='#'>Contact Us</a></li>
          </ul>

          <button onClick={handleClick} className='hamburg'><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#01D0CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_429_11066"> <rect width={24} height={24} fill="white" transform="translate(0 0.000915527)" /> </clipPath> </defs> </g></svg></button>
        </div>
      </div>
    </header>
  )
}
