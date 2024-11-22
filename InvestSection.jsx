import React, { useState, useEffect } from 'react'
import './InvestSection.css' //css file
//Invest section image files
import investImg1 from '../../Assets/types-img/investImg1.jpg'
import investImg2 from '../../Assets/types-img/investImg2.jpg'
import investImg3 from '../../Assets/types-img/investImg3.jpg'
//Trade section image files
import tradeImg1 from '../../Assets/types-img/tradeImg1.jpg'
import tradeImg2 from '../../Assets/types-img/tradeImg2.jpg'
import tradeImg3 from '../../Assets/types-img/tradeImg3.jpg'
//Learn section image files
import web_Img from "../../Assets/types-icon/web.png"
import course_Img from "../../Assets/types-icon/online.png"
import video_Img from "../../Assets/types-icon/video-course1.png"

const InvestSection = () => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div>
      {/* This types consists of invest,trade,learn details */}
      <div className="types-div">
        {/* type header for invest,trade,learn */}
        <div className="type-header">
          <div className="type-list">
            <ul>
              <li><a href='/#'>Invest</a></li>
              <li><a href='/#'>Trade</a></li>
              <li><a href='/#'>Learn</a></li>
            </ul>
          </div>
        </div> 
        {/* Types content start div */}
        <div className="type-content">
          {/* Invest details div */}
          <div className="invest-type-div">
            <div className="type-section-col">
              <div className="type-section-col-img">
                {currentImageIndex === 0 && <img src={investImg1} alt='invests'></img>}
                {currentImageIndex === 1 && <img src={investImg2} alt='invests'></img>}
                {currentImageIndex === 2 && <img src={investImg3} alt='invests'></img>}
              </div>
            </div>
            <div className="type-section-col">
              <div className="types-head">
                <h1>Rise Stox for Investors</h1>
              </div>
              <div className="types-para">
                  <p>Invest Rights, Invest Now in Stocks,Mutual Funds and IPOs</p>
              </div>
              <div className="idea-div-row">
                <div className="idea-div-col"  style={{ borderLeft: currentImageIndex === 0 ? '2px solid #d91443' : 'none' }}>
                  <h2>Investment Ideas</h2>
                  <p>Top rated Funds|Best for beginners|Top 30 Actively traded Stocks</p>
                </div>
                <div className="idea-div-col"  style={{ borderLeft: currentImageIndex === 1 ? '2px solid #d91443' : 'none' }}>
                  <h2>News & Insights</h2>
                  <p>Analyst rating|Investment Checklist|Risk & return related info</p>
                </div>
                <div className="idea-div-col" style={{ borderLeft: currentImageIndex === 2 ? '2px solid #d91443' : 'none' }}>
                  <h2>Order Placements</h2>
                  <p>Open 24/7|Pay via UPI|Sip mode for Stocks & Mutual funds</p>
                </div>
                <div className="btn-account-div">
                    <button className='btn-account'>Learn More</button>
                </div> 
              </div>
            </div>

          </div>
          {/* Trader details div */}
          <div className="trader-type-div">
            <div className="type-section-col">
              <div className="types-head">
                <h1>Rise Stox pro for Traders</h1>
              </div>
              <div className="types-para">
                  <p>Powerful trading in Equities,Future,Options,Commodities and Currencies made simple</p>
              </div>
              <div className="idea-div-row">
                <div className="idea-div-col"style={{ borderLeft: currentImageIndex === 0 ? '2px solid #d91443' : 'none' }}>
                  <h2>Powerful Charting</h2>
                  <p>Trading View|8 Chart at once|100+ indicators|80+ drawing tools</p>
                </div>
                <div className="idea-div-col"style={{ borderLeft: currentImageIndex === 1 ? '2px solid #d91443' : 'none' }}>
                  <h2>Powerful Discovery</h2>
                  <p>OI Analysis|Option Chain with Greeks|FII & DII data|F7Q Smart lists</p>
                </div>
                <div className="idea-div-col"style={{ borderLeft: currentImageIndex === 2 ? '2px solid #d91443' : 'none' }}>
                  <h2>Powerful Execution</h2>
                  <p>GTT|Basket Order with upto 10 orders|2X Margin via Margin pledge on 450+stocks</p>
                </div>
                <div className="btn-account-div">
                    <button className='btn-account'>Learn More</button>
                </div> 
              </div>
            </div>
            <div className="type-section-col">
            <div className="type-section-col-img">
              {currentImageIndex === 0 && <img src={tradeImg1} alt='trades'></img>}
              {currentImageIndex === 1 && <img src={tradeImg2} alt='trades'></img>}
              {currentImageIndex === 2 && <img src={tradeImg3} alt='trades'></img>}
              </div>
            </div>
          </div>
          {/* Learn details div */}
          <div className="learn-type-div">
            <div className="learn-type-div-head">
              <div className="learn-div-title">
                <h1>Learn all about Stock Market</h1>
                <p>With our jargon-free and expert-led courses,Webinars,Events and self-help Videos</p>
              </div>
            </div>
            <div className="learn-row">
              <div className="learning-col">
                <div className="card-left">
                  <div className="card-img-div">
                    <div className="card-img">
                      <img src={web_Img} alt='webinars'></img>
                    </div>
                  </div>
                  <div className="card-title">
                    <h2>Webinars</h2>
                    <p>Online on Risk Management,Option Trading,Technical analysis and more</p>
                  </div>
                </div>
              </div>
              <div className="learning-col">
                <div className="learn-col-row">
                  <div className="card-right">
                    <div className="card-img-div">
                      <div className="card-img-1">
                        <img src={course_Img} alt='courses'></img>
                      </div>
                    </div>
                    <div className="card-title">
                      <h2>Courses</h2>
                      <p>Self help courses on option Trading with quizzes!</p>
                    </div>
                  </div>
                  <div className="card-right">
                    <div className="card-img-div">
                      <div className="card-img-1">
                        <img src={video_Img} alt='video-course'></img>
                      </div>
                    </div>
                    <div className="card-title">
                      <h2>Quick Videos</h2>
                      <p>Learn about stocks,Mutual funds,IPOs,Gold and more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestSection
