import styled from 'styled-components'
const Wrapper = styled.main`
  .form-text {
    color: var(--grey-500);
    text-align: center;
    padding-top: 2rem;

    span {
      color: var(--primary-500);
      font-weight:500;
    }
  }
  .form-heading {
    font-size: clamp(1.25rem, 1.5vw, 1.5rem);
    padding-bottom:1rem;
  }
  input,
  button {
    margin-bottom: 1rem;
    box-sizing: border-box;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  button {
    margin-top: 2rem;
  }
`

export default Wrapper
