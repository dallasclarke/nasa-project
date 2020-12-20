import React from 'react'

// import { baseUrl } from "./config";

import MarsPhotos from "./MarsPhotos"

const Slider = () => {
  const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
  };

  return (
      <div>
          <Carousel {...settings}>
              <MarsPhotos />
          </Carousel>
      </div>
  )
}


export default Slider
