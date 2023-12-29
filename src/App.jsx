import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Landing, About, Newsletter, Error, Dish, HomePage, SinglePageError } from './pages'
import { loader as HomeLoader } from './pages/HomePage'
import { loader as SingleDishLoader } from './pages/Dish'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'homepage',
        element: <HomePage />,
        loader: HomeLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'error',
        element: <Error />,
      },
      {
        path: 'dish/:id',
        element: <Dish />,
        loader: SingleDishLoader,
      },
    ],
  },
  {
    index: true,
    element: <Landing />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
