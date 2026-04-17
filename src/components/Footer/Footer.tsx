import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import { CgProfile } from 'react-icons/cg'
import { IoHomeOutline } from 'react-icons/io5'
import { HiViewGridAdd } from 'react-icons/hi'
import { FaCode, FaInstagram, FaTelegram } from 'react-icons/fa'
import { FiPhoneCall, FiSend } from 'react-icons/fi'
import { FaSquareWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    < >
      <footer className="footer">
        <div className="container">

          <div className="footerr_box">
            <div className="yusuf">
              <div className="footer_social">
                <h2 className="footer_title">Contact Me</h2>
                <a href="tel:+998 77 455 64  " className="footer_social_link">
                  Call Us   <FiPhoneCall />
                </a>
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                  Telegram <FaTelegram />
                </a>
                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                  Instagram <FaInstagram />
                </a>
                <a href="https://wa.me/998901234567" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                  WhatsApp  <FaSquareWhatsapp />
                </a>
              </div>


              <div className="footer_box">
                <h2 className="footer_title">Pages</h2>
                <Link to="/" className="footer_page">Home <IoHomeOutline className='home_icon' /></Link>
                <Link to="/about" className="footer_page">About Me <CgProfile className='about_icon' /></Link>
                <Link to="/project" className="footer_page">Project <HiViewGridAdd className='project_icon' /></Link>
                <Link to="/skills" className="footer_page">Skills <FaCode className='skills_icon' /></Link>
              </div> 
              
                 </div>


            <footer className="footerr">
              <h2 className="footerr__title">Send a Message</h2>
              <form className="footerr__form">
                <div className="footerr__row">
                  <input type="text" placeholder="First Name" className="footerr__input small" />
                  <input type="text" placeholder="Last Name" className="footerr__input small" />
                </div>
                <input type="email" placeholder="john@example.com" className="footerr__input" />
 
                <textarea placeholder="Tell me about your project…" className="footerr__textarea" />
                <button type="submit" className="footerr__button">
                  <FiSend />Send Message
                </button>
              </form>
            </footer>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer