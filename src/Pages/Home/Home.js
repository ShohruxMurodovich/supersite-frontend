import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Women from "../../Assets/images/hero-women.png"
import weBig from "../../Assets/images/we-big.png"
import weSmall from "../../Assets/images/we-small.png"
import cheack from "../../Assets/images/check.svg"
import tick from "../../Assets/images/tick.svg"
import services_1 from "../../Assets/images/sevices-1.png"
import services_2 from "../../Assets/images/services-2.png"
import services_3 from "../../Assets/images/services-3.png"
import services_4 from "../../Assets/images/services-4.png"
import team_1 from "../../Assets/images/team-1.png"
import team_2 from "../../Assets/images/team-2.png"
import team_3 from "../../Assets/images/team-3.png"
import team_4 from "../../Assets/images/team-4.png"
import facebook from "../../Assets/images/facebook.svg"
import instagram from "../../Assets/images/instagram.svg"
import linkedin from "../../Assets/images/linkedin.svg"
import twitter from "../../Assets/images/twitter.svg"
import projects_1 from "../../Assets/images/projects_1.png"
import projects_2 from "../../Assets/images/projects_2.png"
import projects_4 from "../../Assets/images/projects_4.png"
import projects_5 from "../../Assets/images/projects_5.png"
import projects_6 from "../../Assets/images/projects_6.png"
import estimate from "../../Assets/images/estimate.png"
import "./home.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../../Components/Footer/Footer'
import { NavLink } from 'react-router-dom'

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  const handleAdd = (e) => {
    e.preventDefault();

    const {name, number, email, location, message} = e.target

    fetch('https://supersite-backend.onrender.com/estimate/add', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        number: number.value,
        email: email.value,
        location: location.value,
        message: message.value
      })
    })
    .then((res) => res.json())
    .then((data) => alert("Sended succcesfully"))
    .catch((err) => console.log(err))


}

  return (
    <>
      <Header />


      <section className='hero'>

        <div className="hero__inner">

          <div className="hero__left">
            <h1 className='hero__title'>Affordable Cleaning Services For Everyone.</h1>
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <button className='hero__btn'>Read More</button>

            <div className="hero__wrapper">
              <p className='hero__question'>Have Any Questions?</p>
              <p className='hero__number'>+61 3 8376 6284</p>
            </div>
          </div>

          <img data-aos="fade-right" className='hero__img' src={Women} alt="Women" />

        </div>

      </section>


      <section className='we'>

        <div className="we-left">
            <img className='we__small' src={weSmall} alt="Photo of women" />
            <img className='we__big' src={weBig} alt="Photo of women" />
        </div>

        <div className="we-right">
          <h2 className="we-right__title">
            We will make absolutely any <br /> <span data-aos="fade-down">place clean, neat & tidy.</span>
          </h2>

          <p className="we-right__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia des erunt mollit anim id est laborum.
          </p>

          <div className="we-right__box">
            <img src={cheack} alt="check logo" />
            <div className="we-right__box-inner">
              <h4 className='we-right__box-title'>We Are Committed</h4>
              <p className='we-right__box-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>

          <div className="we-right__box">
            <img src={cheack} alt="check logo" />
            <div className="we-right__box-inner">
              <h4 className='we-right__box-title'>Regular & Monthly Cleaning</h4>
              <p className='we-right__box-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>

          <button className='we-right__btn'>Read More</button>

          <div className="hero__wrapper we__wrapper">
              <p className='hero__question'>Have Any Questions?</p>
              <p className='hero__number'>+61 3 8376 6284</p>
          </div>

        </div>

      </section>


      <section className='services'>
          <div className="services__inner">

            <h2 className='services__title'>Our most popular <br /> <span data-aos="fade-down">cleaning services for you</span></h2>

              <div className="services__types">
                  <div className="services__type type">
                      <img className='type__img' src={services_1} alt="Home cleaning" />
                      <h4 className="type__title">House Cleaning</h4>
                      <p className="type__text">Duis aute irure dolor in reprehe nderit in voluptate velit esse cillu m dolore eu fugiat.</p>
                      <div className="type__btn">&gt;</div>
                  </div>

                  <div className="services__type type">
                      <img className='type__img' src={services_2} alt="Home cleaning" />
                      <h4 className="type__title">Kitchen Cleaning</h4>
                      <p className="type__text">Duis aute irure dolor in reprehe nderit in voluptate velit esse cillu m dolore eu fugiat.</p>
                      <div className="type__btn">&gt;</div>
                  </div>

                  <div className="services__type type">
                      <img className='type__img' src={services_3} alt="Home cleaning" />
                      <h4 className="type__title">Window  Cleaning</h4>
                      <p className="type__text">Duis aute irure dolor in reprehe nderit in voluptate velit esse cillu m dolore eu fugiat.</p>
                      <div className="type__btn">&gt;</div>
                  </div>

                  <div className="services__type type">
                      <img className='type__img' src={services_4} alt="Home cleaning" />
                      <h4 className="type__title">Carpet  Cleaning</h4>
                      <p className="type__text">Duis aute irure dolor in reprehe nderit in voluptate velit esse cillu m dolore eu fugiat.</p>
                      <div className="type__btn">&gt;</div>
                  </div>

              </div>

          </div>
      </section>

      <button className='we-right__btn services__btn'><NavLink to={"/service"}>View all</NavLink></button>


      <section className='team'>
          <h2 className='team__title'>Our expert team serve <br /> <span data-aos="fade-down">you the best cleaning service</span></h2>

          <div className="team__case">

            <div className="team__member member">
              <img src={team_1} alt="Employer" />
              <div data-aos="fade-down" className="member__messangers">
                <a href="#" className='member__messanger'><img src={facebook} alt="facebook logo" /></a>
                <a href="#" className='member__messanger'><img src={twitter} alt="twitter logo" /></a>
                <a href="#" className='member__messanger'><img src={linkedin} alt="linkedin logo" /></a>
                <a href="#" className='member__messanger'><img src={instagram} alt="instagram logo" /></a>
              </div>
              <h4 className='member__name'>STEVE SMITH</h4>
              <p className="member__position">HEAD IN LAUNDRY</p>
            </div>

            <div className="team__member member">
              <img src={team_2} alt="Employer" />
              <div data-aos="fade-down" className="member__messangers">
                <a href="#" className='member__messanger'><img src={facebook} alt="facebook logo" /></a>
                <a href="#" className='member__messanger'><img src={twitter} alt="twitter logo" /></a>
                <a href="#" className='member__messanger'><img src={linkedin} alt="linkedin logo" /></a>
                <a href="#" className='member__messanger'><img src={instagram} alt="instagram logo" /></a>
              </div>
              <h4 className='member__name'>ABELINA SMITH</h4>
              <p className="member__position">HEAD IN LAUNDRY</p>
            </div>

            <div className="team__member member">
              <img src={team_3} alt="Employer" />
              <div data-aos="fade-down" className="member__messangers">
                <a href="#" className='member__messanger'><img src={facebook} alt="facebook logo" /></a>
                <a href="#" className='member__messanger'><img src={twitter} alt="twitter logo" /></a>
                <a href="#" className='member__messanger'><img src={linkedin} alt="linkedin logo" /></a>
                <a href="#" className='member__messanger'><img src={instagram} alt="instagram logo" /></a>
              </div>
              <h4 className='member__name'>OLIVIA DEE</h4>
              <p className="member__position">HEAD IN LAUNDRY</p>
            </div>

            <div  className="team__member member">
              <img src={team_4} alt="Employer" />
              <div data-aos="fade-down" className="member__messangers">
                <a href="#" className='member__messanger'><img src={facebook} alt="facebook logo" /></a>
                <a href="#" className='member__messanger'><img src={twitter} alt="twitter logo" /></a>
                <a href="#" className='member__messanger'><img src={linkedin} alt="linkedin logo" /></a>
                <a href="#" className='member__messanger'><img src={instagram} alt="instagram logo" /></a>
              </div>
              <h4 className='member__name'>ADAM SMITH</h4>
              <p className="member__position">HEAD IN LAUNDRY</p>
            </div>


          </div>
      </section>


      <section className='projects'>

          <h2 className='team__title'>Our Projects That <br /> <span data-aos="fade-down">we have completed</span></h2>

          <div className="projects__gallery gallery">
              <img className='gallery-1' src={projects_1} alt="Cleaning" />
              <img className='gallery-2' src={projects_2} alt="Cleaning" />
              <div className="gallery__info">
                <div className="gallery__info-inner">
                  <h4 className='gallery__title'>Window Cleaning</h4>
                  <a href="#" className="gallery__link">Consectetur adipisicing elit.</a>
                  <p className="gallery__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <img className='gallery-4' src={projects_4} alt="Cleaning" />
              <img className='gallery-5' src={projects_5} alt="Cleaning" />
              <img className='gallery-6' src={projects_6} alt="Cleaning" />
          </div>
      </section>



      <section className='estimate'>
        <div className="estimate__inner">
          <div className="estimate__content">
            <h2 className='estimate__title'>Get a free estimate</h2>
            <form onSubmit={handleAdd} method="POST">
              <input name='name' className='estimate__input' type="text" placeholder='Your Name' />
              <input name='number' className='estimate__input' type="number" placeholder='Phone Number' />
              <input name='email' className='estimate__input' type="email" placeholder='Email Adress' />
              <input name='location' className='estimate__input' type="text" placeholder='Location' />
              <textarea  className='estimate__input estimate__area' name="message" cols="30" rows="10" placeholder='Your Message'></textarea>
              <button className='estimate__btn btn' type='submit'>Send now</button>
            </form>
          </div>
          <img data-aos="fade-right"  className='estimate__img' src={estimate} alt="Women" />
        </div>
      </section>

      <div><iframe width="100%" height={560} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=560&hl=en&q=21%20King%20St,%20Melbourne%20VIC%203000,%20%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/distance-area-calculator.html"&gt;distance maps&lt;/a&gt;</iframe></div>


    <section className='plans'>
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
    </section>


    <section className='serve'>
        <h2 className='team__title'>We serve our clients <br /> <span data-aos="fade-down">with the best of our capacity</span></h2>

        <ul className="serve__comments">

          <li className="serve__comment">
              <div className="serve__comment__case">
                <p className="serve__comment__text">
						    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur xcepteur sint occaecat cupidatat non proide sunt in culpa qui.					</p>
              </div>

              <div className="serve__comment-person person">
                <img className='person__img' src={team_1} alt="Person" />
                <div className="person__content">
                  <h3 className='person__name'>Nelima Frank</h3>
                  <p className="person__job">SEO Manager</p>
                </div>
              </div>
          </li>

          <li className="serve__comment">
              <div className="serve__comment__case">
                <p className="serve__comment__text">
						    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur xcepteur sint occaecat cupidatat non proide sunt in culpa qui.					</p>
              </div>

              <div className="serve__comment-person person">
                <img className='person__img' src={team_2} alt="Person" />
                <div className="person__content">
                  <h3 className='person__name'>Nelima Frank</h3>
                  <p className="person__job">SEO Manager</p>
                </div>
              </div>
          </li>

          <li className="serve__comment">
              <div className="serve__comment__case">
                <p className="serve__comment__text">
						    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur xcepteur sint occaecat cupidatat non proide sunt in culpa qui.					</p>
              </div>

              <div className="serve__comment-person person">
                <img className='person__img' src={team_3} alt="Person" />
                <div className="person__content">
                  <h3 className='person__name'>Nelima Frank</h3>
                  <p className="person__job">SEO Manager</p>
                </div>
              </div>
          </li>

        </ul>
    </section>


    <section className='blog'>

      <h2 className='team__title'>You can know more<br /> <span data-aos="fade-down">about us by our blog</span></h2>

      <ul className="blog__list">
        <li className="blog__item">
          <img className='blog__img' src={projects_1} alt="Cleaning" />
          <div className="blog__content content">
              <h4 className="content__title">Great Tips To Choose A Professional Cleaner</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
          </div>
        </li>

        <li className="blog__item">
          <img className='blog__img' src={projects_2} alt="Cleaning" />
          <div className="blog__content content">
              <h4 className="content__title">The Secret offer Cleaning Your Beadroom & Toilet</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
          </div>
        </li>

        <li className="blog__item">
          <img className='blog__img' src={projects_4} alt="Cleaning" />
          <div className="blog__content content">
              <h4 className="content__title">Checklists on how to keep different rooms</h4>
              <p className="content__text">Duis aute irure dolor in reprehenderit in volupta te velit esse cillum dolore eu fugiat nulla pariat</p>

              <span className='content__author'>admin</span>
              <span className='content__date'>November 28, 2022</span>
          </div>
        </li>
      </ul>


      <div className="blog__subscribe">
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
