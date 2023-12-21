import React from 'react'
import Wrapper from '../assets/wrappers/error'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  console.log(error)
  console.log('error')
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="no-page-found" />
          <h3>ohh!</h3>
          <p>no route matches the url you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
