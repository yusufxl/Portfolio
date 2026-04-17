import { HiArrowDown } from 'react-icons/hi';

import './header.scss'
import { GrReactjs } from "react-icons/gr";
import { Link, } from 'react-router-dom';
import { FaCss3Alt, FaFigma, FaGithub, FaJsSquare } from 'react-icons/fa';
import { IoLogoHtml5 } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { VscVscodeInsiders } from 'react-icons/vsc';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_box">
            <GrReactjs className='header_icon anim-left' />
            <h1 className='header_title anim-top'>Welcome to My Portfolio</h1>
            <GrReactjs className='header_icon anim-right' />
          </div>
          <div className="header_text_box">
            <h1 className="header_text_title">
              Frontend Developer
            </h1>
            <div className="line"></div>
            <p className="header_home_text">
              UI/UX <span>Designer</span>
            </p>
          </div>
          <div className="section">
            <div className="section_box">
              <p className="section_text">
                If you want to know more about me.
                <HiArrowDown className='section_icon' />
              </p>
              <Link to="/about" className="btn">
                About Me
              </Link>
            </div>

            <div className="section_box">
              <p className="sectionn_text">
                If you want to see my projects.
                <HiArrowDown className='section_iconn' />
              </p>
              <Link to="/Project" className="btnn">
                Project
              </Link>
            </div>

            <div className="section_box">
              <p className="sectionnn_text">
                If you want to contact me.
                <HiArrowDown className='section_iconnn' />
              </p>
              <a href="tel:+998774556483" className="btnnn">
                Contact Me
              </a>
            </div>

          </div>
          <div className="header_icons">
            <div className="left">
              <GrReactjs className='left_icon' />    <FaJsSquare className='left_icon' />

              <div className="svg"> <IoLogoHtml5 className='left_icon' />   <FaCss3Alt className='left_icon' /> </div>
            </div>
            <div className="right">
              <FaGithub className='right_icon' />   <BiLogoTypescript className='right_icon' />

              <div className="svgs"><FaFigma className='right_icon' />    <VscVscodeInsiders className='right_icon' /> </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header