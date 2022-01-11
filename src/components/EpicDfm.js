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


const EpicDFMFunction = () => {
  const [StateSession, setStateSession] = useState([]);
  const [SessionResponse, setSessionResponse] = useState([]);
  const [KeyMapResponse, setKeyMapResponse] = useState([]); 
  const [MarketContentResponse, setMarketContentResponse] = useState([]);
  const [PeopleApiResponse, setPeopleApiResponse] = useState([]); 
  const [KeyMap, setKeyMap] = useState([]); 
  const [MarketContent, setMarketContent] = useState([]);
  const [PeopleApi, setPeopleApi] = useState([]);
  const [MarketText, setMarketText] = useState([]);
  const [KeyNameone, setKeyNameone] = useState([]); 
  const [KeyLinkone, setKeyLinkone] = useState([]); 
  const [KeyNametwo, setKeyNametwo] = useState([]); 
  const [KeyLinktwo, setKeyLinktwo] = useState([]); 
  const [KeyNamethree, setKeyNamethree] = useState([]); 
  const [KeyLinkthree, setKeyLinkthree] = useState([]); 

  const LoopingFunction=()=>{
  
    var content;
    var ArrLinkResponse = [];
    var ArrKeyLink = [];
    var KeyName1;
    var KeyLink1;
    
    var KeyName2;
    var KeyLink2;
    
    var KeyName3;
    var KeyLink3;    
      
    var allKeys = ["KeyName"];
    
        for(let j=0 ; j< KeyMap.length ;j++){
      
          let obj={};
      
          for(let i=0 ; i< MarketContent.length ;i++){
            if(MarketContent[i].id == 39){
    
            if(MarketContent[i].id == KeyMap[j].allpages_id){
              console.log(MarketContent[i].id,MarketContent[i].content );
              console.log("MarketContent[i].id");
  
              var MarketText = MarketContent[5].content
              console.log("MarketText");
              console.log(MarketText);
              
                setMarketText(MarketText);
  
                for(let k=0;k<PeopleApi.length;k++){
                
                  if(KeyMap[j].key_id == PeopleApi[k].id){
      
                    obj[allKeys[0]] = PeopleApi[k].name ;

                    console.log(obj);
                    console.log("obj");
                  
                    ArrLinkResponse.push(PeopleApi[k].name);
                    ArrKeyLink.push(PeopleApi[k].id)
                  }
                }
                }  
              } 
            }
          }

        // Arrreplica = ArrLinkResponse;
        // for(let l=0; l< ArrLinkResponse.length;l++){
  
        //   for(let m=0; m< Arrreplica.length;m++){
          
        //     if(ArrLinkResponse[l].keyName == Arrreplica[m].keyName){
        //       console.log("SAMEEE")
        //     }
        //   }
        // }
  
        console.log(ArrLinkResponse);
        console.log("ArrLinkResponse");
        const startingArray = [1, 2, 2, 3, 2, 3, 3, 3];
  
        function unique(array){
          return array.filter(function(el, index, arr) {
              return index == arr.indexOf(el);
          });
        }
        
        const uniqueArray = unique(ArrLinkResponse);
        
        console.log(uniqueArray);
        console.log("uniqueArray");
        KeyName1 = uniqueArray[2];
        KeyLink1 = ArrKeyLink[2];
        
        KeyName2 = uniqueArray[0];
        KeyLink2 = ArrKeyLink[0];
        
        KeyName3 = uniqueArray[1];
        KeyLink3 = ArrKeyLink[1];
  
  
        setKeyNameone(KeyName1);
        setKeyLinkone(KeyLink1);
  
        setKeyNametwo(KeyName2);
        setKeyLinktwo(KeyLink2);
        
        setKeyNamethree(KeyName3);
        setKeyLinkthree(KeyLink3);
  
  
    }

  const SettingFunction=()=>{

    setStateSession(SessionResponse);
    setStateSession(SessionResponse);

    setStateSession(SessionResponse);
    console.log("SETTING FUNCTION")
 
    const ArrServiceResponse = [];
    setKeyMap(KeyMapResponse);
    setMarketContent(MarketContentResponse)
    setPeopleApi(PeopleApiResponse)
  
    // LoopingFunction();
    console.log(KeyMap);
    console.log("KeyMap");
  
    console.log(MarketContent);
    console.log("MarketContent");
    LoopingFunction();

  
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
    });
    async function fetchMyService3API(){

      const url =window.location.origin+'/people_api';
      
       fetch(url).then(resp=> resp.json())
       .then (resp => {
    
        console.log(resp)
        console.log("key-people-api-resp")
    
        setPeopleApiResponse(resp)
    
      })
        
       .catch(e=>{
         console.log(e);
       })
    
          console.log("allKeys")
    
    
    
    };
    async function fetchMyServiceAPI(){
    
      const url =window.location.origin+'/key_mapdata';
      
       fetch(url).then(resp=> resp.json())
       .then (resp => {
    
        console.log(resp)
        console.log("key-map-resp")
    
        setKeyMapResponse(resp)
    
      })
        
       .catch(e=>{
         console.log(e);
       })
    
          console.log("allKeys")
    
    
    
    };
    async function fetchMyService2API(){
    
      const url =window.location.origin+'/market_contentapi';
      
       fetch(url).then(resp=> resp.json())
       .then (resp => {
        console.log(resp)
        console.log("Market-content-resp")
    
        setMarketContentResponse(resp)
    
      })  
       .catch(e=>{
         console.log(e);
       })
    
          console.log("allKeys")
    
    };
    
    async function fetchMyAPI(){
      fetch(window.location.origin+'/session_data').then(resp => resp.json()).then(resp =>  {
        console.log(resp);
        console.log("resp");
      
        setSessionResponse(resp);
      
      
      })
    }
          useEffect(()=>{
    
            fetchMyAPI();
            fetchMyService2API();
            fetchMyServiceAPI();
            fetchMyService3API()
            
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
            <div className="accordion__item__header"><NavLink to="/markets/Epic-FixedIncome" className="navlink a">Fixed Income</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">UCITS - NFA Global Bond Fund UI <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a">UCITS - Next Generation Bond Fund UI<span className="fa fa-angle-right"></span></NavLink></li>
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicNextGenPCC" className="navlink a " >PCC - Next Generation Bond Fund<span className="fa fa-angle-right"></span></NavLink></li>
                   : 
                <li><a href={window.location.origin+"/login_user"} className="navlink a">PCC - Next Generation Bond Fund<span className="fa fa-angle-right"></span></a></li> 
                 }
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicRNBpcc" className="navlink a " >PCC - Renminbi Bond Fund<span className="fa fa-angle-right"></span></NavLink></li>
                :
                <li><a href={window.location.origin+"/login_user"} className="navlink a">PCC - Renminbi Bond Fund<span className="fa fa-angle-right"></span></a></li>
                }
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-ManagedFutures" className="navlink a">Managed Futures </NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicfinanceTrends" className="navlink a">Financial Trends <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-Equitites" className="navlink a">Equities</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicglobalEquity" className="navlink a">Global Equity Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicorientalFocus" className="navlink a">Oriental Focus Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicAsianCentricGlobalGrowth" className="navlink a">Asian Centric Global Growth Fund <span className="fa fa-angle-right"></span></NavLink></li>
				        <li><NavLink to="/markets/EpicUKEquityMarketFund" className="navlink a">UK Equity Market Fund <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-MultiAsset" className="navlink a">Multi Asset</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicipWealthFund" className="navlink a">Wealth Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipDiversifiedIncomeFund" className="navlink a">Diversified Income <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetFund" className="navlink a">Multi Asset Balanced <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetGrowthFund" className="navlink a">Multi Asset Growth <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
          <div className="accordion__item__header_dfm active"><NavLink to="/markets/EpicDFM" className="navlink active-dis">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              {/* <ul>
              <li><NavLink to="/market/EpicDFM" className="navlink a ">EPIC DFM <span className="fa fa-angle-right"></span></NavLink></li>           

                
              </ul> */}
            </div>
          </div>

          <div className="accordion__item">
            <div className="accordion__item__header "><NavLink to="/markets/Epic-Insights" className="navlink a">EPIC Insights</NavLink></div>
            <div className="accordion__item__content ">
              <ul>
                <li><NavLink to="/markets/EpicDailyUpdates" className="navlink a">Daily Updates <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/EpicInsights" className="navlink a">News  <span className="fa fa-angle-right"></span></NavLink></li> */}
                
              </ul>
            </div>
          </div>

        </div>

      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 offset-md-1">
    
    
      {/* <ul class="nav nav-tabs" role="tablist">
        <li className="nav-item nav-item-tabs latest-news"> <a className="nav-link active latest-news" data-toggle="tab" id="summaryButton" onClick={latestNews} href="#nine" role="tab">Latest News</a> </li>
      </ul> */}
    
    
    <div class="Section__SectionContent-sc-1iot0f7-2 "dangerouslySetInnerHTML={{ __html: MarketText }}>
    {/* <h4 class="Section__SectionHeader-sc-1iot0f7-3 Xonlk">
        Latest News
    </h4> */}
    {/* <p class="Section__SectionSubheading-sc-1iot0f7-4 ktJBWY"></p> */}
    {/* {NewsArrState.map(renderNewsData)} */}
   </div>
    {/* <p className="Section__SectionSubheading-sc-1iot0f7-4 ktJBWY">The EPIC Discretionary Fund Management Proposition is offered to FCA regulated firms ("Advisers") only, on an "agent-as-client" basis. Please contact us for further information.</p>
    <h4>Model Portfolio Service</h4>
<h4>Risk Managed Decumulation Portfolios</h4>
<p>
In a world of negative yielding debt and low income, pension needs become difficult to meet. Investors are required to take higher risk to satisfy yield requirements and this has associated drawdown risks. However, this can mean initial capital is run down over the retirement period.<br/><br/>
In decumulation portfolios, investors redeem units of capital to fund their retirement requirements. Through the use of diversifiers and uncorrelated assets, our portfolios are better able to match retirement duration whilst preserving capital and minimising drawdown.<br/><br/>
Our aim was to create a decumulation portfolio that is truly fit for purpose for the whole advisory market; building the portfolio from scratch rather than trying to retrofit an existing model.<br/><br/>
The result is a portfolio that uses uncorrelated funds, rather than complex derivatives, to better match retirement duration whilst achieving the joint requirements of capital preservation and minimising drawdown.</p>
<h4>AIM Portfolio</h4>
<p>
A portfolio of 20-30 companies. We focus on investing in companies with strong sustainable growth potential to which market influences have limited impact. Our strategy is to invest in companies that have high quality characteristics in terms of their business models, financials, competitive advantage and their management. We believe that this will provide resilience during periods of market uncertainty.<br/><br/>
In order to generate superior long-term risk adjusted returns we need to be invested in the right companies and at the right price. Investment is subject to trends and cycles and we do not invest in companies simply because they are fashionable and might rise in the short term. For example, during the Dotcom boom valuations of many Tech companies’ share prices and valuations rocketed without a rational basis. We avoid these kind of situations as they pose high risks.</p>
<h4>Risk Targeted Portfolios</h4><p>
Significant investment expertise in building out rigorous processes surrounding the selection, evaluation and monitoring of funds and their fund managers.<br/><br/>
Track record of managing portfolios with target volatility corridors in mind, whilst aiming to maximise risk/reward characteristics.<br/><br/>
Our risk targeted portfolios have been designed to enable access via external platforms.<br/><br/>
A bespoke solution is available from preferred provider Fundment. This all-in-one solution, specifically designed with the needs of Advisers in mind, brings together expert discretionary investment management services from EPIC with an efficient, white-labelable, and straight through investment platform from Fundment, helping Advisers to deliver a holistic service to their clients at a straightforward and low cost.<br/><br/>
Transparent and disruptive all-in-one fee structure:<br/>
Active Risk Targeted & Risk Managed Decumulation All-in-One Solutions Total Fee 0.90% Actively managed portfolios inc. ongoing charge figure (VAT-exempt)<br/><br/>
Passive Solution Total Fee 0.66% ETF portfolios inc. ongoing charge figure (VAT-exempt)</p> */}


    
    


        {/* <div class="PaginationButtons__Wrapper-sc-1murby2-0 frVXsi"><a rel="next" href="/news/2">← Older Articles</a></div> */}
        {/* </div> */}
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
    <div class="col-md-4">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinkone+"#"+KeyLinkone}>{KeyNameone}</a></strong> <br />
          {/* hiren.patel@epicpe.com */}
          </p>
      </div>
      {/* <div class="col-md-3">
        <p ><strong><a href=window.location.origin+"/people/45#45">Pushpanshu Prakash</a></strong> <br />
          mark.harris@epicpe.com
          </p>
      </div> */}
      <div class="col-md-4">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinktwo+"#"+KeyLinktwo}>{KeyNametwo}</a></strong> <br />
          {/* darren.goodwin@epicpe.com */}
          </p>
      </div>
      <div class="col-md-4">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinkthree+"#"+KeyLinkthree}>{KeyNamethree}</a></strong> <br />
          {/* frederick.coldham@epicpe.com */}
          </p>
      </div>





    </div>
  </div>
  </section>

</section>
{/* :<div className="center"><ReactBootstrap.Spinner animation="border"/></div>  */}
{/* } */}
</Fragment>
)

}
 
export default EpicDFMFunction;

