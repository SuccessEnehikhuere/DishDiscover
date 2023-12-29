import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/dish'


const singleDishlUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

export const loader = async({params})=>{
  const {id} = params
  const response = await axios.get(`${singleDishlUrl}${id}`)

 return {data:response.data, id}

}

const Dish = () => {
 const {data, id}= useLoaderData()
 const singleDish = data.meals[0]
  console.log(singleDish);

 const {strMeal:name, strMealThumb:image, strCategory:info, strArea:country, strInstructions:instructions } = singleDish

 const mainIngredients = Object.keys(singleDish).filter((key)=>key.startsWith('strIngredient') && singleDish[key]!=='').map((key)=>singleDish[key])

 console.log(mainIngredients)



  return (
    <Wrapper>
      <header>
        <Link to="/homepage" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="meal">
        <img src={image} alt={name} className="img" />
        <div className="meal-info">
          <p>
            <span className="meal-data">name:</span>
            {name}
          </p>
          <p>
            <span className="meal-data">category:</span>
            {info}
          </p>
          <p>
            <span className="meal-data">country:</span>
            {country}
          </p>
          <p>
            <span className="meal-data">ingredients:</span>
            {mainIngredients.map((item, index)=>{
              return <span className='ing'>{item}{index < mainIngredients.length-1 ? ',':'.'}</span>
            })}
          </p>
          <p>
            <span className="meal-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Dish