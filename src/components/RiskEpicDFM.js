// import React from 'react';
import { render } from '@testing-library/react';
import React, { useState, useEffect, PureComponent, useRef, useMemo, useCallback, Fragment } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { NavLink } from 'react-router-dom';
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
import $ from 'jquery'
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
const ShareClassarray = []

let bot3contriDummy = []


// const usePrevious = value => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };


// const data = [

//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     // amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: -3000,
//     pv: 1398,
//     // amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: -2000,
//     pv: -9800,
//     // amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     // amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: -1890,
//     pv: 4800,
//     // amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: -3800,
//     // amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     // amt: 2100,
//   },

// ];

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
  const renderCustomizedLabelFixed = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, index ,name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const labelarray=['#ffffff','#ffffff','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#000000'];
  if(value > 5){
    console.log(index);
    const colors =labelarray[index]
    console.log("value");
    return (
      
      <text x={x} y={ y} fill={colors} className="text-size-a-wealth" textAnchor={x > cx ? 'start' : 'end'} >
      
        {`${ (value).toFixed(1)}%`}
      </text>
    )};
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,value, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const labelarray=['#ffffff','#000000','#000000','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'];
  if(value > 5){
    const colors =labelarray[index]
    return (
      
      <text x={x} y={ y} fill={colors} className="text-size-a" textAnchor={x > cx ? 'start' : 'end'} >
      
        {`${ (value).toFixed(1)}%`}
      </text>
    )};
  };
  const renderCustomized12LabelFixed = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, index ,name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const labelarray=['#ffffff','#ffffff','#000000','#ffffff','#ffffff','#ffffff','#ffffff','#000000'];
  if(value > 5){
    console.log(index);
    const colors =labelarray[index]
    console.log("value");
    return (
      
      <text x={x} y={ y} fill={colors} className="text-size-a-wealth" textAnchor={x > cx ? 'start' : 'end'} >
      
        {`${ (value).toFixed(1)}%`}
      </text>
    )};
  };
  // const DONUTCOLORS10 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#404040","#262626","#99103B","#B85876","#D296A9"];

  // const DONUTCOLORS7 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#99103B",": #B85876"];
  
  // const DONUTCOLORS5 = ["#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#262626"]

  //const DONUTCOLORS10 = ['#1A1549','#9DB1DB','#E6EEF6','#C8C8C8','#dcdcdc','#99103B','#B85876','#D296A9','#9DB1DB','#1A1549','#1A1549','#9DB1DB','#E6EEF6','#C8C8C8','#dcdcdc','#99103B','#B85876','#D296A9','#9DB1DB']

  const DONUTCOLORS10 = ['#1A1549','#9DB1DB','#E6EEF6','#A6A6A6','#DCDCDC','#99103B','#B85876','#D296A9','#1A1549','#9DB1DB','#E6EEF6','#A6A6A6','#DCDCDC','#99103B','#B85876','#D296A9']

  const DONUTCOLORS7 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#99103B",": #B85876"];
  
  const DONUTCOLORS5 = ['#1A1549','#9DB1DB','#D0DEF5','#99103B','#B85876','#D296A9','#dcdcdc','#666666','#404040','#262626']
  const DONUTCOLORS6 = ['#1A1549','#1A1549','#9DB1DB','#E6EEF6','#C8C8C8','#dcdcdc','#99103B','#B85876','#D296A9','#9DB1DB','#1A1549','#1A1549','#9DB1DB','#E6EEF6','#C8C8C8','#dcdcdc','#99103B','#B85876','#D296A9','#9DB1DB']
  const DONUTCOLORS8 = ['#1A1549','#99103b']

  const grayarray=['#E7E7E7','#D9D9D9','#BFBFBF','#A6A6A6','#808080','#6E6E6E'];

  const renderColorfulLegendText = (value, entry ) => {
    const { color } = entry;
    console.log(value,entry.payload.value);

    return <span className="legend-span">{value+' '+(entry.payload.value).toFixed(1)+'%'}</span>;
  };
  const renderColor12fulLegendText = (value, entry ) => {
    const { color } = entry;
    console.log(value,entry.payload.value);

    return <span className="legend-span">{value+' '+(entry.payload.value)+'%'}</span>;
  };

//   const DONUTCOLORS = [ "#b7c9d3","#7030a0","#00C49F", "#FFBB28", "#FF8042"];

const EpicMultiAssetGrowthFunction = () => {




const [products, setProducts] = useState([]);
const [productsVAR, setProductsVAR] = useState([]);
const [productsSectorPer, setProductsSectorPer] = useState([]);
const [productscommulativePerformance, setproductscommulativePerformance] = useState([]);
const [productscommulativePerformanceB, setproductscommulativePerformanceB] = useState([]);
const [productscommulativePerformanceBEUR, setproductscommulativePerformanceBEUR] = useState([]);
const [productscommulativePerformanceC, setproductscommulativePerformanceC] = useState([]);
const [twelvemonPerfAGBP, settwelvemonPerfAGBP] = useState([]);
const [twelvemonPerfBGBP, settwelvemonPerfBGBP] = useState([]);
const [twelvemonPerfBEUR, settwelvemonPerfBEUR] = useState([]);
const [twelvemonPerfCGBP, settwelvemonPerfCGBP] = useState([]);


const [AssetAllocation, setAssetAllocation] = useState([]);

const [top3response, settop3response] = useState([]);
const [bot3response, setbot3response] = useState([]);
const [SessionResponse, setSessionResponse] = useState([]);
// const [productscommulativePerformanceA, setproductscommulativePerformanceA] = useState([]);

const [products12monthsPerformance, setproducts12monthsPerformance] = useState([]);
const [productstop3contr, setproductstop3contr] = useState([]);
const [productsbot3contr, setproductsbot3contr] = useState([]);
const [productsCommentary, setproductsCommentary] = useState([]);
const [productsFundinfo, setproductsFundinfo] = useState([]);
const [CMSFundinfo, setCMSFundinfo] = useState([]);
const [CMSshareinfo, setCMSshareinfo] = useState([]);
const [productsShareClass, setproductsShareClass] = useState([]);
const [productsMonthlyPerf, setproductsMonthlyPerf] = useState([]);

const [InceptionData, setInceptionData] = useState([]);
const [InceptionData2, setInceptionData2] = useState([]);


const [PRTU, setPRTU] = useState([]);
const [arrPRTUState,setarrPRTUState]= useState([]);
const [PRTUDate,setPRTUDate]= useState([]);
const [StateSession, setStateSession] = useState([]);


const [HeadingState, setHeadingState] = useState([]);
const [ObjectiveState, setObjectiveState] = useState([]);
const [TeamState, setTeamState] = useState([]);
const[Summary,setSummary]= useState([]);
const[Literature,setLiterature]= useState([]);
const [FundNameState, setFundNameState] = useState([]);
const [LiteratureDataState, setLiteratureDataState] = useState([]);
const [LiteratureSummaryDataState, setLiteratureSummaryDataState] = useState([]);
const [KeyInveInfoState, setKeyInveInfoState] = useState([]);
const [PressCoverageState, setPressCoverageState] = useState([]);
const [ApplicationsState, setApplicationsState] = useState([]);
const [ReportsState, setReportsState] = useState([]);
const [offerDocumentState, setofferDocumentState] = useState([]);
const [portfolioStatus, setportfolioStatus] = useState(false);
const [performanceStatus1, setperformanceStatus1] = useState(false);

const [graphData, setgraphData] = useState([]);

const [top10HoldingState, settop10HoldingState] = useState([]);
const [InceptionArrayState, setInceptionArrayState] = useState([]);
const [InceptionArrayState2, setInceptionArrayState2] = useState([]);
const [InceptionArrayState3, setInceptionArrayState3] = useState([]);
 const [monthlyPerformance2DArrayState, setmonthlyPerformance2DArrayState] = useState([]);
 const [monthsArrayState, setmonthsArrayState] = useState([]);


const [AssetAllocationState, setAssetAllocationState] = useState([]);
const [marketCapState, setmarketCapState]= useState([]);
const [equititeState, setequititeState]= useState([]);

const [DerVarState, setDerVarState]= useState([]);




const [regionBreakdownState, setregionBreakdownState]= useState([]);

const [sectorBreakdownState, setsectorBreakdownState]= useState([]);






const [graphDataVAR, setgraphDataVAR] = useState([]);
const[graphDataSectorPer,setgraphDataSectorPer]= useState([]);


const[cummulatovePerfData,setcummulatovePerfData]= useState([]);
const[cummulatovePerfBData,setcummulatovePerfBData]= useState([]);
const[CummulativeperfeBEURData,setCummulativeperfeBEURData]= useState([]);
const[CummulativeperfC,setCummulativeperfC]= useState([]);


const[TwelveMperfAGBPState,setTwelveMperfAGBPState]= useState([]);



const[TwelveMperfBGBPState,setTwelveMperfBGBPState]= useState([]);
const[TwelveMperfBEURState,setTwelveMperfBEURState]= useState([]);
const[TwelveMperfCGBPState,setTwelveMperfCGBPState]= useState([]);




const[twelvemonPerfDiscreteAPI,settwelvemonPerfDiscreteAPI]= useState([]);
const[top3contriarray,settop3contriarray]= useState([]);

const[top3contriState,settop3contriState]= useState([]);

const[bot3contriarray,setbot3contriarray]= useState([]);
const[Fundinfoarray,setFundinfoarray]= useState([]);
const[ShareClassarray,setShareClassarray]= useState([]);
const[CMSFundinfoarray,setCMSFundinfoarray]= useState([]);
const[CMSshareinfoarray,setCMSshareinfoarray]= useState([]);
 
const[Loading,setLoading]= useState(false);

const [productRegional, setproductRegional] = useState([]);
const [productstop10Holding, setproductstop10Holding] = useState([]);
const [productsmarketCap, setproductsmarketCap] = useState([]);
const [productSectorBreakdown, setproductSectorBreakdown] = useState([]);


const [productRegionBreakdown, setproductRegionBreakdown] = useState([]);


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
  let OtherSummaryInfoLiteratureArr=[];
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
      if(FundName == "epic_mps_rmd5_fund"){
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
      if(Literature[i].literature_name == "other_information_summary"){

        FinancialTrendFund = FundName; 
        LiteratureTitle = Literature[i].title;
        LiteratureName = Literature[i].literature_name;
        FileName = Literature[i].file;
        LiteratureDate = Literature[i].date;

        OtherInfoObj[LiteratureKeys[0]] = LiteratureName;
        OtherInfoObj[LiteratureKeys[1]] = FileName;
        OtherInfoObj[LiteratureKeys[2]] = LiteratureDate;
        OtherInfoObj[LiteratureKeys[3]] = LiteratureTitle;

        OtherSummaryInfoLiteratureArr.push(OtherInfoObj);
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
    setLiteratureSummaryDataState(OtherSummaryInfoLiteratureArr);
    setKeyInveInfoState(KeyInveInfoLiteratureArr);
    setPressCoverageState(pressCoverageLiteratureArr);
    setApplicationsState(applicationsLiteratureArr);
    setReportsState(reportsLiteratureArr);
    setofferDocumentState(offerDocumentsLiteratureArr);
  
  
  
  
  
  
  }
  const tt=()=>{
    // alert("hi");
    $('.btn-setting')[0].click();
  }
const summaryButton=()=>{
  
  let arrPRTU=[]
  tt();
  var heading;
  var objective;
  var team;

  for(let i=0 ; i< Summary.length ;i++){
    // typeof(products[i][j])
    if(Summary[i].heading== "epic_mps_rmd5_fund"){
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
let calculation = PRTU[1][2]
// new Date(date).toLocaleDateString()


let calculatedDate = new Date(calculation).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(calculation).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(calculation).toLocaleDateString("en-US", { year: 'numeric' });

console.log(new Date(calculation).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(calculation).toLocaleDateString("en-US", { month: 'numeric' })+ "/" + new Date(calculation).toLocaleDateString("en-US", { year: 'numeric' }))
console.log("calculationcalculationcalculationcalculation")

  // for loop for Share price
  // for(let i=6;i<=10;i++){

  //   let val = PRTU[i][2]

  //   console.log(val);
  //   console.log("-----------------------------------ValVAL");

  //   arrPRTU.push(val.toFixed(3))
  // }

  console.log(arrPRTU)
  console.log("arrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTU")


  setarrPRTUState(arrPRTU)
  setPRTUDate(calculatedDate)
  setHeadingState(heading)
  setObjectiveState(objective)
setStateSession(SessionResponse);

  setTeamState(team)
  $('.footer-container').addClass('footer-container-line')
  literatureButton();
}




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
  const InceptionDataArray2 = []
  const InceptionDataArray3 = []


  var keysInceptionData2 = ["date", "value"]
  
  
for(let i=1 ; i< InceptionData.length ;i++){
 // typeof(products[i][j])
 
 let obj={};
 var date = InceptionData[i][3]
 var PerformanceValue = InceptionData[i][10]
 if(PerformanceValue !=''){
  var AlphaDate =  new Date(date).toLocaleDateString("en-US", { year: 'numeric' })
  obj[keysInceptionData2[0]] = AlphaDate;
  obj[keysInceptionData2[1]] = PerformanceValue*100;
  
     InceptionDataArray2.push(obj)
 }
 

   date = null
   PerformanceValue = null
 
} 
console.log(InceptionDataArray2);

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
  var length = AssetAllocation.length;
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< AssetAllocation[i].length ;j++){

      if(!isNaN(AssetAllocation[i][j])){
      let val = AssetAllocation[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded1 = Math.round(Math.round((val + Number.EPSILON) * 100) / 100,1);

      console.log(rounded1);
      obj[keysVAR[j]] = rounded1 ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{

        obj[keysVAR[j]] = AssetAllocation[i][j] ;
      }     

      } 
      if(obj.value !==0){
      
      graphDataResponse1.push(obj)
      
      }
      // console.log(graphData);
      // console.log("allKeys")
      
  }



  
  var keystop10Hold = ["no","name", "value"]
  
  for(let i=1 ; i< 11 ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productstop10Holding[i].length ;j++){

     if(!isNaN(productstop10Holding[i][j])){
     let val = productstop10Holding[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keystop10Hold[j]] = rounded ;
     console.log(obj);
     console.log("obj");
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keystop10Hold[j]] = productstop10Holding[i][j] ;
     }     

     }
     top10HoldingData.push(obj)
   
     
 } 
 
 var keysInceptionData21 = ["name", "value"]
  var length = productstop10Holding.length;
  let obj1={};
  let obj2={};
  let obj={};
  console.log(productstop10Holding)
  obj1[keysInceptionData21[0]] = productstop10Holding[1][5];
  let val12 = productstop10Holding[1][6]*100;
  var rounded112 = Math.round(Math.round((val12 + Number.EPSILON) * 100) / 100,1);
  obj1[keysInceptionData21[1]] = rounded112;
  obj2[keysInceptionData21[0]] = productstop10Holding[2][5];
  let val123 = productstop10Holding[2][6]*100;
  var rounded1123 = Math.round(Math.round((val123 + Number.EPSILON) * 100) / 100,1);
  obj2[keysInceptionData21[1]] = rounded1123;
  obj =[obj1,obj2]
  let objlength =obj.length
  for(let i=0 ; i< objlength ;i++){
    //console.log(obj[i].value);
    if(obj[i].value !==0){
        InceptionDataArray3.push(obj[i])
      }
  }
console.log(InceptionDataArray3);

  



  var keysMarketCap = ["name", "value"]
    var length = productsmarketCap.length;
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productsmarketCap[i].length ;j++){

      if(!isNaN(productsmarketCap[i][j])){
      
        let val = productsmarketCap[i][j]*100;
        // var numb= 212421434.533423131231;
        var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
        console.log(rounded);
        obj[keysMarketCap[j]] = rounded ;

      }
      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysMarketCap[j]] = productsmarketCap[i][j] ;
      }     

    }
      if(obj.value !==0){
        marketCapData.push(obj)
      }
      // console.log(graphDataSectorPer);
      // console.log("allKeys")    
  } 
  


  var keysSectorBreakdown = ["name", "value"]
  var length = productSectorBreakdown.length
  
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    let obj={};
    for(let j =0 ;j< productSectorBreakdown[i].length ;j++){

      if(!isNaN(productSectorBreakdown[i][j])){
          
          let val = productSectorBreakdown[i][j]*100;      
          // var numb= 212421434.533423131231;
          var rounded =  Math.round((val + Number.EPSILON) * 100) / 100;

          console.log(rounded);
          obj[keysSectorBreakdown[j]] = rounded ;
          
      }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysSectorBreakdown[j]] = productSectorBreakdown[i][j] ;
      }     

      }
      if(obj.value !==0){

      
      equitiesData.push(obj)
      }
      // console.log(graphDataSectorPer);
                // console.log("allKeys")
    
  } 

  var keysRegionBreakdown = ["name", "value"]
  
  for(let i=1 ; i< productRegionBreakdown.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productRegionBreakdown[i].length ;j++){

     if(!isNaN(productRegionBreakdown[i][j])){
     let val = productRegionBreakdown[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keysRegionBreakdown[j]] = rounded ;

   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysRegionBreakdown[j]] = productRegionBreakdown[i][j] ;
     }     

     }
     DerVarData.push(obj)
   
     
     // console.log(graphDataSectorPer);
               // console.log("allKeys")
   
 } 
  


  var keysRegionBreakdown = ["name", "value"]
  
  for(let i=1 ; i< productRegionBreakdown ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productRegionBreakdown[i].length ;j++){

     if(!isNaN(productRegionBreakdown[i][j])){
     let val = productRegionBreakdown[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keysRegionBreakdown[j]] = rounded ;

   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysRegionBreakdown[j]] = productRegionBreakdown[i][j] ;
     }     

     }
     graphDataResponse2.push(obj)
   
     
     // console.log(graphDataSectorPer);
               // console.log("allKeys")
   
 } 
 




  
  // setgraphData(graphDataResponse)
  setgraphData(graphDataResponse1)
  // setAssetAllocationState()
  settop10HoldingState(top10HoldingData)
  setmarketCapState(marketCapData)
  setequititeState(equitiesData)
  setDerVarState(DerVarData)


  setregionBreakdownState(RegionbreakdownArray)
  setsectorBreakdownState(sectorbreakdownArray)
  setInceptionArrayState2(InceptionDataArray2)
  setInceptionArrayState3(InceptionDataArray3)
  setgraphDataSectorPer(graphDataResponse2)

  // console.log(graphDataResponse);
  // console.log("graphDataResponse");

  console.log(sectorBreakdownData)
  console.log("equitiesData");

  console.log(graphDataResponse1);
  console.log("graphDataResponse1");
  
  
  
  
  setportfolioStatus(true)





}




const performanceButton=()=>{


  const CummulativeperformanceData = []
  const CummulativeperformanceBData = []
  const CummulativeperformanceBEURData = []
  const CummulativeperformanceCData = []

  const TwelveMperfAGBP = []
  const TwelveMperfBGBP = []
  const TwelveMperfBEUR = []
  const TwelveMperfCGBP = []
  

  const Bot3contriData = []
  const Top3contriData = []
  const InceptionDataArray = []

  // const TwelvemonPerfData = []


  var monthsArr=[];





  console.log(productsMonthlyPerf)
  console.log("productsMonthlyPerf")

  for(let i= 8; i<=22;i++ ){
    monthsArr.push(productsMonthlyPerf[3][i])
  }
  console.log("months")
  console.log(monthsArr)

  var arr2D=[];
  for(let i=4 ;i<=12;i++){
    let arr=[]
    for(let j=9;j<=22;j++){
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
      //parseFloat(val).toFixed(2);
      //arr.push(parseFloat(rounded).toFixed(2)+'%')
        arr.push(rounded+'%')
      
        
        // arr.push(productsMonthlyPerf[i][j])
      }else{
        rounded = ''; 
        arr.push(rounded)
      }
    }
    arr2D.push(arr);
  }

for(let i =0;i<arr2D.length;i++){
for(let j =0 ; j< arr2D[0].length;j++){

  // console.log(arr2D[1][j])
  if(arr2D[i][j]==0+'%'){
    console.log(arr2D[i][j])
     arr2D[i][j] = "0.00%"
  }
  console.log(arr2D[i][j])
}
console.log("--------------------------------------------------------------------")
}

console.log(arr2D);
console.log("arr2D");













  
  var keysInceptionData = ["date", "value"]
  
  
  for(let i=1 ; i< InceptionData.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   var date = InceptionData[i][3]
   var PerformanceValue = InceptionData[i][7]
   var AlphaDate = new Date(date).toLocaleDateString("en-US", { month: 'short' })+ "-" + new Date(date).toLocaleDateString("en-US", { year: 'numeric' })
   console.log("AlphaDate")
   console.log(AlphaDate)
   if(PerformanceValue !=""){
      obj[keysInceptionData[0]] = AlphaDate;
      obj[keysInceptionData[1]] = PerformanceValue*100;
      InceptionDataArray.push(obj)
   }
  
 
     date = null
     PerformanceValue = null
   
 } 
 console.log(InceptionDataArray);

 
 
 console.log("InceptionDataArray");
 

  var keysCummulativePer = ["name", "value"]
  
   for(let i=0 ; i< productscommulativePerformance.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productscommulativePerformance[i].length ;j++){

      if(!isNaN(productscommulativePerformance[i][j])){
      let val = productscommulativePerformance[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;

      console.log(rounded);
      rounded =parseFloat(rounded).toFixed(2);
      obj[keysCummulativePer[j]] = rounded+'%' ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysCummulativePer[j]] = productscommulativePerformance[i][j] ;
      }     

      }
      CummulativeperformanceData.push(obj)
      

  } 


//   var keysCommulativePerfB = ["name", "value"] 
//   for(let i=0 ; i< productscommulativePerformanceB.length ;i++){
   
//    let obj={};
//        for(let j =0 ;j< productscommulativePerformanceB[i].length ;j++){

//          if(!isNaN(productscommulativePerformanceB[i][j])){
//          let val = productscommulativePerformanceB[i][j]*100;
        
//          // var numb= 212421434.533423131231;
//          var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
        
//          console.log(rounded);
//          obj[keysCommulativePerfB[j]] = rounded ;
//          console.log(obj);
//          console.log("obj");
//        }
//          else{
//            obj[keysCommulativePerfB[j]] = productscommulativePerformanceB[i][j] ;
//          }     
       
//          }
       
//          CummulativeperformanceBData.push(obj)

//  }


 
//   var keysCommPerfBEUR = ["name", "value"]
//   for(let i=0 ; i< productscommulativePerformanceBEUR.length ;i++){
   
//    let obj={};
//    for(let j =0 ;j< productscommulativePerformanceBEUR[i].length ;j++){

//      if(!isNaN(productscommulativePerformanceBEUR[i][j])){
//      let val = productscommulativePerformanceBEUR[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keysCommPerfBEUR[j]] = rounded ;

//    }
//      else{
//        obj[keysCommPerfBEUR[j]] = productscommulativePerformanceBEUR[i][j] ;
//      }     

//     }
//     CummulativeperformanceBEURData.push(obj)
   
     
   
//  } 
 

//   var keysCommPerfC= ["name", "value"]
  
//   for(let i=0 ; i< productscommulativePerformanceC.length ;i++){
//    // typeof(products[i][j])
   
//    let obj={};
//    for(let j =0 ;j< productscommulativePerformanceC[i].length ;j++){

//      if(!isNaN(productscommulativePerformanceC[i][j])){
//      let val = productscommulativePerformanceC[i][j]*100;
     
//      // var numb= 212421434.533423131231;
//      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//      console.log(rounded);
//      obj[keysCommPerfC[j]] = rounded ;

//    }
//      else{
//        obj[keysCommPerfC[j]] = productscommulativePerformanceC[i][j] ;
//      }     

//      }
//      CummulativeperformanceCData.push(obj)
   
//  } 


 var keys12monthsDis = ["name", "value"]
  


 for(let i=0 ; i< twelvemonPerfAGBP.length ;i++){
  // typeof(products[i][j])
  
  let obj={};
  for(let j =0 ;j< twelvemonPerfAGBP[i].length ;j++){

    if(!isNaN(twelvemonPerfAGBP[i][j])){
    let val = twelvemonPerfAGBP[i][j]*100;
    
    // var numb= 212421434.533423131231;
    var rounded = Math.round((val + Number.EPSILON) * 1000) / 1000;

    console.log(rounded);
    rounded =parseFloat(rounded).toFixed(2);
    obj[keys12monthsDis[j]] = rounded+'%' ;

  }

    // var updatedVal =  parseFloat(val).toFixed(2);
    // console.log(updatedVal);
    else{
      obj[keys12monthsDis[j]] = twelvemonPerfAGBP[i][j] ;
    }     

    }

    TwelveMperfAGBP.push(obj)


              // console.log("allKeys")
  
} 

// var keys12monthsDisBGBP = ["name", "value"]
  
//  for(let i=0 ; i< twelvemonPerfBGBP.length ;i++){
//   // typeof(products[i][j])
  
//   let obj={};
//   for(let j =0 ;j< twelvemonPerfBGBP[i].length ;j++){

//     if(!isNaN(twelvemonPerfBGBP[i][j])){
//     let val = twelvemonPerfBGBP[i][j]*100;
    
//     // var numb= 212421434.533423131231;
//     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//     console.log(rounded);
//     obj[keys12monthsDisBGBP[j]] = rounded ;

//   }

//     // var updatedVal =  parseFloat(val).toFixed(2);
//     // console.log(updatedVal);
//     else{
//       obj[keys12monthsDisBGBP[j]] = twelvemonPerfBGBP[i][j] ;
//     }     

//     }
    

//     TwelveMperfBGBP.push(obj)
 

//               // console.log("allKeys")
  
// } 

// var keys12monthsDisBEUR = ["name", "value"]
  
//  for(let i=0 ; i< twelvemonPerfBEUR.length ;i++){
//   // typeof(products[i][j])
  
//   let obj={};
//   for(let j =0 ;j< twelvemonPerfBEUR[i].length ;j++){

//     if(!isNaN(twelvemonPerfBEUR[i][j])){
//     let val = twelvemonPerfBEUR[i][j]*100;
    
//     // var numb= 212421434.533423131231;
//     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

//     console.log(rounded);
//     obj[keys12monthsDisBEUR[j]] = rounded ;

//   }

//     // var updatedVal =  parseFloat(val).toFixed(2);
//     // console.log(updatedVal);
//     else{
//       obj[keys12monthsDisBEUR[j]] = twelvemonPerfBEUR[i][j] ;
//     }     

//     }
    
    
//     TwelveMperfBEUR.push(obj)
    

//               // console.log("allKeys")
  
// } 



var keystop3contr = ["name", "value"]
  
 for(let i=1 ; i< top3response.length ;i++){
  // typeof(products[i][j])
  
  let obj={};
  for(let j =0 ;j< top3response[i].length ;j++){

    if(!isNaN(top3response[i][j])){
    let val = top3response[i][j]*100;
    
    // var numb= 212421434.533423131231;
    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

    console.log(rounded);
    obj[keystop3contr[j]] = rounded ;

  }

    // var updatedVal =  parseFloat(val).toFixed(2);
    // console.log(updatedVal);
    else{
      obj[keystop3contr[j]] = top3response[i][j] ;
    }     

    }

    Top3contriData.push(obj)
    

              // console.log("allKeys")
  
} 

var keysbot3contr = ["name", "value"]
  
 for(let i=1 ; i< bot3response.length ;i++){
  // typeof(products[i][j])
  
  let obj={};
  for(let j =0 ;j< bot3response[i].length ;j++){

    if(!isNaN(bot3response[i][j])){
    let val = bot3response[i][j]*100;
    
    // var numb= 212421434.533423131231;
    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

    console.log(rounded);
    obj[keysbot3contr[j]] = rounded ;

  }

    // var updatedVal =  parseFloat(val).toFixed(2);
    // console.log(updatedVal);
    else{
      obj[keysbot3contr[j]] = bot3response[i][j] ;
    }     

    }

    Bot3contriData.push(obj)
    

              // console.log("allKeys")
  
} 


  setcummulatovePerfData(CummulativeperformanceData)
  setcummulatovePerfBData(CummulativeperformanceBData)
//   setCummulativeperfeBEURData(CummulativeperformanceBEURData)
  
//   setCummulativeperfC(CummulativeperformanceCData)

  setTwelveMperfAGBPState(TwelveMperfAGBP)
  settop3contriState(Top3contriData)
  console.log(Top3contriData)
  console.log("Top3contriData")

  setbot3contriarray(Bot3contriData)
    setInceptionArrayState(InceptionDataArray)
    
    setmonthlyPerformance2DArrayState(arr2D)
    setmonthsArrayState(monthsArr)
  // setTwelveMperfBGBPState(TwelveMperfBGBP)
//   setTwelveMperfBEURState(TwelveMperfBEUR)
//   setTwelveMperfCGBPState(TwelveMperfCGBP)

  // settwelvemonPerfDiscreteAPI(TwelvemonPerfData)
  // settop3contriarray(Top3contriData)
  // setbot3contriarray(Bot3contriData)





}


const informationButton=()=>{
  const shareClassData =[]
  const fundInfoData =[]
  const CMSfundInfoData =[]
  const CMSshareInfoData =[]



  var keysCMSshareinfo = ["name", "ausdValue","agbpValue","aeurValue","busdValue","bgbpValue","beurValue"]
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


    console.log(obj);
    console.log("obj---------------@");

    CMSshareInfoData.push(obj)
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
  var keysShareClass = ["name", "value"]
  
  for(let i=0 ; i< productsShareClass.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productsShareClass[i].length ;j++){

     if(!isNaN(productsShareClass[i][j])){
     let val = productsShareClass[i][j];
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keysShareClass[j]] = rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,')+'p' ;
     console.log(obj);
     console.log("obj");
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysShareClass[j]] = productsShareClass[i][j] ;
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
      var million_variable = (mrounded/1000000).toFixed(2) + 'M'
    
      obj[keysFundinfo[j]] = '£ '+ million_variable;
    
    }
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysFundinfo[j]] = productsFundinfo[i][j] ;
     }     

     }
     fundInfoData.push(obj)
   

 }

 setShareClassarray(shareClassData)
 setFundinfoarray(fundInfoData)

 setCMSFundinfoarray(CMSfundInfoData)
 setCMSshareinfoarray(CMSshareInfoData)
console.log(CMSshareInfoData);
console.log("CMSshareInfoData")









}









let AbcObject ={};

let count = 0;
async function fetchMyAPI(){
// const fetchMyAPI = useCallback(() => {
  // https://epicipprojects.com/getdata  
  // https://jsonplaceholder.typicode.com/posts
  // const url ='https://epicipprojects.com/garraway-financial-trends';
  // const url = 'https://epicipprojects.com/api/vtgarraway-multi-asset-growth-fund' 
  
  const Localurl = 'https://www.epicip.com/vtepic-multi-asset-growth-fund' 
  //const url = window.location.origin+'/vtepic-multi-asset-growth-fund' 
  const Local2url = 'https://www.epicip.com/vtepic-multi-asset-balanced-fund'
  //const url ='https://www.epicip.com/vtepic-multi-asset-growth-fund';
  //const url = "https://www.epicip.com/epic-mps-rmd5";
  const url = window.location.origin+'/epic-mps-rmd5';
  //const url = 'http://127.0.0.1:8000/epic-mps-rmd5'

  fetch(window.location.origin+'/session_data').then(resp => resp.json()).then(resp =>  {
  console.log(resp);
  console.log("resp");

  setSessionResponse(resp);


})
  fetch(url).then(resp=> resp.json())
   .then (resp => {
   console.log(count)
   console.log("count")

    // setProducts(resp.SectorExposures)
    // setProductsVAR(resp.SectorVaR)
    // setProductsSectorPer(resp.SectorPerformance)
    setAssetAllocation(resp.Assetsallocation)
    setproductscommulativePerformance(resp.CumulativePerf)
    // Cumulativeclassflnc
    // setproductscommulativePerformance(resp.CumulativeclassPerffacc)

    setproductscommulativePerformanceB(resp.Cumulativeclassflnc)
    // setproductscommulativePerformanceBEUR(resp.CumulativePerfClassBEUR)
    // setproductscommulativePerformanceC(resp.CumulativePerfClassCGBP)
      
    settwelvemonPerfAGBP(resp.twelvemPerfDiscrete)
    settwelvemonPerfBGBP(resp.twelvemPerfDiscreteclassflnc)
    settop3response(resp.Top3Contributors)
    setbot3response(resp.Bottom3Contributors)
    // settwelvemonPerfBEUR(resp.twelvemPerfDiscreteClassBEUR)
    // settwelvemonPerfCGBP(resp.twelvemPerfDiscreteClassCGBP)


    // setproducts12monthsPerformance(resp.twelvemPerfDiscrete)
    // setproductstop3contr(resp.Top3Contributors)
    // setproductsbot3contr(resp.Bottom3Contributors)
    setproductsCommentary(resp.content)
    setproductRegional(resp.RegionalWeightings)
    setproductstop10Holding(resp.TopHoldings)

    setproductsmarketCap(resp.FixedIncomeBreakdown)
    setproductRegionBreakdown(resp.CumulativePerf)
    setInceptionData2(resp.CumulativePerf)

    setproductSectorBreakdown(resp.EquitiesBreakdown)
    setproductsFundinfo(resp.FundInfo)
    setproductsShareClass(resp.shareinfo)
    setproductsMonthlyPerf(resp.MonthlyPerf)
    // setLoading(true)
    setInceptionData(resp.inceptionperfdata)
    setPRTU(resp.prtu)
    setLiterature(resp.literature)
    setSummary(resp.summary)
    setCMSFundinfo(resp.fund_info)
    setCMSshareinfo(resp.shareinfo)
  console.log(resp.shareinfo);
  console.log("resp.shareinfo");


    // setLoading(true)
    setstatus(true)
    document.getElementById("summaryButton").click();

    // setTimeout(()=>{setstatus(true)}, 2000  )
    
    // setproductscommulativePerformanceA(productscommulativePerformance)
    // setproductstest(productscommulativePerformance[0])
    
    
    //  console.log(resp.SectorVaR);
    //  console.log("resp.SectorVaR"); 
    //  console.log(productsVAR)


    //  console.log(resp.SectorExposures);
    //  console.log("resp.SectorExposures");
    //  console.log(products);
   
    //  console.log(resp.CumulativePerf);
    //  console.log("resp.CumulativePerf");
    //  console.log(productscommulativePerformance);     
    //  console.log(productstest)
    // console.log("productstest")
    // XYZ = JSON.stringify(productscommulativePerformance)
    // setproductscommulativePerformanceA()
    // prevCountRef.current = productscommulativePerformance;
    // console.log(objjj)
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // console.log(objee)
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    //  console.log(resp.twelvemPerfDiscrete);
    //  console.log("resp.twelvemonPerfDiscrete");
    //  console.log(products12monthsPerformance); 
     
    //  console.log(resp.Top3Contributors);
    //  console.log("resp.Top3Contributors");
    //  console.log(productstop3contr); 

    //  console.log(resp.Bottom3Contributors);
    //  console.log("resp.Bottom3Contributors");
    //  console.log(productsbot3contr);
     
    //  console.log(resp.content);
    //  console.log("resp.content");
    //  console.log(productsCommentary);

    //  console.log(resp.FundInfo);
    //  console.log("resp.content");
    //  console.log(productsFundinfo);

    //  console.log(resp.NAVperShare);
    //  console.log("resp.NAVperShare");
    //  console.log(productsShareClass);

    //  console.log(resp.MonthlyPerfBGBP);
    //  console.log("resp.MonthlyPerfBGBP");
    //  console.log(productsMonthlyPerf);

    //  if(productsMonthlyPerf.length > 1){
    //    console.log(productsMonthlyPerf)
    //    console.log("COnsole.productsMonthlyPerf")

    //   setstatus(true)
    //  }else{
    //   // fetchMyAPI();
    //   // EpicfinanceTrends();
    //   // window.location.reload(true);
    // setproductsMonthlyPerf(resp.MonthlyPerfBGBP)

    //  }

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
      // console.log(graphData);

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
  function renderDailyPrices(DailyPrice, index){
    if(DailyPrice.Price !== 0){
    return(
      <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
        <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">${DailyPrice.Price}</div>
        <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(USD) Shares</span></div>
    </div>
    )
  }
  }
function renderLiteratureData(data, index){
  return(

              <div class="col-sm-6">
					      <p class="pdf_download"><a href={window.location.origin+"/storage/literature-file/"+data.FileName} download target="_blank">{data.LiteratureTitle}<br/><span class="date">{data.LiteratureDate}</span></a></p>
				      </div>
  )
}

function renderLiteratureDataPO(data, index){
  if(data.LiteratureNameKey == "other_information_summary"){
    return(
      <div class="col-sm-12" style={{ paddingLeft:"0px",paddingRight:"0px"}}>
                  <p class="pdf_download"><a href={window.location.origin+"/storage/literature-file/"+data.FileName} target="_blank" download>{data.LiteratureTitle}</a></p>
              </div>
     )
  }

}
function renderLiteratureDataRecent(data, index){
  if(index <= 1){
    return(

                <div class="col-sm-6">
                            <p class="pdf_download"><a href={window.location.origin+"/storage/literature-file/"+data.FileName} target="_blank" download>{data.LiteratureTitle}<br/><span class="date">{data.LiteratureDate}</span></a></p>
                        </div>
    )
}
}
const CustomizedAxisTick = ({ x, y, stroke, payload }) => {

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={60} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-10)">
        {payload.value}
      </text>
    </g>
  );
};
function renderTop10Holding(holding, index) {
  return(
  <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
    <td className="align-left">{holding.name}</td>
    <td className="align-right">{holding.value}</td>

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
  if(index == 0){
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
      <td className="align-left">{top3contriparam.name}</td>
      <td className="align-right">{top3contriparam.value}</td>
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
      
      <td className="align-left">{bot3contriparam.name}</td>
      <td className="align-right">{bot3contriparam.value}</td>
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
      <td className="align-center">{shareinfoparam.agbpValue}</td>
      <td className="align-center">{shareinfoparam.aeurValue}</td>
      <td className="align-center">{shareinfoparam.busdValue}</td>
      <td className="align-center">{shareinfoparam.bgbpValue}</td>
      <td className="align-center">{shareinfoparam.beurValue}</td>
    
    </tr>
  )} 
}

function renderFundinfo(fundinfoparam, index){
  // alert(bot3contriparam.name);

  return(
    <tr className="FundInformation__Row-sc-18irt95-2 fweCQL fixwidth_info" key={index}>
      
      <td className="align-left">{fundinfoparam.name}</td>
      <td className="align-center">{fundinfoparam.value}</td>
    </tr>
  )
}
function renderShareClassNames(shareClass, index){
  if(index==0){
  return(
    <th className="align-left">{shareClass.name}</th>
)}else{
  return(
    <th className="align-center">{shareClass.name}</th>
)
}
}
function renderShareClassValue(shareClassValue, index){
  if(index==0){
  return(
    <td className="align-left">{shareClassValue.value}</td>
)}else{
  return(
    <td className="align-center">{shareClassValue.value}</td>
) 
}
}

var valEquCounts = 0;
var indexEquKey = 0;
var newEqucolor ="#353637";
var newEquKeycolor ="#1A1549";
function equitichart(entry, index){
  console.log(index,entry.name,"mahesh 123");
  if(entry.name==="Cash & Other"){
    newEqucolor = grayarray[valEquCounts];
    valEquCounts = Number(valEquCounts) + Number(1);
    return (
      <Cell key={`cell-${index}`} fill={newEqucolor} />
    )
  }else if(entry.name==="Uncorrelated"){
    newEqucolor = grayarray[valEquCounts];
    valEquCounts = Number(valEquCounts) + Number(1);
    return (
      <Cell key={`cell-${index}`} fill={newEqucolor} />
    )
  }else if(entry.name==="Property"){
    newEqucolor = grayarray[valEquCounts];
    valEquCounts = Number(valEquCounts) + Number(1);
    return (
      <Cell key={`cell-${index}`} fill={newEqucolor} />
    )
  }else if(entry.name==="Commodities"){
    newEqucolor = grayarray[valEquCounts];
    valEquCounts = Number(valEquCounts) + Number(1);
    return (
      <Cell key={`cell-${index}`} fill={newEqucolor} />
    )
  }else if(entry.name==="Fixed Income"){
    newEqucolor = grayarray[valEquCounts];
    valEquCounts = Number(valEquCounts) + Number(1);
    return (
      <Cell key={`cell-${index}`} fill={newEqucolor} />
    )
  }else{
    newEquKeycolor = DONUTCOLORS10[indexEquKey];
    indexEquKey = Number(indexEquKey) + Number(1);
  return (
      <Cell key={`cell-${index}`} fill={newEquKeycolor} />
    )
  }
}


var valFixCounts = 0;
var newFixcolor ="#353637";
var indexFixKey = 0;
var newFixKeycolor ="#1A1549";
function marketCapchart(entry, index){
    if(entry.name==="Cash & Other"){
      newFixcolor = grayarray[valFixCounts];
      valFixCounts = Number(valFixCounts) + Number(1);
      return (
        <Cell key={`cell-${index}`} fill={newFixcolor} />
      )
    }else if(entry.name==="Uncorrelated"){
      newFixcolor = grayarray[valFixCounts];
      valFixCounts = Number(valFixCounts) + Number(1);
      return (
        <Cell key={`cell-${index}`} fill={newFixcolor} />
      )
    }else if(entry.name==="Commodities"){
      newFixcolor = grayarray[valFixCounts];
      valFixCounts = Number(valFixCounts) + Number(1);
      return (
        <Cell key={`cell-${index}`} fill={newFixcolor} />
      )
    }else if(entry.name==="Equities"){
      newFixcolor = grayarray[valFixCounts];
      valFixCounts = Number(valFixCounts) + Number(1);
      return (
        <Cell key={`cell-${index}`} fill={newFixcolor} />
      )
    }else{
      newFixKeycolor = DONUTCOLORS10[indexFixKey];
      indexFixKey = Number(indexFixKey) + Number(1);
    return (
        <Cell key={`cell-${index}`} fill={newFixKeycolor} />
      )
    }
}


var graphDataset =[];
function assessAllocation(entry, index){
  console.log(index,'mahesh234');
   if(entry.name==="Fixed Income"){
      graphDataset=entry.name;
      document.getElementById("hide_show_fixed").style.display = 'block';
      document.getElementById("hide_show_fixed_text").style.display = 'none';
   }else if(entry.name==="Equities"){
      graphDataset=entry.name;
      document.getElementById("hide_show_equity").style.display = 'block';
      document.getElementById("hide_show_equity_text").style.display = 'none';
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
            <div className="accordion__item__header"><NavLink to="/markets/Epic-FixedIncome" className="navlink a">Fixed Income</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                {/* <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">EPIC - NFA Global Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a">EPIC - Next Generation Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><a href=window.location.origin+"/login_user" className="navlink a">PCC - Next Generation Bond Fund<span className="fa fa-angle-right"></span></a></li>
                <li><a href=window.location.origin+"/login_user" className="navlink a">PCC - Renminbi Bond Fund<span className="fa fa-angle-right"></span></a></li> */}
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
                <li><NavLink to="/markets/EpicAsianCentricGlobalGrowth" className="navlink a">VT EPIC Asian Centric Global Growth Fund <span className="fa fa-angle-right"></span></NavLink></li>
				        {/* <li><NavLink to="/markets/EpicUKEquityMarketFund" className="navlink a">VT EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/AIMPortfolioDFM" className="navlink a">AIM Portfolio <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header active"><NavLink to="/markets/Epic-MultiAsset" className="navlink a active-dis">Multi Asset</NavLink></div>
            <div className="accordion__item__content block">
              <ul>
                <li><NavLink to="/markets/EpicipWealthFund" className="navlink a">EPIC Wealth Fund <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/EpicipDiversifiedIncomeFund" className="navlink a">VT EPIC Diversified Income <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicipMultiAssetFund" className="navlink a">VT EPIC Multi Asset Balanced <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetGrowthFund" className="navlink a">VT EPIC Multi Asset Growth <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a a-active-color">EPIC MPS Risk Managed Decumulation 5 <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/RiskTargetedDFM" className="navlink a">Risk Targeted Portfolios <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/RTM1" className="navlink a">EPIC MPS Risk Target Managed 1 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM2" className="navlink a">EPIC MPS Risk Target Managed 2 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM3" className="navlink a">EPIC MPS Risk Target Managed 3 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM5" className="navlink a">EPIC MPS Risk Target Managed 5 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM7" className="navlink a">EPIC MPS Risk Target Managed 7 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM8" className="navlink a">EPIC MPS Risk Target Managed 8 <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RTM9" className="navlink a">EPIC MPS Risk Target Managed 9 <span className="fa fa-angle-right"></span></NavLink></li>
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
          {/* <div className="accordion__item">
            <div className="accordion__item__header active"><NavLink to="/markets/EpicDFM" className="navlink a">Discretionary  <br />Fund Management</NavLink></div>
            <div className="accordion__item__content block">
              <ul>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a a-active-color">Risk Managed Decumulation Portfolios <span className="fa fa-angle-right"></span></NavLink></li>
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
                <div class="col">
                      <div class="Paragraph__ParagraphContainer-sc-2ra4j2-0 gnBxSc">
                          <div>
                              { LiteratureSummaryDataState.length>0 ? <div><h3><b>Product Overview</b></h3></div>  : ""}
                              { LiteratureSummaryDataState.length>0 ? LiteratureSummaryDataState.map(renderLiteratureDataPO) :""}
                          </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                    { PressCoverageState.length>0 ? <h3><b>Recent Updates</b></h3>  : ""}
                    </div>
                    { PressCoverageState.length>0 ? PressCoverageState.map(renderLiteratureDataRecent) :""}
                    <div class="col-md-12"></div>
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
                        {/* <div class="row ">
                            <div class="col-md-12">
                                <div class="col-md-12">
                                    <h3 class="Paragraph__Heading-sc-2ra4j2-2 ">Daily Prices</h3>
                                    <div class="DailyPricing__Boxes-sc-62f3gi-0 biswZj">
                                    <p>
                                    Daily Prices can be found at: <a href="http://www.valu-trac.com/administration-services/clients/garraway/multi-asset/" target="_blank">http://www.valu-trac.com/administration-services/clients/garraway/multi-asset/</a></p>
                                      </div>
                                </div>
                            </div>
                        </div> */}
                        <div class="row margin-1">
                            <div class="col">
                                <h3 class="Paragraph__Heading-sc-2ra4j2-2">Investment Team</h3>
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
        <div class="col-md-6 chart-block">
            <p class="lse_redirect">Asset Allocation (% NAV)</p>

        <PieChart width={330} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 30} } >
              <Pie
                data={graphData}
                cx={90}
                cy={200}
                innerRadius={45}
                outerRadius={90}
                // fill="#0c2340"
                paddingAngle={0}
                startAngle={90}
                endAngle={-330}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}

            >
                {graphData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS10[index % DONUTCOLORS10.length]} />
                ))}
                {graphData.map(assessAllocation)}
              </Pie>
              <Legend margin={ {top:-500,} } className="legend-text" formatter={renderColorfulLegendText} iconSize={10} width={300} height={50} layout='vertical'/>

              <Tooltip />
              {/* <Legend /> */}
            </PieChart>
          
          </div>

          <div class="col-md-6 VARmargin chart-block" id="hide_show_equity"  style={{display: 'none'}}> 
          <p class="lse_redirect">Equities Breakdown (% NAV)</p>
          <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
                
            <PieChart width={330} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 30} } >
              <Pie
                data={equititeState}
                cx={80}
                cy={200}
                innerRadius={45}
                outerRadius={90}
                // fill="#0c2340"
                paddingAngle={0}
                startAngle={90}
                endAngle={-330}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {/* {equititeState.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS10[index % DONUTCOLORS10.length]} />
                ))} */}
                {equititeState.map(equitichart)}
              </Pie>
              <Legend margin={ {top:-500,} } className="legend-text" formatter={renderColorfulLegendText} iconSize={10} width={300} height={50} layout='vertical' />

              <Tooltip />
              {/* <Legend /> */}
            </PieChart>  
          </div>

          <div class="col-md-6 VARmargin chart-block" id="hide_show_equity_text">
               <p class="exposore">The portfolio does not currently have any equity exposure</p>
          </div>
          
        </div>


        <div class="row chart-row">
          <div class="col-md-6 TOPmargin chart-block"  id="hide_show_fixed" style={{ display: 'none'}}> 
          <p class="lse_redirect">Fixed Income Breakdown (% NAV)</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
                
            <PieChart width={295} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 10} } >
              <Pie
                data={marketCapState}
                cx={90}
                cy={200}
                innerRadius={45}
                outerRadius={90}
                // fill="#0c2340"
                paddingAngle={0}
                startAngle={90}
                endAngle={-330}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabelFixed}

              >
                {/* {marketCapState.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS6[index % DONUTCOLORS6.length]} />
                ))} */}
                {marketCapState.map(marketCapchart)}
              </Pie>
              <Legend margin={ {top:-500,} } className="legend-text" formatter={renderColorfulLegendText} iconSize={10} width={300} height={50} layout='vertical' />

              <Tooltip />
              {/* <Legend /> */}
            </PieChart>
          
          
          </div>
          <div class="col-md-6 TOPmargin chart-block" id="hide_show_fixed_text">
               <p class="exposore">The portfolio does not currently have any fixed income exposure</p>
          </div>
          <div class="col-md-6 SECmargin chart-block"> 
            <p class="lse_redirect">Portfolio Drawdown</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
             <ResponsiveContainer width="100%" height="85%">
             <LineChart
                        width={700}
                        height={260}
                        data={InceptionArrayState2}
                        margin={{
                          top: 5,
                          right: 30,
                          left: -20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid horizontal="true" vertical="" strokeDasharray=" " />
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={(tick) => {
                         return `${tick}%`;
                         }}
                        />
                        {/* <Tooltip /> */}
                        {/* <Legend /> */}
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#1a2352"
                          dot={false}
                          activeDot={{ r: 4 }}
                        />

                      </LineChart>
                      
            </ResponsiveContainer>
              <p class="lse_redirect1"><span class="span_color"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>&nbsp;&nbsp; EPIC MPS – RMD 5</p>
                    <Tooltip />
            

          </div>
          <div class="col-md-6 VARmargin chart-block"> 
            <p class="lse_redirect">Top 10 Holdings (% NAV)</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
            <PieChart width={295} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 10} } >
              <Pie
                data={InceptionArrayState3}
                cx={90}
                cy={200}
                innerRadius={45}
                outerRadius={90}
                // fill="#0c2340"
                paddingAngle={0}
                startAngle={90}
                endAngle={-330}
                dataKey="value"
                labelLine={false}
                label={renderCustomized12LabelFixed}

              >
                {InceptionArrayState3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS8[index % DONUTCOLORS8.length]} />
                ))}
              </Pie>
              <Legend margin={ {top:-500,} } className="legend-text" formatter={renderColor12fulLegendText} iconSize={10} width={300} height={50} layout='vertical' />

              <Tooltip />
              {/* <Legend /> */}
            </PieChart>
            

          </div>

          <div class="col-md-12 "> 

     {/*       
<table class="AssetClass__Table-sc-1rmhbx4-3 iiGyjE ">
<tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
  <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
    <th colspan="1" className="align-left">Top 10 Holdings</th>
    <th colspan="1" className="align-right">Asset Class</th>
  </tr>
  {/* <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"> */}
  
   {/* {top10HoldingState.map(renderTop10Holding)} */}
    
    {/* <td>Microsoft</td>
    <td>7.46%</td> */}
  {/* </tr> */}
  {/* <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
    <td>PayPal Holdings</td>
    <td>5.54%</td>
  </tr> */}
  {/* <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
    <td>JD Sports Fashion</td><td>5.06%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Adobe</td><td>4.82%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Mastercard</td><td>4.65%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Amazon.com</td><td>4.64%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Visa</td><td>4.62%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Facebook</td><td>4.58%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Coloplast</td><td>3.50%</td></tr><tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ"><td>Veeva Systems</td><td>3.13%</td></tr> */}
    {/*</tbody></table> */}


</div>
          
        </div>
        <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK"><br/>
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_mps_rmd5.pdf"} target="_blank">here</a>
                      <br/></p>
                  </div>
      </div>
      
      <div class="tab-pane fade" id="one" role="tabpanel">
        <div class="row">
          
          <div class="col-sm-12">
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">

            <div class="row chart-row chart-row_dfm">
                    <div class="col-md-12 chart-block" >
                    <p class="lse_redirect">Cumulative Strategy performance</p>
                    <LineChart
                        width={700}
                        height={260}
                        data={InceptionArrayState}
                        margin={{
                          top: 5,
                          right: 30,
                          left: -20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid horizontal="true" vertical="" strokeDasharray=" " />
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={(tick) => {
                         return `${tick}%`;
                         }}
                        />
                        {/* <Tooltip /> */}
                        {/* <Legend /> */}
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#1a2352"
                          dot={false}
                          activeDot={{ r: 4 }}
                        />

                      </LineChart>
                      <p class="lse_redirect1"><span class="span_color"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>&nbsp;&nbsp; EPIC Model Portfolio Solutions – Risk Managed Decumulation 5</p>
                      </div>
                      
                    
                </div>
                {/* <div class="mb-2 row chart-row">
                    <div class="col-md-12table-margin_dfm">

                        <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_dfm">
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
                        </div> */}
                <div class="mb-2 row table-row">
                    <div class="col-md-12" >
                    <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_dfm_new">
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

                <div class="mb-2 row table-row">
                    <div class="col-md-12" >
                        <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_dfm_new">
                            <tbody>
                                <tr class="CumulativePerformance__TopRow-sc-51pab9-1 dwdfBh">
                                  
                                  {TwelveMperfAGBPState.map(renderCummulativePerformanceNames)}

                                </tr>
                                <tr class="CumulativePerformance__BottomRow-sc-51pab9-2 eeFpGK">
              
                                  {TwelveMperfAGBPState.map(renderCummulativePerformanceValue)}

                                </tr>
                                
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="row table-growth-row remove_margin">
                    <div class="pr-md-1 col-12 col-md-6 col table-div-margin remove_margin">
                        <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjEGR iiGyjEGR_dfm">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th colspan="1" className="align-left">Top Three Contributors</th>
                                    <th colspan="1" className="align-right">Asset Class</th>
                                </tr>
                                
                                {top3contriState.map(rendertop3contri)}
                            </tbody>
                        </table>
                    </div>
                    <div class="pl-md-1 col-12 col-md-6 col remove_margin">

                        <table class="table  AssetClass__Table-sc-1rmhbx4-3 iiGyjE iiGyjE_dfm">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th colspan="1" className="align-left">Bottom Three Contributors</th>
                                    <th colspan="1" className="align-right">Asset Class</th>
                                </tr>
                                {bot3contriarray.map(renderbot3contri)}
                                

                            </tbody>
                        </table>
                    </div>
                </div>





                <div class="mb-2 row monthly-row">
                    <div class="col" >
                    <div class="MonthlyPerformance__Wrapper-sc-1n33bhd-0 cHAvbZ cHAvbZ_dfm">
                        <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAWGR">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                            Monthly Performance – Class A Acc.</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayState.map(renderMonthNames)}


                                    </tr>
                                    
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAWGR table-striped">
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
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_mps_rmd5.pdf"} target="_blank" download>here</a> 
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
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK"><br/>
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_mps_rmd5.pdf"} target="_blank" download>here</a> 
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
                                    <th>Portfolio Information</th>
                                </tr>
                                {/* {Fundinfoarray.map(renderFundinfo)} */}
                                {CMSFundinfoarray.map(renderFundinfo)}

                                {/* <tr className="FundInformation__Row-sc-18irt95-2 fweCQL">
                                  <td className="align-left">Fund Launch Date</td>   
                                  <td className="align-right">20 September 2012</td>
                                </tr>
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
 
                                {/* <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Fund Launch Date</td>
                                    <td>20 September 2012</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Fund Size</td>
                                    <td>US$42.97m</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>1 Day VaR (99%, 3 Year)</td>
                                    <td>1.77%</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Margin to Equity</td>
                                    <td>12.68%</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Gross Notional Exposure</td>
                                    <td>435.85%</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Pricing Frequency</td>
                                    <td>Daily</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Domicile</td>
                                    <td>Ireland</td>
                                </tr>
                                <tr class="FundInformation__Row-sc-18irt95-2 fweCQL">
                                    <td>Exit Charge</td>
                                    <td>None</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <table class="table  Shares__Table-sc-1brks4f-0 hBbtmd">
                            <tbody class="Shares__Body-sc-1brks4f-1 hbWYKC">
                                <tr class="Shares__Row-sc-1brks4f-2 hzpAKA" >
                                

                                {ShareClassarray.map(renderShareClassNames)}

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
                                </tr>
                                {CMSshareinfoarray.map(renderCMSshareinfo)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_mps_rmd5.pdf"} target="_blank" download>here</a>
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
                          <a href={window.location.origin+"/sitepdfs/epic_mps_rmd5.pdf"} target="_blank" download>EPIC MPS – RMD 5 PDF
                            <br/>
                          </a>
                     </p>
				  </div>          
          

          { LiteratureDataState.length>0 ? <div class="col-md-12"><h3><b>Other Information</b></h3><br/></div>  : ""}
          { LiteratureDataState.length>0 ? LiteratureDataState.map(renderLiteratureData) :""}

          { PressCoverageState.length>0 ? <div class="col-md-12"><h3><b>Recent Updates</b></h3><br/></div>  : ""}
          { PressCoverageState.length>0 ? PressCoverageState.map(renderLiteratureData) :""}

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
 
export default EpicMultiAssetGrowthFunction;

