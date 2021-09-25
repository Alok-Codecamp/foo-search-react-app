import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './FoodMenu.css'
const FoodMenu = (props) => {
    
    const {strMealThumb, strMeal, strCategory, strArea, strInstructions}=props.meals;
    return (
        <div className="food-container" >
            <div className="food-image" >
                <img src={strMealThumb} alt="" />
            </div>
            <div>
                <h3>{strMeal}</h3>
                <h4>Catagory: {strCategory}</h4>
                <h5>Area : {strArea}</h5>
                <p>{strInstructions.slice(0,200)}</p>
                <button onClick={()=>props.handleFoodInfo(props.meals)}>
                    <FontAwesomeIcon icon={faCoffee}/>
                    Details</button>


            </div>
        </div>
    );
};

export default FoodMenu;