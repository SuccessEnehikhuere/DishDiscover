import styled from "styled-components"


const Wrapper = styled.main`
  background: var(--grey-900);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100vh;
  background-image: url(${import.meta.env.BASE_URL}images/tea.svg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  // position:fixed;

  // background-color: rgba(0, 0, 0, 0.6);
  // background-blend-mode: color;
  // position:fixed;
   @media(min-width:768px){
    background-size:80%
   
   }
   .modal{
    background:transparent;
   }
    
  .modal-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .heading-text {
    font-size: clamp(1.5rem, 5vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
 `


export default Wrapper