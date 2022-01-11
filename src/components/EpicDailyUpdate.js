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
import { useParams } from 'react-router-dom';
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
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if(percent*100 > 5){
    return (
      
      <text x={x} y={ y} fill="white" className="text-size-a" textAnchor={x > cx ? 'start' : 'end'} >
      
        {`${ (percent * 100).toFixed(0)}%`}
      </text>
    )};
  };
  const DONUTCOLORS10 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#404040","#262626","#99103B","#B85876","#D296A9"];

  const DONUTCOLORS7 = [ "#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#666666","#99103B",": #B85876"];
  
  const DONUTCOLORS5 = ["#1A1549","#9DB1DB","#E6EEF6","#dcdcdc","#B85876"]

  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
  
    return <span style={{ color:"#1a1549" }}>{value}</span>;
  };

//   const DONUTCOLORS = [ "#b7c9d3","#7030a0","#00C49F", "#FFBB28", "#FF8042"];

const DailyUpdateFunction = () => {




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
const[monthlyPerformance2DArrayState,setmonthlyPerformance2DArrayState]= useState([]);
const[monthsArrayState,setmonthsArrayState]= useState([]);

const[InceptionArrayState,setInceptionArrayState]= useState([]);


const [AssetAllocation, setAssetAllocation] = useState([]);

const [top3response, settop3response] = useState([]);
const [bot3response, setbot3response] = useState([]);

const [InceptionData, setInceptionData] = useState([]);

const [HeadingState, setHeadingState] = useState([]);
const [ObjectiveState, setObjectiveState] = useState([]);
const [TeamState, setTeamState] = useState([]);
const[Summary,setSummary]= useState([]);

const[Literature,setLiterature]= useState([]);
const [LiteratureDataState, setLiteratureDataState] = useState([]);


const [News, setNews] = useState([]);



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
const [portfolioStatus, setportfolioStatus] = useState(false);
const [performanceStatus1, setperformanceStatus1] = useState(false);

const [graphData, setgraphData] = useState([]);

const [top10HoldingState, settop10HoldingState] = useState([]);

const [AssetAllocationState, setAssetAllocationState] = useState([]);
const [marketCapState, setmarketCapState]= useState([]);
const [equititeState, setequititeState]= useState([]);

const [DerVarState, setDerVarState]= useState([]);
const [PRTU, setPRTU] = useState([]);
const [arrPRTUState,setarrPRTUState]= useState([]);
const [PRTUDate,setPRTUDate]= useState([]);


const [NewsArrState,setNewsArrState]= useState([]);


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
  let LiteratureArr=[];
  
  var LiteratureKeys = ["LiteratureNameKey","FileName","LiteratureDate","LiteratureTitle"];
  
    for(let i=0 ; i< Literature.length ;i++){
      let obj={};
  
      // typeof(products[i][j])
      // heading = Summary[0].heading;
      // objective = Summary[0].objective_content;  
      // team = Summary[0].team_content ;
      //  console.log(Summary[0].heading);
      //  console.log("Summary[0][heading]");
       
      FundName = Literature[i].fund_name;
      if(FundName == "financial_trends"){
        console.log(FundName)
  
        FinancialTrendFund = FundName; 
        LiteratureTitle = Literature[i].title;
        LiteratureName = Literature[i].literature_name;
        FileName = Literature[i].file;
        LiteratureDate = Literature[i].date;
  
        obj[LiteratureKeys[0]] = LiteratureName;
        obj[LiteratureKeys[1]] = FileName;
        obj[LiteratureKeys[2]] = LiteratureDate;
        obj[LiteratureKeys[3]] = LiteratureTitle;
        
        LiteratureArr.push(obj);
      
      }
  
  
  
        // setTimeout()
        
  
        // console.log(graphData);
        // console.log("allKeys")
  
        
    }
    console.log(LiteratureArr)
    console.log("LiteratureArr")
  
    // setFundNameState(FinancialTrendFund);
    setLiteratureDataState(LiteratureArr);
    // setFileNameState(FileName);
    // setLiteratureDate(LiteratureDate);
  
  } 

const latestNews=()=>{
    
var news_date;
var news_heading;
var NewsArr = []
var id;
  var NewsKeys = ["heading","date","id"];

    for(let i=0 ; i< News.length ;i++){
        let obj={};
    
    
          news_heading = News[i].heading;
          news_date = News[i].date;
          id=News[i].id
    

          let calculatedDate = new Date(news_date).toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ new Date(news_date).toLocaleDateString("en-US", { month: 'short' })+ "/" + new Date(news_date).toLocaleDateString("en-US", { year: 'numeric' });


          obj[NewsKeys[0]] = news_heading;
          obj[NewsKeys[1]] = calculatedDate;
          obj[NewsKeys[2]] = id;

          NewsArr.push(obj);
          
    }
console.log(NewsArr)
console.log("NewsArr")

setNewsArrState(NewsArr)
}

const summaryButton=()=>{
  
  let arrPRTU=[]
  var heading;
  var objective;
  var team;

  for(let i=0 ; i< Summary.length ;i++){
    // typeof(products[i][j])
    heading = Summary[0].heading;
    objective = Summary[0].objective_content;  
    team = Summary[0].team_content ;
     console.log(Summary[0].heading);
     console.log("Summary[0][heading]");
     


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
  for(let i=5;i<=10;i++){

    let val = PRTU[i][2]

    console.log(val);
    console.log("-----------------------------------ValVAL");

    arrPRTU.push(val.toFixed(3))
  }

  console.log(arrPRTU)
  console.log("arrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTU")


  setarrPRTUState(arrPRTU)
  setPRTUDate(calculatedDate)
  setHeadingState(heading)
  setObjectiveState(objective)
  setTeamState(team)

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
var length = AssetAllocation.length-1;
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

  



  var keysMarketCap = ["name", "value"]
  var length = productsmarketCap.length -1;
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
  var length = productSectorBreakdown.length-1;
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productSectorBreakdown[i].length ;j++){

      if(!isNaN(productSectorBreakdown[i][j])){
      let val = productSectorBreakdown[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

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

  for(let i= 7; i<=21;i++ ){
    monthsArr.push(productsMonthlyPerf[3][i])
  }
  console.log("months")
  console.log(monthsArr)

  var arr2D=[];
  for(let i=4 ;i<=13;i++){
    let arr=[]
    for(let j=8 ;j<=21;j++){
     let val = productsMonthlyPerf[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")

      console.log(rounded)

     }
      arr.push(rounded+'%')
     
      
      // arr.push(productsMonthlyPerf[i][j])
    }
    arr2D.push(arr);
  }

for(let i =0;i<arr2D.length;i++){
for(let j =0 ; j< arr2D[0].length;j++){

  // console.log(arr2D[1][j])

  console.log(arr2D[i][j])
}
console.log("--------------------------------------------------------------------")
}

console.log(arr2D);
console.log("arr2D");







  var keysInceptionData = ["date", "value"]
  
  
  for(let i=1 ; i< InceptionData.length ;i++){
   // typeof(products[i][j])
  //  500
   let obj={};
   var date = InceptionData[i][3]
   var PerformanceValue = InceptionData[i][7]
 
  //  console.log(date + " "  + PerformanceValue)
 
  //  for(let j =0 ;j< InceptionData[i].length ;j++){
 
  // //    if(!isNaN(InceptionData[i][j])){
  // //    let val = InceptionData[i][j]*100;
     
  // //    // var numb= 212421434.533423131231;
  // //    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
 
  // //   //  console.log(rounded);
  // //    obj[keysInceptionData[j]] = rounded ;
 
  // //  }
 
  //    // var updatedVal =  parseFloat(val).toFixed(2);
  //    // console.log(updatedVal);
  //   //  else{
  //      obj[keysInceptionData[j]] = InceptionData[i][j] ;
  //   //  }     
 
  //    }
  obj[keysInceptionData[0]] = date;
  obj[keysInceptionData[1]] = PerformanceValue;
 
     InceptionDataArray.push(obj)
 
     date = null
     PerformanceValue = null
 
     //  AbcObject = obj;
     
     
 
 
    //  console.log("AbcObjectAbcObjectAbcObjectAbcObject")
   
     
    //  console.log(cummulatovePerfData);
    //  console.log("cummulatovePerfData");
 
               // console.log("allKeys")
   
 } 
 console.log(InceptionDataArray);
 setInceptionArrayState(InceptionDataArray)
 
 //  console.log(InceptionData);
 //  console.log("InceptionData");
 
 
 console.log("InceptionDataArray");
 




  var keysCummulativePer = ["name", "value"]
  
   for(let i=0 ; i< productscommulativePerformance.length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productscommulativePerformance[i].length ;j++){

      if(!isNaN(productscommulativePerformance[i][j])){
      let val = productscommulativePerformance[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded);
      obj[keysCummulativePer[j]] = rounded ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[keysCummulativePer[j]] = productscommulativePerformance[i][j] ;
      }     

      }
      CummulativeperformanceData.push(obj)
      

  } 





 var keys12monthsDis = ["name", "value"]
  


 for(let i=0 ; i< twelvemonPerfAGBP.length ;i++){
  // typeof(products[i][j])
  
  let obj={};
  for(let j =0 ;j< twelvemonPerfAGBP[i].length ;j++){

    if(!isNaN(twelvemonPerfAGBP[i][j])){
    let val = twelvemonPerfAGBP[i][j]*100;
    
    // var numb= 212421434.533423131231;
    var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

    console.log(rounded);
    obj[keys12monthsDis[j]] = rounded ;

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
  setbot3contriarray(Bot3contriData)
  setmonthlyPerformance2DArrayState(arr2D)
  setmonthsArrayState(monthsArr)
console.log(monthlyPerformance2DArrayState);
console.log("monthlyPerformance2DArrayState");





}


const informationButton=()=>{
  const shareClassData =[]
  const fundInfoData =[]
  const CMSfundInfoData =[]
  const CMSshareInfoData =[]

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
  var keysShareClass = ["name", "value"]
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
  
  for(let i=0 ; i< productsShareClass.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productsShareClass[i].length ;j++){

     if(!isNaN(productsShareClass[i][j])){
     let val = productsShareClass[i][j];
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keysShareClass[j]] = rounded ;
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

     console.log(rounded);
     obj[keysFundinfo[j]] = rounded ;
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

 setShareClassarray(shareClassData)
 setFundinfoarray(fundInfoData)

 setCMSFundinfoarray(CMSfundInfoData)
 setCMSshareinfoarray(CMSshareInfoData)









}




const [StateSession, setStateSession] = useState([]);
    const [SessionResponse, setSessionResponse] = useState([]);
  
    const SettingFunction=()=>{
  
      setStateSession(SessionResponse);
    
    }
$( document ).ready(function() {
  SettingFunction();

});

let AbcObject ={};

let count = 0;
async function fetchMyAPI(){
// const fetchMyAPI = useCallback(() => {
  // https://epicipprojects.com/getdata  
  // https://jsonplaceholder.typicode.com/posts
  // const url ='https://epicipprojects.com/garraway-financial-trends';
  // const url = 'https://epicipprojects.com/api/dailyupdate' 
  
  const Localurl = 'https://epicipprojects.com/dailyupdate' 
  const url = window.location.origin+'/dailyupdate' 

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
    setInceptionData(resp.inceptionperfdata)

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
    setproductRegionBreakdown(resp.DervsVaRBreakdown)


    setproductSectorBreakdown(resp.EquitiesBreakdown)
    console.log(resp.EquitiesBreakdown)
    console.log("resp.EquitiesBreakdown");

    setproductsFundinfo(resp.FundInfo)
    setproductsShareClass(resp.NAVperShare)
   
    setproductsMonthlyPerf(resp.MonthlyPerf)
    // setLoading(true)
    setPRTU(resp.prtu)
    setLiterature(resp.literature)
    setSummary(resp.summary)
    setCMSFundinfo(resp.fund_info)
    setCMSshareinfo(resp.shareinfo)


    setNews(resp)
console.log(resp);
console.log("News");

    // setLoading(true)
    setstatus(true)
    document.getElementById("summaryButton").click();

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
function renderNewsData(data, index){
    return(
  
            <div class="col-sm-12">
                <p className="news_download">
                    <NavLink to={"/markets/DailyUpdatesData/"+ data.id}>{data.date}<br/>
                        <span class="date">{data.heading}</span>
                    </NavLink>
                </p>
            </div>
    )
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
					      <p class="pdf_download"><a href={data.FileName} target="_blank">{data.LiteratureTitle}<br/><span class="date">{data.LiteratureDate}</span></a></p>
				      </div>
  )
}
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


function Accordion_clicked(){
    console.log("hi")
    // $(".accordion__item__header ").addClass("active")
}

// let count_click = 0;
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

$(".accordion__item__header.active").on("click", function(event){    
console.log("acitve inside")
})




// $(document).ready(function() {
//     $(".accordion__item__header").click(function () {
//         if($(this).hasClass('active'))
//         {
//             $(".tab.active").removeClass("active");
//             $(this).removeClass("active");        
//         }else{
//             $(this).addClass("active");        

//         }
//     });
// });




// productscommulativePerformance
function renderCummulativePerformanceNames(cummulatove, index) {
  return(
      
        <th>{cummulatove.name}</th>
  
  )
}
function renderCummulativePerformanceValue(cummulatove, index) {
  return(


        <td>{cummulatove.value}</td>
  )
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

function renderFundinfo(fundinfoparam, index){
  // alert(bot3contriparam.name);

  return(
    <tr className="FundInformation__Row-sc-18irt95-2 fweCQL" key={index}>
      
      <td className="align-left">{fundinfoparam.name}</td>
      <td className="align-right">{fundinfoparam.value}</td>
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
)}
}
function renderShareClassValue(shareClassValue, index){
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
            <div className="accordion__item__header active"><NavLink to="/markets/Epic-Insights" className="navlink active-dis">EPIC Insights</NavLink></div>
            <div className="accordion__item__content block">
              <ul>
                <li><NavLink to="/markets/EpicDailyUpdates" className="navlink a a-active-color">Daily Updates <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/EpicInsights" className="navlink a">News  <span className="fa fa-angle-right"></span></NavLink></li> */}
                
              </ul>
            </div>
          </div>

        </div>

      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 offset-md-1">
    
    
      <ul class="nav nav-tabs news-tab" role="tablist">
        <li className="nav-item nav-item-tabs latest-news"> <a className="nav-link active latest-news" data-toggle="tab" id="summaryButton" onClick={latestNews} href="#nine" role="tab">Daily Updates</a> </li>
      </ul>
    
    
    <div class="Section__SectionContent-sc-1iot0f7-2 ">
    {/* <h4 class="Section__SectionHeader-sc-1iot0f7-3 Xonlk">
        Latest News
    </h4> */}
    {/* <p class="Section__SectionSubheading-sc-1iot0f7-4 ktJBWY"></p> */}
    {NewsArrState.map(renderNewsData)}
    
    
    


        {/* <div class="PaginationButtons__Wrapper-sc-1murby2-0 frVXsi"><a rel="next" href="/news/2">← Older Articles</a></div> */}
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
 
export default DailyUpdateFunction;
 

