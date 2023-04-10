import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"
import facebook from "../../Assets/images/facebook.svg"
import instagram from "../../Assets/images/instagram.svg"
import linkedin from "../../Assets/images/linkedin.svg"
import twitter from "../../Assets/images/twitter.svg"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (

    <footer>
      <div className='footer'>
        <div className="footer__about">
          <h4 data-aos="fade-right" className="footer__title">About Us</h4>
          <p className="footer__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>

        <div className="footer__links">
          <h4 data-aos="fade-right" className="footer__title">Quick Links</h4>
          <ul className='footer__list'>
            <li className="footer__item"><NavLink to={"/"}>Home</NavLink></li>
            <li className="footer__item"><NavLink to={"/about"}>About us</NavLink></li>
            <li className="footer__item"><NavLink to={"/service"}>Services</NavLink></li>
            <li className="footer__item"><NavLink to={"/"}>Gallery</NavLink></li>
            <li className="footer__item"><NavLink to={"/blog"}>Blog</NavLink></li>
            <li className="footer__item"><NavLink to={"/"}>Contact us</NavLink></li>
          </ul>
        </div>


        <div className="footer__estimate">
          <h4 data-aos="fade-right" className="footer__title">Get Free Estimate</h4>
          <a href='tel:61383766284' className='footer__number'>+61 3 8376 6284</a>
          <p className="footer__text">Our online scheduling and payment system is safe.</p>
          <button className='footer__btn'>Request With Online Form</button>
        </div>

        <div className="days">
          <h4 data-aos="fade-right" className="footer__title">Work Days</h4>
          <p className='footer__work'>Mon - sat 09am - 05pm</p>
          <p className='footer__work footer__work--day'>Sunday <span>Closed</span></p>
        </div>
      </div>

      <div className="footer__bottom">
            <div className="header-top__messangers">
                <a href="#" className='header-top__messanger'><img src={facebook} alt="facebook logo" /></a>
                <a href="#" className='header-top__messanger'><img src={twitter} alt="twitter logo" /></a>
                <a href="#" className='header-top__messanger'><img src={linkedin} alt="linkedin logo" /></a>
                <a href="#" className='header-top__messanger'><img src={instagram} alt="instagram logo" /></a>
            </div>

            <p className="footer__bottom__text">©2022 LetsClean , All Rights Reserved.</p>
      </div>

    </footer>

  )
}
