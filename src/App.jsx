import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Landing, About, Newsletter, Error, Dish } from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/Landing',
    element: <Landing />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Newsletter',
    element: <Newsletter />,
  },
  {
    path: '/Error',
    element: <Error />,
  },
  {
    path: '/Dish',
    element: <Dish />,
  },
])






const App = ()=>{

  return (
    <RouterProvider router={router}/>
  )
}

export default App
