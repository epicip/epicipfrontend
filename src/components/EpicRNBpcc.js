// import React from 'react';
import { render } from '@testing-library/react';
import React, { useState, useEffect, PureComponent, useRef, useMemo, useCallback, Fragment } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { NavLink } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
  import { PieChart, Pie, Sector, } from "recharts";
import "./EpicfinanceTrends.css";
import { isEqual } from "lodash";
import * as ReactBootstrap from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import $ from "jquery";
// import { Accordion } from "react-bootstrap";
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;
// var responseData;
const colors = ["#1A1549", " #9DB1DB", "#E6EEF6", "#dcdcdc","#B85876"]

// const graphData = []
// const graphDataVAR = []
// const graphDataSectorPer =[]
// const cummulatovePerfData =[]
// const cummulatovePerfDatadummy =[]

// const twelvemonPerfDiscreteAPI = []
// const top3contriarray =[]
// const bot3contriarray = []
const Fundinfoarray = []
const ShareClassAarray = []
const ShareClassBarray = []
let bot3contriDummy = []


// const usePrevious = value => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };

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

  const Donutdata = [


    { name: "Group D", value: 3.1 },
    { name: "Group A", value: 71.9 },
    { name: "Group C", value: 16.4 },
    { name: "Group B", value: 8.6 },


  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,value, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if(value > 5){
    return (
      
      <text x={x} y={ y} fill="white" className="text-size-a" textAnchor={x > cx ? 'start' : 'end'} >
      
        {`${ (value).toFixed(2)}%`}
      </text>
    )};
  };
  
  const DONUTCOLORS10 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#404040","#262626","#99103B","#B85876","#D296A9"];

  const DONUTCOLORS7 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#99103B",": #B85876"];
  
  const DONUTCOLORS5 = ["#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#B85876"]

  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    if(entry.payload.value != undefined){
      return <span className="legend-span">{value+' '+(entry.payload.payload.value).toFixed(2)+'%'}</span>;
    }else{
      return <span style={{ color:"#1a1549" }}>{value}</span>;
    }
  };

const EpicipRNBpccFunction = () => {




const [products, setProducts] = useState([]);
const [productsVAR, setProductsVAR] = useState([]);
const [productsSectorPer, setProductsSectorPer] = useState([]);
const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
const [productscommulativePerformanceQDUSD, setproductscommulativePerformanceQDUSD] = useState([]);

const [productscommulativePerformanceQDEUR, setproductscommulativePerformanceQDEUR] = useState([]);

const [productscommulativePerformanceQAEUR, setproductscommulativePerformanceQAEUR] = useState([]);
const [productscommulativePerformanceQDGBP, setproductscommulativePerformanceQDGBP] = useState([]);


const [productscommulativePerformanceACHF, setproductscommulativePerformanceACHF] = useState([]);
const [productscommulativePerformanceAEUR, setproductscommulativePerformanceAEUR] = useState([]);


const [productscommulativePerformanceB, setproductscommulativePerformanceB] = useState([]);
const [productscommulativePerformanceBEUR, setproductscommulativePerformanceBEUR] = useState([]);
const [productscommulativePerformanceC, setproductscommulativePerformanceC] = useState([]);
const [twelvemonPerfAGBP, settwelvemonPerfAGBP] = useState([]);

const [twelvemonPerfDUSD, settwelvemonPerfDUSD] = useState([]);
const [twelvemonPerfAEUR, settwelvemonPerfAEUR] = useState([]);
const [twelvemonPerfDEUR, settwelvemonPerfDEUR] = useState([]);
const [twelvemonPerfDGBP, settwelvemonPerfDGBP] = useState([]);
const [twelvemonPerfACHF, settwelvemonPerfACHF] = useState([]);


const [performanceSummary, setperformanceSummary] = useState([]);

const [StateSession, setStateSession] = useState([]);






const [twelvemonPerfBGBP, settwelvemonPerfBGBP] = useState([]);
const [twelvemonPerfBEUR, settwelvemonPerfBEUR] = useState([]);
const [twelvemonPerfCGBP, settwelvemonPerfCGBP] = useState([]);


const [AssetAllocation, setAssetAllocation] = useState([]);

const [CreditRating, setCreditRating] = useState([]);


const [top3response, settop3response] = useState([]);
const [bot3response, setbot3response] = useState([]);

const [InceptionData, setInceptionData] = useState([]);

const [SessionUserResponse, setSessionUserResponse] = useState([]);
const [SessionResponse, setSessionResponse] = useState([]);


const [UserResponse, setUserResponse] = useState([]);







// const [productscommulativePerformanceA, setproductscommulativePerformanceA] = useState([]);

const [products12monthsPerformance, setproducts12monthsPerformance] = useState([]);
const [productstop3contr, setproductstop3contr] = useState([]);
const [productsbot3contr, setproductsbot3contr] = useState([]);
const [productsCommentary, setproductsCommentary] = useState([]);
const [productsFundinfo, setproductsFundinfo] = useState([]);
const [CMSFundinfo, setCMSFundinfo] = useState([]);
const [CMSshareinfo, setCMSshareinfo] = useState([]);
const [productsShareClassA, setproductsShareClassA] = useState([]);
const [productsShareClassB, setproductsShareClassB] = useState([]);
const [productsMonthlyPerf, setproductsMonthlyPerf] = useState([]);
const [portfolioStatus, setportfolioStatus] = useState(false);
const [performanceStatus1, setperformanceStatus1] = useState(false);

const [HeadingState, setHeadingState] = useState([]);
const [ObjectiveState, setObjectiveState] = useState([]);
const [TeamState, setTeamState] = useState([]);
const[Summary,setSummary]= useState([]);

const[Literature,setLiterature]= useState([]);
const [FundNameState, setFundNameState] = useState([]);
const [LiteratureDataState, setLiteratureDataState] = useState([]);
const [KeyInveInfoState, setKeyInveInfoState] = useState([]);
const [PressCoverageState, setPressCoverageState] = useState([]);
const [ApplicationsState, setApplicationsState] = useState([]);
const [ReportsState, setReportsState] = useState([]);
const [offerDocumentState, setofferDocumentState] = useState([]);

const [graphData, setgraphData] = useState([]);
const [portfolioStatusState, setportfolioStatusState] = useState([]);

const [NFAState, setNFAState] = useState([]);

const [RespPrtu, setRespPrtu] = useState([]);

const [PRTU, setPRTU] = useState([]);
const [arrPRTUState,setarrPRTUState]= useState([]);
const [PRTUDate,setPRTUDate]= useState([]);

const [arrAuthUserState,setarrAuthUserState]= useState([]);


const [DailyDate,setDailyDate]= useState([]);


const [top10HoldingState, settop10HoldingState] = useState([]);

const [AssetAllocationState, setAssetAllocationState] = useState([]);
const [marketCapState, setmarketCapState]= useState([]);
const [equititeState, setequititeState]= useState([]);

const [DerVarState, setDerVarState]= useState([]);




const [regionBreakdownState, setregionBreakdownState]= useState([]);

const [sectorBreakdownState, setsectorBreakdownState]= useState([]);






const [graphDataVAR, setgraphDataVAR] = useState([]);
const[graphDataSectorPer,setgraphDataSectorPer]= useState([]);


const[cummulatovePerfData,setcummulatovePerfData]= useState([]);
const[cummulatovePerfAEURData,setcummulatovePerfAEURData]= useState([]);
const[cummulatovePerfDUSDData,setcummulatovePerfDUSDData]= useState([]);
const[CummulativeperfDEURData,setCummulativeperfDEURData]= useState([]);
const[CummulativeperfDGBPData,setCummulativeperfDGBPData]= useState([]);
const[CummulativeperfACHFData,setCummulativeperfACHFData]= useState([]);
const[CummulativeperfAEURData,setCummulativeperfAEURData]= useState([]);





const[cummulatovePerfBData,setcummulatovePerfBData]= useState([]);
const[CummulativeperfeBEURData,setCummulativeperfeBEURData]= useState([]);
const[CummulativeperfC,setCummulativeperfC]= useState([]);


const[TwelveMperfAGBPState,setTwelveMperfAGBPState]= useState([]);

const[TwelveMperfDUSDState,setTwelveMperfDUSDState]= useState([]);
const[TwelveMperfDGBPState,setTwelveMperfDGBPState]= useState([]);
const[TwelveMperfDEURState,setTwelveMperfDEURState]= useState([]);
const[TwelveMperfAEURState,setTwelveMperfAEURState]= useState([]);

const[TwelveMperfACHFState,setTwelveMperfACHFState]= useState([]);


const[PerformanceSummaryState,setPerformanceSummaryState]= useState([]);



// const[TwelveMperfAGBPState,setTwelveMperfAGBPState]= useState([]);
// const[TwelveMperfAGBPState,setTwelveMperfAGBPState]= useState([]);
// const[TwelveMperfAGBPState,setTwelveMperfAGBPState]= useState([]);



const[InceptionArrayState,setInceptionArrayState]= useState([]);


const[TwelveMperfBGBPState,setTwelveMperfBGBPState]= useState([]);
const[TwelveMperfBEURState,setTwelveMperfBEURState]= useState([]);
const[TwelveMperfCGBPState,setTwelveMperfCGBPState]= useState([]);




const[twelvemonPerfDiscreteAPI,settwelvemonPerfDiscreteAPI]= useState([]);
const[top3contriarray,settop3contriarray]= useState([]);
// const[RegionalBreakdownarray,setRegionalBreakdownarray]= useState([]);


const[top3contriState,settop3contriState]= useState([]);

const[bot3contriarray,setbot3contriarray]= useState([]);
const[Fundinfoarray,setFundinfoarray]= useState([]);
const[ShareClassAarray,setShareClassAarray]= useState([]);
const[ShareClassBarray,setShareClassBarray]= useState([]);
const[CMSFundinfoarray,setCMSFundinfoarray]= useState([]);
const[CMSshareinfoarray,setCMSshareinfoarray]= useState([]);
const[CMSshareinfoarrayB,setCMSshareinfoarrayB]= useState([]);


const[monthlyPerformance2DArrayState,setmonthlyPerformance2DArrayState]= useState([]);
const[monthsArrayState,setmonthsArrayState]= useState([]);

const[Loading,setLoading]= useState(false);

const [productRegional, setproductRegional] = useState([]);
const [productstop10Holding, setproductstop10Holding] = useState([]);
const [productsmarketCap, setproductsmarketCap] = useState([]);
const [productSectorBreakdown, setproductSectorBreakdown] = useState([]);


const [productRegionBreakdown, setproductRegionBreakdown] = useState([]);

const [PortfolioStat, setPortfolioStat] = useState([]);

const [NFAData, setNFAData] = useState([]);

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
  fetchsessionAPI();
  fetchMyAPI();

},[])

const Clicked=()=>{
  $("#literatureTab").click();
  literatureButton();
console.log("clicked")
}
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
      if(FundName == "ss_rnb_pcc"){
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

  // function Auth_User(){
  //   console.log("XYYYYYYYYYYYYYYYYYYYYYYYZ")
  //  var email;
  //  var arrAuthUser = [];
   
  //  var Auth_Keys=["email"];

  //  for(let i=0;i< UserResponse.length;i++){
  //     let obj={};
  //       // heading = UserResponse[i].heading;
  //       // objective = UserResponse[i].objective_content;  
      
  //       email = UserResponse[i].email ;
        
  //        console.log(email);
  //        console.log("Session DATA AUTH USER");
  //       obj[Auth_Keys[0]] = email ;
  //       arrAuthUser.push(obj);

  //     }
  //     setarrAuthUserState(arrAuthUser)
      
    
      

      

    
  //   }
  const tt=()=>{
    // alert("hi");
    $('.btn-setting')[0].click();
  }
const summaryButton=()=>{
  // if(Auth_User()){
    // Auth_User();

    let arrPRTU=[]
   tt();
    var heading;
  var objective;
  var team;
  let daily_cal = PRTU[9][1]

  for(let i=0 ; i< Summary.length ;i++){
    // typeof(products[i][j])

    if(Summary[i].heading== "ss_rnb_pcc"){
      heading = Summary[i].heading;
      objective = Summary[i].objective_content;  
      team = Summary[i].team_content ;
      
       console.log(Summary[i].team_content);
       console.log("Summary[0]team_content");
      }


      // setTimeout()
      

      // console.log(graphData);
      // console.log("allKeys")

      
  }
  // For loop for calculation date
  let calculation = RespPrtu[1][2]
  // new Date(date).toLocaleDateString()
  
  
  let calculatedDate = new Date(calculation).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(calculation).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(calculation).toLocaleDateString("en-US", { year: 'numeric' });
  
  console.log(new Date(calculation).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(calculation).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(calculation).toLocaleDateString("en-US", { year: 'numeric' }))
  console.log("calculationcalculationcalculationcalculation")
  
  let DailycalculatedDate = new Date(daily_cal).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(daily_cal).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(daily_cal).toLocaleDateString("en-US", { year: 'numeric' });
    // for loop for Share price
    // for(let i=5;i<=10;i++){
  
    //   let val = PRTU[i][2]
  
    //   console.log(val);
    //   console.log("-----------------------------------ValVAL");
  
    //   arrPRTU.push(val)
    // }
  

    var allKeys = ["name","current month","EFG","Price","ABC","XYZ","HIJ","currency","zero","test","classDetails","symbol","b","class"];
  
  // var length =  products.length-1;
    for(let i=9 ; i< PRTU.length ;i++){
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
        // var updatedVal =  parseFloat(val).toFixed(2);
        // console.log(updatedVal);
        else{
          obj[allKeys[j]] = PRTU[i][j] ;
          obj[allKeys[0]] = PRTU[i][0] ;

          obj[allKeys[3]] = PRTU[i][3] ;
          obj[allKeys[8]] = PRTU[i][5] ;
        }     
  
        }
        if(obj.XYZ == "GBP"){
          obj[allKeys[11]] = "£";
        }else if(obj.XYZ == "EUR"){
          
          obj[allKeys[11]] = "€";
  
        }else if(obj.XYZ == "USD"){
          obj[allKeys[11]] = "$";
  
        }else if(obj.XYZ == "CHF"){
          obj[allKeys[11]] = "CHF";
  
        }else if(obj.XYZ == "CNH"){
          obj[allKeys[11]] = "¥";
  
        }else if(obj.XYZ == "SGD"){
          obj[allKeys[11]] = "S$";
  
        }else if(obj.XYZ == "JPY"){
          obj[allKeys[11]] = "¥";
  
        }
        // alert(typeof obj.name);
        var objectName = obj.name +'';
        var classShares = objectName.split(' - ');
        console.log(classShares[1]);
        // var classCurrency = classShares[1].split("(")
        // console.log(classCurrency)
        console.log("classCurrency");
        obj[allKeys[13]] = classShares[1];
        // obj[allKeys[8]] = classCurrency[1];
        console.log(obj);
        console.log("obj------------------------");
  
        arrPRTU.push(obj)
  
  }
    console.log(arrPRTU)
    console.log("arrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTU")
  
  
    setarrPRTUState(arrPRTU)
    setPRTUDate(calculatedDate)
  setDailyDate(DailycalculatedDate)
  console.log(SessionResponse);
  console.log("SummarySessionResponse");

  setSessionUserResponse(SessionResponse)
    setHeadingState(heading)
    setObjectiveState(objective)
    setTeamState(team)
    if (!arrPRTU.length > 0) {

      
      $(".daily-price-row").css("display","none") 
    }else{
      $(".daily-price-row").css("display","block")
    }
    if(!team) {
  
      $(".investment-team-row").css("display","none") 
    
    }  
  
  
  // }
  // else{
  //   // window.location = window.location.origin+"/login_user";
  // }
  
  
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

  const top10HoldingData =[]
  const marketCapData =[]
  const equitiesData =[]
  const DerVarData = []

  const sectorBreakdownData =[]
  const RegionbreakdownArray =[] 
  const sectorbreakdownArray =[]  
  
  const PortfolioStatArray =[]  
  const NFAarr =[]  
  

  // const fundInfoData =[]

  var allKeys = ["name","current month","pevious month"];
  

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

  //     graphDataResponse.push(obj)
  //     // setTimeout()
      

  //     // console.log(graphData);
  //     // console.log("allKeys")

      
  // }

  var keysVAR = ["name", "value"]
  var length = AssetAllocation.length
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< AssetAllocation[i].length ;j++){

      if(!isNaN(AssetAllocation[i][j])){
      let val = AssetAllocation[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded1);
      obj[keysVAR[j]] = rounded1 ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{

        obj[keysVAR[j]] = AssetAllocation[i][j] ;
      }     

      } 
      if(obj.value !==0  ){
        graphDataResponse1.push(obj)

      }
      // console.log(graphData);
      // console.log("allKeys")
      
  }

  var keysCRE = ["name", "value"]
  var length = CreditRating.length-1
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< CreditRating[i].length ;j++){

      if(!isNaN(CreditRating[i][j])){
      let val = CreditRating[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded1);
      obj[keysCRE[j]] = rounded1 ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{

        obj[keysVAR[j]] = CreditRating[i][j] ;
      }     

      } 
      if(obj.value !==0 ){
        graphDataResponse2.push(obj)

      }
      // console.log(graphData);
      // console.log("allKeys")
      
  }
  


  
//   var keystop10Hold = ["no","name", "value"]
  
//   for(let i=1 ; i< 11 ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productstop10Holding[i].length ;j++){

//      if(!isNaN(productstop10Holding[i][j])){
//      let val = productstop10Holding[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keystop10Hold[j]] = rounded ;
//      console.log(obj);
//      console.log("obj");
//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keystop10Hold[j]] = productstop10Holding[i][j] ;
//      }     

//      }
//      top10HoldingData.push(obj)
   
     
//  }  

  



//   var keysMarketCap = ["name", "value"]
  
//    for(let i=1 ; i< productsmarketCap.length ;i++){
//     // typeof(products[i][j])
    
//     let obj={};
//     for(let j =0 ;j< productsmarketCap[i].length ;j++){

//       if(!isNaN(productsmarketCap[i][j])){
//       let val = productsmarketCap[i][j]*100;
      
//       // var numb= 212421434.533423131231;
//       var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//       console.log(rounded);
//       obj[keysMarketCap[j]] = rounded ;

//     }

//       // var updatedVal =  parseFloat(val).toFixed(2);
//       // console.log(updatedVal);
//       else{
//         obj[keysMarketCap[j]] = productsmarketCap[i][j] ;
//       }     

//       }
//       marketCapData.push(obj)
    
      
//       // console.log(graphDataSectorPer);
//                 // console.log("allKeys")
    
//   } 
  


//   var keysSectorBreakdown = ["name", "value"]
  
//    for(let i=1 ; i< productSectorBreakdown.length ;i++){
//     // typeof(products[i][j])
    
//     let obj={};
//     for(let j =0 ;j< productSectorBreakdown[i].length ;j++){

//       if(!isNaN(productSectorBreakdown[i][j])){
//       let val = productSectorBreakdown[i][j]*100;
      
//       // var numb= 212421434.533423131231;
//       var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//       console.log(rounded);
//       obj[keysSectorBreakdown[j]] = rounded ;

//     }

//       // var updatedVal =  parseFloat(val).toFixed(2);
//       // console.log(updatedVal);
//       else{
//         obj[keysSectorBreakdown[j]] = productSectorBreakdown[i][j] ;
//       }     

//       }
//       equitiesData.push(obj)
    
      
//       // console.log(graphDataSectorPer);
//                 // console.log("allKeys")
    
//   } 

  var keysRegionBreakdown = ["name", "value"]
  var length =productRegionBreakdown.length-1;
  
  for(let i=1 ; i< length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productRegionBreakdown[i].length ;j++){

     if(!isNaN(productRegionBreakdown[i][j])){
     let val = productRegionBreakdown[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keysRegionBreakdown[j]] = rounded+'%' ;

   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysRegionBreakdown[j]] = productRegionBreakdown[i][j] ;
     }     

     }

     if(obj.value !==0 && obj.value !==0+'%'){
      RegionbreakdownArray.push(obj)
    }
     
   
     
     // console.log(graphDataSectorPer);
               // console.log("allKeys")
   
 } 

 
   var keysPortfolioStat = ["name", "value"]
  
  for(let i=1 ; i< PortfolioStat.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< PortfolioStat[i].length ;j++){
    if(i<4){

     if(!isNaN(PortfolioStat[i][j])){
     let val = PortfolioStat[i][j]*100;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     obj[keysPortfolioStat[j]] = rounded+'%' ;
     }
     else{
       obj[keysPortfolioStat[j]] = PortfolioStat[i][j] ;
     }
    }else{
        
        if(!isNaN(PortfolioStat[i][j])){
        let val = PortfolioStat[i][j];
        var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
   
        obj[keysPortfolioStat[j]] = rounded ;
        }
        else{
          obj[keysPortfolioStat[j]] = PortfolioStat[i][j] ;
        }

    }     

     }

     if(obj.value !==0 && obj.value !==0+'%'){
      PortfolioStatArray.push(obj)
    }
     
   
     
     // console.log(graphDataSectorPer);
               // console.log("allKeys")
   
 } 


 var keysNFA = ["name", "value"]
  var length = NFAData.length-1
 for(let i=1 ; i< length ;i++){
  // typeof(products[i][j])
  
  let obj={};
  for(let j =0 ;j< NFAData[i].length ;j++){

    if(!isNaN(NFAData[i][j])){
    let val = NFAData[i][j]*100;
    
    // var numb= 212421434.533423131231;
    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

    console.log(rounded);
    obj[keysNFA[j]] = rounded+'%' ;

  }

    // var updatedVal =  parseFloat(val).toFixed(2);
    // console.log(updatedVal);
    else{
      obj[keysPortfolioStat[j]] = NFAData[i][j] ;
    }     

    }

    if(obj.value !==0 && obj.value !==0+'%'){
      NFAarr.push(obj)
   }
    
  
    
    // console.log(graphDataSectorPer);
              // console.log("allKeys")
  
} 
 


//   var keysRegionBreakdown = ["name", "value"]
  
//   for(let i=1 ; i< productRegionBreakdown ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productRegionBreakdown[i].length ;j++){

//      if(!isNaN(productRegionBreakdown[i][j])){
//      let val = productRegionBreakdown[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keysRegionBreakdown[j]] = rounded ;

//    }

//      // var updatedVal =  parseFloat(val).toFixed(2);
//      // console.log(updatedVal);
//      else{
//        obj[keysRegionBreakdown[j]] = productRegionBreakdown[i][j] ;
//      }     

//      }
//      graphDataResponse2.push(obj)
   
     
//      // console.log(graphDataSectorPer);
//                // console.log("allKeys")
   
//  } 
 

 


  
  // setgraphData(graphDataResponse)
  setgraphData(graphDataResponse1)
  setportfolioStatusState(PortfolioStatArray)
  setNFAState(NFAarr)
  // setAssetAllocationState()
  settop10HoldingState(top10HoldingData)
  setmarketCapState(marketCapData)
  setequititeState(equitiesData)
  setDerVarState(DerVarData)


  setregionBreakdownState(RegionbreakdownArray)
  setsectorBreakdownState(sectorbreakdownArray)

  setgraphDataSectorPer(graphDataResponse2)

  // console.log(graphDataResponse);
  // console.log("graphDataResponse");

  console.log(sectorBreakdownData)
  console.log("equitiesData");

  console.log(graphDataResponse1);
  console.log("graphDataResponse1");
  
  console.log(graphDataResponse2);
  console.log("graphDataResponse2");


  
  
  
  setportfolioStatus(true)





}




const performanceButton=()=>{


  const CummulativeperformanceData = []
  const CummulativeperformanceDUSDData = []
  const CummulativeperformanceDEURData =[]
  const CummulativeperformanceAEURData = []
  const CummulativeperformanceDGBPData =[]
  const CummulativeperformanceACHFDataarray = []
  const CummulativeperformanceAEURDataarray = []

  const CummulativeperformanceBEURData = []
  const CummulativeperformanceCData = []

  const TwelveMperfAGBP = []
  const TwelveMperfDUSD = []
  const TwelveMperfAEUR = []
  const TwelveMperfDGBP = []
  const TwelveMperfDEUR = []
  const TwelveMperfACHF = []
  const perfSummaryArr =  []

  const TwelveMperfBGBP = []
  const TwelveMperfBEUR = []
  const TwelveMperfCGBP = []
  

  const Bot3contriData = []
  const Top3contriData = []
  const InceptionDataArray =[]
  // const TwelvemonPerfData = []
   var monthsArr=[];





  console.log(productsMonthlyPerf)
  console.log("productsMonthlyPerf")

  for(let i= 7; i<=21;i++ ){
    monthsArr.push(productsMonthlyPerf[3][i])
  }
  console.log("months")
  console.log(monthsArr)

  var arr2D=[];
  for(let i=4 ;i<=20;i++){
    let arr=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerf[i][j] != ""){
     let val = productsMonthlyPerf[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
      arr.push(rounded +'%')
     
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

  console.log(arr2D[i][j])
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







//   var keysInceptionData = ["date", "value"]
  
  
//   for(let i=1 ; i< 500 ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    var date = InceptionData[i][3]
//    var PerformanceValue = InceptionData[i][7]
 
//   //  console.log(date + " "  + PerformanceValue)
 
//   //  for(let j =0 ;j< InceptionData[i].length ;j++){
 
//   // //    if(!isNaN(InceptionData[i][j])){
//   // //    let val = InceptionData[i][j]*100;
     
//   // //    // var numb= 212421434.533423131231;
//   // //    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
 
//   // //   //  console.log(rounded);
//   // //    obj[keysInceptionData[j]] = rounded ;
 
//   // //  }
 
//   //    // var updatedVal =  parseFloat(val).toFixed(2);
//   //    // console.log(updatedVal);
//   //   //  else{
//   //      obj[keysInceptionData[j]] = InceptionData[i][j] ;
//   //   //  }     
 
//   //    }
//   obj[keysInceptionData[0]] = date;
//   obj[keysInceptionData[1]] = PerformanceValue;
 
//      InceptionDataArray.push(obj)
 
//      date = null
//      PerformanceValue = null
 
//      //  AbcObject = obj;
     
     
 
 
//     //  console.log("AbcObjectAbcObjectAbcObjectAbcObject")
   
     
//     //  console.log(cummulatovePerfData);
//     //  console.log("cummulatovePerfData");
 
//                // console.log("allKeys")
   
//  } 
//  console.log(InceptionDataArray);
//  setInceptionArrayState(InceptionDataArray)
 
 //  console.log(InceptionData);
 //  console.log("InceptionData");
 
 
 console.log("InceptionDataArray");
 

  var keysCummulativePer = ["name", "value"]
// const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
  
  //  for(let i=0 ; i< productscommulativePerformanceQAUSD.length ;i++){
    for(let i=0 ; i<= 6 ;i++){
    // typeof(products[i][j])
    
    let obj={};
    // for(let j =0 ;j< productscommulativePerformanceQAUSD[i].length ;j++){
      for(let j =0 ;j<= 6 ;j++){

      if(!isNaN(productscommulativePerformanceQAUSD[i][j])){
      let val = productscommulativePerformanceQAUSD[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
      rounded =parseFloat(rounded).toFixed(2);
      console.log(rounded);
      obj[keysCummulativePer[j]] = rounded+'%' ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysCummulativePer[j]] = productscommulativePerformanceQAUSD[i][j] ;
      }     

      }
      CummulativeperformanceData.push(obj)
      

  } 





  var keysCummulativePerDUSD = ["name", "value"]
// const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
  
   for(let i=0 ; i< productscommulativePerformanceQDUSD.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productscommulativePerformanceQDUSD[i].length ;j++){

      if(!isNaN(productscommulativePerformanceQDUSD[i][j])){
      let val = productscommulativePerformanceQDUSD[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
      rounded =parseFloat(rounded).toFixed(2);
      console.log(rounded);
      obj[keysCummulativePerDUSD[j]] = rounded+'%' ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysCummulativePerDUSD[j]] = productscommulativePerformanceQDUSD[i][j] ;
      }     

      }
      CummulativeperformanceDUSDData.push(obj)
      

  } 


  var keysCummulativePerAEUR = ["name", "value"]
// const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
  
   for(let i=0 ; i< productscommulativePerformanceQAEUR.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productscommulativePerformanceQAEUR[i].length ;j++){

      if(!isNaN(productscommulativePerformanceQAEUR[i][j])){
      let val = productscommulativePerformanceQAEUR[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
      rounded =parseFloat(rounded).toFixed(2);
      console.log(rounded);
      obj[keysCummulativePerAEUR[j]] = rounded+'%' ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysCummulativePerAEUR[j]] = productscommulativePerformanceQAEUR[i][j] ;
      }     

      }
      CummulativeperformanceAEURDataarray.push(obj)
      

  } 



  var keysCummulativePerDEUR = ["name", "value"]
  // const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
    
     for(let i=0 ; i< productscommulativePerformanceQDEUR.length ;i++){
      // typeof(products[i][j])
      
      let obj={};
      for(let j =0 ;j< productscommulativePerformanceQDEUR[i].length ;j++){
  
        if(!isNaN(productscommulativePerformanceQDEUR[i][j])){
        let val = productscommulativePerformanceQDEUR[i][j]*100;
        
        // var numb= 212421434.533423131231;
        var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
        rounded =parseFloat(rounded).toFixed(2);
        console.log(rounded);
        obj[keysCummulativePerDEUR[j]] = rounded+'%' ;
  
      }
  
        // var updatedVal =  parseFloat(val).toFixed(2);
        // console.log(updatedVal);
        else{
          obj[keysCummulativePerDEUR[j]] = productscommulativePerformanceQDEUR[i][j] ;
        }     
  
        }
        CummulativeperformanceDEURData.push(obj)
        
  
    } 



  var keysCummulativePerDGBP = ["name", "value"]
  // const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
    
     for(let i=0 ; i< productscommulativePerformanceQDGBP.length ;i++){
      // typeof(products[i][j])
      
      let obj={};
      for(let j =0 ;j< productscommulativePerformanceQDGBP[i].length ;j++){
  
        if(!isNaN(productscommulativePerformanceQDGBP[i][j])){
        let val = productscommulativePerformanceQDGBP[i][j]*100;
        
        // var numb= 212421434.533423131231;
        var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
        rounded =parseFloat(rounded).toFixed(2);
        console.log(rounded);
        obj[keysCummulativePerDGBP[j]] = rounded+'%' ;
  
      }
  
        // var updatedVal =  parseFloat(val).toFixed(2);
        // console.log(updatedVal);
        else{
          obj[keysCummulativePerDGBP[j]] = productscommulativePerformanceQDGBP[i][j] ;
        }     
  
        }
        CummulativeperformanceDGBPData.push(obj)
        
  
    } 

    var keysCummulativePerACHF = ["name", "value"]
    // const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
      
       for(let i=0 ; i< productscommulativePerformanceACHF.length ;i++){
        // typeof(products[i][j])
        
        let obj={};
        for(let j =0 ;j< productscommulativePerformanceACHF[i].length ;j++){
    
          if(!isNaN(productscommulativePerformanceACHF[i][j])){
          let val = productscommulativePerformanceACHF[i][j]*100;
          
          // var numb= 212421434.533423131231;
          var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
          rounded =parseFloat(rounded).toFixed(2);
          console.log(rounded);
          obj[keysCummulativePerACHF[j]] = rounded+'%' ;
    
        }
    
          // var updatedVal =  parseFloat(val).toFixed(2);
          // console.log(updatedVal);
          else{
            obj[keysCummulativePerACHF[j]] = productscommulativePerformanceACHF[i][j] ;
          }     
    
          }
          CummulativeperformanceACHFDataarray.push(obj)
          
    
      } 
    // productscommulativePerformanceACHF
    
    var keysCummulativePerAEUR = ["name", "value"]
    // const [productscommulativePerformanceQAUSD, setproductscommulativePerformanceQAUSD] = useState([]);
      
       for(let i=0 ; i< productscommulativePerformanceAEUR.length ;i++){
        // typeof(products[i][j])
        
        let obj={};
        for(let j =0 ;j< productscommulativePerformanceAEUR[i].length ;j++){
    
          if(!isNaN(productscommulativePerformanceAEUR[i][j])){
          let val = productscommulativePerformanceAEUR[i][j]*100;
          var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
          rounded =parseFloat(rounded).toFixed(2);
          obj[keysCummulativePerAEUR[j]] = rounded+'%' ;
        }
          else{
            obj[keysCummulativePerAEUR[j]] = productscommulativePerformanceAEUR[i][j] ;
          }     
    
          }
          CummulativeperformanceAEURData.push(obj)
          
    
      } 

          var keys12monthsDis = ["name", "value"]

          for(let i=0 ; i< twelvemonPerfAGBP.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< twelvemonPerfAGBP[i].length ;j++){

             if(!isNaN(twelvemonPerfAGBP[i][j])){
             let val = twelvemonPerfAGBP[i][j]*100;

             // var numb= 212421434.533423131231;
             var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
             rounded =parseFloat(rounded).toFixed(2);
             console.log(rounded);
             obj[keys12monthsDis[j]] = rounded+'%' ;

           }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keys12monthsDis[j]] = twelvemonPerfAGBP[i][j] ;
             }     
           
             }
           
             TwelveMperfAGBP.push(obj)
            
          } 

          var keys12monthsDisD = ["name", "value"]

          for(let i=0 ; i< twelvemonPerfDUSD.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< twelvemonPerfDUSD[i].length ;j++){

             if(!isNaN(twelvemonPerfDUSD[i][j])){
             let val = twelvemonPerfDUSD[i][j]*100;

             // var numb= 212421434.533423131231;
             var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
             rounded =parseFloat(rounded).toFixed(2);
             console.log(rounded);
             obj[keys12monthsDisD[j]] = rounded+'%' ;

           }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keys12monthsDisD[j]] = twelvemonPerfDUSD[i][j] ;
             }     
           
             }
           
             TwelveMperfDUSD.push(obj)
            
          } 
          
          
          var keys12monthsDisAEUR = ["name", "value"]

          for(let i=0 ; i< twelvemonPerfAEUR.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< twelvemonPerfAEUR[i].length ;j++){

             if(!isNaN(twelvemonPerfAEUR[i][j])){
             let val = twelvemonPerfAEUR[i][j]*100;

             // var numb= 212421434.533423131231;
             var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
             rounded =parseFloat(rounded).toFixed(2);
             console.log(rounded);
             obj[keys12monthsDisAEUR[j]] = rounded+'%' ;

           }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keys12monthsDisAEUR[j]] = twelvemonPerfAEUR[i][j] ;
             }     
           
             }
           
             TwelveMperfAEUR.push(obj)
            
          } 
          
          
          // twelvemonPerfDEUR
          var keys12monthsDisDEUR = ["name", "value"]

          for(let i=0 ; i< twelvemonPerfDEUR.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< twelvemonPerfDEUR[i].length ;j++){

             if(!isNaN(twelvemonPerfDEUR[i][j])){
             let val = twelvemonPerfDEUR[i][j]*100;

             // var numb= 212421434.533423131231;
             var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
             rounded =parseFloat(rounded).toFixed(2);
             console.log(rounded);
             obj[keys12monthsDisDEUR[j]] = rounded+'%';

           }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keys12monthsDisDEUR[j]] = twelvemonPerfDEUR[i][j] ;
             }     
           
             }
           
             TwelveMperfDEUR.push(obj)
            
          } 
          
          // twelvemonPerfDGBP
          var keys12monthsDisDGBP = ["name", "value"]

          for(let i=0 ; i< twelvemonPerfDGBP.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< twelvemonPerfDGBP[i].length ;j++){

             if(!isNaN(twelvemonPerfDGBP[i][j])){
             let val = twelvemonPerfDGBP[i][j]*100;

             // var numb= 212421434.533423131231;
             var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
             rounded =parseFloat(rounded).toFixed(2);
             console.log(rounded);
             obj[keys12monthsDisDGBP[j]] = rounded+'%' ;

           }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keys12monthsDisDGBP[j]] = twelvemonPerfDGBP[i][j] ;
             }     
           
             }
           
             TwelveMperfDGBP.push(obj)
            
          } 

          
          var keys12monthsDisACHF = ["name", "value"]

          for(let i=0 ; i< twelvemonPerfACHF.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< twelvemonPerfACHF[i].length ;j++){

             if(!isNaN(twelvemonPerfACHF[i][j])){
                let val = twelvemonPerfACHF[i][j]*100;
                // var numb= 212421434.533423131231;
                var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;
                rounded =parseFloat(rounded).toFixed(2);
                console.log(rounded);
                obj[keys12monthsDisACHF[j]] = rounded+'%' ;
             }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keys12monthsDisACHF[j]] = twelvemonPerfACHF[i][j] ;
             }     
           
          }
           
             TwelveMperfACHF.push(obj)
            
          } 

          var keysPerfSummary = ["name", "value"]

          for(let i=1 ; i< performanceSummary.length ;i++){
           // typeof(products[i][j])
          
           let obj={};
           for(let j =0 ;j< performanceSummary[i].length ;j++){

             if(!isNaN(performanceSummary[i][j])){
             let val = performanceSummary[i][j]*100;

             // var numb= 212421434.533423131231;
             var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
             rounded =parseFloat(rounded).toFixed(2);
             console.log(rounded);
             obj[keysPerfSummary[j]] = rounded ;

           }
         
             // var updatedVal =  parseFloat(val).toFixed(2);
             // console.log(updatedVal);
             else{
               obj[keysPerfSummary[j]] = performanceSummary[i][j] ;
             }     
           
             }
           
             perfSummaryArr.push(obj)
            
          } 




          
// var keystop3contr = ["name", "value"]
  
//  for(let i=1 ; i< top3response.length ;i++){
//   // typeof(products[i][j])
  
//   let obj={};
//   for(let j =0 ;j< top3response[i].length ;j++){

//     if(!isNaN(top3response[i][j])){
//     let val = top3response[i][j]*100;
    
//     // var numb= 212421434.533423131231;
//     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//     console.log(rounded);
//     obj[keystop3contr[j]] = rounded ;

//   }

//     // var updatedVal =  parseFloat(val).toFixed(2);
//     // console.log(updatedVal);
//     else{
//       obj[keystop3contr[j]] = top3response[i][j] ;
//     }     

//     }

//     Top3contriData.push(obj)
    

//               // console.log("allKeys")
  
// } 

// var keysbot3contr = ["name", "value"]
  
//  for(let i=1 ; i< bot3response.length ;i++){
//   // typeof(products[i][j])
  
//   let obj={};
//   for(let j =0 ;j< bot3response[i].length ;j++){

//     if(!isNaN(bot3response[i][j])){
//     let val = bot3response[i][j]*100;
    
//     // var numb= 212421434.533423131231;
//     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//     console.log(rounded);
//     obj[keysbot3contr[j]] = rounded ;

//   }

//     // var updatedVal =  parseFloat(val).toFixed(2);
//     // console.log(updatedVal);
//     else{
//       obj[keysbot3contr[j]] = bot3response[i][j] ;
//     }     

//     }

//     Bot3contriData.push(obj)
    

//               // console.log("allKeys")
  
// } 


  setcummulatovePerfData(CummulativeperformanceData)
  setcummulatovePerfDUSDData(CummulativeperformanceDUSDData)
  setcummulatovePerfAEURData(CummulativeperformanceAEURData)
  setCummulativeperfDEURData(CummulativeperformanceDEURData)
  setCummulativeperfDGBPData(CummulativeperformanceDGBPData)
  setCummulativeperfACHFData(CummulativeperformanceACHFDataarray)
  setCummulativeperfAEURData(CummulativeperformanceAEURDataarray)
  
  setTwelveMperfAGBPState(TwelveMperfAGBP)
  setTwelveMperfDUSDState(TwelveMperfDUSD)
  setTwelveMperfDGBPState(TwelveMperfDGBP)
  setTwelveMperfACHFState(TwelveMperfACHF)

  

  setTwelveMperfDEURState(TwelveMperfDEUR)
  setTwelveMperfAEURState(TwelveMperfAEUR)

  setPerformanceSummaryState(perfSummaryArr)
  
  

  // setcummulatovePerfBData(CummulativeperformanceBData)
   setmonthlyPerformance2DArrayState(arr2D)
   setmonthsArrayState(monthsArr)
//   setCummulativeperfeBEURData(CummulativeperformanceBEURData)
  
//   setCummulativeperfC(CummulativeperformanceCData)

  // setTwelveMperfAGBPState(TwelveMperfAGBP)
  // settop3contriState(Top3contriData)
  // setbot3contriarray(Bot3contriData)
  // setTwelveMperfBGBPState(TwelveMperfBGBP)
//   setTwelveMperfBEURState(TwelveMperfBEUR)
//   setTwelveMperfCGBPState(TwelveMperfCGBP)

  // settwelvemonPerfDiscreteAPI(TwelvemonPerfData)
  // settop3contriarray(Top3contriData)
  // setbot3contriarray(Bot3contriData)





}


const informationButton=()=>{
  const shareClassAData =[]
  const shareClassBData =[]
  const fundInfoData =[]
  const CMSfundInfoData =[]
  const CMSshareInfoData =[]
  const CMSshareInfoDataB =[]


  var keysCMSshareinfo = ["name", "ausdValue","agbpValue","aeurValue","busdValue","bgbpValue","beurValue","cgbpValue","lastValue"]
  var keysCMSshareinfoB = ["name", "ausdValue","agbpValue","aeurValue","busdValue","bgbpValue","beurValue","cgbpValue","lastValue"]
  
  console.log(CMSshareinfo);
  console.log("CMSshareinfo");
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
      obj[keysCMSshareinfo[7]] = CMSshareinfo[j].cgbp_value ; 
      obj[keysCMSshareinfo[8]] = CMSshareinfo[j].last_value ;





      console.log(obj);
      console.log("obj---------------@");
    CMSshareInfoData.push(obj)
  }
  console.log(CMSshareInfoData);
  console.log("CMSshareInfoData")

  for(let j =0 ;j< CMSshareinfo.length ;j++){


   console.log(CMSshareinfo[j].title);
   console.log("CMSFundinfo.title");

   let obj={};

      obj[keysCMSshareinfoB[0]] = CMSshareinfo[j].title ;
      obj[keysCMSshareinfoB[1]] = CMSshareinfo[j].b_ausd_value ;
      obj[keysCMSshareinfoB[2]] = CMSshareinfo[j].b_agbp_value ;
      obj[keysCMSshareinfoB[3]] = CMSshareinfo[j].b_aeur_value ;
      obj[keysCMSshareinfoB[4]] = CMSshareinfo[j].b_busd_value ;
      obj[keysCMSshareinfoB[5]] = CMSshareinfo[j].b_bgbp_value ;
      obj[keysCMSshareinfoB[6]] = CMSshareinfo[j].b_beur_value ;
      obj[keysCMSshareinfoB[7]] = CMSshareinfo[j].b_cgbp_value ; 
      obj[keysCMSshareinfoB[8]] = CMSshareinfo[j].b_last_value ;





      console.log(obj);
      console.log("obj---------------@");
    CMSshareInfoDataB.push(obj)
  }
  console.log(CMSshareInfoData);
  console.log("CMSshareInfoData")

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

  var keysShareClass = ["name", "value"]

  
  for(let i=0 ; i< productsShareClassA.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productsShareClassA[i].length;j++){

     if(!isNaN(productsShareClassA[i][j])){
     let val = productsShareClassA[i][j];
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     if(rounded==0){
      obj[keysShareClass[j]] = '' ;
     } else{
      obj[keysShareClass[j]] = rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,') ;
     }
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysShareClass[j]] = productsShareClassA[i][j] ;
     }     

     }
     shareClassAData.push(obj);
 }  

 for(let i=0 ; i< productsShareClassB.length ;i++){
  // typeof(products[i][j])
  
  let obj={};
  for(let j =0 ;j< productsShareClassB[i].length ;j++){

    if(!isNaN(productsShareClassB[i][j])){
    let val = productsShareClassB[i][j];
    
    // var numb= 212421434.533423131231;
    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

    if(rounded==0){
      obj[keysShareClass[j]] = '' ;
     } else{
      obj[keysShareClass[j]] = rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,') ;
     }
  
  }

    // var updatedVal =  parseFloat(val).toFixed(2);
    // console.log(updatedVal);
    else{
      obj[keysShareClass[j]] = productsShareClassB[i][j] ;
    }     

    }
    shareClassBData.push(obj)
    
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

     console.log(rounded);
     obj[keysFundinfo[j]] = rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,') ;
     console.log(obj);
     console.log("obj");
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysFundinfo[j]] = productsFundinfo[i][j] ;
     }     

     }
     fundInfoData.push(obj)
   

 }

 setShareClassAarray(shareClassAData)
 setShareClassBarray(shareClassBData)
 setFundinfoarray(fundInfoData)
 setCMSFundinfoarray(CMSfundInfoData)
 setCMSshareinfoarray(CMSshareInfoData)
 setCMSshareinfoarrayB(CMSshareInfoDataB)
console.log(CMSshareinfoarray);
console.log("CMSshareinfoarray");






}









let AbcObject ={};

async function fetchsessionAPI(){


  fetch(window.location.origin+'/session_data').then(resp => resp.json()).then(resp =>  {
    console.log(resp);
    console.log("resp onload");
  
    if(resp !== 0){

        console.log("greater than zero")
    
      // window.location = window.location.origin+"/login_user";
    }else{
      console.log("not greater than zero")

            window.location = window.location.origin+"/login_user";
    }
    
  })

}
let count = 0;
async function fetchMyAPI(){
  // https://jsonplaceholder.typicode.com/posts

  const Localurl = 'https://www.epicip.com/epic-rnb-pcc'
  const url = window.location.origin+'/epic-rnb-pcc'
  //const url = 'https://www.epicip.com/epic-rnb-pcc'; 
  //const url = 'http://127.0.0.1:8000/epic-rnb-pcc'; 
   
   fetch(url).then(resp=> resp.json())
   .then (resp => {
   console.log(count)
   console.log("count")


    setAssetAllocation(resp.Entitybreakdown)
    setCreditRating(resp.Creditratingbreakdown)
    setproductscommulativePerformanceQAUSD(resp.CumulativePerfAUSD)
    setproductscommulativePerformanceQDUSD(resp.CumulativePerfAGBP)
    setproductscommulativePerformanceQDEUR(resp.CumulativePerfASGD)
    setproductscommulativePerformanceQDGBP(resp.CumulativePerfAJPY)
    setproductscommulativePerformanceAEUR(resp.CumulativePerfAEUR)
    setproductscommulativePerformanceACHF(resp.CumulativePerfACHF)
    settwelvemonPerfAGBP(resp.PerfDiscreteAUSD)
    settwelvemonPerfDUSD(resp.PerfDiscreteAGBP)
    settwelvemonPerfAEUR(resp.PerfDiscreteASGD)
    settwelvemonPerfDEUR(resp.PerfDiscreteAJPY)
    settwelvemonPerfDGBP(resp.PerfDiscreteAEUR)
    settwelvemonPerfACHF(resp.PerfDiscreteACHF)
    setperformanceSummary(resp.perfsummary)
    setproductsCommentary(resp.content)
    setproductRegionBreakdown(resp.Regionbreakdown)
    setPortfolioStat(resp.Portfoliostatistics)
    setNFAData(resp.Nfabreakdown)
    setproductSectorBreakdown(resp.EquitiesBreakdown)
    setproductsFundinfo(resp.FundInfo)
    setproductsShareClassA(resp.FundPricesClassA)
    setproductsShareClassB(resp.FundPricesClassB)
    setproductsMonthlyPerf(resp.Monthlyperf)
    setRespPrtu(resp.Prtu)
    setPRTU(resp.daily_price)
    setLiterature(resp.literature)
    setSummary(resp.summary)
    setCMSFundinfo(resp.fund_info)
    setCMSshareinfo(resp.shareinfo)
    setstatus(true)
    document.getElementById("summaryButton").click();

    })    
   .catch(e=>{
     console.log(e);
   })
  var keysMonthly = ["name"]
  var testArr =[]
  var monthsValue =[[],[]]
  var xArr =[[]]
  // var xArr = new Array(10);



      console.log("allKeys")
};
const SessionData = {"id":11,"name":"Tarunn Kwatra","email":"tarun.kwatra@epicip.com","email_verified_at":"1","Comp_name":"EPIC","city":"Noida","country":"IN","reason":null,"created_at":"2021-12-08T13:46:57.000000Z","updated_at":"2021-12-08T22:17:00.000000Z"}
// const dat = useMemo(()=>(AbcObject),[])
async function fetchSessionUserAPI(){

  const Localurl = 'https://epicipprojects.com/session_data'
  const url = window.location.origin+'/session_data' 
   
   fetch(url).then(resp=> resp.json())
   .then (resp => {
       console.log(count)
       console.log("count")

      // console.log(SessionData.email);
      // console.log("resp session");
    
      setSessionResponse(resp);
      
      // UserResponse SessionUserResponse  
    console.log(SessionResponse);
    console.log(resp);
    console.log("resp from session API");
    })
    
   .catch(e=>{
     console.log(e);
   })
};


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
function renderPCCli(response, index){  
  if(response !=0 ){
return(

<li><NavLink to="/markets/EpicNextGenPCC" className="navlink a ">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                
)
}else{
  return(
  <li><a href="" className="navlink a ">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li>
  )
}
}
  function renderDailyPrices(DailyPrice, index){
    if(DailyPrice.Price !== 0){
    return(
      <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
        <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">{DailyPrice.symbol}{(parseFloat(DailyPrice.Price).toFixed(2)).toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,')}</div>
        <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">{DailyPrice.class}
        {/* <br/><span className="daily-span">(USD) Shares</span> */}
        </div>
    </div>
    )
  }
  }
function renderLiteratureData(data, index){
    return(
  
                <div class="col-sm-6">
                            <p class="pdf_download"><a href={window.location.origin+"/storage/literature-file/"+data.FileName} target="_blank" download>{data.LiteratureTitle}<br/><span class="date">{data.LiteratureDate}</span></a></p>
                        </div>
    )
  }
function renderTop10Holding(holding, index) {
  return(
  <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
    <td>{holding.name}</td>
    <td>{holding.value}</td>

  </tr>
        
  
  )
}


function renderMarketState(market, index) {
  return(
  <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
    <td>{market.name}</td>
    <td>{market.value}</td>

  </tr>
        
  
  )
}

function renderSectorState(sector, index) {
  return(
  <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
    <td>{sector.name}</td>
    <td>{sector.value}</td>

  </tr>
        
  
  )
}
function renderCummulativePerformanceNames(cummulatove, index) {
  if(index==0){
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
  return(
    <th>{twelvemon.name}</th>
)
}
function rendertwelvemonPerfDiscreteAPIValue(twelvemon, index){
  return(
    <th>{twelvemon.value}</th>
)
}

function rendertop3contri(top3contriparam, index){
  return(
    <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
      <td   className="align-left" style={{height: "34.65px"}}>{top3contriparam.name}</td>
      <td   className="align-right" style={{height: "34.65px"}}>{top3contriparam.value}</td>
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
      </tr>
    )
  }
  }
function renderbot3contri(bot3contriparam, index){
  return(
    <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
      
      <td className="align-left" style={{height: "30px"}}>{bot3contriparam.name}</td>
      <td className="align-right" style={{height: "30px"}}>{bot3contriparam.value}</td>
    </tr>
  )
}
function renderCMSshareinfo(shareinfoparam, index){
  console.log(shareinfoparam);

  if(index ==0 ||index ==1){
    return(
   <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
    <td className="align-left">{shareinfoparam.name}</td>
    {shareinfoparam.ausdValue ?
    <td className="align-center" colspan="7">{shareinfoparam.ausdValue}</td>:""}
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
    {shareinfoparam.cgbpValue ?
    <td className="align-center">{shareinfoparam.cgbpValue}</td>:""}
    {shareinfoparam.lastValue ?
    <td className="align-center">{shareinfoparam.lastValue}</td>:""}
  </tr>
    )
  }else if(index ==5){
    return(
   <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
    <td className="align-left">{shareinfoparam.name}</td>
    {shareinfoparam.ausdValue ?
    <td className="align-center ISIN-font">{shareinfoparam.ausdValue}</td>:""}
    {shareinfoparam.agbpValue ?
    <td className="align-center ISIN-font">{shareinfoparam.agbpValue}</td> : ""}
    {shareinfoparam.aeurValue ? 
    <td className="align-center ISIN-font">{shareinfoparam.aeurValue}</td> : ""}
    {shareinfoparam.busdValue ?
    <td className="align-center ISIN-font">{shareinfoparam.busdValue}</td> :""}
    {shareinfoparam.bgbpValue ? 
    <td className="align-center ISIN-font">{shareinfoparam.bgbpValue}</td> :""}
    {shareinfoparam.beurValue ? 
    <td className="align-center ISIN-font">{shareinfoparam.beurValue}</td>:""}
    {shareinfoparam.cgbpValue ?
    <td className="align-center ISIN-font">{shareinfoparam.cgbpValue}</td>:""}
    {shareinfoparam.lastValue ?
    <td className="align-center ISIN-font">{shareinfoparam.lastValue}</td>:""}
  </tr>
    )
  }
  else{
  return(
    <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
      <td className="align-left">{shareinfoparam.name}</td>
    {shareinfoparam.ausdValue ?
    <td className="align-center">{shareinfoparam.ausdValue}</td>:""}
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
    {shareinfoparam.cgbpValue?
    <td className="align-center">{shareinfoparam.cgbpValue}</td>:""}
    {shareinfoparam.lastValue?
    <td className="align-center">{shareinfoparam.lastValue}</td>:""}
    </tr>
  )}
}

function renderCMSshareinfoB(shareinfoparam, index){
  if(index ==0 ||index ==1){
    return(
   <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
    <td className="align-left">{shareinfoparam.name}</td>
    {shareinfoparam.ausdValue ?
    <td className="align-center" colspan="7">{shareinfoparam.ausdValue}</td>:""}
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
    {shareinfoparam.cgbpValue ?
    <td className="align-center">{shareinfoparam.cgbpValue}</td>:""}
    {shareinfoparam.lastValue ?
    <td className="align-center">{shareinfoparam.lastValue}</td>:""}
  </tr>
    )
  }else if(index ==5){
    return(
   <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
    <td className="align-left">{shareinfoparam.name}</td>
    {shareinfoparam.ausdValue ?
    <td className="align-center ISIN-font">{shareinfoparam.ausdValue}</td>:""}
    {shareinfoparam.agbpValue ?
    <td className="align-center ISIN-font">{shareinfoparam.agbpValue}</td> : ""}
    {shareinfoparam.aeurValue ? 
    <td className="align-center ISIN-font">{shareinfoparam.aeurValue}</td> : ""}
    {shareinfoparam.busdValue ?
    <td className="align-center ISIN-font">{shareinfoparam.busdValue}</td> :""}
    {shareinfoparam.bgbpValue ? 
    <td className="align-center ISIN-font">{shareinfoparam.bgbpValue}</td> :""}
    {shareinfoparam.beurValue ? 
    <td className="align-center ISIN-font">{shareinfoparam.beurValue}</td>:""}
    {shareinfoparam.cgbpValue ?
    <td className="align-center ISIN-font">{shareinfoparam.cgbpValue}</td>:""}
    {shareinfoparam.lastValue ?
    <td className="align-center ISIN-font">{shareinfoparam.lastValue}</td>:""}
  </tr>
    )
  }
  else{
  return(
    <tr className="Shares__Row-sc-1brks4f-2 eoQrEv" key={index}>
      <td className="align-left">{shareinfoparam.name}</td>
    {shareinfoparam.ausdValue ?
    <td className="align-center">{shareinfoparam.ausdValue}</td>:""}
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
    {shareinfoparam.cgbpValue?
    <td className="align-center">{shareinfoparam.cgbpValue}</td>:""}
    {shareinfoparam.lastValue?
    <td className="align-center">{shareinfoparam.lastValue}</td>:""}
    </tr>
  )}
}

function renderFundinfo(fundinfoparam, index){
  return(
    <tr className="FundInformation__Row-sc-18irt95-2 fweCQL" key={index}>
      
      <td className="align-left">{fundinfoparam.name}</td>
      <td className="align-center">{fundinfoparam.value}</td>
    </tr>
  )
}
function renderPerfSummaryinfo(fundinfoparam, index){
  return(
    <tr className="FundInformation__Row-sc-18irt95-2 fweCQL" key={index}>
      
      <td className="align-left">{fundinfoparam.name}</td>
      <td className="align-right">{fundinfoparam.value}%</td>
    </tr>
  )
}

function renderShareClassNames(shareClass, index){
  if(index==0){
    return(
    <th className="align-left">{shareClass.name}</th>
)}else{
    return(
        <th className="align-right">{shareClass.name}</th>
    )   
}
}
function renderShareClassAValue(shareClassValue, index){
  if(index==0){
    return(
    <td className="align-left">{shareClassValue.value}</td>
)}else{
    return(
        <td className="align-right">{shareClassValue.value}</td>
    )
}
}
function renderShareClassBValue(shareClassValue, index){
  if(index==0){
    return(
    <td className="align-left">{shareClassValue.value}</td>
)}else{
    return(
        <td className="align-right">{shareClassValue.value}</td>
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
    
<section className="main-box">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-4">
      <div className="accordion">
      <div className="accordion__item">
            <div className="accordion__item__header active"><NavLink to="/markets/Epic-FixedIncome" className="navlink a active-dis">Fixed Income</NavLink></div>
            <div className="accordion__item__content block">
              <ul>
                {/* <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">EPIC - NFA Global Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a ">EPIC - Next Generation Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicNextGenPCC" className="navlink a  " >EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                   : 
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li> 
                 }
                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicRNBpcc" className="navlink a a-active-color" >EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                :
                <li><a href={window.location.origin+"/login_user"} className="navlink a a-active-color">EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li>
                }
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header "><NavLink to="/markets/Epic-ManagedFutures" className="navlink a">Managed Futures </NavLink></div>
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
				        <li><NavLink to="/markets/EpicUKEquityMarketFund" className="navlink a">VT-EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-MultiAsset" className="navlink a ">Multi Asset</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicipWealthFund" className="navlink a">EPIC Wealth Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipDiversifiedIncomeFund" className="navlink a">VT-EPIC Diversified Income <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetFund" className="navlink a">VT-EPIC Multi Asset Balanced <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetGrowthFund" className="navlink a">VT-EPIC Multi Asset Growth <span className="fa fa-angle-right"></span></NavLink></li>
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
      <li class="nav-item nav-item-tabs"> <a class="nav-link active" id="summaryButton" data-toggle="tab" href="#nine" onClick={summaryButton} role="tab">Summary</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#eight" onClick={portfolioButton} role="tab">Portfolio</a> </li>
      <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#one" onClick={performanceButton}  role="tab">Performance</a> </li>

      <li class="nav-item nav-item-tabs"> <a class="nav-link " data-toggle="tab" href="#two" role="tab">Commentary</a> </li>
     <li class="nav-item nav-item-tabs"> <a class="nav-link" data-toggle="tab" href="#three" onClick={informationButton}  role="tab">Information</a> </li>
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
                                        <div class="Paragraph__NormalParagraph-sc-2ra4j2-1 dISjjZ" dangerouslySetInnerHTML={{ __html: ObjectiveState }}>
                                            
                                            {/* <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ" dangerouslySetInnerHTML={{ __html: ObjectiveState }}>
                                                
                                            </p> */}
                                        </div>
                                    </div>
                                    {/* <span>
                                        Key Investor Information can be found 
                                        <a href="#" onClick={Clicked}className="InvestorInfo a">&nbsp;here</a>.
                                    </span><br/><br/> */}
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
                                    <h3 class="Paragraph__Heading-sc-2ra4j2-2 ">Daily Prices</h3>
                                    <div class="DailyPricing__Boxes-sc-62f3gi-0 biswZj">
                                    {/* {arrAuthUserState.map(sessionCheck)} */}
                                    {/* {renderPCCli(SessionUserResponse)} */}
                                    {arrPRTUState.map(renderDailyPrices)}
                                        
                                        {/* <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[0]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(USD) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[1]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(GBP Hedged) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[2]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(EUR Hedged) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[3]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class B<br/><span className="daily-span">(USD) Shares</span></div>
                                        </div>

                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[5]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class B<br/><span className="daily-span">(EUR Hedged) Shares</span></div>
                                        </div> */}

                                    </div>
                                    <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                                    <p className="mt-2">Data as at: {DailyDate}<br/>
                                        <span className="mt-1">Source: EPIC Markets (UK) LLP</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-1 investment-team-row">
                            <div class="col">
                                <h3 class="Paragraph__Heading-sc-2ra4j2-2 ">Investment Team</h3>
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

      <div class="row table-growth-row">
      <div class="row chart-row chart-row_new">
        <div class="col-md-6 chart-block">
            <p class="lse_redirect">Entity Breakdown (% NAV)</p>
            <PieChart width={300} height={350} margin ={ {top: -60, right: 50, bottom: 5, } } >
              <Pie
                data={graphData}
                cx={120}
                cy={200}
                innerRadius={45}
                outerRadius={90}
                // fill="#0c2340"
                paddingAngle={0}
                startAngle={120}
                endAngle={-360}
                labelLine={false}

                dataKey="value"
                label={renderCustomizedLabel}

              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS5[index % DONUTCOLORS5.length]} />
                ))}
              </Pie>
              <Tooltip />
              {/* <Legend /> */}
              
              {/* <Legend margin={ {top:-500, left: -150} } className="legend-text"  iconSize={10} width={300} height={50} layout='vertical' /> */}
              <Legend margin={ {top:-500, left: -150} } className="legend-text" formatter={renderColorfulLegendText}  iconSize={10} width={300} height={50} layout='vertical' />
            </PieChart>
            
          
          </div>

          <div class="col-md-6 VARmargin chart-block"> 
            <p class="lse_redirect">Credit Rating Breakdown (% NAV)</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
            <ResponsiveContainer width="100%" height="70%">
                
              <BarChart
                 width={600}
                 height={300}
                 data={graphDataSectorPer}
                 margin={{
                   top: 5,
                   right: 30,
                   left: 20,
                   bottom: 5
                 }}
                 layout="vertical"
               >
                 <CartesianGrid strokeDasharray="" horizontal="" vertical=""  />
                 <XAxis dataKey="value" type="number"  orientation="top" axisLine={false} tickFormatter={(tick) => {
                         return `${tick}%`;
                         }}
                  />
                 <YAxis type="category" dataKey="name"/>
                 <Tooltip />
                 {/* <Legend /> */}
                 <Bar dataKey="value" >
                 {
                          graphDataSectorPer.map((entry, index) => (
                            <Cell key={`cell-${index}`}  stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1} fill={colors[index % 20]}/>
                          ))
                        }
                </Bar>
                 {/* <Bar dataKey="uv" fill="#82ca9d" /> */}    
               </BarChart>
               </ResponsiveContainer>

          </div>
          
        </div>
        <div class="row chart-row chart-row_new">
            <div class="pr-md-1 col-12 col-md-4 col table-div-margin remove_margin">
                        <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjEGR iiGyjE_dfm_other">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th className="align-left" style={{width: "65%"}}>Regional Breakdown</th>
                                    <th className="align-right" style={{width: "30%"}}>(% NAV)</th>
                                </tr>
                                {/* <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"> */}
                                {/* {top3contriarray.map(rendertop3contri)} */}
                                
                                {regionBreakdownState.map(rendertop3contri)}

                                {/* </tr> */}
                                {/* <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <td>Long ASX SPI 200 Index</td>
                                    <td>0.41%</td>
                                </tr>
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <td>Long S&amp;P 500 Index</td>
                                    <td>0.33%</td>
                                </tr>
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <td>Short Australian Dollar / New Zealand Dollar</td>
                                    <td>0.30%</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>


                    <div class="pl-md-1 col-12 col-md-4 col remove_margin">

                        <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjE iiGyjE_dfm iiGyjE_dfm_other">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ eVXooJ_new">
                                    <th className="align-left" style={{width: "65%"}}>Portfolio Statistics</th>
                                    <th className="align-right" style={{width: "30%"}}>(% NAV)</th>
                                </tr>
                                {portfolioStatusState.map(renderbot3contri)}
                                

                            </tbody>
                        </table>
                    </div>


                    <div class="pl-md-1 col-12 col-md-4 col remove_margin">

                      <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjE iiGyjE_dfm_otherOne">
                          <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                              <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ eVXooJ_newch">
                                  <th style={{width: "65%"}} className="align-left">Net Foreign Assets Breakdown</th>
                                  <th style={{width: "25%"}} className="align-right">(% NAV)</th>
                              </tr>
                              {NFAState.map(renderbot3contri)}


                          </tbody>
                      </table>
                      </div>
                </div>

                </div>

        
        <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_rnb_pcc.pdf"} target="_blank">here</a>
                      <br/></p>
                  </div>



      </div>
      
      <div class="tab-pane fade" id="one" role="tabpanel">
        <div class="row">
          
          <div class="col-sm-12">
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">

            <div class="row">
                    <div class="col" >

                    <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz">
                            <tbody>
                                <tr class="CumulativePerformance__TopRow-sc-51pab9-1 dwdfBh dwdfBh_new">
                                  
                                  {cummulatovePerfData.map(renderCummulativePerformanceNames)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {cummulatovePerfData.map(renderCummulativePerformanceValue)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {cummulatovePerfDUSDData.map(renderCummulativePerformanceValue)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {cummulatovePerfAEURData.map(renderCummulativePerformanceValue)}

                                </tr>

                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {CummulativeperfDEURData.map(renderCummulativePerformanceValue)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {CummulativeperfDGBPData.map(renderCummulativePerformanceValue)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                     {CummulativeperfACHFData.map(renderCummulativePerformanceValue)}

                                   </tr>
                                   <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {CummulativeperfAEURData.map(renderCummulativePerformanceValue)}

                                </tr>
                                

                                
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="mb-2 row">
                    <div class="col" >
                    <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_dfm_new">
                            <tbody>
                                <tr class="CumulativePerformance__TopRow-sc-51pab9-1 dwdfBh">
                                  {TwelveMperfAGBPState.map(renderCummulativePerformanceNames)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {TwelveMperfAGBPState.map(renderCummulativePerformanceValue)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">

                                  {TwelveMperfDUSDState.map(renderCummulativePerformanceValue)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">

                                  {TwelveMperfAEURState.map(renderCummulativePerformanceValue)}

                                  </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">

                                  {TwelveMperfDEURState.map(renderCummulativePerformanceValue)}

                                </tr>                                
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">

                                  {TwelveMperfDGBPState.map(renderCummulativePerformanceValue)}

                                  </tr>
                                  <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">

                                      {TwelveMperfACHFState.map(renderCummulativePerformanceValue)}

                                      </tr>
                                  
                                


                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="mb-2 row">
                    <div class="col" >
                        <table class="table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_dfm_new">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV ">
                                    <tr class="dwdfBh_new_per">
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                            Performance Summary</th>
                                    </tr>
                                    <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">

                                      {PerformanceSummaryState.map(renderPerfSummaryinfo)}

                                      </tr>
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
                <div class="mb-2 row">
                    <div class="col" >
                        <div class="MonthlyPerformance__Wrapper-sc-1n33bhd-0  hRUkzz hRUkzz_dfm_new">
                        <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                        Monthly Performance – Class A USD</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayState.map(renderMonthNames)}


                                    </tr>
                                    
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped">
                                <tbody class="MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    
                                    {/* <tr class="MonthlyPerformance__Row-sc-1n33bhd-4 oKXFa"> */}
                                    
                                    {monthlyPerformance2DArrayState.map(render12MonthsData)}
                                    {/* </tr> */}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_rnb_pcc.pdf"} target="_blank">here</a> 
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
                      All information also available to download <a href={window.location.origin+"/sitepdfs/epic_rnb_pcc.pdf"} target="_blank">here</a> 
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
                                {/* {Fundinfoarray.map(renderFundinfo)} */}
                                {CMSFundinfoarray.map(renderFundinfo)}

                               
                                {/* <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Fund Launch Date</td>
                                    <td className="align-right">20 September 2012</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Fund Size</td>
                                    <td className="align-right">US$42.97m</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>1 Day VaR (99%, 3 Year)</td>
                                    <td className="align-right">1.77%</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Margin to Equity</td>
                                    <td className="align-right">12.68%</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Gross Notional Exposure</td>
                                    <td className="align-right">435.85%</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Pricing Frequency</td>
                                    <td className="align-right">Daily</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Domicile</td>
                                    <td className="align-right">Ireland</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Exit Charge</td>
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
                                <tr class="Shares__Row-sc-1brks4f-2 hzpAKA hzpAKA_new">
                                {/* {ShareClassarray.map(renderShareClassNames)} */}
                                <th class="text-left">Share Class</th>
                                <th class="text-center">Class A USD</th>
                                <th class="text-center">Class A GBP </th>
                                <th class="text-center">Class A SGD</th>
                                <th class="text-center">Class A JPY</th>
                                <th class="text-center">Class A EUR</th>
                                <th class="text-center">Class A CHF</th>
                                <th class="text-center">Class A CNH</th>
                                <th class="text-center">Class A AUD</th>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                  {ShareClassAarray.map(renderShareClassAValue)}
                                </tr>
                                {CMSshareinfoarray.map(renderCMSshareinfo)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <table class="table  Shares__Table-sc-1brks4f-0 hBbtmd">
                            <tbody class="Shares__Body-sc-1brks4f-1 hbWYKC">
                                <tr class="Shares__Row-sc-1brks4f-2 hzpAKA hzpAKA_new">
                                

                                {/* {ShareClassarray.map(renderShareClassNames)} */}

                                <th class="text-left">Share Class</th>
                                <th class="text-center">Class B USD</th>
                                <th class="text-center">Class B GBP </th>
                                <th class="text-center">Class B SGD</th>
                                <th class="text-center">Class B JPY</th>
                                <th class="text-center">Class B EUR</th>
                                <th class="text-center">Class B CHF</th>
                                <th class="text-center">Class B CNH</th>
                                <th class="text-center">Class B AUD</th>
                                </tr>
                                <tr class="Shares__Row-sc-1brks4f-2 eoQrEv">
                                {ShareClassBarray.map(renderShareClassBValue)}
                                </tr>
                                {CMSshareinfoarrayB.map(renderCMSshareinfoB)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_rnb_pcc.pdf"} target="_blank">here</a>
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
          
          <div class="col-sm-12">
              <h4>Fact Sheet</h4>

					  <p class="pdf_download">
                <a href={window.location.origin+"/sitepdfs/epic_rnb_pcc.pdf"} target="_blank" download>Renminbi PCC Fund PDF
                    <br/>
                </a>

            </p>
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


				  {/* <div class="col-sm-6">
					  <p class="pdf_download"><a href="files/2021-ESO-AGM-Proxy_32699907_3_0.pdf">2021 AGM Proxy Form<br/><span class="date">21 May 2021</span></a></p>
				  </div> */}
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
 
export default EpicipRNBpccFunction;

