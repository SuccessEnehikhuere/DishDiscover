import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/sidebar'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  const { isSidebarClose, closeSideBar } = useGlobalContext()
  return (
    <Wrapper>
      <div className="side-bar">
        <div className='sidebar-header'>
          <span className="logo">DishDiscover</span>
          
          <div className="sidebar-menu">

            <button onClick={closeSideBar} className='close-btn'>
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="side-links">
          <NavLink to="/homepage" className="side-link">
            Home
          </NavLink>
          <NavLink to="/about" className="side-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="side-link">
            Newsletter
          </NavLink>
          <NavLink to="/" className="side-link">
            <button className="btn side-btn">Sign out</button>
          </NavLink>
        </div>

        {/* hambuger jsx */}
      </div>
    </Wrapper>
  )
}

export default SideBar
