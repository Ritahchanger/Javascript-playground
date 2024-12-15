import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div style={{ margin: "20px auto", maxWidth: "1200px" }}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: "button-next",
          prevEl: "button-prev",
        }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.pexels.com/photos/25568827/pexels-photo-25568827/free-photo-of-smiling-couple-with-vintage-album.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Couple with Vintage Album"
              loading="lazy"
            />
            <div className="slide-text">
              <h2>Memorable Moments</h2>
              <p>Capture the memories you cherish the most.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.pexels.com/photos/984935/pexels-photo-984935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cityscape Adventures"
            />
            <div className="slide-text">
              <h2>Cityscape Adventures</h2>
              <p>Discover the stories of vibrant cityscapes.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.pexels.com/photos/28858572/pexels-photo-28858572/free-photo-of-romantic-black-and-white-paris-seine-river-kiss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Romantic Couple in Paris"
            />
            <div className="slide-text">
              <h2>Love in the Air</h2>
              <p>Feel the magic of romance around you.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature's Bliss"
            />
            <div className="slide-text">
              <h2>Nature's Bliss</h2>
              <p>Reconnect with the tranquility of nature.</p>
            </div>
          </div>
        </SwiperSlide>
        <button className="swiper-button-next">Next</button>
        <button className="swiper-button-prev">Prev</button>
        <button className="button-next">Next</button>
        <button className="button-prev">Prev</button>
      </Swiper>
    </div>
  );
};

export default Hero;
