import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

export const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started </h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          ChatGPT3 will be integrated into my website. My objective is to not
          only showcase the impressive final product, but also to provide access
          to the code, documentation, and notes used throughout the development
          process.
        </p>
        <h4>Request Early Access to Get Started </h4>
      </div>
    </div>
  );
};

export default Possibility;
