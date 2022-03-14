import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container'>
        <div className='row1'>
            <div className='col1'>
                <img src="images/ishop.jpg" alt='logo' className='ishopLogo'></img>
                <p className='col1Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p> 
            </div>
            <div className='col2'>
                <span className='followUs'>Follow Us</span>
                <p className='col2Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br/>
                    <div className='socialMediaLogo'>
                        <span className='facebookLogo'><img src="images/facebook.jpg"></img></span>  
                        <span><img src="images/twitter.jpg"></img></span>
                    </div>
                </p>
                  
            </div>
            <div className='col3'>
                <span className='contactUs'>Contact Us</span>
                <p className='col3Content'>
                        iShop: address @building 124<br/>
                        Call us now: 0123-456-789<br/>
                        Email: support@whatever.com 
                </p>    
            </div>
        </div>
        <div className='breakthrough' ></div>
        <div className='row2'>
            <div className='col1'>
                <span className='information'>Infomation</span>
                <ul list-style-type='none' className='infoDetails'>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>      
                </ul>   
            </div>
            <div className='col2'>
                <span className='service'>Service</span>
                <ul list-style-type='none' className='serviceDetails'>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>      
                </ul>    
            </div>
            <div className='col3'>
                <span className='extras'>Extras</span>
                <ul list-style-type='none' className='extrasDetails'>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>      
                </ul>     
            </div>
            <div className='col4'>
                <span className='myAccount'>My Account</span>
                <ul list-style-type='none' className='myAccountDetails'>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>      
                </ul>     
            </div>
            <div className='col5'>
                <span className='usefulLinks'>Userful Links</span>
                <ul list-style-type='none' className='usefulLinksDetails'>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>      
                </ul>    
            </div>
            <div className='col6'>
                <span className='ourOffers'>Our Offers</span>
                <ul list-style-type='none' className='ourOffersDetails'>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>      
                </ul>
            </div>
        </div>
        {/* <hr/> */}
        <div className='row3'>
            <img src="images/Western_union.jpg" className="union"></img>
            <img src="images/master_card.jpg" className="master"></img>
            <img src="images/Paypal.jpg" className="paypal"></img>
            <img src="images/visa.jpg" className="visa"></img>
        </div>
    </div>
  )
}

export default Footer