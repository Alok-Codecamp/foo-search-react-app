import React, { useEffect, useState } from 'react';
import './Body.css'
import FoodDetails from './foodDetails/FoodDetails';
import FoodMenu from './FoodMenu/FoodMenu';

const Body = () => {
    const url='https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    const [foods, setFood]=useState([])
    const [singleFood, setSingleFood]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFood(data.meals))
    },[])

    const handleFoodInfo=(food)=>{
        setSingleFood(food);
        
    }
    return (
        <div className="body-container">
          <div>
          {
               foods.map(food=><FoodMenu 
                key={food.idMeal}
                meals={food}
                handleFoodInfo={handleFoodInfo} 
                ></FoodMenu>)
           }
          </div>
           <FoodDetails foods={singleFood} ></FoodDetails>
        </div>
    );
};

export default Body;