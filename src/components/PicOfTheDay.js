import React, { useEffect, useState } from "react";

async function fetchPictureOfTheDay() {
  const NASA_API_KEY = process.env.REACT_APP_NASA_KEY;

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
  );

  if (response.ok === false) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const PicOfTheDay = () => {
  const [picOfTheDayDetails, setPicOfTheDayDetails] = useState(null);
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    fetchPictureOfTheDay()
      .then(setPicOfTheDayDetails)
      .catch((err) => {
        console.log(err);
        setRequestError(err);
      });
  }, []);

  if (requestError) {
    return <div style={{ color: "lightgrey" }}>{requestError.message}</div>;
  }

  if (!picOfTheDayDetails) {
    return null;
  }

  return (
    <div className="pic-of-the-day">
        <img src={picOfTheDayDetails.url} alt={picOfTheDayDetails.title} />
      <div>
        <h1>{picOfTheDayDetails.title}</h1>
        <h3>{picOfTheDayDetails.date}</h3>
        <p>{picOfTheDayDetails.explanation}</p>
      </div>
    </div>
  );
};

export default PicOfTheDay;
