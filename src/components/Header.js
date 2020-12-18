import React from "react";



const Header = () => {
  return (
    <div className="logo">
      <img
        alt="nasa logo"
        src={
          "https://www.nasa.gov/sites/default/files/files/nasa_insignia_300.jpg"
        }
      />
      <span>NASA</span>
    </div>
  );
};

export default Header;
