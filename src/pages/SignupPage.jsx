import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/signUp'
import { FaArrowLeft } from 'react-icons/fa'

const SignupPage = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="form-heading">
          <button>
            <Link to="/auth" className="icon-link">
              <FaArrowLeft />
            </Link>
          </button>

          <h2 className="heading-text">lets get started</h2>
        </div>

        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input type="text" id="Name" className="form-input" required />

        <label htmlFor="Email Address " className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="Email Address"
          required
          className="form-input"
        />

        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input type="password" id="Password" required className="form-input" />

        <label htmlFor="Mobile Phone" className="form-label">
          Mobile Phone
        </label>
        <input
          type="tel"
          id="Mobile Phone"
          // required
          className="form-input"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />

        <button className="btn btn-block">
          <Link to="/auth">Create Account</Link>
        </button>

        <p className="form-text">
          By selecting Create account, you agree to our <span>terms</span> and
          have read and acknowledge our <span>Privacy Statement</span>
        </p>
      </form>
    </Wrapper>
  )
}

export default SignupPage
