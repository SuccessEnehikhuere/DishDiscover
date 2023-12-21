import React from 'react'
import MealCard from './MealCard'
import Wrapper from '../assets/wrappers/mealList'

const MealList = ({meals}) => {
  if(!meals){
    return(
      <h4 style={{textAlign:'center'}}>
        No matching meals found
      </h4>
    )
  }
  const formattedMeals = meals.map((item)=>{
    const {idMeal, strMeal, strMealThumb, strCategory, strArea } = item
    return {id:idMeal, name:strMeal, image:strMealThumb, info:strCategory, country:strArea}

  })
  return (
    <Wrapper>
      {formattedMeals.map((item)=>{
        return <MealCard key={item.id} {...item}/>
      })}

    </Wrapper>
  )
}

export default MealList