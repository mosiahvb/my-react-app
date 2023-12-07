// The Body
import React from 'react';
//add css
import './Body';
// To add links
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className="body-container">
      <img /* adding image for body and Add text for button link and texting for image*/
        className="background-image"
        src="img1.png"
        alt="Recipe Background"
      />
      <div className="overlay"> 
        <h2>Welcome To My Cook Book</h2> 
        <p>Try My World Famous Sourdough Bread!</p>
        <Link to="/recipe/1" className="recipe-button">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default Body;
