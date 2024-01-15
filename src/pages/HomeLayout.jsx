import React, { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../components/Context'
import SideBar from '../components/sidebar'

const HomeLayout = () => {
 const navigation = useNavigation()

 const isPageLoading = navigation.state === 'loading';


  return (
    <>
       {/* <SideBar/> */}
        <Navbar />
        <section className='page'>
          {isPageLoading? <div className='loading'/> : <Outlet/>}
        </section>
  
    </>
  )
}

export default HomeLayout
