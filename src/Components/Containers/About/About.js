import React, { Component, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Typography } from "@material-ui/core";

import Swiper from 'react-id-swiper';
import { Virtual, Keyboard, Pagination, Navigation, EffectCoverflow } from 'swiper/dist/js/swiper.esm'

class About extends Component {

  render() {
    const swiperParams = {
      speed: 350,
      modules: [Keyboard, Pagination, Navigation, EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      keyboard: {
        enabled: true,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },
      navigation: {
        hideOnClick: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    return (
      <div>
        <Swiper {...swiperParams}>
          <div className="slide1 slider">
            <div className="slide content">
              <Typography variant='h6'>
                Blade Runner 2049 
              </Typography>
            </div>
          </div>
          <div className="slide2 slider"></div>
          <div className="slide3 slider">Slide 2</div>
          <div className="slide4 slider">Slide 2</div>
          {/* <div className="swiper-pagination"></div> */}
        </Swiper>

         
      </div>
      // <Swiper {...swiperParams}> 

    );
  }
}

export default About;

