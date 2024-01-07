import styled from 'styled-components'

const Wrapper = styled.main`
  background: var(--grey-50);
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url(${import.meta.env.BASE_URL}images/chicken.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat; */

  .auth-page {
    display: grid;
    background: var(--grey-100);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin: 2rem auto;
    box-shadow: var(--shadow-1);
  }

  .heading-text {
    font-size: clamp(1.2rem, 8vw, 5rem);
    font-weight: 700;
    letter-spacing: 2px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: capitalize;
    text-align: center;
    padding-top: 2rem;
  }

  span {
    color: var(--primary-600);
  }

  .form-text {
    line-height: 2;
    margin-top: 0.5rem;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%;
    font-family: inter;
    padding-bottom: 1rem;
  }

  form {
    /* padding:0; */
    width: 100%;
    max-width: var(--fixed-width);
    /* background: var(--white); */
    /* border-radius: var(--borderRadius); */
    /* box-shadow: var(--shadow-2); */
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    box-sizing: border-box;
  }
  .form-input {
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    margin-top: 1rem;
  }

  .password-text {
    text-align: right;
    padding-top: 1rem;
    font-size: 1rem;
    color: var(--grey-400);
    font-family: inter;
  }

  .welcome-text {
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 4rem;
    font-size: 1.2rem;
    font-family: inter;
    a{
      color:black;
    }
  }

  .btn-block {
    border-radius: 2rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;

  }
  a{
    color:white;
  }

  .main-img {
    display: none;
    /* width: var(--view-width); */
    background: var(--primary-900);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media (min-width: 768px) {
    .auth-page {
      /* max-width: var(--max-width);  */
      width: var(--view-width);
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 2rem auto;
      background: var(--grey-100);
      box-sizing: border-box;
    }
    .main-img {
      display: block;
    }
    .heading-text {
      font-size: clamp(1.2rem, 7vw, 3rem);
    }
  }
  @media (min-width: 1440px) {
    .heading-text {
      font-size: clamp(1.2rem, 8vw, 4rem);
    }
  }
`

export default Wrapper
