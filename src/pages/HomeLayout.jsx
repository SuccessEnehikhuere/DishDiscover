import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <section className='page'>
           <Outlet/>
        </section>
       
      </main>
    </>
  )
}

export default HomeLayout
