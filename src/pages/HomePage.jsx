import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import MealList from '../components/MealList'

const foodSearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export const loader = async()=>{
  const searchTerm = ''
  const response = await axios.get(`${foodSearchUrl}${searchTerm}`)
  
  return {meals:response.data.meals, searchTerm}
}


const HomePage = () => {
  const { meals, searchTerm } = useLoaderData()
  const [loading, isLoading] = useState(true)
  console.log(meals)
  
 

  return (
    <>
      <MealList meals={meals} />
    </>
  )
}

export default HomePage