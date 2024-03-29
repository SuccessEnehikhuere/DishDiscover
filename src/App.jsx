import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  About,
  Newsletter,
  Error,
  Dish,
  HomePage,
  SinglePageError,
  AuthPage,
  SignupPage,
} from './pages'
import { loader as HomeLoader } from './pages/HomePage'
import { loader as SingleDishLoader } from './pages/Dish'
import { action as SingleDishAction } from './pages/Newsletter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useGlobalContext } from './components/Context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'homepage',
        element: <HomePage />,
        loader: HomeLoader(queryClient),
        errorElement: <SinglePageError />,
      },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: SingleDishAction,
      },
      {
        path: 'error',
        element: <Error />,
      },
      {
        path: 'dish/:id',
        element: <Dish />,
        loader: SingleDishLoader(queryClient),
      },
    ],
  },
  {
    index: true,
    element: <Landing />,
  },
  {
    path: 'auth',
    element: <AuthPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />,
  },
])

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
