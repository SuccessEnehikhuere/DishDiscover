import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/signUp'

const SignupPage = () => {
  return (
    <Wrapper>
      <form className="form">
        <h2 className='form-heading'>lets get started</h2>

        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="Name"
          defaultValue="john"
          className="form-input"
        />

        <label htmlFor="Email Address " className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="Email Address"
          defaultValue="johndoe@gmail.com"
          className="form-input"
        />

        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="Password"
          defaultValue="....."
          className="form-input"
        />

        <label htmlFor="Mobile Phone" className="form-label">
          Mobile Phone
        </label>
        <input
          type="tel"
          id="Mobile Phone"
          defaultValue="+234"
          className="form-input"
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
