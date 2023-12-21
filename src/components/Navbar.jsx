import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
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
            <button>
              Sign out
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
