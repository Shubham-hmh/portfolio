import React from 'react'
import './testmonial.css';
import ti from '../../assests/t1.png'
import t2 from '../../assests/t2.png';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [{
  avatar: ti,
  name: "Andres",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus asperiores sed officia aperiam odit placeat natus fugit doloribus dolorum obcaecati dolore excepturi quae in, enim ipsum harum delectus autem."

},
{
  avatar: t2,
  name: "Evsns",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus asperiores sed officia aperiam odit placeat natus fugit doloribus dolorum obcaecati dolore excepturi quae in, enim ipsum harum delectus autem."

},
{
  avatar: ti,
  name: "Joseph",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus asperiores sed officia aperiam odit placeat natus fugit doloribus dolorum obcaecati dolore excepturi quae in, enim ipsum harum delectus autem."

},
{
  avatar: t2,
  name: "Andres",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus asperiores sed officia aperiam odit placeat natus fugit doloribus dolorum obcaecati dolore excepturi quae in, enim ipsum harum delectus autem."

},

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}

        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />

                </div>

                <h5 className="clinet__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials