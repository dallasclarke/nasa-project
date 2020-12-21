import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


async function fetchMarPhotos() {
  const NASA_API_KEY = process.env.REACT_APP_NASA_KEY;

  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${NASA_API_KEY}`
  );
  const data = response.json();

  console.log(data);
  return data;
}

const MarsPhotos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: 'the-slide',
    
  };


  const [marsData, setMarsData] = useState(null);


  useEffect(async () => {
    const data = await fetchMarPhotos();
    console.log(data);

    setMarsData(data);
  }, []);

  if (!marsData) {
    return null;
  }

  return (
    <div className="mars-photos">
      <Slider {...settings}>
        {marsData.photos.map((photo) => {
          return (
            <div key={photo.id}>
              <h1>{photo.camera.name}</h1>
              <img
                src={photo.img_src}
                style={{ width: "30%", height: "30%"}}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MarsPhotos;
