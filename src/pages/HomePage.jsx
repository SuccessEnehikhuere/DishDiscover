import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import MealList from '../components/MealList'
import SearchForm from '../components/SearchForm'

const foodSearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export const loader = async({request})=>{
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search')||''
  const response = await axios.get(`${foodSearchUrl}${searchTerm}`)
  
  return {meals:response.data.meals, searchTerm}
}


const HomePage = () => {
  const { meals, searchTerm } = useLoaderData()
 
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      <MealList meals={meals} />
    </>
  )
}

export default HomePage