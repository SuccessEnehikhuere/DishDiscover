import styled from 'styled-components'

const Wrapper = styled.main`
  background: var(--white);
  .side-bar {
    padding: 1rem 0.7rem;
    box-sizing: border-box;
    transition: var(--transition);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--view-width);
    position: relative;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }

  .close-btn {
    cursor: pointer;
    font-size: 1.5rem;
    border-color: transparent;
    background: transparent;
    color: var(--primary-500);
    position: absolute;
    right: 1rem;
    transition: var(--transition);
  }

  .close-btn:hover {
    transform: scale(1.05);
  }

  .side-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 1rem;
  }
  .side-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .side-link:hover {
    color: var(--primary-500);
  }
  .side-btn {
    padding: 0.4rem 0.75rem;
  }
  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .side-bar {
      display: none;
    }
  }
`

export default Wrapper
