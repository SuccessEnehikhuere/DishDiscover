import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Landing, About, Newsletter, Error, Dish, HomePage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'homepage',
        element: <HomePage/>,
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
        path: 'dish',
        element: <Dish />,
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
