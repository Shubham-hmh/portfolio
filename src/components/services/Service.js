import React from 'react'
import './service.css';
import {BiCheck} from 'react-icons/bi';
const Service = () => {
  return (
    <section id="service">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>

      {/* Web Development*/ }

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>

      {/* Java Development */}

      <article className="service">
        <div className="service__head">
          <h3>Java Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>  <li>
            <BiCheck className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>

      
    </div>
    </section>
  )
}

export default Service