import React from 'react'
import './Hero.css'
import ImageSlider from '../ImageSlider/ImageSlider'
const Hero = () => {
  return (
    <div>
        {/* Main container */}
      <div className="container">
        {/* content div start */}
        <div className="content">
            <div className="content-left">
                <div className="primary-bg">
                    {/* Content header */}
                    <div className="content-heading">
                        <h1>Invest Right,Invest Now With Rise Stox</h1>
                    </div>
                    {/* Content describe para */}
                    <div className="content-des">
                        <p>Trusted by 1 Crore + Indians</p>
                    </div>
                    {/* Content Mobile number and sign-up div */}
                    <div className="content-fl-div">
                        <div className="fl-div-left">
                            <span>+91</span>
                            <input type='text' placeholder='Enter Mobile Number' className='input-field'></input>
                        </div>
                        <div className="fl-div-right">
                            <button className='btn-sign-up sign-up-sec'>Sign Up</button>
                        </div>
                    </div>
                    {/* Content paragraph */}
                    <div className="content-p">
                        <p>By Signing up,you agreed to recieve transaction updates on Whatsapp,
                            You may also recieve a call from an Rise Stox representative to help you open the account.
                        </p>
                    </div>
                    {/* Content row */}
                    <div className="content-row">
                        <div className="content-col">
                            <h2>4.4 +</h2>
                            <p>Avg.App rating</p>
                        </div>
                        <div className="content-col">
                            <h2>₹ 0</h2>
                            <p>AMC</p>
                        </div>
                        <div className="content-col">
                            <h2>₹ 20</h2>
                            <p>Brokerage</p>
                        </div>
                        <div className="content-col">
                            <h2>God</h2>
                            <p>Backed by the best</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content right image */}
            <div className="content-right">
                <div className="banner-img">
                    {/* Image-slider component */}
                    <ImageSlider></ImageSlider>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
