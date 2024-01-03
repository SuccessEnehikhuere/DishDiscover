import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/dish'
import { useQuery } from '@tanstack/react-query'

const singleDishlUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const searchSingleMealQuery = (id)=>{
  return{
    queryKey:['meal', id],
    queryFn: async()=>{
      const {data} = await axios.get(`${singleDishlUrl}${id}`)
      return data
    }
  }
}

export const loader = (queryClient) => async({params})=>{
  const {id} = params
  await queryClient.ensureQueryData(searchSingleMealQuery(id))
  return {id}
}

const Dish = () => {
 const {id}= useLoaderData()
 
 const {data} = useQuery(searchSingleMealQuery(id))
 if(!data) return <Navigate to ='/homepage'/>

 const singleDish = data.meals[0];


 const {strMeal:name, strMealThumb:image, strCategory:info, strArea:country, strInstructions:instructions } = singleDish

 const mainIngredients = Object.keys(singleDish).filter((key)=>key.startsWith('strIngredient') && singleDish[key]!=='').map((key)=>singleDish[key])


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