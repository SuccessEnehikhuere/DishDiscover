import React from 'react'
import Wrapper from '../assets/wrappers/landing'
import { Link } from 'react-router-dom'
import icon1 from '../assets/images/Heart.svg'
import icon2 from '../assets/images/Home.svg'
import icon3 from '../assets/images/Leaf.svg'
import icon4 from '../assets/images/Circled.svg'
import icon5 from '../assets/images/+.svg'
import icon6 from '../assets/images/Cooking Book.svg'
import icon7 from '../assets/images/Star.svg'
import icon8 from '../assets/images/Time.svg'
import icon9 from '../assets/images/Gas Industry.svg'
import img1 from '../assets/images/Ellipse 4.svg'
import img2 from '../assets/images/Rectangle 6.svg'
import img3 from '../assets/images/Rectangle 7.svg'
import img4 from '../assets/images/Rectangle 8.svg'

const Landing = () => {
  return (
    <Wrapper>
      <div className="modal">
        <div className="modal-center">
          <div className="sidebar">
            <img src={icon3} />
            <img src={icon2} />
            <img src={icon1} />
            <img src={icon6} />
            <img src={icon4} />
            <div className="plus-icon">
              <img src={icon5} className="plus" />
            </div>
          </div>

          <div className="main-center">
            <div className="nav-bar">
              <div className="star-icon">
                <div className="star-circle">
                  <img src={icon7} className="star" />
                </div>
              </div>

              <div>
                <h2 className="heading-text">dish discover</h2>
                <div className="title-underline" />
              </div>

              <div className="circle">
                <div className="dark-circle" />
                <div className="lemon-circle" />
              </div>
            </div>

            <div className="modal-container">
              <div className="food-center">
                <div className="img-center">
                  <div className="icon-container">
                    <img src={icon8} className="timeIcon" />
                    <p className="timeIcon-text">45min</p>
                  </div>

                  <div>
                    <img src={img1} className="main-img" />
                  </div>

                  <div className="icon-container">
                    <img src={icon9} className="caloryIcon" />
                    <p className="caloryIcon-text">220cal</p>
                  </div>
                </div>

                <div>
                  <p className="center-text">Grilled Marinated Leg of Lamb</p>
                </div>
              </div>

              <button>
                <Link to="/Auth">start searching</Link>
              </button>
            </div>
          </div>

          <div className="aside-bar">
            <div>
              <div className="circle-lemon" />
              <img src={img2} />
            </div>
            <img src={img3} />
            <img src={img4} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Landing
