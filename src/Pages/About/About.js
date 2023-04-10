import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Women from "../../Assets/images/about-hero.png"
import weBig from "../../Assets/images/we-big.png"
import weSmall from "../../Assets/images/we-small.png"
import cheack from "../../Assets/images/check.svg"
import mission from "../../Assets/images/mission.png"
import vision from "../../Assets/images/vision.png"
import team_1 from "../../Assets/images/team-1.png"
import team_2 from "../../Assets/images/team-2.png"
import team_3 from "../../Assets/images/team-3.png"
import team_4 from "../../Assets/images/team-4.png"
import facebook from "../../Assets/images/facebook.svg"
import instagram from "../../Assets/images/instagram.svg"
import linkedin from "../../Assets/images/linkedin.svg"
import twitter from "../../Assets/images/twitter.svg"
import estimate from "../../Assets/images/estimate.png"
import "./about.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../../Components/Footer/Footer'

export default function About() {

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
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
    }


  return (
    <>
      <Header />

      <section className='hero'>

        <div className="hero__inner about">

          <div className="hero-about__left">
            <h1 className='hero__title'>About Us</h1>
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua enim ad minim veniam.
            </p>
          </div>

          <img data-aos="fade-right" className='hero__img about__img' src={Women} alt="Women" />

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

          <div className="hero__wrapper">
            <p className='hero__question'>Have Any Questions?</p>
            <p className='hero__number'>+61 3 8376 6284</p>
          </div>

        </div>

      </section>

      <section className='mission'>
          <div className="mission__item">
              <img src={mission} alt="Mission" className="mission__img" />
              <h3 className='mission__title'>Our Mission</h3>
              <p className='mission__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>

          <div className="mission__item">
              <img src={vision} alt="Mission" className="mission__img" />
              <h3 className='mission__title'>Our Vision</h3>
              <p className='mission__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
      </section>


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

      <section className='estimate'>
        <div className="estimate__inner">
          <div className="estimate__content">
            <h2 className='estimate__title'>Get a free estimate</h2>
            <form onSubmit={handleAdd} method="POST" autoComplete='off'>
              <input name='name' className='estimate__input' type="text" placeholder='Your Name' />
              <input name='number' className='estimate__input' type="number" placeholder='Phone Number' />
              <input name='email' className='estimate__input' type="email" placeholder='Email Adress' />
              <input name='location' className='estimate__input' type="text" placeholder='Location' />
              <textarea  className='estimate__input estimate__area' name="message" cols="30" rows="10" placeholder='Your Message'></textarea>
              <button className='btn' type='submit'>Send now</button>
            </form>
          </div>
          <img data-aos="fade-right"  className='estimate__img' src={estimate} alt="Women" />
        </div>
      </section>

      <section className='serve about__serve'>
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
