import React from 'react'
import Wrapper from '../assets/wrappers/Auth'
import { Link, useNavigation } from 'react-router-dom'
const Auth = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  console.log(navigation);
  return (
    <Wrapper>
      <div className="auth-page">
        <div className="form-center">
          <h2 className=" title heading-text">
            Dish<span>Discover</span>
          </h2>

          <div className="title-underline"></div>

          <form>
            <p className="form-text">login to your account</p>
            <input
              type="text"
              id="email"
              className="form-input"
              placeholder="Email"
              defaultValue="enetinyan@gmail.com"
              required
            />
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Password"
              defaultValue="1223eeeeeee"
              required
            />
            <p className="password-text">forget password?</p>
            <p className="welcome-text">
              New to Dish<span>Discover?</span>
              <Link to="/">Sign up</Link>
            </p>

            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              <Link to="/homepage">{isLoading ? 'loading...' : 'sign in'}</Link>
            </button>
          </form>
        </div>

        <div className="main-img">
          <img src="/images/sushi.png" className="img" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Auth
