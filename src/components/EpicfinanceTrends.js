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
// import { Accordion } from "react-bootstrap";
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;
// var responseData;
const colors = ["#1A1549", " #9DB1DB", "#E6EEF6", "#dcdcdc","#B85876"]
let bot3contriDummy = []

const data = [

  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    // amt: 2400,
  },
  {
    name: 'Page B',
    uv: -3000,
    pv: 1398,
    // amt: 2210,
  },
  {
    name: 'Page C',
    uv: -2000,
    pv: -9800,
    // amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    // amt: 2000,
  },
  {
    name: 'Page E',
    uv: -1890,
    pv: 4800,
    // amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: -3800,
    // amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    // amt: 2100,
  },

];
$(".accordion__item__header").on('click',function () {
  $(this).toggleClass("active");
  $(this).next("div").slideToggle(200);
});

// $(".InvestorInfo").on('click',function () {

//   // alert("HI");
// });
const VARdata = [
    {
      name: 'Page A',
      uv: 0.34,
    //   pv: 2400,
    //   amt: 2400,
    },
    {
      name: 'Page B',
      uv: 0.11,
    //   pv: 1398,
    //   amt: 2210,
    },
    {
      name: 'Page C',
      uv: -0.04,
    //   pv: -9800,
    //   amt: 2290,
    },
    {
      name: 'Page D',
      uv: 1.5,
    //   pv: 3908,
    //   amt: 2000, 
    },

  ];
  const SECdata = [
    {
      name: 'Page A',
      uv: -1,
    //   pv: 2400,
    //   amt: 2400,
    },
    {
      name: 'Page B',
      uv: -0.52,
    //   pv: 1398,
    //   amt: 2210,
    },
    {
      name: 'Page C',
      uv: -0.60,
    //   pv: -9800,
    //   amt: 2290,
    },
    {
      name: 'Page D',
      uv: 1.29,
    //   pv: 3908,
    //   amt: 2000, 
    },

  ];
 

const EpicfinanceTrends = () => {




const [products, setProducts] = useState([]);
const [productsVAR, setProductsVAR] = useState([]);
const [productsSectorPer, setProductsSectorPer] = useState([]);
const [productscommulativePerformance, setproductscommulativePerformance] = useState([]);

const [HeadingState, setHeadingState] = useState([]);
const [ObjectiveState, setObjectiveState] = useState([]);
const [TeamState, setTeamState] = useState([]);

const [StateSession, setStateSession] = useState([]);


const [FundNameState, setFundNameState] = useState([]);
const [LiteratureDataState, setLiteratureDataState] = useState([]);
const [KeyInveInfoState, setKeyInveInfoState] = useState([]);
const [PressCoverageState, setPressCoverageState] = useState([]);
const [ApplicationsState, setApplicationsState] = useState([]);
const [ReportsState, setReportsState] = useState([]);
const [offerDocumentState, setofferDocumentState] = useState([]);
const [LiteratureDate, setLiteratureDate] = useState([]);
const [FileNameState, setFileNameState] = useState([]);

// const [productscommulativePerformanceA, setproductscommulativePerformanceA] = useState([]);
const [SessionResponse, setSessionResponse] = useState([]);

const [products12monthsPerformance, setproducts12monthsPerformance] = useState([]);
const [productstop3contr, setproductstop3contr] = useState([]);
const [productsbot3contr, setproductsbot3contr] = useState([]);
const [productsCommentary, setproductsCommentary] = useState([]);
const [productsFundinfo, setproductsFundinfo] = useState([]);

const [CMSFundinfo, setCMSFundinfo] = useState([]);
const [CMSshareinfo, setCMSshareinfo] = useState([]);


const [productsShareClass, setproductsShareClass] = useState([]);
const [productsMonthlyPerf, setproductsMonthlyPerf] = useState([]);
const [productsMonthlyPerfUSD, setproductsMonthlyPerfUSD] = useState([]);
const [productsMonthlyPerfUSDB, setproductsMonthlyPerfUSDB] = useState([]);
const [productsMonthlyPerfAEUR, setproductsMonthlyPerfAEUR] = useState([]);
const [productsMonthlyPerfBEUR, setproductsMonthlyPerfBEUR] = useState([]);
const [productsMonthlyPerfAGBP, setproductsMonthlyPerfAGBP] = useState([]);

const [portfolioStatus, setportfolioStatus] = useState(false);
const [performanceStatus1, setperformanceStatus1] = useState(false);

const [graphData, setgraphData] = useState([]);
const [graphDataVAR, setgraphDataVAR] = useState([]);
const[graphDataSectorPer,setgraphDataSectorPer]= useState([]);
const[cummulatovePerfData,setcummulatovePerfData]= useState([]);
const[twelvemonPerfDiscreteAPI,settwelvemonPerfDiscreteAPI]= useState([]);
const[top3contriarray,settop3contriarray]= useState([]);
const[bot3contriarray,setbot3contriarray]= useState([]);
const[Fundinfoarray,setFundinfoarray]= useState([]);

const[CMSFundinfoarray,setCMSFundinfoarray]= useState([]);
const[CMSshareinfoarray,setCMSshareinfoarray]= useState([]);


const[ShareClassarray,setShareClassarray]= useState([]);

const[monthsArrayState,setmonthsArrayState]= useState([]);
const[monthsArrayStateUSD,setmonthsArrayStateUSD]= useState([]);
const[monthsArrayStateUSDB,setmonthsArrayStateUSDB]= useState([]);
const[monthsArrayStateAEUR,setmonthsArrayStateAEUR]= useState([]);
const[monthsArrayStateBEUR,setmonthsArrayStateBEUR]= useState([]);
const[monthsArrayStateAGBP,setmonthsArrayStateAGBP]= useState([]);

const[monthlyPerformance2DArrayState,setmonthlyPerformance2DArrayState]= useState([]);
const[monthlyPerformance2DArrayStateUSD,setmonthlyPerformance2DArrayStateUSD]= useState([]);
const[monthlyPerformance2DArrayStateUSDB,setmonthlyPerformance2DArrayStateUSDB]= useState([]);
const[monthlyPerformance2DArrayStateAEUR,setmonthlyPerformance2DArrayStateAEUR]= useState([]);
const[monthlyPerformance2DArrayStateBEUR,setmonthlyPerformance2DArrayStateBEUR]= useState([]);
const[monthlyPerformance2DArrayStateAGBP,setmonthlyPerformance2DArrayStateAGBP]= useState([]);





const [RespPrtu, setRespPrtu] = useState([]);

const [PRTU, setPRTU] = useState([]);

const[arrPRTUState,setarrPRTUState]= useState([]);
const[PRTUDate,setPRTUDate]= useState([]);

const[DailyDate,setDailyDate]= useState([]);

const[Summary,setSummary]= useState([]);
const[Literature,setLiterature]= useState([]);



const[Loading,setLoading]= useState(false);

// const twelvemonPerfDiscreteAPI = []
// const top3contriarray =[]
// const bot3contriarray = []
const [status, setstatus] = useState(false);

// const [productstest, setproductstest] = useState([]);
// const {current:a} = useRef(productscommulativePerformance)
// const prevCountRef = useRef(productscommulativePerformance)
// const ABC = ""
// let XYZ = ""
// const objjj = Object.assign({}, productsbot3contr);
// const objee = Object.assign({}, objjj);

// const prevArr = usePrevious(arr);



useEffect(()=>{

  fetchMyAPI()
  
},[])

// const abc=()=>{
  

// }

const literatureButton=()=>{

let FundName;

let LiteratureName;
let FileName;
let LiteratureDate;
let LiteratureTitle;
let FinancialTrendFund;
let LiteratureSubHead;
let OtherInfoLiteratureArr=[];
let KeyInveInfoLiteratureArr=[];
let pressCoverageLiteratureArr=[];
let applicationsLiteratureArr=[];
let reportsLiteratureArr=[];
let offerDocumentsLiteratureArr=[];

var LiteratureKeys = ["LiteratureNameKey","FileName","LiteratureDate","LiteratureTitle"];

  for(let i=0 ; i< Literature.length ;i++){
    let OtherInfoObj={};
    let KeyInveInfoObj={};
    let pressCoverageObj={};
    let applicationsObj={};
    let reportsObj={};
    let offerDocumentsObj={};
     
    FundName = Literature[i].fund_name;
    if(FundName == "financial_trends"){
      console.log(FundName)

    if(Literature[i].literature_name == "other_information"){

      FinancialTrendFund = FundName; 
      LiteratureTitle = Literature[i].title;
      LiteratureName = Literature[i].literature_name;
      FileName = Literature[i].file;
      LiteratureDate = Literature[i].date;

      OtherInfoObj[LiteratureKeys[0]] = LiteratureName;
      OtherInfoObj[LiteratureKeys[1]] = FileName;
      OtherInfoObj[LiteratureKeys[2]] = LiteratureDate;
      OtherInfoObj[LiteratureKeys[3]] = LiteratureTitle;

      OtherInfoLiteratureArr.push(OtherInfoObj);
    }
    if(Literature[i].literature_name == "key_investor_information"){

      FinancialTrendFund = FundName; 
      LiteratureTitle = Literature[i].title;
      LiteratureName = Literature[i].literature_name;
      FileName = Literature[i].file;
      LiteratureDate = Literature[i].date;

      KeyInveInfoObj[LiteratureKeys[0]] = LiteratureName;
      KeyInveInfoObj[LiteratureKeys[1]] = FileName;
      KeyInveInfoObj[LiteratureKeys[2]] = LiteratureDate;
      KeyInveInfoObj[LiteratureKeys[3]] = LiteratureTitle;

      KeyInveInfoLiteratureArr.push(KeyInveInfoObj);

    }
    if(Literature[i].literature_name == "press_Coverage"){

      FinancialTrendFund = FundName; 
      LiteratureTitle = Literature[i].title;
      LiteratureName = Literature[i].literature_name;
      FileName = Literature[i].file;
      LiteratureDate = Literature[i].date;

      pressCoverageObj[LiteratureKeys[0]] = LiteratureName;
      pressCoverageObj[LiteratureKeys[1]] = FileName;
      pressCoverageObj[LiteratureKeys[2]] = LiteratureDate;
      pressCoverageObj[LiteratureKeys[3]] = LiteratureTitle;

      pressCoverageLiteratureArr.push(pressCoverageObj);

    }
    if(Literature[i].literature_name == "applications"){

      FinancialTrendFund = FundName; 
      LiteratureTitle = Literature[i].title;
      LiteratureName = Literature[i].literature_name;
      FileName = Literature[i].file;
      LiteratureDate = Literature[i].date;

      applicationsObj[LiteratureKeys[0]] = LiteratureName;
      applicationsObj[LiteratureKeys[1]] = FileName;
      applicationsObj[LiteratureKeys[2]] = LiteratureDate;
      applicationsObj[LiteratureKeys[3]] = LiteratureTitle;

      applicationsLiteratureArr.push(applicationsObj);

    }
    if(Literature[i].literature_name == "reports"){

      FinancialTrendFund = FundName; 
      LiteratureTitle = Literature[i].title;
      LiteratureName = Literature[i].literature_name;
      FileName = Literature[i].file;
      LiteratureDate = Literature[i].date;

      reportsObj[LiteratureKeys[0]] = LiteratureName;
      reportsObj[LiteratureKeys[1]] = FileName;
      reportsObj[LiteratureKeys[2]] = LiteratureDate;
      reportsObj[LiteratureKeys[3]] = LiteratureTitle;

      reportsLiteratureArr.push(reportsObj);

    }
    if(Literature[i].literature_name == "offering_documents"){

      FinancialTrendFund = FundName; 
      LiteratureTitle = Literature[i].title;
      LiteratureName = Literature[i].literature_name;
      FileName = Literature[i].file;
      LiteratureDate = Literature[i].date;

      offerDocumentsObj[LiteratureKeys[0]] = LiteratureName;
      offerDocumentsObj[LiteratureKeys[1]] = FileName;
      offerDocumentsObj[LiteratureKeys[2]] = LiteratureDate;
      offerDocumentsObj[LiteratureKeys[3]] = LiteratureTitle;

      offerDocumentsLiteratureArr.push(offerDocumentsObj);

    }

    
    }
 
  }


  setFundNameState(FinancialTrendFund);
  setLiteratureDataState(OtherInfoLiteratureArr);
  setKeyInveInfoState(KeyInveInfoLiteratureArr);
  setPressCoverageState(pressCoverageLiteratureArr);
  setApplicationsState(applicationsLiteratureArr);
  setReportsState(reportsLiteratureArr);
  setofferDocumentState(offerDocumentsLiteratureArr);

}

const Clicked=()=>{
  $("#literatureTab").click();
  literatureButton();
  console.log("clicked")
}
const tt=()=>{
  // alert("hi");
  $('.btn-setting')[0].click();
}
const summaryButton=()=>{
  console.log(SessionResponse);
console.log("Summary_SessionResponse");
tt();
var heading;
var objective;
var team;
const arrPRTU=[];
const graphDataResponse = [];
var Daily_price_date;


// For loop for calculation date
let calculation = RespPrtu[1][2]
// new Date(date).toLocaleDateString()
let daily_cal = PRTU[1][1]

let calculatedDate = new Date(calculation).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(calculation).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(calculation).toLocaleDateString("en-US", { year: 'numeric' });

console.log(new Date(calculation).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(calculation).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(calculation).toLocaleDateString("en-US", { year: 'numeric' }))
console.log("calculationcalculationcalculationcalculation")


let DailycalculatedDate = new Date(daily_cal).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(daily_cal).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(daily_cal).toLocaleDateString("en-US", { year: 'numeric' });
  // for loop for Share price
  // for(let i=5;i<=11;i++){

  //   let val = PRTU[i][2]

  //   console.log(val);
  //   console.log("-----------------------------------ValVAL");

  //   arrPRTU.push(val)
  // }

  console.log(arrPRTU)
  console.log("arrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTU");

  for(let i=0 ; i< Summary.length ;i++){
    // typeof(products[i][j])
    if(Summary[i].heading== "financial_trends"){
      heading = Summary[i].heading;
      objective = Summary[i].objective_content;  
      team = Summary[i].team_content ;
      
       console.log(Summary[i].team_content);
       console.log("Summary[0]team_content");
      }
     
      
  }

  var allKeys = ["name","currentmonth","currency","Price","ABC","EFG","symbol","class","classDetails"];
  
// var length =  products.length-1;
// console.log(PRTU);
// console.log("PRTU");

  for(let i=1 ; i< PRTU.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< PRTU[i].length ;j++){

      if(!isNaN(PRTU[i][j])){
      let val = PRTU[i][j];
      // var numb= 212421434.533423131231;
      var rounded2 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(val);
      obj[allKeys[j]] = rounded2 ;

    }
      else{
        obj[allKeys[j]] = PRTU[i][j] ;
      }     

      }
      console.log(obj);
      console.log("obj------------------------");
      if(obj.currency == "GBP"){
        obj[allKeys[6]] = "£";
      }else if(obj.currency == "EUR"){
        
        obj[allKeys[6]] = "€";

      }else if(obj.currency == "USD"){
        obj[allKeys[6]] = "$";

      }

      var classShares = obj.name.split("-");
      console.log(classShares[1]);
      var classCurrency = classShares[1].split("(")
      console.log(classCurrency)
      console.log("classCurrency");
      obj[allKeys[7]] = classCurrency[0];
      obj[allKeys[8]] = classCurrency[1];

      graphDataResponse.push(obj)

}
setHeadingState(heading)
setObjectiveState(objective)
setTeamState(team)
setStateSession(SessionResponse);

setarrPRTUState(graphDataResponse);

console.log(arrPRTUState);
console.log("arrPRTUState");

setPRTUDate(calculatedDate)
setDailyDate(DailycalculatedDate)

  if (!graphDataResponse.length > 0) {

      
    $(".daily-price-row").css("display","none") 
  }else{
    $(".daily-price-row").css("display","block")
  }

$('.footer-container').addClass('footer-container-line')

}
// $( document ).ready(function() {
    
//   if (!arrPRTUState.length > 0) {

    
//     $(".daily-price-row").css("display","none") 
//   }
//   });


const portfolioButton=()=>{


  const graphDataResponse = []
  const graphDataResponse1 = []
  const graphDataResponse2 = []
 

  var allKeys = ["name","current month","pevious month"];
  
// var length =  products.length-1;
  for(let i=1 ; i< products.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< products[i].length ;j++){

      if(!isNaN(products[i][j])){
      let val = products[i][j];
      // var numb= 212421434.533423131231;
      var rounded2 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded2);
      obj[allKeys[j]] = rounded2 ;

    }
      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[allKeys[j]] = products[i][j] ;
      }     

      }
      graphDataResponse.push(obj)
      console.log(graphDataResponse )
    
      // setTimeout()
      

      // console.log(graphData);
      // console.log("allKeys")

      
  }

  var keysVAR = ["name", "value"]
  var length = productsVAR.length-1
  
    for(let i=1 ; i< length ;i++){
    
    let obj={};
    for(let j =0 ;j< productsVAR[i].length ;j++){

      if(!isNaN(productsVAR[i][j])){
      let val = productsVAR[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded1);
      obj[keysVAR[j]] = rounded1 ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{

        obj[keysVAR[j]] = productsVAR[i][j] ;
      }     

      } 

      if(obj.value !==0){
      
        graphDataResponse1.push(obj)

      }       

  }

  var keysSectorPer = ["name", "value"]
  var length = productsSectorPer.length
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productsSectorPer[i].length ;j++){

      if(!isNaN(productsSectorPer[i][j])){
      let val = productsSectorPer[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded);
      obj[keysSectorPer[j]] = rounded ;
    }
      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysSectorPer[j]] = productsSectorPer[i][j] ;
      }     

    }
      if(obj.value !==0){
        graphDataResponse2.push(obj)

      }
    
  } 

  setgraphData(graphDataResponse)
  setgraphDataVAR(graphDataResponse1)
  setgraphDataSectorPer(graphDataResponse2)

  console.log(graphDataResponse);
  console.log("graphDataResponse");

  console.log(graphDataResponse1);
  console.log("graphDataResponse1");
  
  
  
  
  setportfolioStatus(true)





}


const performanceButton=()=>{


  const CummulativeperformanceData = []
  const Bot3contriData = []
  const Top3contriData = []
  const TwelvemonPerfData = []




  var keysCummulativePer = ["name", "value"]
  
   for(let i=0 ; i< productscommulativePerformance.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productscommulativePerformance[i].length ;j++){

      if(!isNaN(productscommulativePerformance[i][j])){
      let val = productscommulativePerformance[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
      rounded =parseFloat(rounded).toFixed(2);
      console.log(rounded);
      obj[keysCummulativePer[j]] = rounded+'%' ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysCummulativePer[j]] = productscommulativePerformance[i][j] ;
      }     

      }
      CummulativeperformanceData.push(obj)
      AbcObject = obj;
      
      
      console.log(AbcObject)
      console.log("AbcObjectAbcObjectAbcObjectAbcObject")
    
      
      console.log(cummulatovePerfData);
      console.log("cummulatovePerfData");

                // console.log("allKeys")
    
  } 


  var keysbot3contr = ["name", "value"] 
  for(let i=1 ; i< productsbot3contr.length ;i++){
   
   let obj={};
       for(let j =0 ;j< productsbot3contr[i].length ;j++){

         if(!isNaN(productsbot3contr[i][j])){
         let val = productsbot3contr[i][j]*100;
        
         // var numb= 212421434.533423131231;
         var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
         rounded =parseFloat(rounded).toFixed(2);
         console.log(rounded);
         obj[keysbot3contr[j]] = rounded+'%' ;
         console.log(obj);
         console.log("obj");
       }
         else{
           obj[keysbot3contr[j]] = productsbot3contr[i][j] ;
         }     
       
         }
       
  Bot3contriData.push(obj)

 }


 
  var keystop3contr = ["name", "value"]
  for(let i=1 ; i< productstop3contr.length ;i++){
   
   let obj={};
   for(let j =0 ;j< productstop3contr[i].length ;j++){

     if(!isNaN(productstop3contr[i][j])){
     let val = productstop3contr[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded =parseFloat(rounded).toFixed(2);
     console.log(rounded);
     obj[keystop3contr[j]] = rounded+'%' ;

   }
     else{
       obj[keystop3contr[j]] = productstop3contr[i][j] ;
     }     

    }
    Top3contriData.push(obj)
   
     
     console.log(top3contriarray);
     console.log("top3contriarray");
      // console.log("allKeys")
   
 } 
 

  var keys12monthsPer = ["name", "value"]
  
  for(let i=0 ; i< products12monthsPerformance.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< products12monthsPerformance[i].length ;j++){

     if(!isNaN(products12monthsPerformance[i][j])){
     let val = products12monthsPerformance[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
     rounded =parseFloat(rounded).toFixed(2);
     console.log(rounded);
     obj[keys12monthsPer[j]] = rounded+'%' ;

   }
     else{
       obj[keys12monthsPer[j]] = products12monthsPerformance[i][j] ;
     }     

     }
     TwelvemonPerfData.push(obj)
   
 } 


 

  
  // var arr2D=[];
  
  // for(let i= 4; i<14;i++ ){
  //   let arr =[];
  //   for(let j=9; j<productsMonthlyPerf[0].length;j++ ){
  //     arr[j]=productsMonthlyPerf[j];
  //   }
  //   arr2D[i].push(arr);
  //   // arr=[];
  // }

  // console.log(arr2D);
var monthsArr=[];
  console.log(productsMonthlyPerf)
  console.log("productsMonthlyPerf")

  for(let i= 7; i<=21;i++ ){
    monthsArr.push(productsMonthlyPerf[3][i])
  }
  console.log("months")
  console.log(monthsArr)

  var arr2D=[];
  for(let i=4 ;i<=15;i++){
    let arr=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerf[i][j] != ""){
     let val = productsMonthlyPerf[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded = parseFloat(rounded).toFixed(2);
     if(rounded ==0.00){
      rounded = 0;
    }
     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")

      console.log(rounded)

     }
      arr.push(rounded+'%')
     
    }else{
      rounded = ''; 
      arr.push(rounded)
    }
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2D.push(arr);
  }

for(let i =0;i<arr2D.length;i++){
for(let j =0 ; j< arr2D[0].length;j++){

  // console.log(arr2D[1][j])
if(arr2D[i][j]==0+'%'){
  console.log(arr2D[i][j])
  arr2D[i][j] = "0.00%"
}else if(arr2D[i][j]==''){
  console.log(arr2D[i][j])
  arr2D[i][j] = " "
}
}
console.log("--------------------------------------------------------------------")
}

console.log(arr2D);
console.log("arr2D");

  setcummulatovePerfData(CummulativeperformanceData)
  settwelvemonPerfDiscreteAPI(TwelvemonPerfData)
  settop3contriarray(Top3contriData)
  setbot3contriarray(Bot3contriData)
  setmonthsArrayState(monthsArr)
  setmonthlyPerformance2DArrayState(arr2D)



  var monthsArrUSD=[];
  console.log(productsMonthlyPerfUSD)
  console.log("productsMonthlyPerfUSD")

  for(let i= 7; i<=21;i++ ){
    monthsArrUSD.push(productsMonthlyPerfUSD[3][i])
  }
  console.log("months")
  console.log(monthsArrUSD)

  var arr2DUSD=[];
  for(let i=4 ;i<=15;i++){
    let arr=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerfUSD[i][j] != ""){
        let val = productsMonthlyPerfUSD[i][j]*100;
        
        var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
        rounded = parseFloat(rounded).toFixed(2);
        if(rounded ==0.00){
          rounded = 0;
        }
        console.log(rounded);
        if(isNaN(rounded)){
          rounded = 0;
          console.log("rounded--------------------------rounded")

          console.log(rounded)

        }
          arr.push(rounded+'%')
        
        }else{
          rounded = ''; 
          arr.push(rounded)
        }
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2DUSD.push(arr);
  }

for(let i =0;i<arr2DUSD.length;i++){
for(let j =0 ; j< arr2DUSD[0].length;j++){

  // console.log(arr2D[1][j])
if(arr2DUSD[i][j]==0+'%'){
  console.log(arr2DUSD[i][j])
  arr2DUSD[i][j] = "0.00%"
}else if(arr2DUSD[i][j]==''){
  console.log(arr2DUSD[i][j])
  arr2DUSD[i][j] = " "
}
}
console.log("--------------------------------------------------------------------")
}
  setmonthsArrayStateUSD(monthsArrUSD)
  setmonthlyPerformance2DArrayStateUSD(arr2DUSD)
  



  var monthsArrAEUR=[];
  console.log(productsMonthlyPerfAEUR)
  console.log("productsMonthlyPerfAEUR")

  for(let i= 7; i<=21;i++ ){
    monthsArrAEUR.push(productsMonthlyPerfAEUR[3][i])
  }
  console.log("months")
  console.log(monthsArrAEUR)

  var arr2DAEUR=[];
  for(let i=4 ;i<=10;i++){
    let arrAEUR=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerfAEUR[i][j] != ""){
     let val = productsMonthlyPerfAEUR[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded = parseFloat(rounded).toFixed(2);
     if(rounded ==0.00){
      rounded = 0;
    }
     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")

      console.log(rounded)

     }
     arrAEUR.push(rounded+'%')
     
    }else{
      rounded = ''; 
      arrAEUR.push(rounded)
    }
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2DAEUR.push(arrAEUR);
  }

for(let i =0;i<arr2DAEUR.length;i++){
for(let j =0 ; j< arr2DAEUR[0].length;j++){

  // console.log(arr2D[1][j])
if(arr2DAEUR[i][j]==0+'%'){
  console.log(arr2DAEUR[i][j])
  arr2DAEUR[i][j] = "0.00%"
}else if(arr2DAEUR[i][j]==''){
  console.log(arr2DAEUR[i][j])
  arr2DAEUR[i][j] = " "
}
}
console.log("--------------------------------------------------------------------")
}
  
  setmonthsArrayStateAEUR(monthsArrAEUR)
  setmonthlyPerformance2DArrayStateAEUR(arr2DAEUR)





  var monthsArrUSDB=[];
  console.log(productsMonthlyPerfUSDB)
  console.log("productsMonthlyPerfUSDB")

  for(let i= 7; i<=21;i++ ){
    monthsArrUSDB.push(productsMonthlyPerfUSDB[3][i])
  }
  console.log("months")
  console.log(monthsArrUSDB)

  var arr2DUSDB=[];
  for(let i=4 ;i<=15;i++){
    let arrB=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerfUSDB[i][j] != ""){
     let val = productsMonthlyPerfUSDB[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded = parseFloat(rounded).toFixed(2);
     if(rounded ==0.00){
      rounded = 0;
    }
     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")

      console.log(rounded)

     }
     arrB.push(rounded+'%')
    }else{
      rounded = ''; 
      arrB.push(rounded)
    }
      
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2DUSDB.push(arrB);
  }

for(let i =0;i<arr2DUSDB.length;i++){
for(let j =0 ; j< arr2DUSDB[0].length;j++){

  // console.log(arr2D[1][j])
if(arr2DUSDB[i][j]==0+'%'){
  console.log(arr2DUSDB[i][j])
  arr2DUSDB[i][j] = "0.00%"
}else if(arr2DUSDB[i][j]==''){
  console.log(arr2DUSDB[i][j])
  arr2DUSDB[i][j] = " "
}
}
console.log("--------------------------------------------------------------------")
}
  setmonthsArrayStateUSD(monthsArrUSDB)
  setmonthlyPerformance2DArrayStateUSDB(arr2DUSDB)
  



  var monthsArrBEUR=[];
  console.log(productsMonthlyPerfBEUR)
  console.log("productsMonthlyPerfBEUR")

  for(let i= 7; i<=21;i++ ){
    monthsArrBEUR.push(productsMonthlyPerfBEUR[3][i])
  }
  console.log("months")
  console.log(monthsArrBEUR)

  var arr2DBEUR=[];
  for(let i=4 ;i<=10;i++){
    let arrBEUR=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerfBEUR[i][j] != ""){
     let val = productsMonthlyPerfBEUR[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded = parseFloat(rounded).toFixed(2);
     if(rounded ==0.00){
      rounded = 0;
    }
     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")

      console.log(rounded)

     }
     arrBEUR.push(rounded+'%')
     
    }else{
      rounded = ''; 
      arrBEUR.push(rounded)
    }
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2DBEUR.push(arrBEUR);
  }

for(let i =0;i<arr2DBEUR.length;i++){
for(let j =0 ; j< arr2DBEUR[0].length;j++){

  // console.log(arr2D[1][j])
if(arr2DBEUR[i][j]==0+'%'){
  console.log(arr2DBEUR[i][j])
  arr2DBEUR[i][j] = "0.00%"
}else if(arr2DBEUR[i][j]==''){
  console.log(arr2DBEUR[i][j])
  arr2DBEUR[i][j] = " "
}
}
console.log("--------------------------------------------------------------------")
}
  
  setmonthsArrayStateBEUR(monthsArrBEUR)
  setmonthlyPerformance2DArrayStateBEUR(arr2DBEUR)




  var monthsArrAGBP=[];
  console.log(productsMonthlyPerfAGBP)
  console.log("productsMonthlyPerfAGBP")

  for(let i= 7; i<=21;i++ ){
    monthsArrAGBP.push(productsMonthlyPerfAGBP[3][i])
  }
  console.log("months")
  console.log(monthsArrAGBP)

  var arr2DAGBP=[];
  for(let i=4 ;i<=15;i++){
    let arrBEUR=[]
    for(let j=8 ;j<=21;j++){
     let val = productsMonthlyPerfAGBP[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded = parseFloat(rounded).toFixed(2);
     if(rounded ==0.00){
      rounded = 0;
    }
     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")

      console.log(rounded)

     }
     arrBEUR.push(rounded+'%')
     
      
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2DAGBP.push(arrBEUR);
  }

for(let i =0;i<arr2DAGBP.length;i++){
for(let j =0 ; j< arr2DAGBP[0].length;j++){

  // console.log(arr2D[1][j])
if(arr2DAGBP[i][j]==0+'%'){
  console.log(arr2DAGBP[i][j])
  arr2DAGBP[i][j] = "0.00%"
}
}
console.log("--------------------------------------------------------------------")
}
  
  setmonthsArrayStateAGBP(monthsArrAGBP)
  setmonthlyPerformance2DArrayStateAGBP(arr2DAGBP)
}


const informationButton=()=>{
  const shareClassData =[]
  const fundInfoData =[]
  
  const CMSfundInfoData =[]
  const CMSshareInfoData =[]

  
  var keysShareClass = ["name", "value","currency"]
  
  for(let i=0 ; i< productsShareClass.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productsShareClass[i].length ;j++){

     if(!isNaN(productsShareClass[i][j])){
     let val = productsShareClass[i][j];
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keysShareClass[j]] = rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,') ;
     console.log(obj);
     console.log("obj");
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysShareClass[j]] = productsShareClass[i][j] ;
     }     
     if(obj.name == "A GBP" || obj.name=="B GBP"){
      obj[keysShareClass[2]] = "£";
    }else if(obj.name == "A EUR" || obj.name == "B EUR"){
      obj[keysShareClass[2]] = "€";
    }else if(obj.name == "A USD" || obj.name == "B USD"){
      obj[keysShareClass[2]] = "$";
    }
     }
     shareClassData.push(obj)
   
     
 }  


  var keysFundinfo = ["name", "value"]
  
  for(let i=1 ; i< productsFundinfo.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productsFundinfo[i].length ;j++){

     if(!isNaN(productsFundinfo[i][j])){
     let val = productsFundinfo[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     var mrounded = Math.round((productsFundinfo[i][j] + Number.EPSILON) * 100) / 100;
     console.log(rounded);
     obj[keysFundinfo[j]] = rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,') ;
     console.log(obj);
     console.log("obj");
     if(mrounded > 1000000){
      var million_variable = (mrounded/1000000).toFixed(2) + 'm'
    
      obj[keysFundinfo[j]] = 'US$ '+ million_variable;
    
      }else if(typeof rounded === "number"){
        obj[keysFundinfo[j]] = rounded+'%'

      }
      
    }
   else{
          obj[keysFundinfo[j]] = productsFundinfo[i][j] ;
        }     

     }
     fundInfoData.push(obj)
   

 }


 var keysCMSFundinfo = ["name", "value"]
  
   for(let j =0 ;j< CMSFundinfo.length ;j++){
    console.log(CMSFundinfo[j].title);
    console.log("CMSFundinfo.title");

    let obj={};

    // KeyInveInfoObj[LiteratureKeys[0]] = LiteratureName;

       obj[keysCMSFundinfo[0]] = CMSFundinfo[j].title ;
       obj[keysCMSFundinfo[1]] = CMSFundinfo[j].value ;
     

     console.log(obj);
     console.log("obj---------------@");

     CMSfundInfoData.push(obj)
     }

 var keysCMSshareinfo = ["name", "ausdValue","agbpValue","aeurValue","busdValue","bgbpValue","beurValue"]
  
     for(let j =0 ;j< CMSshareinfo.length ;j++){
      console.log(CMSshareinfo[j].title);
      console.log("CMSFundinfo.title");
  
      let obj={};
   
         obj[keysCMSshareinfo[0]] = CMSshareinfo[j].title ;
         obj[keysCMSshareinfo[1]] = CMSshareinfo[j].ausd_value ;
         obj[keysCMSshareinfo[2]] = CMSshareinfo[j].agbp_value ;
         obj[keysCMSshareinfo[3]] = CMSshareinfo[j].aeur_value ;
         obj[keysCMSshareinfo[4]] = CMSshareinfo[j].busd_value ;
         obj[keysCMSshareinfo[5]] = CMSshareinfo[j].bgbp_value ;
         obj[keysCMSshareinfo[6]] = CMSshareinfo[j].beur_value ;

  
       console.log(obj);
       console.log("obj---------------@");
  
       CMSshareInfoData.push(obj)
       }

   
//  }

 setShareClassarray(shareClassData)
 setFundinfoarray(fundInfoData)
 setCMSFundinfoarray(CMSfundInfoData)
 setCMSshareinfoarray(CMSshareInfoData)











}



$(document).ready(function() {
    

  // document.getElementById("summaryButton").click()
});  




let AbcObject ={};

let count = 0;
async function fetchMyAPI(){
  // fetchSessionUserAPI();


// const fetchMyAPI = useCallback(() => {
  // https://epicipprojects.com/getdata  
  // https://jsonplaceholder.typicode.com/posts
  const localurl ='https://www.epicip.com/epic-financial-trends';
  // const url = window.location.origin+'/epic-financial-trends' 
  const url = 'http://127.0.0.1:8000/epic-financial-trends'
  
  // const url =window.location.origin+"/api/garraway-financial-trends"
  fetch(window.location.origin+'/session_data').then(resp => resp.json()).then(resp =>  {
    
    console.log(resp);
    console.log("resp");

    setSessionResponse(resp);

})

   fetch(url).then(resp=> resp.json())
   .then (resp => {

    setProducts(resp.SectorExposures)
    setProductsVAR(resp.SectorVaR)
    setProductsSectorPer(resp.SectorPerformance)
    setproductscommulativePerformance(resp.CumulativePerf)
    setproducts12monthsPerformance(resp.twelvemPerfDiscrete)
    setproductstop3contr(resp.Top3Contributors)
    setproductsbot3contr(resp.Bottom3Contributors)
    setproductsCommentary(resp.content)
    setproductsFundinfo(resp.FundInfo)
    setproductsShareClass(resp.NAVperShare)
    setproductsMonthlyPerf(resp.MonthlyPerfBGBP)
    setproductsMonthlyPerfUSD(resp.MonthlyPerfAUSD)
    setproductsMonthlyPerfUSDB(resp.MonthlyPerfBUSD)
    setproductsMonthlyPerfAEUR(resp.MonthlyPerfAEUR)
    setproductsMonthlyPerfBEUR(resp.MonthlyPerfBEUR)
    setproductsMonthlyPerfAGBP(resp.MonthlyPerfAGBP)
    setRespPrtu(resp.prtu)
    setPRTU(resp.daily_price)
    setSummary(resp.summary)
    setLiterature(resp.literature)
    setCMSFundinfo(resp.fund_info)
    setCMSshareinfo(resp.shareinfo)
    // setLoading(true)
    setstatus(true)
    // setSessionResponse(sessionresp);
    document.getElementById("summaryButton").click();
    document.getElementsByClassName('btn-setting').click();

    })
    
   .catch(e=>{
     console.log(e);
   })

  // setresponseData(result)
  // .then( resp=>console.log(resp.SectorExposures))
  
  // console.log(responseData)
  // console.log("responseData")

  var keysMonthly = ["name"]
  var testArr =[]
  var monthsValue =[[],[]]
  var xArr =[[]]
  // var xArr = new Array(10);

  // for (var i = 0; i < xArr.length; i++) {
  //   xArr[i] = new Array(14);
  // }
  

//   for(let y = 4; y < 13; y++){

//     var count = 0;
//     var moreCount = 0;  

//     for(let z = 8; z < 22; z++){

//       xArr[count][moreCount]= productsMonthlyPerf[y][z]
//       // xArr.push(productsMonthlyPerf[y][z])

//       moreCount++;
//     }
//     count++;


//   }
//   console.log(xArr);
//   console.log("xArr");

//   for(let x= 8; x < 22; x++){

//   testArr.push(productsMonthlyPerf[3][x])

// }
// console.log(testArr)
// console.log("testArr")


//   for(let i=3 ; i< 14;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j = 8 ;j< 22 ;j++){

//      if(!isNaN(productsMonthlyPerf[i][j])){
       
//      let val = productsMonthlyPerf[i][j]*100;
//      console.log(productsMonthlyPerf[i][j])
//      console.log("productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]productsMonthlyPerf[i][j]")

//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;




//      console.log(rounded);
//      obj[keysMonthly[j]] = rounded ;
//      console.log(obj);
//      console.log("obj");
//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keysMonthly[j]] = productsMonthlyPerf[i][j] ;
//      }     

//      }
//     //  ShareClassarray.push(obj)
   
     
//     //  console.log(bot3contriarray);
//     //  console.log("bot3contriarray");
//     //  console.log(bot3contriDummy);
//     //  console.log("bot3contriDummy");

//                // console.log("allKeys")
//  }  

// For loops for displaying data
//   var keysShareClass = ["name", "value"]
  
//   for(let i=0 ; i< productsShareClass.length ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productsShareClass[i].length ;j++){

//      if(!isNaN(productsShareClass[i][j])){
//      let val = productsShareClass[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keysShareClass[j]] = rounded ;
//      console.log(obj);
//      console.log("obj");
//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keysShareClass[j]] = productsShareClass[i][j] ;
//      }     

//      }
//      ShareClassarray.push(obj)
   
     
//      console.log(bot3contriarray);
//      console.log("bot3contriarray");
//      console.log(bot3contriDummy);
//      console.log("bot3contriDummy");

//                // console.log("allKeys")
//  }  


//   var keysFundinfo = ["name", "value"]
  
//   for(let i=0 ; i< productsFundinfo.length ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productsFundinfo[i].length ;j++){

//      if(!isNaN(productsFundinfo[i][j])){
//      let val = productsFundinfo[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keysFundinfo[j]] = rounded ;
//      console.log(obj);
//      console.log("obj");
//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keysFundinfo[j]] = productsFundinfo[i][j] ;
//      }     

//      }
//      Fundinfoarray.push(obj)
   
     
//      console.log(Fundinfoarray);
//      console.log("Fundinfoarray");

//  }




//   var keysbot3contr = ["name", "value"]
  
//   for(let i=0 ; i< productsbot3contr.length ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productsbot3contr[i].length ;j++){

//      if(!isNaN(productsbot3contr[i][j])){
//      let val = productsbot3contr[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keysbot3contr[j]] = rounded ;
//      console.log(obj);
//      console.log("obj");
//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keysbot3contr[j]] = productsbot3contr[i][j] ;
//      }     

//      }
//      bot3contriarray.push(obj)
   
     
//      console.log(bot3contriarray);
//      console.log("bot3contriarray");
//      console.log(bot3contriDummy);
//      console.log("bot3contriDummy");

//                // console.log("allKeys")
//  }
// //  bot3contriDummy = [
// //   {name: 'Short Euro / Swiss Franc', value: -0.34},
// //   {name: 'Short Norwegian Krone / US Dollar', value: -0.31},
// //   {name: 'Long Italian BTP', value: -0.29}
// //  ]

 
// //  bot3contriarray.push(productsbot3contr)

// //  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
// //  console.log(productsbot3contr)



 
//   var keystop3contr = ["name", "value"]
  
//   for(let i=1 ; i< productstop3contr.length ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productstop3contr[i].length ;j++){

//      if(!isNaN(productstop3contr[i][j])){
//      let val = productstop3contr[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keystop3contr[j]] = rounded ;

//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keystop3contr[j]] = productstop3contr[i][j] ;
//      }     

//      }
//      top3contriarray.push(obj)
   
     
//      console.log(top3contriarray);
//      console.log("top3contriarray");
//       // console.log("allKeys")
   
//  } 
 

//   var keys12monthsPer = ["name", "value"]
  
//   for(let i=0 ; i< products12monthsPerformance.length ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< products12monthsPerformance[i].length ;j++){

//      if(!isNaN(products12monthsPerformance[i][j])){
//      let val = products12monthsPerformance[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keys12monthsPer[j]] = rounded ;

//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keys12monthsPer[j]] = products12monthsPerformance[i][j] ;
//      }     

//      }
//      twelvemonPerfDiscreteAPI.push(obj)
   
     
//      console.log(twelvemonPerfDiscreteAPI);
//      console.log("twelvemonPerfDiscreteAPI");

//                // console.log("allKeys")
   
//  } 

  // var keysCummulativePer = ["name", "value"]
  
  //  for(let i=0 ; i< productscommulativePerformance.length ;i++){
  //   // typeof(products[i][j])
    
  //   let obj={};
  //   for(let j =0 ;j< productscommulativePerformance[i].length ;j++){

  //     if(!isNaN(productscommulativePerformance[i][j])){
  //     let val = productscommulativePerformance[i][j]*100;
      
  //     // var numb= 212421434.533423131231;
  //     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

  //     console.log(rounded);
  //     obj[keysCummulativePer[j]] = rounded ;

  //   }

  //     // var updatedVal =  parseFloat(val).toFixed(2);
  //     // console.log(updatedVal);
  //     else{
  //       obj[keysCummulativePer[j]] = productscommulativePerformance[i][j] ;
  //     }     

  //     }
  //     cummulatovePerfData.push(obj)
  //     AbcObject = obj;
      
      
  //     console.log(AbcObject)
  //     console.log("AbcObjectAbcObjectAbcObjectAbcObject")
    
      
  //     console.log(cummulatovePerfData);
  //     console.log("cummulatovePerfData");

  //               // console.log("allKeys")
    
  // } 



  // var keysSectorPer = ["name", "value"]
  
  //  for(let i=1 ; i< productsSectorPer.length ;i++){
  //   // typeof(products[i][j])
    
  //   let obj={};
  //   for(let j =0 ;j< productsSectorPer[i].length ;j++){

  //     if(!isNaN(productsSectorPer[i][j])){
  //     let val = productsSectorPer[i][j]*100;
      
  //     // var numb= 212421434.533423131231;
  //     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

  //     console.log(rounded);
  //     obj[keysSectorPer[j]] = rounded ;

  //   }

  //     // var updatedVal =  parseFloat(val).toFixed(2);
  //     // console.log(updatedVal);
  //     else{
  //       obj[keysSectorPer[j]] = productsSectorPer[i][j] ;
  //     }     

  //     }
  //     graphDataSectorPer.push(obj)
    
      
  //     console.log(graphDataSectorPer);
  //               // console.log("allKeys")
    
  // } 
  
  
  // var keysVAR = ["name", "value"]

  //  for(let i=1 ; i< productsVAR.length ;i++){
  //   // typeof(products[i][j])
    
  //   let obj={};
  //   for(let j =0 ;j< productsVAR[i].length ;j++){

  //     if(!isNaN(productsVAR[i][j])){
  //     let val = productsVAR[i][j]*100;
      
  //     // var numb= 212421434.533423131231;
  //     var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

  //     console.log(rounded1);
  //     obj[keysVAR[j]] = rounded1 ;

  //   }

  //     // var updatedVal =  parseFloat(val).toFixed(2);
  //     // console.log(updatedVal);
  //     else{
  //       obj[keysVAR[j]] = productsVAR[i][j] ;
  //     }     

  //     } 
  //     graphDataVAR.push(obj)
  //     setstatus(true)
  //     // console.log(graphData);
  //     // console.log("allKeys")
      
  // }


  
  
  // var allKeys = ["name","current month","pevious month"];
  
  // for(let i=1 ; i< products.length ;i++){
  //   // typeof(products[i][j])
    
  //   let obj={};
  //   for(let j =0 ;j< products[i].length ;j++){

  //     if(!isNaN(products[i][j])){
  //     let val = products[i][j];
  //     // var numb= 212421434.533423131231;
  //     var rounded2 = Math.round((val + Number.EPSILON) * 100) / 100;

  //     console.log(rounded2);
  //     obj[allKeys[j]] = rounded2 ;

  //   }
  //     // var updatedVal =  parseFloat(val).toFixed(2);
  //     // console.log(updatedVal);
  //     else{
  //       obj[allKeys[j]] = products[i][j] ;
  //     }     

  //     }
  //     graphData.push(obj)
      
  //     // console.log(graphData);
  //     // console.log("allKeys")
      
  // }
      console.log(graphData);

      console.log("allKeys")
};

// const dat = useMemo(()=>(AbcObject),[])





const players =[
  {
    position:"forward",
    name:"Lebron",
    team:"Lakers"
  },
  {
    position:"forward",
    name:"Lebron",
    team:"Lakers"
  },
  {
    position:"forward",
    name:"Lebron",
    team:"Lakers"
  },
  {
    position:"forward",
    name:"Lebron",
    team:"Lakers"
  }
]

const cummulatovePerfDatadummy =[
  {
    "name" : "Class B GBP",
     "value" : "Cumulative Performance"
  },
  {
      "name": "1m",
      "value": -1.29
  },
  {
      "name": "1Yr",
      "value": 1.04
  },
  {
      "name": "3Yr",
      "value": -2.41
  },
  {
      "name": "5Yr",
      "value": -19.6

  },
  {
      "name": "Since UCITS Strategy Relaunch",
      "value": 19.08
  },
  {
      "name": "Since Inception",
      "value": -3.37
  }
]

const twelvemonPerfDatadummy =[
  {
    "name" : "Class B GBP",
    "value" : "Discrete Performance"
  },

  {
        "name": "30/06/2016 - 30/06/2017",
        "value": -5.09
    },
    {
        "name": "30/06/2017 - 30/06/2018",
        "value": -13.35
    },
    {
        "name": "30/06/2018 - 30/06/2019",
        "value": 2.26
    },
    {
        "name": "30/06/2019 - 30/06/2020",
        "value": -4.85
    },
    {
        "name": "30/06/2020 - 30/06/2021",
        "value": 3.5
    }
]

const top3contriDummy = [
  {
      "name": "Long ASX SPI 200 Index",
      "value": 0.41,
      "undefined": 100
  },
  {
      "name": "Long S&P 500 Index",
      "value": 0.33,
      "undefined": 200
  },
  {
      "name": "Short Australian Dollar / New Zealand Dollar",
      "value": 0.3,
      "undefined": 300
  }
]
// $(".accordion__item__header").on("click", function(event){    
    
//   if(!$(this).hasClass("active")){
      
//       $(".accordion__item__header.active").removeClass("active");   
//       $(".collapse.show").removeClass("show");
//       $(this).addClass("active")
//       $(this).next(".collapse").addClass("show")

//   }

// })



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

  // var user_session_id ;
  async function fetchSessionUserAPI(){

    const Localurl = 'https://epicipprojects.com/session_data'
  const url = window.location.origin+'/session_data' 
     
     fetch(url).then(resp=> resp.json())
     .then (resp => {
        //  console.log(count)
         console.log("count")
  
        // console.log(SessionData.email);
        // console.log("resp session");
      
        setSessionResponse(resp);
        // user_session_id = resp
        // UserResponse SessionUserResponse  
      // console.log(user_session_id);
      // console.log("user_session_id");

        console.log(SessionResponse);
      console.log(resp);
      console.log("resp from session API");
      })
      
     .catch(e=>{
       console.log(e);
     })
  };

  function renderDailyPrices(DailyPrice, index){
    if(DailyPrice.Price !== 0){
    return(
      <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
        <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">{DailyPrice.symbol}{DailyPrice.Price}</div>
        <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">{DailyPrice.class}<br/><span className="daily-span">({DailyPrice.classDetails}</span></div>
    </div>
    )
  }
  }
  // class CustomizedAxisTick extends PureComponent {
  //   render() {
  //     const { x, y, stroke, payload } = this.props;
  
  //     return (
  //       <g transform={`translate(${x},${y})`}>
  //         <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
  //           {payload.value}
  //         </text>
  //       </g>
  //     );
  //   }
  // }

  const CustomizedAxisTick = ({ x, y, stroke, payload }) => {

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={30} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-10)">
          {payload.value}
        </text>
      </g>
    );
};
function renderLiteratureData(data, index){
 
  return(

              <div class="col-sm-6">
                {/* <h5>{data.LiteratureNameKey}</h5>   */}
    			      <p class="pdf_download"><a href={window.location.origin+"/storage/literature-file/"+data.FileName} download target="_blank">{data.LiteratureTitle}<br/><span className="date">{data.LiteratureDate}</span></a></p>
				      </div>
  )
}

// productscommulativePerformance
function renderCummulativePerformanceNames(cummulatove, index) {
 if(index == 0){
  return(
      
    <th>{cummulatove.value}</th>

)   
 }else{
  return(
      
        <th>{cummulatove.name}</th>
  
  )}
}
function renderCummulativePerformanceValue(cummulatove, index) {
  if(index==0){
    return(
      <td>{cummulatove.name}</td>

)
  }else{
  return(
        <td>{cummulatove.value}</td>
  
  )}
}
function rendertwelvemonPerfDiscreteAPINames(twelvemon, index){
  if(index==0){
    return(
    <th>{twelvemon.value}</th>
    )
  }else{
    return(
    <th>{twelvemon.name}</th>
)}
}
function rendertwelvemonPerfDiscreteAPIValue(twelvemon, index){
  if(index==0){
  return(
    <th>{twelvemon.name}</th>
  )
  }else{
  return(
    <th>{twelvemon.value}</th>
)}
}
// function renderDailyPrices(DailyPrice, index){
//   if(DailyPrice.Price !== 0){
//   return(
//     <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
//       <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">${DailyPrice.Price}</div>
//       <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(USD) Shares</span></div>
//   </div>
//   )
// }
// }

function rendertop3contri(top3contriparam, index){
  return(
    <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
      <td className="contri-td align-left" style={{height: "52px"}}>{top3contriparam.name}</td>
      <td className="contri-td align-right" style={{height: "52px"}}>{top3contriparam.value}</td>
    </tr>
  )
}
function renderMonthNames(months, index){
  return(

    <th>{months}</th>
)
}
function render12MonthsData(bot3contriparam, index){
    // alert(bot3contriparam.name);
  for( let i=0; i< bot3contriparam.length; i++){
    return(
      <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>

        <td>{bot3contriparam[0].toString().slice(0,4)}</td>
        <td>{bot3contriparam[1]}</td>
        <td>{bot3contriparam[2]}</td>
        <td>{bot3contriparam[3]}</td>
        <td>{bot3contriparam[4]}</td>
        <td>{bot3contriparam[5]}</td>
        <td>{bot3contriparam[6]}</td>
        <td>{bot3contriparam[7]}</td>
        <td>{bot3contriparam[8]}</td>
        <td>{bot3contriparam[9]}</td>
        <td>{bot3contriparam[10]}</td>
        <td>{bot3contriparam[11]}</td>
        <td>{bot3contriparam[12]}</td>
        <td>{bot3contriparam[13]}</td>
    
        {/* <td>{bot3contriparam.value}</td> */}
      </tr>
    )
  }
}
function renderbot3contri(bot3contriparam, index){
  // alert(bot3contriparam.name);

  return(
    <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
      
      <td className="contri-td align-left" style={{height: "52px"}}>{bot3contriparam.name}</td>
      <td className="contri-td align-right" style={{height: "52px"}}>{bot3contriparam.value}</td>
    </tr>
  )
}

function renderFundinfo(fundinfoparam, index){
  // alert(bot3contriparam.name);

  return(
    <tr className="FundInformation__Row-sc-18irt95-2 fweCQL" key={index}>
      
      <td className="align-left">{fundinfoparam.name}</td>
      <td className="align-center">{fundinfoparam.value}</td>
    </tr>
  )
}
function renderCMSshareinfo(shareinfoparam, index){
  // alert(bot3contriparam.name);
if(index ==3 ||index ==2){
  return(
 <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
      
  <td className="align-left">{shareinfoparam.name}</td>
  {shareinfoparam.ausdValue ?
  <td className="align-center" colspan="6">{shareinfoparam.ausdValue}</td>:""}
  {shareinfoparam.agbpValue ?
  <td className="align-center">{shareinfoparam.agbpValue}</td> : ""}
  {shareinfoparam.aeurValue ? 
  <td className="align-center">{shareinfoparam.aeurValue}</td> : ""}
  {shareinfoparam.busdValue ?
  <td className="align-center">{shareinfoparam.busdValue}</td> :""}
  {shareinfoparam.bgbpValue ? 
  <td className="align-center">{shareinfoparam.bgbpValue}</td> :""}
  {shareinfoparam.beurValue ? 
  <td className="align-center">{shareinfoparam.beurValue}</td>:""}

</tr>
  )
}else{
  return(
    <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
      
      <td className="align-left">{shareinfoparam.name}</td>
      <td className="align-center">{shareinfoparam.ausdValue}</td>
      {shareinfoparam.agbpValue ?
      <td className="align-center">{shareinfoparam.agbpValue}</td> : ""}
      {shareinfoparam.aeurValue ? 
      <td className="align-center">{shareinfoparam.aeurValue}</td> : ""}
      {shareinfoparam.busdValue ?
      <td className="align-center">{shareinfoparam.busdValue}</td> :""}
      {shareinfoparam.bgbpValue ? 
      <td className="align-center">{shareinfoparam.bgbpValue}</td> :""}
      {shareinfoparam.beurValue ? 
      <td className="align-center">{shareinfoparam.beurValue}</td>:""}
    
    </tr>
  )
      }
}

// var keysCMSshareinfo = ["name", "ausdValue","agbpValue","aeurValue","busdValue","bgbpValue","beurValue"]

function renderShareClassNames(shareClass, index){
 if(index ==0){
  return(
    <th className="align-left">{shareClass.name}</th>


    )}else{
 
  return(
    <th className="align-center">{shareClass.name}</th>


)}
}
function renderShareClassValue(shareClassValue, index){
  if(index == 0){
    return(
    
      <td className="align-left">{shareClassValue.value}</td>
  )   
  }else{
  return(
    
    <td className="align-center">{shareClassValue.currency}{shareClassValue.value}</td>
)
}
}


function previewData(formData) {

  /* Add return before formData.map */
  return formData.map((item, key) => {
     console.log("item", item.name);
     return (
      <td>{item.name}</td>

      //  <div>{item.value}</div>
     )
   })
 }


    return (
      <Fragment>

    { status === true ? 
    

          
          /* <div className="accordion__item">
              
            <div className="accordion__item__header" >Fixed Income  </div>
            <div className="accordion__item__content">
              <ul>
                <li>
                  <a href="#">EPIC UCITS - NFA Global Bond Fund UI <span className="fa fa-angle-right"></span></a>
                </li>
                <li>
                  <a href="#">EPIC UCIT - Next Generation Global Bond Fund UI <span className="fa fa-angle-right"></span></a>
                </li>
              </ul>
            </div>

          </div> */

        /* <Accordion >




<Card className="accordion__card">

    <Card.Header className="accordion__item__header">
      <Accordion.Toggle as={Button} className="accordion-button"  variant="link" eventKey="1">
        Managed Futures
      </Accordion.Toggle>
    </Card.Header>

    <Accordion.Collapse eventKey="1">

      <Card.Body>

        <NavLink to="/market/EpicfinanceTrends" className="navlink a">EPIC Financial Trends <span className="fa fa-angle-right"></span></NavLink><br/>

      </Card.Body>

    </Accordion.Collapse>
</Card>



<Card className="accordion__card">

  <Card.Header className="accordion__item__header">
    <Accordion.Toggle as={Button} className="accordion-button" variant="link" eventKey="2">
      Equities
    </Accordion.Toggle>
  </Card.Header>
          
  <Accordion.Collapse eventKey="2">
          
    <Card.Body>

    <NavLink to="/market/EpicglobalEquity" className="navlink a">Epicip Global Equity Fund</NavLink><br/>
      <NavLink to="/market/EpicorientalFocus" className="navlink a">Epicip Oriental Focus Fund</NavLink><br/>
      <NavLink to="/market/EpicAsianCentricGlobalGrowth" className="navlink a">Epicip Asian Centric Global Growth Fund</NavLink><br/>
      <NavLink to="/market/EpicUKEquityMarketFund" className="navlink a">Epicip UK Equity Market Fund</NavLink><br/>

    
    </Card.Body>
          
  </Accordion.Collapse>
  </Card>

  <Card className="accordion__card">

    <Card.Header className="accordion__item__header">
      <Accordion.Toggle as={Button} className="accordion-button" variant="link" eventKey="3">
        Multi Asset
      </Accordion.Toggle>
    </Card.Header>

    <Accordion.Collapse eventKey="3">

      <Card.Body>


            <NavLink to="/market/EpicipWealthFund" className="navlink a">Epicip Wealth Fund</NavLink><br/>
            <NavLink to="/market/EpicipDiversifiedIncomeFund" className="navlink a">Epicip Diversified Income</NavLink><br/>
            <NavLink to="/market/EpicipMultiAssetFund" className="navlink a">Multi Asset Balanced</NavLink><br/>
            <NavLink to="/market/EpicipMultiAssetGrowthFund" className="navlink a">Epicip Multi Asset Growth</NavLink>



      </Card.Body>

    </Accordion.Collapse>
    </Card>

    <Card className="accordion__card">

      <Card.Header className="accordion__item__header">
        <Accordion.Toggle as={Button} className="accordion-button" variant="link" eventKey="0">
        Discretionary Fund
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey="0">

        <Card.Body>

            <NavLink to="/market/EpiciNfaUcitsFundRoute" className="navlink a">Epicip UCITS – NFA Global Bond Fund UI</NavLink><br/>
            <NavLink to="/market/EpicNextGenUcitsFundRoute" className="navlink a">Epicip UCITS – Next Generation Global Bond Fund UI</NavLink><br/>

        </Card.Body>

      </Accordion.Collapse>
    </Card>
    <Card className="accordion__card">

<Card.Header className="accordion__item__header">
  <Accordion.Toggle as={Button} className="accordion-button" variant="link" eventKey="4">
  Insights
  </Accordion.Toggle>
</Card.Header>

<Accordion.Collapse eventKey="4">

  <Card.Body>

      <NavLink to="/market/EpicInsights" className="navlink a">Epic Insights</NavLink><br/>

  </Card.Body>

</Accordion.Collapse>
</Card>

</Accordion> */

<section className="main-box">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-4">
        <div className="accordion">
        <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-FixedIncome" className="navlink a">Fixed Income</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">EPIC - NFA Global Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a">EPIC - Next Generation Global Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                
                
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicNextGenPCC" className="navlink a " >EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                   : 
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li> 
                 }
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicRNBpcc" className="navlink a " >EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                :
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li>
                }
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header active"><NavLink to="/markets/Epic-ManagedFutures" className="navlink a active-dis">Managed Futures</NavLink> </div>
            <div className="accordion__item__content block">
              <ul>
                <li><NavLink to="/markets/EpicfinanceTrends" className="navlink a a-active-color">EPIC Financial Trends <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-Equitites" className="navlink a">Equities</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicglobalEquity" className="navlink a">EPIC Global Equity Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicorientalFocus" className="navlink a">EPIC Oriental Focus Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicAsianCentricGlobalGrowth" className="navlink a">VT EPIC Asian Centric Global Growth Fund <span className="fa fa-angle-right"></span></NavLink></li>
				        <li><NavLink to="/markets/EpicUKEquityMarketFund" className="navlink a">VT EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-MultiAsset" className="navlink a">Multi Asset</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicipWealthFund" className="navlink a">EPIC Wealth Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipDiversifiedIncomeFund" className="navlink a">VT EPIC Diversified Income <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetFund" className="navlink a">VT EPIC Multi Asset Balanced <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetGrowthFund" className="navlink a">VT EPIC Multi Asset Growth <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          {/* <div className="accordion__item">
          <div className="accordion__item__header_dfm"><NavLink to="/markets/EpicDFM" className="navlink a ">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              <ul>
              <li><NavLink to="/market/EpicDFM" className="navlink a ">EPIC DFM <span className="fa fa-angle-right"></span></NavLink></li>           

                
              </ul>
            </div>
          </div> */}
           <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/EpicDFM" className="navlink a">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a ">Risk Managed Decumulation Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/AIMPortfolioDFM" className="navlink a">AIM Portfolio <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RiskTargetedDFM" className="navlink a">Risk Targeted Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>

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
     



      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 offset-md-1">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item nav-item-tabs"> <a class="nav-link active" data-toggle="tab" id="summaryButton" href="#nine" role="tab" onClick={summaryButton}>Summary</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#eight" onClick={portfolioButton} role="tab">Portfolio</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#one" onClick={performanceButton}  role="tab">Performance</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link " data-toggle="tab" href="#two" role="tab">Commentary</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#three" onClick={informationButton} role="tab">Information</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#four" id="literatureTab" onClick={literatureButton} role="tab">Literature</a> </li>  
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade active show" id="nine" role="tabpanel">
        <div class="row">
          <div class="col-sm-12">
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">
               
                <div class="row">

                    {/* <div class="col">
                        <div class="Paragraph__ParagraphContainer-sc-2ra4j2-0 gnBxSc">
                            <div>
                                <h3 class="Paragraph__Heading-sc-2ra4j2-2 dfMrdv">Fund Objectives</h3>
                                <div class="Paragraph__NormalParagraph-sc-2ra4j2-1 dISjjZ">
                                    <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ">
                                        The Fund seeks to provide capital appreciation over the medium term with a target annualised volatility of 15%. It aims to perform independently of traditional stock and bond investments, thereby providing valuable diversification benefits and potentially improving the risk/reward profile of a traditional portfolio. 
                                    </p>
                                </div>
                            </div>
                            <span>Key Investor Information can be found 
                                <button class="FundInformation__ButtonLink-sc-1gcw03z-0 iZcztK">here</button>.
                            </span>
                            <div>
                                <h3 class="Paragraph__Heading-sc-2ra4j2-2 dfMrdv">Trading Strategy</h3>
                                <div class="Paragraph__NormalParagraph-sc-2ra4j2-1 dISjjZ">
                                    <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ">The investment manager employs a systematic, proprietary, trend following strategy which trades across global UCITS eligible exchange traded financial futures.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                
                    {/* <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show"> */}
                        {/* <div classes="mb-1" class="row"> */}
                            <div class="col">
                                <div class="Paragraph__ParagraphContainer-sc-2ra4j2-0 gnBxSc">
                                    <div>                              

                                        {/* <h3 class="Paragraph__Heading-sc-2ra4j2-2 dfMrdv">{HeadingState}</h3> */}
                                        <div class="Paragraph__NormalParagraph-sc-2ra4j2-1 dISjjZ " dangerouslySetInnerHTML={{ __html: ObjectiveState }}>
                                            
                                            {/* <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ" dangerouslySetInnerHTML={{ __html: ObjectiveState }}>
                                                
                                            </p> */}
                                        </div>
                                    </div>
                                    <span>
                                        Key Investor Information can be found 
                                        <a href="#" onClick={Clicked}className="InvestorInfo a">&nbsp;here</a>.
                                    </span><br/><br/>
                                    {/* <div>
                                        <h3 class="Paragraph__Heading-sc-2ra4j2-2 dfMrdv">Trading Strategy</h3>
                                        <div class="Paragraph__NormalParagraph-sc-2ra4j2-1 dISjjZ">
                                            <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ">
                                                The investment manager employs a systematic, proprietary, trend following strategy which trades across global UCITS eligible exchange traded financial futures.
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        {/* </div> */}
                        <div class="row margin-1 daily-price-row">
                            <div class="col">
                                <div>
                                    <h3 class="Paragraph__Heading-sc-2ra4j2-2">Daily Prices</h3>
                                    <div class="DailyPricing__Boxes-sc-62f3gi-0 biswZj">
                                        {arrPRTUState.map(renderDailyPrices)}

                                       
                                        {/* <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[1]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(GBP Hedged) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">€{arrPRTUState[2]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A <br/><span className="daily-span">(EUR Hedged) Shares </span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">${arrPRTUState[3]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class B<br/><span className="daily-span">(USD) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[4]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class B<br/><span className="daily-span">(GBP Hedged) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">€{arrPRTUState[5]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class B<br/><span className="daily-span">(EUR Hedged) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">${arrPRTUState[6]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class X<br/><span className="daily-span">(USD) Shares</span></div>
                                        </div> */}
                                    </div>
                                    <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                                        <p className="mt-2">Data as at: {DailyDate}<br/>
                                        <span className="mt-1">Source: Maples Fund Services (Ireland) Limited</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-1">
                            <div class="col">
                                <h3 class="Paragraph__Heading-sc-2ra4j2-2">Investment Team</h3>
                                {/* <h3 class="Paragraph__SubHeading-sc-2ra4j2-3 dtCYUm">Darran Goodwin - Fund Manager</h3> */}
                                <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ" dangerouslySetInnerHTML={{ __html: TeamState }}>

                                </p>
                            </div>
                            </div>
                            {/* </div> */}
                
                
                
                
                  </div>
                </div>
                {/* <div class="row">
                    <div class="col">
                        <h3 class="Paragraph__Heading-sc-2ra4j2-2 dfMrdv">Investment Team</h3>
                        <h3 class="Paragraph__SubHeading-sc-2ra4j2-3 dtCYUm">Mark Harris - Fund Manager</h3>
                        <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ">Mark is the lead Fund Manager of Garraway’s range of multi-asset funds. Mark joined Garraway in 2019 from City Financial where he headed the multi-asset team, joining in October 2012 as part of its acquisition of Eden Asset Management. He joined Eden in 2011 to head its multi-asset business. In 2009, he joined Henderson following its acquisition of New Star Asset Management, leading a team of six managing over £2 billion in assets across a range of low to high-risk mandates. He had previously spent six years at New Star Asset Management managing a range of award-winning funds. Mark has a degree in Law and Economics from Newcastle University.</p>
                        <h3 class="Paragraph__SubHeading-sc-2ra4j2-3 dtCYUm">Pushpanshu Prakash - Senior Investment Analyst</h3>
                        <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ">Pushpanshu joined Garraway in 2019 from City Financial where he was a fund analyst for the Multi Asset team responsible for fund specific research and quantitative modelling. He joined City Financial in 2017 after graduating from University College London (UCL) with an MSci in Mathematics, where he completed his thesis in fluid dynamics with a focus on situational modelling and financial mathematics. Prior to starting his career in financial services, he completed internships at the UCL School of Management, Atlantic Trading and Procter &amp; Gamble.</p>
                    </div>
                </div> */}

          </div>
          
        </div>
      </div>
      <div class="tab-pane fade" id="eight" role="tabpanel">
        <div class="row chart-row">
          <div class="col-md-6 chart-block-finance"> 
            <p class="lse_redirect">Net Notional Sector Exposures (% NAV)</p>
            <p class="lse_redirect"><a class="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            {portfolioStatus === false ? "" : 
            <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={1000}
              data={graphData}
              // data
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="" horizontal="" vertical="true" />
              <XAxis  type="number" orientation="top" axisLine={false} tickFormatter={(tick) => {
               return `${tick}%`;
               }} />
              <YAxis type="category" interval={0} dataKey="name"  />
              <Tooltip />
              {/* <Legend className="legend-net" /> */}
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="current month" fill="#1a2352" />
              <Bar dataKey="pevious month" fill="#DBE4E9" />
            </BarChart>
            </ResponsiveContainer>
            }
            
          </div>

          <div class="col-md-6 VARmargin chart-block-finance"> 
            <p class="lse_redirect">Portfolio VaR by Sector (% NAV)</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
            <ResponsiveContainer width="100%" height="80%">
            <BarChart
              width={500}
              height={300}
              data={graphDataVAR}
              // VARdata
              
              layout="vertical"
              margin={{
                top: -10,
                right: 30,
                left: 15,
                bottom: -10,
              }}
            >
                <CartesianGrid strokeDasharray="" horizontal="" vertical="true" />
                <XAxis type="number" orientation="top" axisLine={false}      tickFormatter={(tick) => {
                   return `${tick}%`;
                   }}
               />
                <YAxis type="category"  dataKey="name"  />
                <Tooltip />
                {/* <Legend /> */}
                <ReferenceLine y={0} stroke="#000" />
                {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                <Bar dataKey="value" fill="#82ca9d" >
                {
                          graphDataVAR.map((entry, index) => (
                            <Cell key={`cell-${index}`}  stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1} fill={colors[index % 20]}/>
                          ))
                        }
                        </Bar>
            </BarChart>
            </ResponsiveContainer>
         
          </div>
          
        </div>
        <div class="row chart-row">
          <div class="col-md-6"> 

            <div>
                Exposures do not include share class hedges, only notional exposure from futures positions within the portfolio. Where FX Sector exposures are shown, both sides of the contract contribute to the relevant currency exposure.
            </div>  
          
          </div>
          <div class="col-md-6 chart-block"> 
            <p class="lse_redirect">Performance by Sector</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
             <ResponsiveContainer width="100%" height="75%">
                <BarChart
                  width={500}
                  height={300}
                  data={graphDataSectorPer}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                    <CartesianGrid strokeDasharray="" horizontal="true" vertical="" />
                    <XAxis dataKey="name" tick={CustomizedAxisTick} type="category" interval={0} axisLine={false} />
                    <YAxis  tickFormatter={(tick) => {
                         return `${tick}%`;
                         }}
                    />
                    {/* <Legend /> */}
                    <Tooltip/>
                    <ReferenceLine y={0} stroke="#000" />
                    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                    <Bar dataKey="value" fill="#82ca9d" >
                    
                        {
                          graphDataSectorPer.map((entry, index) => (
                            <Cell key={`cell-${index}`}  stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1} fill={colors[index % 20]}/>
                          ))
                        }                        
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
                    <Tooltip />
                    
          
          </div>
          
        </div>
        <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_financial_trends.pdf"} target="_blank">here</a>
                      <br/></p>
                  </div>
      </div>
      <div class="tab-pane fade" id="one" role="tabpanel">
        <div class="row table-row">
          <div class="col-sm-12">
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">
            <div class="row">
                    <div class="col" >
                    <table class="table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz_new hRUkzz_new_one">
                            <tbody>
                                <tr class="CumulativePerformance__TopRow-sc-51pab9-1 dwdfBh">
                                
                                  {cummulatovePerfData.map(renderCummulativePerformanceNames)}
                                  


                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
                                    
                                  {cummulatovePerfData.map(renderCummulativePerformanceValue)}

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <table class="table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz">
                            <tbody>
                                <tr class="CumulativePerformance__TopRow-sc-51pab9-1 dwdfBh">
                                
                                {twelvemonPerfDiscreteAPI.map(rendertwelvemonPerfDiscreteAPINames)}
                                    {/* <th>Cumulative Performance</th>
                                    <th>1m</th>
                                    <th>1Yr</th>
                                    <th>3Yr</th>
                                    <th>5Yr</th>
                                    <th>Since UCITS Strategy Relaunch</th>
                                    <th>Since Inception</th> */}
                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
                                
                                {twelvemonPerfDiscreteAPI.map(rendertwelvemonPerfDiscreteAPIValue)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div class="mb-2 row">
                    <div class="col" >
                        <table class=" table table-bordered CumulativePerformance__Table-sc-51pab9-0 hRUkzz">
                            <tbody>
                                <tr class="CumulativePerformance__TopRow-sc-51pab9-1 dwdfBh">
                                    <th>12 month Performance</th>
                                    <th>30/06/2016 - 30/06/2017</th>
                                    <th>30/06/2017 - 30/06/2018</th>
                                    <th>30/06/2018 - 30/06/2019</th>
                                    <th>30/06/2019 - 30/06/2020</th>
                                    <th>30/06/2020 - 30/06/2021</th>
                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
                                    <th>Class B GBP</th>
                                    <td class="CumulativePerformance__NormalTableHead-sc-51pab9-3 dVUvJj">-5.09%</td>
                                    <td class="CumulativePerformance__NormalTableHead-sc-51pab9-3 dVUvJj">-13.35%</td>
                                    <td class="CumulativePerformance__NormalTableHead-sc-51pab9-3 dVUvJj">2.26%</td>
                                    <td class="CumulativePerformance__NormalTableHead-sc-51pab9-3 dVUvJj">-4.85%</td>
                                    <td class="CumulativePerformance__NormalTableHead-sc-51pab9-3 dVUvJj">3.50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
                
                <div className="row remove_margin_multi_asset remove_margin_multi_asset_once">
                    <div className="pr-md-1 col-12 col-md-6 col table-div-margin remove_margin" >
                        <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjEGR iiGyjEGR_dfm iiGyjEGR_dfm_onece">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th colspan="1" className="align-left">Top Three Contributors</th>
                                    <th colspan="1" className="align-right">Gross Attribution</th>
                                </tr>

                                {top3contriarray.map(rendertop3contri)}

                            </tbody>
                        </table>
                    </div>
                    <div class="pl-md-1 col-12 col-md-6 col remove_margin">

                      <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjE iiGyjE_dfm iiGyjE_dfmnewonce">
                          <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                              <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th style={{width: "60%"}} className="align-left">Bottom Three Contributors</th>
                                    <th style={{width: "30%"}} className="align-right">Gross Attribution</th>
                                </tr>
                                {bot3contriarray.map(renderbot3contri)}
                                

                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="mb-2 row">
                    <div class="col" >
                    <div class="MonthlyPerformance__Wrapper-sc-1n33bhd-0 cHAvbZ">
                        <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                            Monthly Performance – GFT Class B GBP</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayState.map(renderMonthNames)}

                                        {/* <th></th>
                                        <th>Jan</th>
                                        <th>Feb</th>
                                        <th>Mar</th>
                                        <th>Apr</th>
                                        <th>May</th>
                                        <th>Jun</th>
                                        <th>Jul</th>
                                        <th>Aug</th>
                                        <th>Sept</th>
                                        <th>Oct</th>
                                        <th>Nov</th>
                                        <th>Dec</th>
                                        <th>YTD</th> */}
                                    </tr>
                                    
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                    

                                        {/* <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2021</td>
                                        <td>-0.40%</td>
                                        <td>2.55%</td>
                                        <td>2.31%</td>
                                        <td>0.98%</td>
                                        <td>3.32%</td>
                                        <td>-3.95%</td>
                                        <td>-1.90%</td>
                                        <td>-1.29%</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>1.40%</td> */}
                                    </tr>
                                    {/* <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2020</td>
                                        <td>0.50%</td>
                                        <td>-1.22%</td>
                                        <td>6.61%</td>
                                        <td>-4.44%</td>
                                        <td>-4.35%</td>
                                        <td>-3.74%</td>
                                        <td>1.01%</td>
                                        <td>-1.82%</td>
                                        <td>-2.36%</td>
                                        <td>-0.59%</td>
                                        <td>-3.14%</td>
                                        <td>5.99%</td>
                                        <td>-7.97%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2019</td>
                                        <td>-3.10%</td>
                                        <td>-0.44%</td>
                                        <td>5.43%</td>
                                        <td>-0.72%</td>
                                        <td>6.76%</td>
                                        <td>-1.75%</td>
                                        <td>4.84%</td>
                                        <td>8.54%</td>
                                        <td>-6.10%</td>
                                        <td>-4.08%</td>
                                        <td>0.64%</td>
                                        <td>-0.94%</td>
                                        <td>8.22%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2018</td>
                                        <td>2.85%</td><td>-9.72%</td><td>-0.98%</td><td>-3.34%</td><td>-3.76%</td><td>1.01%</td><td>-2.11%</td><td>2.06%</td><td>-5.22%</td><td>-1.16%</td><td>-1.69%</td><td>4.92%</td><td>-16.59%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2017</td><td>-0.23%</td><td>0.77%</td><td>-3.19%</td><td>0.83%</td><td>-0.82%</td><td>-2.29%</td><td>1.79%</td><td>-2.15%</td><td>-2.03%</td><td>4.77%</td><td>0.53%</td><td>-2.41%</td><td>-4.62%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2016</td><td>10.83%</td><td>7.58%</td><td>-4.43%</td><td>-2.62%</td><td>-2.40%</td><td>10.43%</td><td>1.82%</td><td>-2.04%</td><td>0.93%</td><td>-3.10%</td><td>-1.45%</td><td>3.82%</td><td>19.37%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2015</td><td>7.59%</td><td>1.92%</td><td>-0.48%</td><td>-2.23%</td><td>0.80%</td><td>-2.06%</td><td>1.13%</td><td>-3.80%</td><td>3.75%</td><td>-6.27%</td><td>-0.58%</td><td>-2.49%</td><td>-3.37%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2014</td><td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-3.10%</td><td class="MonthlyPerformance__PartialShadedCell-sc-1n33bhd-6 idoIOi">-0.21%</td><td>-2.98%</td><td>1.82%</td><td>3.45%</td><td>3.09%</td><td>0.02%</td><td>3.35%</td><td>1.66%</td><td>-5.15%</td><td>15.31%</td><td>2.87%</td><td>20.44%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2013</td><td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">3.76%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-5.83%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">3.29%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">4.99%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-0.87%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-5.99%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-4.43%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-4.57%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-2.45%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">4.00%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">0.04%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">1.77%</td>
                                    <td>-6.97%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2012</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-0.18%</td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-7.15%</td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">0.93%</td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-0.52%</td>
                                        <td>-6.94%</td>
                                    </tr> */}
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    {/* <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                            Monthly Performance – GFT Class B GBP</th>
                                    </tr> */}





                                    
                                    {/* <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"> */}
                                    
                                    {monthlyPerformance2DArrayState.map(render12MonthsData)}

                                        {/* <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2021</td>
                                        <td>-0.40%</td>
                                        <td>2.55%</td>
                                        <td>2.31%</td>
                                        <td>0.98%</td>
                                        <td>3.32%</td>
                                        <td>-3.95%</td>
                                        <td>-1.90%</td>
                                        <td>-1.29%</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>1.40%</td> */}
                                    {/* </tr> */}
                                    {/* <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2020</td>
                                        <td>0.50%</td>
                                        <td>-1.22%</td>
                                        <td>6.61%</td>
                                        <td>-4.44%</td>
                                        <td>-4.35%</td>
                                        <td>-3.74%</td>
                                        <td>1.01%</td>
                                        <td>-1.82%</td>
                                        <td>-2.36%</td>
                                        <td>-0.59%</td>
                                        <td>-3.14%</td>
                                        <td>5.99%</td>
                                        <td>-7.97%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2019</td>
                                        <td>-3.10%</td>
                                        <td>-0.44%</td>
                                        <td>5.43%</td>
                                        <td>-0.72%</td>
                                        <td>6.76%</td>
                                        <td>-1.75%</td>
                                        <td>4.84%</td>
                                        <td>8.54%</td>
                                        <td>-6.10%</td>
                                        <td>-4.08%</td>
                                        <td>0.64%</td>
                                        <td>-0.94%</td>
                                        <td>8.22%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2018</td>
                                        <td>2.85%</td><td>-9.72%</td><td>-0.98%</td><td>-3.34%</td><td>-3.76%</td><td>1.01%</td><td>-2.11%</td><td>2.06%</td><td>-5.22%</td><td>-1.16%</td><td>-1.69%</td><td>4.92%</td><td>-16.59%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2017</td><td>-0.23%</td><td>0.77%</td><td>-3.19%</td><td>0.83%</td><td>-0.82%</td><td>-2.29%</td><td>1.79%</td><td>-2.15%</td><td>-2.03%</td><td>4.77%</td><td>0.53%</td><td>-2.41%</td><td>-4.62%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2016</td><td>10.83%</td><td>7.58%</td><td>-4.43%</td><td>-2.62%</td><td>-2.40%</td><td>10.43%</td><td>1.82%</td><td>-2.04%</td><td>0.93%</td><td>-3.10%</td><td>-1.45%</td><td>3.82%</td><td>19.37%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2015</td><td>7.59%</td><td>1.92%</td><td>-0.48%</td><td>-2.23%</td><td>0.80%</td><td>-2.06%</td><td>1.13%</td><td>-3.80%</td><td>3.75%</td><td>-6.27%</td><td>-0.58%</td><td>-2.49%</td><td>-3.37%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2014</td><td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-3.10%</td><td class="MonthlyPerformance__PartialShadedCell-sc-1n33bhd-6 idoIOi">-0.21%</td><td>-2.98%</td><td>1.82%</td><td>3.45%</td><td>3.09%</td><td>0.02%</td><td>3.35%</td><td>1.66%</td><td>-5.15%</td><td>15.31%</td><td>2.87%</td><td>20.44%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"><td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2013</td><td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">3.76%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-5.83%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">3.29%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">4.99%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-0.87%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-5.99%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-4.43%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-4.57%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-2.45%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">4.00%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">0.04%</td>
                                    <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">1.77%</td>
                                    <td>-6.97%</td>
                                    </tr>
                                    <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa">
                                        <td class="MonthlyPerformance__Year-sc-1n33bhd-7 gQqNla">2012</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-0.18%</td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-7.15%</td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">0.93%</td>
                                        <td class="MonthlyPerformance__ShadedCell-sc-1n33bhd-5 bSjxEq">-0.52%</td>
                                        <td>-6.94%</td>
                                    </tr> */}
                                </tbody>
                            </table>


                            <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                         Monthly Performance – GFT Class A USD</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayStateUSD.map(renderMonthNames)}

                                        </tr>
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    {monthlyPerformance2DArrayStateUSD.map(render12MonthsData)}
                                </tbody>
                            </table>


                            <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                        Monthly Performance – GFT Class A EUR</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayStateAEUR.map(renderMonthNames)}

                                        </tr>
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    {monthlyPerformance2DArrayStateAEUR.map(render12MonthsData)}
                                </tbody>
                            </table>


                            <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                        Monthly Performance – GFT Class B USD</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayStateUSDB.map(renderMonthNames)}

                                        </tr>
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    {monthlyPerformance2DArrayStateUSDB.map(render12MonthsData)}
                                </tbody>
                            </table>



                            <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                        Monthly Performance – GFT Class B EUR</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayStateBEUR.map(renderMonthNames)}

                                        </tr>
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    {monthlyPerformance2DArrayStateBEUR.map(render12MonthsData)}
                                </tbody>
                            </table>



                            {/* <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                         Monthly Performance – GFT Class A GBP</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">
                                        {monthsArrayStateAGBP.map(renderMonthNames)}
                                    </tr>
                                   
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    {monthlyPerformance2DArrayStateAGBP.map(render12MonthsData)}
                                </tbody>
                            </table> */}


                        </div>
                    </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}.
                      All information also available to download <a download href={window.location.origin+"/sitepdfs/epic_financial_trends.pdf"} target="_blank" >here </a> 
                      <br/></p>
                  </div>
            </div>
          
          </div>

          
        </div>
      </div>
      <div class="tab-pane fade" id="two" role="tabpanel">
        <div class="row">
          <div class="col-sm-12">
          <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">
              <div class="mb-2 row">
                  <div class="col-md-12"  dangerouslySetInnerHTML={{ __html: productsCommentary }}>
                    {/* {productsCommentary} */}
                  {/* {bot3contriarray.map(renderbot3contri)} */}
                    
                    
                  </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}.
                      All information also available to download <a href={window.location.origin+"/sitepdfs/epic_financial_trends.pdf"} target="_blank" download>here </a> 
                      <br/></p>
                  </div>
                    </div>            
          </div>
          
        </div>
      </div>
      <div class="tab-pane fade" id="three" role="tabpanel">
        <div class="row">
          <div class="col-sm-12">
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">
                <div class="mb-3 row">
                    <div class="col" >
                        <table class="FundInformation__Table-sc-18irt95-0 cRUpgb">
                            <tbody class=" FundInformation__Body-sc-18irt95-1 hNmQXY">
                                <tr class="FundInformation__Row-sc-18irt95-2 kzFInj">
                                    <th>Fund Information</th>
                                </tr>
                                {Fundinfoarray.map(renderFundinfo)}
                                
                                {CMSFundinfoarray.map(renderFundinfo)}
                                
{/* 
                                <tr className="FundInformation__Row-sc-18irt95-2 fweCQL">
                                  <td className="align-left">Pricing Frequency</td>   
                                  <td className="align-right">Daily</td>
                                </tr>
                                <tr className="FundInformation__Row-sc-18irt95-2 fweCQL">
                                  <td className="align-left">Domicile</td>   
                                  <td className="align-right">Ireland</td>
                                </tr>
                                <tr className="FundInformation__Row-sc-18irt95-2 fweCQL">
                                  <td className="align-left">Exit Charge</td>   
                                  <td className="align-right">None</td>
                                </tr> */}
 
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <table class="table  Shares__Table-sc-1brks4f-0 hBbtmd">
                            <tbody class="Shares__Body-sc-1brks4f-1 hbWYKC">
                                <tr class="Shares__Row-sc-1brks4f-2 hzpAKA">
                                

                                {ShareClassarray.map(renderShareClassNames)}
                                
                                {/* {CMSshareinfoarray.map(renderShareClassNames)} */}

                                    {/* <th class="text-left">Share Class</th>
                                    <th class="text-center">A USD</th>
                                    <th class="text-center">A GBP</th>
                                    <th class="text-center">A EUR</th>
                                    <th class="text-center">B USD</th>
                                    <th class="text-center">B GBP</th>
                                    <th class="text-center">B EUR</th> */}
                                </tr>


                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">

                                {ShareClassarray.map(renderShareClassValue)}
                                
                                {/* {CMSshareinfoarray.map(renderShareClassValue)} */}

                                    {/* <td>NAV per Share</td>
                                    <td align="center" colspan="1">$995.86</td>
                                    <td align="center" colspan="1">£964.27</td>
                                    <td align="center" colspan="1">€820.02</td>
                                    <td align="center" colspan="1">$1,063.31</td>
                                    <td align="center" colspan="1">£795.17</td>
                                    <td align="center" colspan="1">€773.23</td> */}
                                </tr>
                                {CMSshareinfoarray.map(renderCMSshareinfo)}

                                {/* <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">Minimum Initial Investment</td>
                                    <td className="align-right">$100,000	</td>
                                    <td className="align-right">$100,000	</td>
                                    <td className="align-right">$100,000	</td>
                                    <td className="align-right">$100</td>
                                    <td className="align-right">$100</td>
                                    <td className="align-right">$100</td>
                                </tr>

                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">Minimum Additional Investment</td>
                                    <td className="align-right">$10,000	</td>
                                    <td className="align-right">$10,000	</td>
                                    <td className="align-right">$10,000	</td>
                                    <td className="align-right">$100</td>
                                    <td className="align-right">$100</td>
                                    <td className="align-right">$100</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">Ongoing Charge (as at 31 December 2020)</td>
                                    <td className="align-right">1.56%</td>
                                    <td className="align-right">1.56%</td>
                                    <td className="align-right">1.55%</td>
                                    <td className="align-right">1.81%</td>
                                    <td className="align-right">1.80%</td>
                                    <td className="align-right">1.81%</td>
                                 </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">ISIN</td>
                                    <td className="align-right">IE00B86V3N61</td>
                                    <td className="align-right">IE00B8NCXV05</td>
                                    <td className="align-right">IE00B86JXG34</td>
                                    <td className="align-right">IE00B8L77L59</td>
                                    <td className="align-right">IE00B86KNN34</td>
                                    <td className="align-right">IE00B7S9LZ93</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">Bloomberg Ticker</td>
                                    <td className="align-right">EEADTAU ID</td>
                                    <td className="align-right">EEADTAS ID</td>
                                    <td className="align-right">GARFTAE ID</td>
                                    <td className="align-right">EEADTBU ID</td>
                                    <td className="align-right">EEADTBS ID</td>
                                    <td className="align-right">GARFTBE ID</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">Citi</td>
                                    <td className="align-right">MD8G</td>
                                    <td className="align-right">I2VK</td>
                                    <td className="align-right">Q6OF</td>
                                    <td className="align-right">I2VL</td>
                                    <td className="align-right">MD8J</td>
                                    <td className="align-right">NTGR</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">MEXID</td>
                                    <td className="align-right">-</td>
                                    <td className="align-right">GAWXA</td>
                                    <td className="align-right">-</td>
                                    <td className="align-right">-</td>
                                    <td className="align-right">GACMA</td>
                                    <td className="align-right">GAYZA</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td className="align-left">Open for new investment</td>
                                    <td className="align-right">Yes</td>
                                    <td className="align-right">Yes</td>
                                    <td className="align-right">Yes</td>
                                    <td className="align-right">Yes</td>
                                    <td className="align-right">Yes</td>
                                    <td className="align-right">Yes</td>
                                </tr> */}

                                

                                {/* <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Minimum Initial Investment</td>
                                    <td align="center" colspan="1">$100,000</td>
                                    <td align="center" colspan="1">£100,000</td>
                                    <td align="center" colspan="1">€100,000</td>
                                    <td align="center" colspan="1">$100</td>
                                    <td align="center" colspan="1">£100</td>
                                    <td align="center" colspan="1">€100</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Minimum Additional Investment</td>
                                    <td align="center" colspan="1">$10,000</td>
                                    <td align="center" colspan="1">£10,000</td>
                                    <td align="center" colspan="1">€10,000</td>
                                    <td align="center" colspan="1">$100</td>
                                    <td align="center" colspan="1">£100</td>
                                    <td align="center" colspan="1">€100</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Ongoing Charge (as at 31 December 2020)</td>
                                    <td align="center" colspan="1">1.56%</td>
                                    <td align="center" colspan="1">1.56%</td>
                                    <td align="center" colspan="1">1.55%</td>
                                    <td align="center" colspan="1">1.81%</td>
                                    <td align="center" colspan="1">1.80%</td>
                                    <td align="center" colspan="1">1.81%</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Performance Fee</td>
                                    <td align="center" colspan="99">20%, High water mark</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>UK Reporting Fund Status</td>
                                    <td align="center" colspan="99">Yes (All share classes)</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>ISIN</td>
                                    <td align="center" colspan="1">IE00B86V3N61</td>
                                    <td align="center" colspan="1">IE00B8NCXV05</td>
                                    <td align="center" colspan="1">IE00B86JXG34</td>
                                    <td align="center" colspan="1">IE00B8L77L59</td>
                                    <td align="center" colspan="1">IE00B86KNN34</td>
                                    <td align="center" colspan="1">IE00B7S9LZ93</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Bloomberg Ticker</td>
                                    <td align="center" colspan="1">EEADTAU ID</td>
                                    <td align="center" colspan="1">EEADTAS ID</td>
                                    <td align="center" colspan="1">GARFTAE ID</td>
                                    <td align="center" colspan="1">EEADTBU ID</td>
                                    <td align="center" colspan="1">EEADTBS ID</td>
                                    <td align="center" colspan="1">GARFTBE ID</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Citi</td>
                                    <td align="center" colspan="1">MD8G</td>
                                    <td align="center" colspan="1">I2VK</td>
                                    <td align="center" colspan="1">Q6OF</td>
                                    <td align="center" colspan="1">I2VL</td>
                                    <td align="center" colspan="1">MD8J</td>
                                    <td align="center" colspan="1">NTGR</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>MEXID</td>
                                    <td align="center" colspan="1">-</td>
                                    <td align="center" colspan="1">GAWXA</td>
                                    <td align="center" colspan="1">-</td>
                                    <td align="center" colspan="1">-</td>
                                    <td align="center" colspan="1">GACMA</td>
                                    <td align="center" colspan="1">GAYZA</td>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                    <td>Open for new investment</td>
                                    <td align="center" colspan="1">Yes</td>
                                    <td align="center" colspan="1">Yes</td>
                                    <td align="center" colspan="1">Yes</td>
                                    <td align="center" colspan="1">Yes</td>
                                    <td align="center" colspan="1">Yes</td>
                                    <td align="center" colspan="1">Yes</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}.
                      All information also available to download <a href={window.location.origin+"/sitepdfs/epic_financial_trends.pdf"} target="_blank" download>here </a> 
                      <br/></p>
                  </div>

            </div>
            
          </div>
          
        </div>
      </div>
      <div class="tab-pane fade" id="four" role="tabpanel">
        <div class="row">
          <div class="col-sm-12">
          <div className="row">
               

         
          { KeyInveInfoState.length>0 ? <div class="col-md-12"><h3><b>Key Investor Information</b></h3><br/></div>  : ""}
          { KeyInveInfoState.length>0 ? KeyInveInfoState.map(renderLiteratureData) :""}

          <div className="col-md-12">
					      <h4>Fact Sheet</h4>
                <div className="row">
              <div className="col-md-6">
                <p class="pdf_download">
                  <a href={window.location.origin+"/sitepdfs/epic_financial_trends.pdf"} target="_blank" download>Financial Trends PDF
                        <br/>
                  </a>
                </p>
              </div>
              <div className="col-md-6">
              
                <p class="pdf_download">
                  <a href={window.location.origin+"/sitepdfs/epic_financial_trends_x_usd.pdf"} target="_blank" download>Financial Trends X USD PDF
                        <br/>
                  </a>
                </p>
				      </div>
              </div>
              </div>
          
          { PressCoverageState.length>0 ? <div class="col-md-12"><h3><b>Press Coverage</b></h3><br/></div>  : ""}
          { PressCoverageState.length>0 ? PressCoverageState.map(renderLiteratureData) :""}

          { LiteratureDataState.length>0 ? <div class="col-md-12"><h3><b>Other Information</b></h3><br/></div>  : ""}
          { LiteratureDataState.length>0 ? LiteratureDataState.map(renderLiteratureData) :""}

          { ApplicationsState.length>0 ? <div class="col-md-12"><h3><b>Applications</b></h3><br/></div>  : ""}
          { ApplicationsState.length>0 ? ApplicationsState.map(renderLiteratureData) :""}

          { ReportsState.length>0 ? <div class="col-md-12"><h3><b>Reports</b></h3><br/></div>  : ""}
          { ReportsState.length>0 ? ReportsState.map(renderLiteratureData) :""}

          { offerDocumentState.length>0 ? <div class="col-md-12"><h3><b>Offering Documents</b></h3><br/></div>  : ""}
          { offerDocumentState.length>0 ? offerDocumentState.map(renderLiteratureData) :""}
             
    


          </div>
          {/* <div class="row">
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-05-20-ESO-AGM-Notice-V3-326976254-clean.pdf">2021 Notice of AGM
                      <br/><span class="date">20 May 2021</span></a></p>
				  </div>
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-ESO-AGM-Proxy_32699907_3_0.pdf">2021 AGM Proxy Form<br/><span class="date">21 May 2021</span></a></p>
				  </div>
          </div>
          <div class="row">
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-05-20-ESO-AGM-Notice-V3-326976254-clean.pdf">2021 Notice of AGM
                      <br/><span class="date">20 May 2021</span></a></p>
				  </div>
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-ESO-AGM-Proxy_32699907_3_0.pdf">2021 AGM Proxy Form<br/><span class="date">21 May 2021</span></a></p>
				  </div>
          </div>
          <div class="row">
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-05-20-ESO-AGM-Notice-V3-326976254-clean.pdf">2021 Notice of AGM
                      <br/><span class="date">20 May 2021</span></a></p>
				  </div>
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-ESO-AGM-Proxy_32699907_3_0.pdf">2021 AGM Proxy Form<br/><span class="date">21 May 2021</span></a></p>
				  </div>
          </div>
          <div class="row">
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-05-20-ESO-AGM-Notice-V3-326976254-clean.pdf">2021 Notice of AGM
                      <br/><span class="date">20 May 2021</span></a></p>
				  </div>
				  <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-ESO-AGM-Proxy_32699907_3_0.pdf">2021 AGM Proxy Form<br/><span class="date">21 May 2021</span></a></p>
				  </div>
          </div> */}
            
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
    </div>
  </div>
</section>
:<div className="center"><ReactBootstrap.Spinner animation="border"/></div> 
}
</Fragment>
    );
}
 
export default EpicfinanceTrends;

