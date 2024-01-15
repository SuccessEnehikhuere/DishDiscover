import styled from "styled-components";


const Wrapper = styled.nav`
  background: var(--white);
  .nav-container {
    /* display: flex; */
    /* align-items: center; */
    margin: 0 auto;
    padding: 1rem 1rem;
  }
  .nav-center,
  .sidebar-menu{
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
    display: none;
  }

  .sidebar-menu{
     display: flex;
     padding: 1rem 2rem;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
    
  }


  .sidebar-btn {
    background: var(--primary-500);
    color: var(--white);
    width: 2rem;
    height: 2rem;
    border-radius: var(--borderRadius);
    border-color: transparent;
    transition:var(--transition);
    cursor: pointer;

  }

  .sidebar-btn:hover {
    transform: scale(1.05);
  }

  .nav-links {
    display: none;
  }

  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
    font-size:1.2rem;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .nav-btn {
    padding: 0.4rem 0.75rem;
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      display: flex;
    }

    .nav-toggle {
      display: none;
    }
    .sidebar-btn {
      display: none;
    }
    .sidebar-menu {
      display: none;
    }
    .nav-links {
      display: flex;
      gap:0.5rem;
      flex-direction: row;
      margin-top: 0;
      align-items: center;
    }
  }
`
  
export default Wrapper
