import React from 'react'
import './Footer.css' //footer css file

import android from '../../Assets/g-ply-icon.svg'  //googleplay svg
import ios from '../../Assets/ios_icon.svg' //IOS svg

import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        {/* full footer container */}
      <div className="footer-container">
        {/* footer table with address and useful links */}
        <div className="footer-links">
            <div className="footer-row">
                {/* logo and the address */}
                <div className="footer-col">
                    <div className="footer-head">
                        <h2>Rise Sox</h2>
                    </div>
                    <div className="footer-address">
                        <p>30th Mumbai Cross street,Mumbai main road,Maharastra-600011</p>
                    </div>
                    <div className="apps-link">
                      <a href='/#'><img src={android} alt='Android'></img></a>
                      <a href='/#'><img src={ios} alt='ios'></img></a>
                    </div>
                </div>
                {/* products and its links */}
                <div className="footer-col">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="/#">Pro Web</a></li>
                        <li><a href="/#">Pro Mobile</a></li>
                        <li><a href="/#">Mutual Funds</a></li>
                        <li><a href="/#">IPOs</a></li>
                        <li><a href="/#">Future and options</a></li>
                        <li><a href="/#">Stocks</a></li>
                        <li><a href="/#">Indices</a></li>
                        <li><a href="/#">Uplink Developer API</a></li>
                    </ul>
                </div>
                {/* Companys useful links */}
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                      <li><a href="/#">About Us</a></li>
                      <li><a href="/#">Market Talk</a></li>
                      <li><a href="/#">Brokerage Charges</a></li>
                      <li><a href="/#">Refer and Earn</a></li>
                      <li><a href="/#">Announcements</a></li>
                      <li><a href="/#">Partner with us</a></li>
                      <li><a href="/#">Press release</a></li>
                      <li><a href="/#">Contact Us</a></li>
                    </ul>
                </div>
                {/* Company services detail links */}
                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                      <li><a href="/#">Demat Acoount</a></li>
                      <li><a href="/#">Trading Account</a></li>
                      <li><a href="/#">Mutual Fund Account</a></li>
                      <li><a href="/#">Company Trading</a></li>
                      <li><a href="/#">Equity Trading</a></li>
                      <li><a href="/#">Download Forms</a></li>
                      <li><a href="/#">Margin Sheets</a></li>
                      <li><a href="/#">Help center</a></li>
                    </ul>
                </div>
                {/* Social media links */}
                <div className="footer-col">
                    <h3>Social</h3>
                    <ul>
                      <li><FaLinkedin color="#fff" /><a href="/#"className='media-link'>Linked-in</a></li>
                      <li><FaFacebookSquare color="#fff" /><a href="/#"className='media-link'>Facebook</a></li>
                      <li><FaTwitter color="#fff" /><a href="/#"className='media-link'>Twitter</a></li>
                      <li><FaWhatsapp color="#fff" /><a href="/#"className='media-link'>Whatsapp</a></li>
                      <li><FaYoutube color="#fff" /><a href="/#"className='media-link'>Youtube</a></li>
                    </ul>
                </div>         
            </div>
        </div>
        <div className="footer-border"></div>
        {/* Footer copyrights */}
        <div className="copyrights">
            <div className="privacy">
                <a href='/#'>Privacy & Policy</a>
                <a href='/#'>Invester Chart</a>
            </div>
            <div className="design">
                <p>Designed by MUTHU RAMAN</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
