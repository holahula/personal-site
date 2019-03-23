import React, { Component } from "react";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Typography } from "@material-ui/core";
import Swiper from 'react-id-swiper';

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
export default class About extends Component {
  render() {
    return (
      <Swiper> 
        <div className="slider">
      
          < div className = "slide current" >
            <div className="content">
              < h1 >
              <Typography variant='h4' color='primary'>
                Slide three
              </Typography>
              </h1>
              <p> 
                <Typography variant='body2' color='primary'>
                  Hello World
                </Typography>
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="content">
              < h1 >
              <Typography variant='h4' color='primary'>
                Slide four
              </Typography>
              </h1>
              <p> 
                <Typography variant='body2' color='primary'>
                  Hello World
                </Typography>
              </p>
            </div>
          </div>
          <div className="slide">
          </div>
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
        </div>
      </Swiper>

    );
  }
}
