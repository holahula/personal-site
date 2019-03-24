import React, { Component } from "react";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Typography } from "@material-ui/core";
import Swiper from 'react-id-swiper';
// import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'


const swiperParams = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 10,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

class About extends Component {

  render() {
    return (
      // <Swiper {...swiperParams}> 
      <Swiper>
        
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
       <div className="buttons">
          <button id="prev">
            <FontAwesomeIcon 
                  // color = "#fff"
                  icon={faArrowLeft} 
                  size='lg'/>
          </button>
          <button id="next">
            <FontAwesomeIcon 
                  // color = "#fff"
                  icon={faArrowRight} 
                  size='lg'/>
          </button>
        </div>
      
      // </Swiper>
       
    );
  }
}

export default About;