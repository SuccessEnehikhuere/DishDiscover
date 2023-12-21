import React from 'react'
import Wrapper from '../assets/wrappers/landing'

const Landing = () => {
  return (
    <Wrapper>
      <div className='modal'>
        <div className='modal-center'>
          <h2 className='heading-text'>welcome to dish discoverGallery</h2>
          <p>where every dish tells a story and every flavor is a journey.</p>
          <button>sign in</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Landing