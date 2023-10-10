import React,{useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import $ from 'jquery'

// import { Accordion } from "react-bootstrap";
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;



const Home = () => {


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
          if(MarketContent[i].id == 6){

          if(MarketContent[i].id == KeyMap[j].allpages_id){
            console.log(MarketContent[i].id,MarketContent[i].content );
            console.log("MarketContent[i].id");

            var MarketText = MarketContent[0].content
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
        
                ArrLinkResponse.push(PeopleApi[k].name);
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
      
      console.log(uniqueArray);
      console.log("uniqueArray");

      KeyName1 = uniqueArray[0];
      KeyLink1 = ArrKeyLink[0];
      
      KeyName2 = uniqueArray[4];
      KeyLink2 = ArrKeyLink[4];
      
      KeyName3 = uniqueArray[2];
      KeyLink3 = ArrKeyLink[2];

      KeyName4 = uniqueArray[3];
      KeyLink4 = ArrKeyLink[3];

      KeyName5 = uniqueArray[1];
      KeyLink5 = ArrKeyLink[1];

      setKeyNameone(KeyName1);
      setKeyLinkone(KeyLink1);

      setKeyNametwo(KeyName2);
      setKeyLinktwo(KeyLink2);
      
      setKeyNamethree(KeyName3);
      setKeyLinkthree(KeyLink3);

      setKeyNamefour(KeyName4);
      setKeyLinkfour(KeyLink4);

      setKeyNamefive(KeyName5);
      setKeyLinkfive(KeyLink5);


  }

const SettingFunction=()=>{

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
    if( $("section").hasClass('key-contacts')){
      $("div").removeClass('footer-container-line')
      
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
async function fetchMyAPI(){

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

useEffect(()=>{

  fetchMyAPI();
  fetchMyServiceAPI();
  fetchMyService3API();
},[])  
  return (
    
<section className="main-box">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-4">
      
      <div className="accordion">
        <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-FixedIncome" className="navlink a">Fixed Income</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                {/* <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">EPIC - NFA Global Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a">EPIC - Next Generation Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li>
                {/* <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li> */}
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-ManagedFutures" className="navlink a">Managed Futures </NavLink></div>
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
          {/* <div className="accordion__item">
          <div className="accordion__item__header_dfm"><NavLink to="/markets/EpicDFM" className="navlink a ">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              { <ul>
              <li><NavLink to="/market/EpicDFM" className="navlink a ">EPIC DFM <span className="fa fa-angle-right"></span></NavLink></li>           

                
              </ul> }
            </div>
          </div> */}
          {/* <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/EpicDFM" className="navlink a">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a ">Risk Managed Decumulation Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM3" className="navlink a">EPIC MPS - Risk Target Managed 3 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM5" className="navlink a">EPIC MPS - Risk Target Managed 5 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM7" className="navlink a">EPIC MPS - Risk Target Managed 7 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/AIMPortfolioDFM" className="navlink a">AIM Portfolio <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RiskTargetedDFM" className="navlink a">Risk Targeted Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div> */}

          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-Insights" className="navlink a">EPIC Insights</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                {/* <li><NavLink to="/markets/EpicDailyUpdates" className="navlink a">Daily Updates <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicInsights" className="navlink a">News  <span className="fa fa-angle-right"></span></NavLink></li>
                
              </ul>
            </div>
          </div>

        </div>
        {/* <div className="accordion">
          <div className="accordion__item">
              
            <div className="accordion__item__header">Fixed Income </div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC UCITS - NFA Global Bond Fund UI <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">EPIC UCIT - Next Generation Global Bond Fund UI <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/EpicfinanceTrends">Financial Trends</NavLink> </div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC Financial Trends <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/EpicglobalEquity">Global Equity</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><a href="#">EPIC Global Equity Fund <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">EPIC Oriental Focus Fund <span className="fa fa-angle-right"></span></a></li>
                <li><a href="#">VT EPIC Asian Centric Glocal Growth Fund <span className="fa fa-angle-right"></span></a></li>
				  <li><a href="#">VT EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/EpicorientalFocus">Oriental Focus</NavLink></div>
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
            <div className="accordion__item__header"><NavLink to="/EpicAsianCentricGlobalGrowth">Asian Centric Global Growth Fund</NavLink></div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/EpicUKEquityMarketFund">UK Equity Market Fund</NavLink></div>
          </div>
        </div> */}
        
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 offset-md-1" dangerouslySetInnerHTML={{ __html: MarketText }}>
        {/* <h4 className="head-font-home">Our fund managers offer innovative investment products across traditional and alternative asset classes and have the freedom to manage money in line with their distinctive investment strategies, unconstrained by a house view.</h4>
       
		  <p>We offer a diversified range of equity, fixed income, alternative and multi-asset. We also have a discretionary fund management proposition available to FCA regulated firms on an "agent-as-client" basis.</p>
      

		  <p> Our operational, marketing and sales infrastructure is supported by the EPIC group and makes us a good home for both established and emerging fund managers seeking an entrepreneurial environment.</p>
		  
      <p >We are a limited liability partnership, enabling us to align our managers’ interests with those of our clients.</p>
      <p>Our team has decades of investing experience developed at some of the leading names in asset management and investment banking. We have a strong track-record of delivering performance, growing assets and building long-term, trusted relationships.</p> */}

		  
      </div>
    </div>
  </div>
  <section class="key-contacts">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
      
        <h4 className="inline">Key contacts:</h4>
        {/* <span className="right">For General Enquiries :<a href = "mailto: markets@epicip.com"><span> markets@epicip.com</span></a></span> */}

        <hr />
      </div>
    </div>
    <div class="row">
    <div class="col-md-2">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinkone+"#"+KeyLinkone}>{KeyNameone}</a></strong> <br />
          {/* hiren.patel@epicpe.com */}
          </p>
      </div>
      <div class="col-md-2">
        <p ><strong><a href={window.location.origin+"/people/"+KeyLinktwo+"#"+KeyLinktwo}>{KeyNametwo}</a></strong> <br />
          {/* mark.harris@epicpe.com */}
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
      <div class="col-md-2">
        <p><strong><a href={window.location.origin+"/people/"+KeyLinkfive+"#"+KeyLinkfive}>{KeyNamefive}</a></strong> <br />
          {/* andy.seaman@epicpe.com */}
          </p>
      </div>



    </div>
    <br/>
    <br/>
    <span>For General Enquiries:-<a href = "mailto: markets@epicip.com"><span> markets@epicip.com</span></a></span>

  </div>
  </section>
</section>


    );
}
 
export default Home;
