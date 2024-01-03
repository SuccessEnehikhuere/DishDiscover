import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import MealList from '../components/MealList'
import SearchForm from '../components/SearchForm'
import {  useQuery } from '@tanstack/react-query'

const foodSearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchMealQuery = (searchTerm)=>{
  return{
    queryKey:['search', searchTerm || 'all'],
    queryFn: async () =>{
      const response = await axios.get(`${foodSearchUrl}${searchTerm}`);
      return response.data.meals
    }
  }

}

export const loader = (queryClient) => async({request})=>{
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search')||'';
await queryClient.ensureQueryData(searchMealQuery(searchTerm))
  return { searchTerm}
}


const HomePage = () => {
  const { searchTerm } = useLoaderData()
  const {data:meals} = useQuery(searchMealQuery(searchTerm))
 
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      <MealList meals={meals} />
    </>
  )
}

export default HomePage