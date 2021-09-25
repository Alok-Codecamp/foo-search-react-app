import React from 'react';
import './FoodDetails.css'

const FoodDetails = (props) => {
   const {strMealThumb, strMeal, strCategory, strArea, strInstructions}=props.foods;
    return (
        <div>
            <h1>This  is food details</h1>
            <div className="details-img">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="details-info">
                <h3>{strMeal}</h3>
                <h4>{strCategory}</h4>
                <h5>{strArea}</h5>
                <p>{strInstructions}</p>
            </div>
        </div>
    );
};

export default FoodDetails;