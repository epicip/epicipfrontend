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


const EpicFixedIncomeFunction = () => {
  
  const [StateSession, setStateSession] = useState([]);
  const [SessionResponse, setSessionResponse] = useState([]);
  const [KeyMapResponse, setKeyMapResponse] = useState([]); 
  const [MarketContentResponse, setMarketContentResponse] = useState([]);
  const [PeopleApiResponse, setPeopleApiResponse] = useState([]); 
  const [KeyMap, setKeyMap] = useState([]); 
  const [MarketContent, setMarketContent] = useState([]);
  const [PeopleApi, setPeopleApi] = useState([]);
  const [MarketText, setMarketText] = useState([]);
  
  const [UniqueKeyContacts, setUniqueKeyContacts] = useState([]);
  const [KeyNameone, setKeyNameone] = useState([]); 
  const [KeyLinkone, setKeyLinkone] = useState([]); 
  const [KeyNametwo, setKeyNametwo] = useState([]); 
  const [KeyLinktwo, setKeyLinktwo] = useState([]); 
  const [KeyNamethree, setKeyNamethree] = useState([]); 
  const [KeyLinkthree, setKeyLinkthree] = useState([]); 
  const [KeyNamefour, setKeyNamefour] = useState([]); 
  const [KeyLinkfour, setKeyLinkfour] = useState([]); 
  const [KeyNamefive, setKeyNamefive] = useState([]); 
  const [KeyLinkfive, setKeyLinkfive] = useState([]); 
  

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
    
    var KeyName4;
    var KeyLink4;
    
    var KeyName5;
    var KeyLink5;
    
      
    var allKeys = ["KeyName"];
    
        for(let j=0 ; j< KeyMap.length ;j++){
      
          let obj={};
      
          for(let i=0 ; i< MarketContent.length ;i++){
      
            // console.log(MarketContent[0].content);
            // console.log("MarketContent[0].content");
            if(MarketContent[i].id == 35){

            if(MarketContent[i].id == KeyMap[j].allpages_id){
              console.log(MarketContent[i].id,MarketContent[i].content );
              console.log("MarketContent[i].id");
  
              var MarketText = MarketContent[i].content
              console.log("MarketText");
              console.log(MarketText);
              
                setMarketText(MarketText);
  
  
              for(let k=0;k<PeopleApi.length;k++){
                
                if(KeyMap[j].key_id == PeopleApi[k].id){
                  // console.log(PeopleApi[k].name);
                  // console.log("PeopleApi[k].name")
                  obj[allKeys[0]] = PeopleApi[k].name ;
  
                  console.log(obj);
                  console.log("obj");
          
                  ArrLinkResponse.push(PeopleApi[k].name)
                  ArrKeyLink.push(PeopleApi[k].id)
                }
  
              }           
            }
          }
        }
      } 
        // Arrreplica = ArrLinkResponse;
      //   for(let l=0; l< ArrLinkResponse.length;l++){
  
      //     for(let m=0; m< Arrreplica.length;m++){
      //     if(ArrLinkResponse[l].keyName == Arrreplica[m].keyName){
      //       console.log("SAMEEE")
      //     }
  
      //    }
      //  }
  
        console.log(ArrLinkResponse);
        console.log("ArrLinkResponse");
        const startingArray = [1, 2, 2, 3, 2, 3, 3, 3];
  
        function unique(array){
          return array.filter(function(el, index, arr) {
              return index == arr.indexOf(el);
          });
        }
        
        const uniqueArray = unique(ArrLinkResponse);
      if(uniqueArray){
        // setUniqueKeyContacts(uniqueArray)
        //   console.log(UniqueKeyContacts);
        //   console.log("UniqueKeyContacts");
      }      
      KeyName1 = uniqueArray[3];
      KeyLink1 = ArrKeyLink[3];
      
      KeyName2 = uniqueArray[0];
      KeyLink2 = ArrKeyLink[0];
      
      KeyName3 = uniqueArray[1];
      KeyLink3 = ArrKeyLink[1];

      KeyName4 = uniqueArray[2];
      KeyLink4 = ArrKeyLink[2];

      setKeyNameone(KeyName1);
      setKeyLinkone(KeyLink1);

      setKeyNametwo(KeyName2);
      setKeyLinktwo(KeyLink2);
      
      setKeyNamethree(KeyName3);
      setKeyLinkthree(KeyLink3);

      setKeyNamefour(KeyName4);
      setKeyLinkfour(KeyLink4);




          console.log(uniqueArray);
          console.log("uniqueArray");
          console.log(ArrKeyLink);
          console.log("ArrKeyLink");

    }
  
  
  const SettingFunction=()=>{

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
        fetchMyService3API();
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
            <div className="accordion__item__header"><NavLink to="/markets/Epic-ManagedFutures" className="navlink a">Managed Futures</NavLink> </div>
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
            <div className="accordion__item__header_dfm"><NavLink to="/markets/EpicDFM" className="navlink a ">Discretionary  <br />Fund Management</NavLink></div>
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
    
    
    <div class="Section__SectionContent-sc-1iot0f7-2 " dangerouslySetInnerHTML={{ __html: MarketText }}>

    </div>
    <div class="Section__SectionContent-sc-1iot0f7-2 " >
          <h3>Our products</h3><br/>
                <p>
                    <NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a decoration-none">UCITS - NFA Global Bond Fund UI <span className="fa fa-angle-right"></span></NavLink><br/>
                    <NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a decoration-none">UCITS - Next Generation Bond Fund UI<span className="fa fa-angle-right"></span></NavLink><br/>
                    {/* <a href=window.location.origin+"/login_user" className="navlink a">Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a><br/>
                    <a href=window.location.origin+"/login_user" className="navlink a">Next Generation Bond Fund (PCC)
                        <span className="fa fa-angle-right"></span>
                    </a> */}
                { StateSession !== 0 ?
                <NavLink to="/markets/EpicNextGenPCC" className="navlink a " >PCC - Next Generation Bond Fund<span className="fa fa-angle-right"></span></NavLink>
                   : 
                <a href={window.location.origin+"/login_user"} className="navlink a">PCC - Next Generation Bond Fund<span className="fa fa-angle-right"></span></a> 
                 }<br/>
                { StateSession !== 0 ?
                <NavLink to="/markets/EpicRNBpcc" className="navlink a " >PCC - Renminbi Bond Fund<span className="fa fa-angle-right"></span></NavLink>
                :
                <a href={window.location.origin+"/login_user"} className="navlink a">PCC - Renminbi Bond Fund<span className="fa fa-angle-right"></span></a>
                }
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
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinkone+"#"+KeyLinkone}>{KeyNameone}</a></strong> <br />
          {/* hiren.patel@epicpe.com */}
          </p>
      </div>
      <div class="col-md-3">
        <p><strong><a href={window.location.origin+"/people/"+KeyLinktwo+"#"+KeyLinktwo}>{KeyNametwo}</a></strong> <br />
          {/* andy.seaman@epicpe.com */}
          </p>
      </div>

      <div class="col-md-3">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinkthree+"#"+KeyLinkthree}>{KeyNamethree}</a></strong> <br />
          {/* darren.goodwin@epicpe.com */}
          </p>
      </div>
      <div class="col-md-3">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinkfour+"#"+KeyLinkfour}>{KeyNamefour}</a></strong> <br />
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
 
export default EpicFixedIncomeFunction;

