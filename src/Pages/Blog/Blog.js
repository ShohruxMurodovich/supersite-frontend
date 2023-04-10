import React, { useEffect } from 'react'
import "./blog.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Women from "../../Assets/images/blog-hero.png"
import projects_1 from "../../Assets/images/projects_1.png"
import projects_2 from "../../Assets/images/projects_2.png"
import projects_3 from "../../Assets/images/projects_3.png"
import projects_4 from "../../Assets/images/projects_4.png"
import projects_5 from "../../Assets/images/projects_5.png"
import projects_6 from "../../Assets/images/projects_6.png"
import services_1 from "../../Assets/images/sevices-1.png"
import services_2 from "../../Assets/images/services-2.png"
import services_3 from "../../Assets/images/services-3.png"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Blog() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <Header />


      <section className='hero'>

        <div className="hero__inner about">

          <div className="hero-blog__left">
            <h1 className='hero__title'>Blog</h1>
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua enim ad minim veniam.
            </p>
          </div>

          <img data-aos="fade-right" className='blog-hero__img about__img' src={Women} alt="Women" />

        </div>

      </section>


      <section className='blog-blog'>

        <h2 className='team__title'>You can know more<br /> <span data-aos="fade-down">about us by our blog</span></h2>

        <ul className="blog-blog__list">
          <li className="blog-blog__item">
            <img className='blog__img' src={projects_1} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">Great Tips To Choose A Professional Cleaner</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

          <li className="blog-blog__item">
            <img className='blog__img' src={projects_2} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">The Secret offer Cleaning Your Beadroom & Toilet</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

          <li className="blog-blog__item">
            <img className='blog__img' src={projects_4} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">Checklists on how to keep different rooms</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

        </ul>

        <ul className="blog-blog__list">
          <li className="blog-blog__item">
            <img className='blog__img' src={projects_3} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">Great Tips To Choose A Professional Cleaner</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

          <li className="blog-blog__item">
            <img className='blog__img' src={projects_6} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">The Secret offer Cleaning Your Beadroom & Toilet</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

          <li className="blog-blog__item">
            <img className='blog__img' src={projects_6} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">Checklists on how to keep different rooms</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

        </ul>

        <ul className="blog-blog__list">
          <li className="blog-blog__item">
            <img className='blog__img' src={projects_3} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">Great Tips To Choose A Professional Cleaner</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

          <li className="blog-blog__item">
            <img className='blog__img' src={projects_5} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">The Secret offer Cleaning Your Beadroom & Toilet</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

          <li className="blog-blog__item">
            <img className='blog__img' src={projects_4} alt="Cleaning" />
            <div className="blog__content content">
              <h4 className="content__title">Checklists on how to keep different rooms</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
            </div>
          </li>

        </ul>


        <div className="blog-blog__subscribe">
          <div className="blog__subscribe-left">
            <h4 className="blog__subscribe__title">Subscribe To Our Newsletter</h4>
            <p className="blog__subscribe__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
          </div>
          <div className="blog__subscribe-right">
            <input type="email" placeholder='Email Adress...' />
            <button type="submit">Subscribe</button>
          </div>
        </div>

      </section>


      <Footer/>
    </>
  )
}
