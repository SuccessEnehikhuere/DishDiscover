import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/signUp'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
import { toast } from 'react-toastify'
const SignupPage = () => {
 const [registrationData, setRegistrationData] = useState({
   name:'',
   email:'',
   password:'',
   tel:''
 })

const navigate = useNavigate();
const handleRegistration = (e) => {
  e.preventDefault() 
  if(
    registrationData.name === '' &&
    registrationData.email === '' &&
    registrationData.password === '' &&
    registrationData.tel === ''
    ){
      toast.error('input fields are empty!')
      return;
    }
  if (
    registrationData &&
    registrationData.name &&
    registrationData.email &&
    registrationData.password &&
    registrationData.tel
  ) {
    localStorage.setItem('userDetails', JSON.stringify(registrationData))

    toast.success('User registered successfully!')
    navigate('/auth')
   
  } else {
    toast.error('Invalid registration data')
    return;
  }
}




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
        <input
          type="text"
          value={registrationData.name}
          onChange={(e)=>setRegistrationData({...registrationData, name: e.target.value})}
          id="Name" 
          className="form-input" 
          required />

        <label htmlFor="Email Address " className="form-label">
          Email Address
        </label>
        <input
          type="email"
          value={registrationData.email}
          onChange={(e)=>setRegistrationData({...registrationData, email: e.target.value})}
          id="Email Address"
          required
          className="form-input"
        />

        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
         type="password" 
         value={registrationData.password}
         onChange={(e)=>setRegistrationData({...registrationData, password:e.target.value})}
         id="Password" 
         required 
         className="form-input" />

        <label htmlFor="tel-number" className="form-label">
          tel-number
        </label>
        <input
          type="tel"
          value={registrationData.tel}
          onChange={(e)=>setRegistrationData({...registrationData, tel:e.target.value})}
          id="tel-number"
          // required
          className="form-input"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />

        <button className="btn btn-block" onClick={handleRegistration}>
          Create Account
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
