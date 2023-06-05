import React from 'react'
import './portfolio.css';
import img1 from '../../assests/p1.jpg'
import img2 from '../../assests/p2.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container protfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="img1" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://developer-front.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="img1" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://developer-front.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="img1" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://developer-front.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="img1" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://developer-front.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

       
      </div>
    </section>
  )
}

export default Portfolio