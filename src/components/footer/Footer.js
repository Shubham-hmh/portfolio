import React from 'react'
import './footer.css';
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">EGATOR</a>
      <ul className="permalinks">
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#service">Service</a> </li>
        <li> <a href="#contact">Contact</a> </li>
        <li> <a href="#testimonials">Testimonials</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
       <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
       </div>

       <div className="footer__copyright">
        <small> &copy; Portfolio made by Shubham,All rights reserved.</small>
       </div>

      </ul>
    </footer>
  )
}

export default Footer