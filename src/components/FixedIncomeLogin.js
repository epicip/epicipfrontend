// import React from 'react';
import { render } from '@testing-library/react';
import React, { useState, useEffect, PureComponent, useRef, useMemo, useCallback, Fragment } from 'react';
// import Accordion from 'react-bootstrap/Accordion'

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
import "./EpicfinanceTrends.css";
import { isEqual } from "lodash";
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


const FixedIncomeFunction = () => {
    const [StateSession, setStateSession] = useState([]);
    const [SessionResponse, setSessionResponse] = useState([]);
  
    const SettingFunction=()=>{
  
      setStateSession(SessionResponse);
    
    }
    $( document ).ready(function() {
        SettingFunction();

    if ($(".accordion__item__header").length > 0) {
  
        var active = "active";
        var activedis = "active-dis";
        $(".accordion__item__header").on("click", function (event) {
          event.stopImmediatePropagation();
          console.log("clicked")
          $(this).toggleClass(active);
          $(this).find(".navlink").toggleClass(activedis);
          
        $(this).next("div").slideToggle(200);
        });
        }
        if( $("section").hasClass('key-contacts')){
          $("div").removeClass('footer-container-line')
          
         }
    });
    async function fetchMyAPI(){
        fetch(window.location.origin+'/session_data').then(resp => resp.json()).then(resp =>  {
          console.log(resp);
          console.log("resp");
        
          setSessionResponse(resp);
        
        
        })
      }
            useEffect(()=>{
      
              fetchMyAPI()
              $('.btn-setting')[0].click();
              
            },[])
return(

    <Fragment>

    {/* { status === true ?  */}
    
<section className="main-box">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-4">
      <div className="accordion">
      <div className="accordion__item">
            <div className="accordion__item__header active"><NavLink to="/markets/Epic-FixedIncome" className="navlink a active-dis">Fixed Income</NavLink></div>
            <div className="accordion__item__content  block">
              <ul>
                {/* <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">EPIC - NFA Global Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a">EPIC - Next Generation Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicNextGenPCC" className="navlink a " >EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                   : 
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li> 
                 }
                {/* { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicRNBpcc" className="navlink a " >EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                :
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li>
                } */}
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-ManagedFutures" className="navlink a">Managed Futures</NavLink> </div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicfinanceTrends" className="navlink a">EPIC Financial Trends <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-Equitites" className="navlink a">Equities</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicglobalEquity" className="navlink a">EPIC Global Equity Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicorientalFocus" className="navlink a">EPIC Oriental Focus Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicAsianCentricGlobalGrowth" className="navlink a">VT-EPIC Asian Centric Global Growth Fund <span className="fa fa-angle-right"></span></NavLink></li>
				        {/* <li><NavLink to="/markets/EpicUKEquityMarketFund" className="navlink a">VT-EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/AIMPortfolioDFM" className="navlink a">AIM Portfolio <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-MultiAsset" className="navlink a">Multi Asset</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicipWealthFund" className="navlink a">EPIC Wealth Fund <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/EpicipDiversifiedIncomeFund" className="navlink a">VT-EPIC Diversified Income <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicipMultiAssetFund" className="navlink a">VT-EPIC Multi Asset Balanced <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetGrowthFund" className="navlink a">VT-EPIC Multi Asset Growth <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a ">EPIC MPS Risk Managed Decumulation 5 <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/RiskTargetedDFM" className="navlink a">Risk Targeted Portfolios <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/RTM3" className="navlink a">EPIC MPS Risk Target Managed 3 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM5" className="navlink a">EPIC MPS Risk Target Managed 5 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM7" className="navlink a">EPIC MPS Risk Target Managed 7 <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Hedge-Funds" className="navlink a">Fund of Hedge Funds </NavLink></div>
          </div>
          {/* <div className="accordion__item">
            <div className="accordion__item__header_dfm"><NavLink to="/markets/EpicDFM" className="navlink a ">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              <ul>
              <li><NavLink to="/market/EpicDFM" className="navlink a ">EPIC DFM <span className="fa fa-angle-right"></span></NavLink></li>           

                
              </ul>
            </div>
          </div> */}
           {/* <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/EpicDFM" className="navlink a">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a ">Risk Managed Decumulation Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/AIMPortfolioDFM" className="navlink a">AIM Portfolio <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RiskTargetedDFM" className="navlink a">Risk Targeted Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div> */}

          <div className="accordion__item">
            <div className="accordion__item__header "><NavLink to="/markets/Epic-Insights" className="navlink a">EPIC Insights</NavLink></div>
            <div className="accordion__item__content ">
              <ul>
                {/* <li><NavLink to="/markets/EpicDailyUpdates" className="navlink a">Daily Updates <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicInsights" className="navlink a">News  <span className="fa fa-angle-right"></span></NavLink></li>
                
              </ul>
            </div>
          </div>

        </div>

      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 offset-md-1">
    
    
      {/* <ul class="nav nav-tabs" role="tablist">
        <li className="nav-item nav-item-tabs latest-news"> <a className="nav-link active latest-news" data-toggle="tab" id="summaryButton" onClick={latestNews} href="#nine" role="tab">Latest News</a> </li>
      </ul> */}
    
    
    <div class="Section__SectionContent-sc-1iot0f7-2 ">
    {/* <h4 class="Section__SectionHeader-sc-1iot0f7-3 Xonlk">
        Latest News
    </h4> */}
    {/* <p class="Section__SectionSubheading-sc-1iot0f7-4 ktJBWY"></p> */}
    {/* {NewsArrState.map(renderNewsData)} */}
    {/* <p className="Section__SectionSubheading-sc-1iot0f7-4 ktJBWY">The EPIC Discretionary Fund Management Proposition is offered to FCA regulated firms ("Advisers") only, on an "agent-as-client" basis. Please contact us for further information.</p> */}
    <h3>Fixed Income</h3>

<p><br/>
Rather than divide the world between developed and emerging markets we believe it makes more sense to separate creditors from debtors.<br/><br/>
Traditionally investors have segmented the world into developed and emerging economies, whereas we look at creditors vs debtors. Many so called “developed” countries have amassed substantial debts and are in fact much riskier than is often perceived. Conversely, many countries classified as “emerging” have strong fundamentals, low levels of government debt, high credit quality and incomes well above those of many “developed” countries.<br/><br/>
Net Foreign Asset (NFA) analysis is a key driver of country and currency returns.</p>
<h3>Our products</h3><br/>
                <p>
                    {/* <NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a decoration-none">EPIC - NFA Global Bond Fund UI (UCITS) <span className="fa fa-angle-right"></span></NavLink><br/> */}
                    <NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a decoration-none">EPIC - Next Generation Bond Fund UI  (UCITS)<span className="fa fa-angle-right"></span></NavLink><br/>
                    { StateSession !== 0 ?
                <NavLink to="/markets/EpicNextGenPCC" className="navlink a " >EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink>
                   : 
                <a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a> 
                 }<br/>
                {/* { StateSession !== 0 ?
                <NavLink to="/markets/EpicRNBpcc" className="navlink a " >EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink>
                :
                <a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a>
                } */}
                    {/* <NavLink to="/markets/EpicRNBpcc" className="navlink a decoration-none">Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink><br/>
                    <NavLink to="/markets/EpicNextGenPCC" className="navlink a decoration-none">Next Generation Bond Fund (PCC)
                        <span className="fa fa-angle-right"></span>
                    </NavLink> */}

                    <br/>

                </p>
        


        {/* <div class="PaginationButtons__Wrapper-sc-1murby2-0 frVXsi"><a rel="next" href="/news/2">← Older Articles</a></div> */}
        </div>
  </div>
    </div>
  </div>
  <section class="key-contacts">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4>Key contacts:</h4>
        <hr />
      </div>
    </div>
    <div class="row">
    <div class="col-md-3">
        <p ><strong><a href={window.location.origin+"/people/47#47"}>Frederick Coldham</a></strong> <br />
          {/* hiren.patel@epicpe.com */}
          </p>
      </div>
      <div class="col-md-3">
        <p><strong><a href={window.location.origin+"/people/37#37"}>Andy Seaman</a></strong> <br />
          {/* andy.seaman@epicpe.com */}
          </p>
      </div>

      <div class="col-md-3">
        <p ><strong><a href={window.location.origin+"/people/38#38"}>Yannis Katsis</a></strong> <br />
          {/* darren.goodwin@epicpe.com */}
          </p>
      </div>
      <div class="col-md-3">
        <p ><strong><a href={window.location.origin+"/people/39#39"}>Josh Palmer</a></strong> <br />
          {/* frederick.coldham@epicpe.com */}
          </p>
      </div>





    </div>
    <br/>
    <br/>
    <span>For General Enquiries:-<a href = "mailto: markets@epicip.com"><span> markets@epicip.com</span></a></span>
  </div>
  </section>
</section>
{/* :<div className="center"><ReactBootstrap.Spinner animation="border"/></div>  */}
{/* } */}
</Fragment>
)

}
 
export default FixedIncomeFunction;

