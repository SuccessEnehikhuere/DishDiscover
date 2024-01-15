import React from 'react'
import Wrapper from '../assets/wrappers/Auth'
import { Link,  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const [storedUserDetails, setStoredUserDetails] = useState({})
  const [isDataAvailable, setIsDataAvailable] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  

  useEffect(() => {
    if(isDataAvailable) return;
    try {
       const storedUserDetails = localStorage.getItem('userDetails')
       if(storedUserDetails){
        setStoredUserDetails(JSON.parse(storedUserDetails))
       
    
        setIsDataAvailable(true)
       }
    } catch (error) {
      console.error('Error parsing stored user details:', error)
    }
    
    } )



  const navigate = useNavigate()

 const handleSignIn = async (e) => {
   try {
     e.preventDefault()
     setIsLoading(true)
     
       if (isDataAvailable && storedUserDetails && signInData) {
         if (
           storedUserDetails.password === signInData.password &&
           storedUserDetails.email === signInData.email
         ) {
           navigate('/homepage')
           toast.success('user signed-in successfully!')
         } else {
           toast.error('User not found!.please click on sign-up to register')
           return
         }
       } else {
         console.error('Stored user data or sign-in data is undefined')
       }

   } catch (error) {
     console.error('Error in handleSignIn:', error)
   } finally {
     setIsLoading(false)
   }
 }


  return (
    <Wrapper>
      <div className="auth-page">
        <div className="form-center">
          <h2 className=" title heading-text">
            Dish<span>Discover</span>
          </h2>

          <div className="title-underline"></div>
            <form onSubmit={handleSignIn}>
              <p className="form-text">login to your account</p>

              <div className="input-container">
                <input
                  type="text"
                  value={signInData.email}
                  onChange={(e) =>
                    setSignInData({ ...signInData, email: e.target.value })
                  }
                  id="email"
                  className="form-input"
                  placeholder="Email"
                  required
                />

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={signInData.password}
                  onChange={(e) =>
                    setSignInData({ ...signInData, password: e.target.value })
                  }
                  id="password"
                  className="form-input"
                  placeholder="Password"
                  required
                />

                <span className="icon-container">
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => togglePassword()}
                  >
                    {showPassword ? (
                      <FaEye className="eye-icon" />
                    ) : (
                      <FaEyeSlash className="eye-icon" />
                    )}
                  </button>
                </span>
              </div>
  
              <p className="welcome-text">
                New to Dish Discover?
                <Link to="/signup"> <span>Sign up</span></Link>
              </p>

              <button
                type="submit"
                className="btn btn-block"
                disabled={isLoading}
              >
                {isLoading ? 'loading...' : 'sign in'}
              </button>
            </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Auth
