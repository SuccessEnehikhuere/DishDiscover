import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/mealcard'

const MealCard = ({image, id, name, info, country}) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} className='img'/>
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{info}</h5>
        <p>{country}</p>
        <Link to ={`/dish/${id}`} className='btn'>
          details
        </Link>

      </div>
    </Wrapper>
  )
}

export default MealCard