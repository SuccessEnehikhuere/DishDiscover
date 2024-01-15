import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/navbar'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { useGlobalContext } from './Context'
import SideBar from '../components/sidebar'

const Navbar = () => {
  const { isSidebarOpen, openSideBar } = useGlobalContext()
  

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-center">
          <span className="logo">DishDiscover</span>
          <div className="nav-links">
            <NavLink to="/homepage" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              Newsletter
            </NavLink>
            <NavLink to="/" className="nav-link">
              <button className="btn nav-btn">Sign out</button>
            </NavLink>
          </div>
        </div>

        {/* hambuger jsx */}
        {isSidebarOpen ? (
          <SideBar />
        ) : (
          <div className="sidebar-menu">
            <span className="logo">DishDiscover</span>

            <button onClick={openSideBar} className="sidebar-btn">
              <FaBars />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Navbar
