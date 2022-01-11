import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Accordion } from "react-bootstrap";
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;



const AppHome = () => {
    return (
    
<section className="main-box">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-4">
          
        <div className="accordion">
          <div className="accordion__item">
              
            <div className="accordion__item__header">Fixed Income </div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC UCITS - NFA Global Bond Fund UI <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">EPIC UCITS - Next Generation Bond Fund UI <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/EpicfinanceTrends">Managed Futures</NavLink> </div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC Financial Trends <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header">Equities</div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC Global Equity Fund <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">EPIC Oriental Focus Fund <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">VT EPIC Asian Centric Global Growth Fund <span className="fa fa-angle-right"></span></a></li>
				  <li><a href="#">VT EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header">Multi Asset</div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC Wealth Fund <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">VT EPIC Diversified Income <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">VT EPIC Multi Asset Balanced <span className="fa fa-angle-right"></span></a></li>
				<li><a href="#">VT EPIC Multi Asset Diversified <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">VT EPIC Multi Asset Growth <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header">Discretionary  <br />Fund Management</div>
          </div>
        </div>

      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 offset-md-1">
        <h4>Our fund managers offer innovative investment products across traditional and alternative asset classNamees, and have the freedom to manage money in line with their distinctive investment strategies, unconstrained by a house view.</h4>
       
		  <p>We offer a diversified range of equity, alternative and multi-asset funds and have a specialist fixed income team with global perspectives. We also have a discretionary fund management proposition available to FCA regulated firms on an "agent-as-client" basis.</p>
		  <p>Our operational, marketing and sales infrastructure is supported by EPIC Administration and makes us a good home for both established and emerging fund managers seeking an entrepreneurial environment.</p>
		  <p>We are a limited liability partnership, enabling our managers to share in the success – and also the risks – of the business in alignment with our clients’ interests.</p>
<p>Our team has decades of investing experience developed at some of the leading names in asset management and investment banking. We have a strong track-record of delivering performance, growing assets and building long-term, trusted relationships.
</p>
		  
      </div>
    </div>
  </div>
</section>

    );
}
 
export default AppHome;

