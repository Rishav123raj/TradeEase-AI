import React from 'react'
import './List.css' // lists css file

//lists images
import stock from '../../Assets/types-icon/stocks.png'
import fund from '../../Assets/types-icon/fund.png'
import ipo from '../../Assets/types-icon/IPOs.png'
import bitcoin from '../../Assets/types-icon/bitcoin.png'
import plan from '../../Assets/types-icon/plans.png'
import coin from '../../Assets/types-icon/coin.png'


import android from '../../Assets/g-ply-icon.svg' //googleplay svg
import ios from '../../Assets/ios_icon.svg' //IOS svg
import app_Img from '../../Assets/app-img.png' //apps image

const List = () => {
  return (
    <div>
      {/* Lists container */}
      <div className="list-container">
        {/* lists heading */}
        <div className="list-head">
          <h1>One Platforms,Multiple Choices!</h1>
          <p>We got something for everyone</p>
          <div className="btn-account-div">
            <button className='btn-account'>Start Investing</button>
          </div>  
        </div>
        {/* Lists row div */}
        <div className="list-row">
            <div className="list-col">
                <div className="list-col-div">
                    <div className="list-img">
                       <img src={stock} alt='Stocks'></img>
                    </div>
                    <div className="list-title">
                      <h4>Stocks</h4>
                    </div> 
                </div>
            </div>
            <div className="list-col">
                <div className="list-col-div">
                    <div className="list-img">
                       <img src={fund} alt='fund'></img>
                    </div>
                    <div className="list-title">
                      <h4>Mutual Fund</h4>
                    </div> 
                </div>
            </div>
            <div className="list-col">
                <div className="list-col-div">
                    <div className="list-img">
                       <img src={ipo} alt='ipo'></img>
                    </div>
                    <div className="list-title">
                      <h4>IPOs</h4>
                    </div> 
                </div>
            </div>
            <div className="list-col">
                <div className="list-col-div">
                    <div className="list-img">
                       <img src={bitcoin} alt='bitCoin'></img>
                    </div>
                    <div className="list-title">
                      <h4>Bit Coins</h4>
                    </div> 
                </div>
            </div>
            <div className="list-col">
                <div className="list-col-div">
                    <div className="list-img">
                       <img src={plan} alt='plans'></img>
                    </div>
                    <div className="list-title">
                      <h4>Future and Options</h4>
                    </div> 
                </div>
            </div>
            <div className="list-col">
                <div className="list-col-div">
                    <div className="list-img">
                       <img src={coin} alt='coin'></img>
                    </div>
                    <div className="list-title">
                      <h4>Currencies</h4>
                    </div> 
                </div>
            </div>
        </div>
      </div>
      {/* mobile apps div */}
      <div className="mobile-apps">
        <div className="apps-div-row">
          <div className="apps-div-col">
            <div className="app-head">
              <h1>Download One of India's Best Trading App</h1>
            </div>
            <div className="apps-link">
              <a href='/#'><img src={android} alt='Android'></img></a>
              <a href='/#'><img src={ios} alt='ios'></img></a>
            </div>
          </div>
          <div className="apps-div-col">
            <img src={app_Img} alt='Apps'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
