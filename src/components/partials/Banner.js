import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img src="./assets/images/banner.jpg" alt="banner" />
      {/* <img
        className="showcase"
        src="./assets/images/mac-desktop.png"
        alt="mac desktop playing media"
      /> */}
      <div className="overlay" />
    </div>
  );
};

export default Banner;
