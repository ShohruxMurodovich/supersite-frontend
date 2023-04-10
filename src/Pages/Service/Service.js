import React from 'react'
import Header from "../../Components/Header/Header"
import Hero from "../../Assets/images/service-hero.png"
import weBig from "../../Assets/images/we-small.png"
import services_2 from "../../Assets/images/services-2.png"
import services_3 from "../../Assets/images/services-3.png"
import services_4 from "../../Assets/images/services-4.png"
import tick from "../../Assets/images/tick.svg"
import "./service.css"
import Footer from '../../Components/Footer/Footer'

export default function Service() {
  return (
    <>
      <Header />

      <section className='hero'>

        <div className="hero__inner about">

          <div className="hero-service__left">
            <h1 className='hero__title'>Services</h1>
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua enim ad minim veniam.
            </p>
          </div>

          <img data-aos="fade-right" className='service__img about__img' src={Hero} alt="Man" />

        </div>

      </section>

      <section className='we'>

        <div className="we-left">
          <img className='we__big' src={weBig} alt="Photo of women" />
        </div>

        <div className="we-right">
          <h2 className="we-right__title">
            House Cleaning
          </h2>

          <p className="we-right__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h4 className='job__title'>Following are the jobs done</h4>

          <div className="we-right__box">
            <ul className='plan__list'>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bedroms Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Vacuming</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bathroom Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Livingroom Cleaning</li>
            </ul>
          </div>

        </div>

      </section>

      <section className='we'>

        <div className="we-left">
          <img className='we__big' src={services_2} alt="Photo of women" />
        </div>

        <div className="we-right">
          <h2 className="we-right__title">
            Kitchen Cleaning
          </h2>

          <p className="we-right__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h4 className='job__title'>Following are the jobs done</h4>

          <div className="we-right__box">
            <ul className='plan__list'>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bedroms Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Vacuming</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bathroom Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Livingroom Cleaning</li>
            </ul>
          </div>

        </div>

      </section>

      <section className='we'>

        <div className="we-left">
          <img className='we__big' src={services_3} alt="Photo of women" />
        </div>

        <div className="we-right">
          <h2 className="we-right__title">
            Window Cleaning
          </h2>

          <p className="we-right__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h4 className='job__title'>Following are the jobs done</h4>

          <div className="we-right__box">
            <ul className='plan__list'>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bedroms Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Vacuming</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bathroom Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Livingroom Cleaning</li>
            </ul>
          </div>

        </div>

      </section>

      <section className='we'>

        <div className="we-left">
          <img className='we__big' src={services_4} alt="Photo of women" />
        </div>

        <div className="we-right">
          <h2 className="we-right__title">
            Carpet Cleaning
          </h2>

          <p className="we-right__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h4 className='job__title'>Following are the jobs done</h4>

          <div className="we-right__box">
            <ul className='plan__list'>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bedroms Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Vacuming</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Bathroom Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
              <li className="job__item"><img src={tick} alt="check logo" /> 4 Livingroom Cleaning</li>
            </ul>
          </div>

        </div>

      </section>

      <section className='plans service__plans'>
      <h2 className='team__title plans__title'>Choose your <br /> <span data-aos="fade-down">affordable pricing plan</span></h2>

      <div className="plans__case">

        <div className="plan">
              <div className="plan__top">
                <p className="plan__name">Basic plan</p>
                <h4 className='plan__price'>$25.00</h4>
                <p data-aos="fade-up" className="plan__month">Per Month</p>
              </div>
              <div className="plan__bottom">

                <p className='plan__text'>We are committed to give our best services</p>

                <ul className='plan__list'>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Bedroms Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Vacuming</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 2 Bathroom Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 1 Livingroom Cleaning</li>
                </ul>
                <button className='plan__btn'>Select a plan</button>
              </div>
        </div>

        <div className="plan">
              <div className="plan__top">
                <p className="plan__name">Popular plan</p>
                <h4 className='plan__price'>$59.00</h4>
                <p data-aos="fade-up" className="plan__month">Per Month</p>
              </div>
              <div className="plan__bottom">

                <p className='plan__text'>We are committed to give our best services</p>

                <ul className='plan__list'>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 3 Bedroms Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Vacuming</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 3 Bathroom Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 3 Livingroom Cleaning</li>
                </ul>
                <button className='plan__btn'>Select a plan</button>
              </div>
        </div>

        <div className="plan">
              <div className="plan__top">
                <p className="plan__name">Standart plan</p>
                <h4 className='plan__price'>$99.00</h4>
                <p data-aos="fade-up" className="plan__month">Per Month</p>
              </div>
              <div className="plan__bottom">

                <p className='plan__text'>We are committed to give our best services</p>

                <ul className='plan__list'>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 4 Bedroms Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Vacuming</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 4 Bathroom Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> Window Cleaning</li>
                  <li className="plan__item"><img src={tick} alt="check logo" /> 4 Livingroom Cleaning</li>
                </ul>
                <button className='plan__btn'>Select a plan</button>
              </div>
        </div>

      </div>



      <div className="blog__subscribe about__subscribe">
          <div className="blog__subscribe-left">
            <h4 className="blog__subscribe__title">Subscribe To Our Newsletter</h4>
            <p className="blog__subscribe__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
          </div>
          <div className="blog__subscribe-right">
            <input type="email" placeholder='Email Adress...'/>
            <button type="submit">Subscribe</button>
          </div>
      </div>

      </section>


      <Footer/>
    </>
  )
}
