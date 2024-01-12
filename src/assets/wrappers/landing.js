import styled from 'styled-components'
const Wrapper = styled.main`
  background: #1a3830;
  margin: auto 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  min-height: 100vh;

  .main-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .modal-center {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    width: 90vw;
    box-sizing: border-box;
  }

  //side-bar styles

  .sidebar {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100px;
    max-height: 800px;
    min-width: 70px;
    min-height: 800px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #26473e;
    margin-top: 3rem;

    img {
      padding-bottom: 4rem;
      min-width: 40px;
      min-height: 40px;
      max-width: 50px;
      max-height: 50px;
    }

    .plus-icon {
      background: #214138;
      width: 60px;
      height: 60px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      .plus {
        padding-bottom: 0;
      }
    }
  }

  //navbar styles
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: center;

    .star-icon {
      max-width: 90px;
      max-height: 90px;
      min-width: 60px;
      min-height: 60px;
      flex-shrink: 0;
      border-radius: 20px;
      background: rgba(38, 71, 62, 0.57);
      display: flex;
      justify-content: center;
      align-items: center;

      .star-circle {
        max-width: 50px;
        max-height: 50px;
        min-width: 20px;
        min-height: 20px;
        flex-shrink: 0;
        background: #6a7442;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .heading-text {
      font-size: clamp(1.2rem, 8vw, 4rem);
      font-weight: 700;
      letter-spacing: 2px;
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: capitalize;
      text-align: center;
      font-family: 'Italianno', cursive;
      color: white;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      display: flex;
      flex-wrap: wrap;
    }

    .circle {
      position: relative;
      .dark-circle {
        max-width: 100px;
        max-height: 100px;
        min-width: 40px;
        min-height: 40px;
        flex-shrink: 0;
        background: #100f0f;
        border-radius: 100%;
      }
      .lemon-circle {
        max-width: 20px;
        max-height: 20px;
        min-width: 12px;
        min-height: 12px;
        flex-shrink: 0;
        background:  var(--primary-500);fd85d;
        position: absolute;
        border-radius: 100%;
        top: 0;
        right: 0.5rem;
      }
    }
  }

  //center/main part styles
  .modal-container,
  .food-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .img-center {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 3rem 0.5rem 3rem 3rem; */
    box-sizing: border-box;
  }
  .main-img {
    width: 150px;
    height: 150px;
    max-width: 350px;
    max-height: 350px;
    flex-shrink: 0;
    padding-top: 1rem;
   
  }

  p {
    color: #508879;
    font-family: Inter;
    font-size: 16px;
  }

  .caloryIcon {
    /* margin-left: -1.5rem; */
    margin-left: -1.8rem;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .timeIcon-text {
    /* padding-right: 1rem; */
    /* padding-right: 0.5rem; */
  }
  .caloryIcon-text {
    /* margin-left: -1rem; */
    margin-left: -1.2rem;
  }

  .center-text {
    color: #fff;
    font-family: Istok Web;
    display: flex;
    flex-wrap: wrap;
    /* font-size: clamp(1rem, 1.5vw, 2rem); */
    font-weight: 400;
    text-align: center;
  }
  button {
    /* padding: 1rem 3rem; */
    padding: 0.5rem 1rem;
    flex-shrink: 0;
    border-radius: 40px;
    border:none;
    background:   var(--primary-500);
    color: #020407;
    font-family: Istok Web;
    /* font-size: 2rem; */
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    margin-top: 2rem;
  }

  //second side-bar styles
  .aside-bar {
    min-width: 40px;
    min-height: 680px;
    max-width: 100px;
    max-height: 686px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #26473e;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-left: 2rem;
    padding: 1rem;

    img {
      min-width: 80px;
      min-height: 80px;
      max-width: 100px;
      max-height: 100px;
      padding: 2rem 3rem 2rem;
    }
  }

  @media (min-width: 768px) {
    .sidebar {
      display: flex;
    }
    .aside-bar {
      display: flex;
    }
    .modal-center {
      /* padding-top: 3rem; */
    }

    .nav-bar {
      .star-icon {
        max-width: 150px;
        max-height: 150px;
        min-width: 100px;
        min-height: 100px;
      }

      .circle {
        position: relative;
        .dark-circle {
          max-width: 120px;
          max-height: 120px;
          min-width: 80px;
          min-height: 80px;
        }
        .lemon-circle {
          max-width: 30px;
          max-height: 30px;
          min-width: 15px;
          min-height: 15px;
        }
      }
    }

    .img-center {
      /* padding: 3rem 0.5rem 3rem 3rem; */
    }
    .main-img {
      width: 200px;
      height: 200px;
      max-width: 350px;
      max-height: 350px;
      flex-shrink: 0;
    }

    p {
      font-size: 18px;
    }

    .caloryIcon {
      margin-left: -1.5rem;
    }

    .timeIcon-text {
      padding-right: 1rem;
    }

    .caloryIcon-text {
      margin-left: -1rem;
    }

    button {
      padding: 1rem 3rem;
      font-size: clamp(1rem, 2vw, 2rem);
      margin-top: 6rem;
    }
    .modal-center {
      /* grid-template-columns: repeat(3, 1fr); */
      /* gap: 10px; */
      grid-template-columns: 150px 1fr 200px;
    }
    .heading-text {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 1140px) and (max-width:2560px){
    .sidebar {
      max-width: 150px;
      max-height: 800px;
      min-width: 100px;
      min-height: 886px;
      img {
        padding-bottom: 4rem;
        min-width: 60px;
        min-height: 60px;
        max-width: 80px;
        max-height: 80px;
      }
    }
    .aside-bar {
      min-width: 100px;
      min-height: 680px;
      max-width: 150px;
      max-height: 686px;
      padding: 2rem;

      img {
        min-width: 100px;
        min-height: 100px;
        max-width: 150px;
        max-height: 150px;
      }
    }

    .heading-text {
      font-size: clamp(2rem, 8vw, 5rem);
    }
    .main-img {
      min-width: 450px;
      min-height: 450px;
      max-width: 650px;
      max-height: 650px;
      flex-shrink: 0;
      padding-top: 1rem;
    }
  }

`
export default Wrapper
