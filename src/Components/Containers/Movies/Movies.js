import React, { Component } from "react";
import "./Movies.css";
import { Typography } from "@material-ui/core";

import Swiper from 'react-id-swiper';
import { Keyboard, Pagination, Navigation, EffectCoverflow } from 'swiper/dist/js/swiper.esm'

const titles = [
  'Blade Runner 2049',
  'Whiplash',
  'Carol',
  'Inside Out',
  'Interstellar',
  'Arrival',
];
const posters = require.context('./Posters', true);

class Movies extends Component {
  constructor() {
    super();
    this.index = 0;
    this.state = {
      title: titles[0],
    };
  }
  // const [swiper, updateSwiper] = useState(null);
  inc() {
    this.index++;
    this.setState({
      title: titles[this.index]
    });
  }
  dec() {
    this.index--;
    this.setState({
      title: titles[this.index]
    });
  }

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
      on: {
        init: function () {
          this.index=0;
        },
        slideNextTransitionStart: () => {
          this.inc();
          console.log(this.state.title);
        },
        slidePrevTransitionStart: () => {
          this.dec();
          console.log(this.state.title);
        },
      }
    };

    return (
      <div>
        <Swiper swipe {...swiperParams}>
          <div className="slide1 slider">
            {/* <div className="slide content">
              < Typography variant = 'h6' color='primary'>
                Blade Runner 2049
              </Typography>
            </div> */}
          </div>
          <div className="slide2 slider">
          </div>
          <div className="slide3 slider"></div>
          <div className="slide4 slider"></div>
          <div className="slide5 slider"></div>
          <div className="slide6 slider"></div>
          {/* <div className="swiper-pagination"></div> */}
        </Swiper>
        <div className="movieTitle">
          < Typography variant = 'h4' color='primary'>
            {this.state.title}
          </Typography>
        </div>

         
      </div>
      // <Swiper {...swiperParams}> 

    );
  }
}

export default Movies;

