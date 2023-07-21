import React from "react";
import "./testimonial.css";
import { ReviewData } from "../data/Data";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">{ReviewData.title}</h2>

      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {ReviewData.testimonials.map(
          ({ id, image, title, subtitle, comment }) => {
            return (
              <SwiperSlide className="testimonial__item" key={id}>
                <div className="thumb">
                  <img src={image} alt="" />
                </div>
                <h3 className="testimonials__title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Testimonials;
