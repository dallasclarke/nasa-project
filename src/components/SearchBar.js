import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [inputDate, setInputDate] = useState("");
  const [data, setData] = useState(null);

  async function fetchNasaPhotos(inputValue) {
    setInputDate(inputValue);

    const NASA_API_KEY = process.env.REACT_APP_NASA_KEY;

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${inputValue}?api_key=${NASA_API_KEY}`
      );

      const data = await response.json();

      if (!data.Error) {
        setData(data.Search);
      }

      
    } catch (e) {
      console.log(e);
    }
  }

  function handleSearch() {
      
  }



  return (
    <div>
      <input 
        value={inputDate}
        onChange={}
        type="text"
        />
    </div>
  );
};

export default SearchBar;
