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
    Line,
    LineChart,
    
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
import $ from 'jquery';
// import { Accordion } from "react-bootstrap";
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;
// var responseData;
const colors = ["#0c2340", "#0095c8", "#b7c9d3", "#7030a0"]
// const graphData = []
// const graphDataVAR = []
// const graphDataSectorPer =[]
// const cummulatovePerfData =[]
// const cummulatovePerfDatadummy =[]

// const twelvemonPerfDiscreteAPI = []
// const top3contriarray =[]
// const bot3contriarray = []
// const Fundinfoarray = []
// const ShareClassarray = []

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
  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul>
        {
          payload.map((entry, index) => (
            
          
            <li key={`item-${index}`}>{entry.value}</li>
          ))
        }
      </ul>
    );
  }




  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
if(value > 5){
  return (
    
    <text x={x} y={ y} fill="white" className="text-size-a" textAnchor={x > cx ? 'start' : 'end'} >
    
      {`${ (value).toFixed(2)}%`}
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

const renderColorfulLegendText = (value, entry) => {
  const { color } = entry;
  if(entry.payload.value != undefined){
    return <span className="legend-span">{value+' '+(entry.payload.payload.value).toFixed(2)+'%'}</span>;
  }else{
    return <span className="legend-span">{value}</span>;
  }
};

const renderColor12fulLegendText = (value, entry ) => {
  const { color } = entry;
  console.log(value,entry.payload.value);

  return <span className="legend-span">{value+' '+(entry.payload.value)+'%'}</span>;
};
  // const DONUTCOLORS = [ "#b7c9d3","#7030a0","#00C49F", "#FFBB28", "#FF8042"];
  const DONUTCOLORS10 = ['#1A1549','#9DB1DB','#D0DEF5','#99103B','#B85876','#D296A9','#dcdcdc','#666666','#404040','#262626'];

  const DONUTCOLORS7 = ['#1A1549','#9DB1DB','#D0DEF5','#99103B','#B85876','#D296A9','#dcdcdc','#666666','#404040','#262626'];
  
  const DONUTCOLORS5 = ['#1A1549','#9DB1DB','#D0DEF5','#99103B','#B85876','#D296A9','#dcdcdc','#666666','#404040','#262626']

  const DONUTCOLORS8 = ['#1A1549','#99103b']


const EpicOrientalFocus = () => {




    const [products, setProducts] = useState([]);
    const [productsVAR, setProductsVAR] = useState([]);
    const [productsSectorPer, setProductsSectorPer] = useState([]);
    const [productscommulativePerformance, setproductscommulativePerformance] = useState([]);
    // const [productscommulativePerformanceA, setproductscommulativePerformanceA] = useState([]);
    
    const [products12monthsPerformance, setproducts12monthsPerformance] = useState([]);
    const [productstop3contr, setproductstop3contr] = useState([]);
    const [productsbot3contr, setproductsbot3contr] = useState([]);
    const [productsCommentary, setproductsCommentary] = useState([]);
    const [productsFundinfo, setproductsFundinfo] = useState([]);
    const [CMSFundinfo, setCMSFundinfo] = useState([]);
const [CMSshareinfo, setCMSshareinfo] = useState([]);
    const [productsShareClass, setproductsShareClass] = useState([]);
    
const [SessionResponse, setSessionResponse] = useState([]);

    const [productsMonthlyPerf, setproductsMonthlyPerf] = useState([]);
    const [portfolioStatus, setportfolioStatus] = useState(false);
    const [performanceStatus1, setperformanceStatus1] = useState(false);
    
    const [graphData, setgraphData] = useState([]);
    const [RegiongraphData, setRegiongraphData] = useState([]);
    const [MarketgraphData, setMarketgraphData] = useState([]);
    const [InceptionData, setInceptionData] = useState([]);
    const [InceptionArrayState3, setInceptionArrayState3] = useState([]);
    
    
    
    
    
    const[monthlyPerformance2DArrayState,setmonthlyPerformance2DArrayState]= useState([]);
    const[monthsArrayState,setmonthsArrayState]= useState([]);
    const [top10HoldingState, settop10HoldingState] = useState([]);
    const [marketCapState, setmarketCapState]= useState([]);
    const [sectorBreakdownState, setsectorBreakdownState]= useState([]);
    const [productsSecBreak, setproductsSecBreak]= useState([]);
    const [InceptionArrayState, setInceptionArrayState]= useState([]);
    
    const [productsRegBreak, setproductsRegBreak]= useState([]);
    const [productsMarketgraph, setproductsMarketgraph]= useState([]);
    
    const [RespPrtu, setRespPrtu] = useState([]);

    const [PRTU, setPRTU] = useState([]);
    const[arrPRTUState,setarrPRTUState]= useState([]);
    const[PRTUDate,setPRTUDate]= useState([]);
    
    const[DailyDate,setDailyDate]= useState([]);
    const [StateSession, setStateSession] = useState([]);


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
    
    // const [setproductsSecBreak, setproductsSecBreak]= useState([]);
    
    
    
    
    
    const [graphDataVAR, setgraphDataVAR] = useState([]);
    const[graphDataSectorPer,setgraphDataSectorPer]= useState([]);
    const[cummulatovePerfData,setcummulatovePerfData]= useState([]);
    const[TwelveMperfAGBPState,setTwelveMperfAGBPState]= useState([]);
    
    const[twelvemonPerfDiscreteAPI,settwelvemonPerfDiscreteAPI]= useState([]);
    const[top3contriarray,settop3contriarray]= useState([]);
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
      if(FundName == "oriental_focus_fund"){
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
        // FinancialTrendFund = FundName; 
        // LiteratureTitle = Literature[i].title;
        // LiteratureName = Literature[i].literature_name;
        // FileName = Literature[i].file;
        // LiteratureDate = Literature[i].date;
  
  
        // OtherInfoObj[LiteratureKeys[0]] = LiteratureName;
        // OtherInfoObj[LiteratureKeys[1]] = FileName;
        // OtherInfoObj[LiteratureKeys[2]] = LiteratureDate;
        // OtherInfoObj[LiteratureKeys[3]] = LiteratureTitle;
  
  
        
        // LiteratureArr.push(OtherInfoObj);
      
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
    if(Summary[i].heading=="oriental_focus_fund"){
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

  var allKeys = ["name","date","currency","Price","ABC","XYZ","SOP","Eight","Nine","symbol","class"];
  
// var length =  products.length-1;
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
      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{
        obj[allKeys[j]] = PRTU[i][j] ;
      }     

      }
      console.log(obj);
      console.log("obj------------------------");
      if(obj.currency == "GBP"){
        obj[allKeys[9]] = "£";
      }else if(obj.currency == "EUR"){
        
        obj[allKeys[9]] = "€";

      }else if(obj.currency == "USD"){
        obj[allKeys[9]] = "$";

      }else if(obj.currency == "CHF"){
        obj[allKeys[9]] = "CHF";

      }
      let RegexHigh = /-/i;//Regex for 'dash'
      let regex_fund = /[a-zA-Z]+/i;//Regex for 'fund'
      if(regex_fund.test(obj.name) && !RegexHigh.test(obj.name)){
      
        var classShares = obj.name.split("Fund");
        console.log(classShares[1]);
        // var classCurrency = classShares[1].split("(")
        // console.log(classCurrency)
        // console.log("classCurrency");
        obj[allKeys[10]] = classShares[1];
        // break;
        // obj[allKeys[8]] = classCurrency[1];
    }else if(RegexHigh.test(obj.name) && !regex_fund.test(obj.name)){

      var classShares1 = obj.name.split("-");
      console.log(classShares1[1]);
      // var classCurrency = classShares[1].split("(")
      // console.log(classCurrency)
      // console.log("classCurrency");
      obj[allKeys[10]] = classShares1[1];
    }
    else if(regex_fund.test(obj.name) && RegexHigh.test(obj.name)){

      var classShares2 = obj.name.split("Fund");
      console.log(classShares2[1]);
      obj[allKeys[10]] = classShares2[1];

    }

      arrPRTU.push(obj)

}







// For loop for calculation date
let calculation = RespPrtu[1][2]

let daily_cal = PRTU[1][1]

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

  //   arrPRTU.push(val.toFixed(3))
  // }

console.log(arrPRTU)
console.log("arrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTUarrPRTU")



setarrPRTUState(arrPRTU)
setPRTUDate(calculatedDate)
setDailyDate(DailycalculatedDate)
setStateSession(SessionResponse);

setHeadingState(heading)
setObjectiveState(objective)
setTeamState(team)
if (!arrPRTU.length > 0) {

      
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
    
      // const graphDataResponse = []
      const graphDataResponse1 = []
      const graphDataResponse2 = []      
      const graphDataResponse3 = []
      const top10HoldingData =[]
      const marketCapData =[]
      const sectorBreakdownData =[]
      const InceptionDataArray3 = [] 

      var allKeys = ["name","current month","pevious month"];
 
  var keysSec = ["name", "value"]
  var length = productsSecBreak.length;

   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productsSecBreak[i].length ;j++){

      if(!isNaN(productsSecBreak[i][j])){
      let val = productsSecBreak[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded1);
      obj[keysSec[j]] = rounded1 ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{

        obj[keysSec[j]] = productsSecBreak[i][j] ;
      }     

      } 
      if(obj.value !==0){
        graphDataResponse1.push(obj)
      }
        
      
      // console.log(graphData);
      // console.log("allKeys")
      
  }

// Regional Breakdown Graph
  var keysReg = ["name", "value","addon"]
  var length = productsRegBreak.length;
   for(let i=1 ; i< length ;i++){

    let obj={};
    for(let j =0 ;j< productsRegBreak[i].length ;j++){
  
        if(!isNaN(productsRegBreak[i][j])){
          let val = productsRegBreak[i][j]*100;
      
            var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

                console.log(rounded1);
                obj[keysReg[j]] = rounded1 ;
          }
        else{
          obj[keysReg[j]] = productsRegBreak[i][j] ;
        }     

    } 
    console.log(obj)
    console.log("obj----------")
    if(obj.value !==0){
      graphDataResponse2.push(obj)
    }
      
  }
  
  var keysMarktGraph = ["name", "value","addon"]
    var length = productsMarketgraph.length;
   for(let i=1 ; i< length ;i++){
    // typeof(products[i][j])
    
    let obj={};
    for(let j =0 ;j< productsMarketgraph[i].length ;j++){

      if(!isNaN(productsMarketgraph[i][j])){
      let val = productsMarketgraph[i][j]*100;
      
      // var numb= 212421434.533423131231;
      var rounded1 = Math.round((val + Number.EPSILON) * 100) / 100;

      console.log(rounded1);
      obj[keysMarktGraph[j]] = rounded1 ;

    }

      // var updatedVal =  parseFloat(val).toFixed(2);
      // console.log(updatedVal);
      else{

        obj[keysMarktGraph[j]] = productsMarketgraph[i][j] ;
      }     

      } 
      if(obj.value !==0){

      graphDataResponse3.push(obj)
      // console.log(graphData);
      // console.log("allKeys")
      }      
  }
  
  var keystop10Hold = ["no","name", "value"]
  
  for(let i=1 ; i< productstop10Holding.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productstop10Holding[i].length ;j++){

     if(!isNaN(productstop10Holding[i][j])){
     let val = productstop10Holding[i][j]*100;
     
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(rounded);
     obj[keystop10Hold[j]] = rounded+'%' ;
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


  
  // setgraphData(graphDataResponse)
  setgraphData(graphDataResponse1)
  setInceptionArrayState3(InceptionDataArray3)



// for( let k=0; k<graphDataResponse2.length; k++){
//   // console.log(graphDataResponse2[k].value)
  
//   if(graphDataResponse2[k].value > 0 ){ 

    setRegiongraphData(graphDataResponse2)
//   }

// }
  setMarketgraphData(graphDataResponse3)

  settop10HoldingState(top10HoldingData)

  console.log(graphDataResponse1);
  console.log("graphDataResponse1");
  
  console.log(RegiongraphData);
  console.log("graphDataResponse2");
  
  setportfolioStatus(true)





}




const performanceButton=()=>{


  const CummulativeperformanceData = []
  const Bot3contriData = []
  const Top3contriData = []
  const TwelvemonPerfData = []
  const InceptionDataArray =[]

  var monthsArr=[];





  console.log(productsMonthlyPerf)
  console.log("productsMonthlyPerf")

  for(let i= 7; i<=21;i++ ){
    monthsArr.push(productsMonthlyPerf[3][i])
  }
  console.log("months")
  console.log(monthsArr)
console.log(productsMonthlyPerf);
console.log("productsMonthlyPerf");

  var arr2D=[];
  for(let i=4 ;i<=23;i++){
    let arr=[]
    for(let j=8 ;j<=21;j++){
      if(productsMonthlyPerf[i][j] != ""){
     let val = productsMonthlyPerf[i][j]*100;
     
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;
     rounded =parseFloat(rounded).toFixed(2);
     console.log(rounded);
     if(isNaN(rounded)){
      rounded = 0;
      console.log("rounded--------------------------rounded")
      console.log(rounded)

     }
      arr.push(rounded+'%')
    }else{
      if(productsMonthlyPerf[i][j] === 0){
        let val1 = productsMonthlyPerf[i][j]*100;
         var rounded1 = Math.round((val1 + Number.EPSILON) * 100) / 100;
         rounded1 = parseFloat(rounded1).toFixed(2);
          if(rounded1 ==0.00){
            rounded1 = 0;
            arr.push(rounded1+'%')
          }
        }else{
            rounded = ''; 
            arr.push(rounded)
        }
      // rounded = ''; 
      // arr.push(rounded)
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
  console.log(arr2D[i][j])
}
console.log("--------------------------------------------------------------------")
}

console.log(arr2D);
console.log("arr2D");





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

      else{
        obj[keysCummulativePer[j]] = productscommulativePerformance[i][j] ;
      }     

      }
      CummulativeperformanceData.push(obj)
     
    
  } 

  var keysInceptionData = ["date", "value"]
  
  
  for(let i=1 ; i<InceptionData.length ;i++){
   // typeof(products[i][j])
  //  500
   
   let obj={};
   var date = InceptionData[i][3]
   var PerformanceValue = InceptionData[i][7]
   var AlphaDate = new Date(date).toLocaleDateString("en-US", { month: 'short' })+ "-" + new Date(date).toLocaleDateString("en-US", { year: 'numeric' })
   console.log("AlphaDate")
   console.log(AlphaDate)
  
  obj[keysInceptionData[0]] = AlphaDate;
  obj[keysInceptionData[1]] = PerformanceValue*100;

     InceptionDataArray.push(obj)

     date = null
     PerformanceValue = null
   
 } 
 console.log(InceptionDataArray);
 setInceptionArrayState(InceptionDataArray)
 

 console.log("InceptionDataArray");
  
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
         obj[keysbot3contr[j]] = rounded ;
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

  setcummulatovePerfData(CummulativeperformanceData)
  settwelvemonPerfDiscreteAPI(TwelvemonPerfData)
  settop3contriarray(Top3contriData)
  setbot3contriarray(Bot3contriData)
  setmonthlyPerformance2DArrayState(arr2D)
  setmonthsArrayState(monthsArr)
  setTwelveMperfAGBPState(TwelvemonPerfData)





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

  var keysShareClass = ["name", "value","currency"]
  
  for(let i=0 ; i< productsShareClass.length ;i++){
   // typeof(products[i][j])
   
   let obj={};
   for(let j =0 ;j< productsShareClass[i].length ;j++){

     if(!isNaN(productsShareClass[i][j])){
     let val = productsShareClass[i][j];
    //  console.Console
     // var numb= 212421434.533423131231;
     var rounded = Math.round((val + Number.EPSILON) * 100) / 100;

     console.log(productsShareClass[i][j]);
     console.log("productsShareClass[i][j]");
    //  rounded.toString().replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,') 
     obj[keysShareClass[j]] =rounded.toFixed(4)
     console.log(obj);
     console.log("obj");
   }

     // var updatedVal =  parseFloat(val).toFixed(2);
     // console.log(updatedVal);
     else{
       obj[keysShareClass[j]] = productsShareClass[i][j] ;
     }     
     if(obj.name == "A GBP" || obj.name=="B GBP" || obj.name=="C GBP"){
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
}


let AbcObject ={};

let count = 0;
async function fetchMyAPI(){
// const fetchMyAPI = useCallback(() => {
  // https://epicipprojects.com/getdata  
  // https://jsonplaceholder.typicode.com/posts
  // const url ='https://epicipprojects.com/garraway-financial-trends';
  // const url = 'https://epicipprojects.com/garraway-global-equity-fund' 
  // const url = 'https://epicipprojects.com/api/garraway-oriental-focus-fund' 
  const Localurl = 'https://www.epicip.com/epic-oriental-focus-fund' 
   const url = window.location.origin+'/epic-oriental-focus-fund' 
  //const url = 'http://127.0.0.1:8000/epic-oriental-focus-fund'

  
  fetch(window.location.origin+'/session_data').then(resp => resp.json()).then(resp =>  {
  console.log(resp);
  console.log("resp");

  setSessionResponse(resp);


})
  fetch(url).then(resp=> resp.json())
   .then (resp => {
   console.log(count)
   console.log("count")


    setproductsCommentary(resp.content);
    setproductsSecBreak(resp.SectorBreakdown);
    setInceptionData(resp.Inceptionperfdata);
    setproductsRegBreak(resp.RegionBreakdown)
    setproductsMarketgraph(resp.MarketCapBreakdown)
    setproductstop10Holding(resp.TopHoldings)
    setproductsFundinfo(resp.FundInfo)
    setproductsShareClass(resp.NAVperShare)
    setproductsMonthlyPerf(resp.Monthlyperf)
    setproductscommulativePerformance(resp.CumulativePerf)
    setproducts12monthsPerformance(resp.twelvemPerfDiscrete)
    setRespPrtu(resp.prtu)
    
    setPRTU(resp.daily_price)
    setSummary(resp.summary)
    setLiterature(resp.literature)
    setCMSFundinfo(resp.fund_info)
    setCMSshareinfo(resp.shareinfo)


    // setLoading(true)
    setstatus(true)
    document.getElementById("summaryButton").click();



    })
    
   .catch(e=>{
     console.log(e);
   })

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
        <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">{DailyPrice.symbol}{DailyPrice.Price}</div>
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
					      <p class="pdf_download"><a href={window.location.origin+"/storage/literature-file/"+data.FileName} download target="_blank">{data.LiteratureTitle}<br/><span class="date">{data.LiteratureDate}</span></a></p>
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
    <td className="align-left" style={{width: "75%"}}>{sector.name}</td>
    <td className="align-right" style={{width: "25%"}}>{sector.value}</td>

  </tr>
        
  
  )
}










// productscommulativePerformance

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
      <td>{top3contriparam.name}</td>
      <td>{top3contriparam.value}</td>
    </tr>
  )
}
function renderbot3contri(bot3contriparam, index){
  // alert(bot3contriparam.name);

  return(
    <tr className="AssetClass__Row-sc-1rmhbx4-5 eVXooJ" key={index}>
      
      <td>{bot3contriparam.name}</td>
      <td>{bot3contriparam.value}</td>
    </tr>
  )
}
function renderCMSshareinfo(shareinfoparam, index){
  // alert(bot3contriparam.name);
  if(index ==0 || index ==1 || index ==2 ||index ==3 || index ==4){
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
    )}else{
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
    <tr className="FundInformation__Row-sc-18irt95-2 fweCQL" key={index}>
      
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
)}
}
function renderShareClassValue(shareClassValue, index){
  if(index==0){

  return(
    <td className="align-left">{shareClassValue.currency}&nbsp;{shareClassValue.value}</td>
)}else{
  return(
    <td className="align-center">{shareClassValue.currency}&nbsp;{shareClassValue.value}</td>
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
                {/* <li><NavLink to="/markets/EpiciNfaUcitsFundRoute" className="navlink a">EPIC - NFA Global Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicNextGenUcitsFundRoute" className="navlink a">EPIC - Next Generation Bond Fund UI (UCITS)<span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><a href=window.location.origin+"/login_user" className="navlink a">PCC - Next Generation Bond Fund<span className="fa fa-angle-right"></span></a></li>
                <li><a href=window.location.origin+"/login_user" className="navlink a">PCC - Renminbi Bond Fund<span className="fa fa-angle-right"></span></a></li> */}
                                { StateSession !== 0 ?
                <li><NavLink to="/markets/EpicNextGenPCC" className="navlink a " >EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                   : 
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Next Generation Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li> 
                 }
                {/* { StateSession !== 0  ?
                <li><NavLink to="/markets/EpicRNBpcc" className="navlink a " >EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></NavLink></li>
                :
                <li><a href={window.location.origin+"/login_user"} className="navlink a">EPIC - Renminbi Bond Fund (PCC)<span className="fa fa-angle-right"></span></a></li>
                } */}
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header "><NavLink to="/markets/Epic-ManagedFutures" className="navlink a ">Managed Futures </NavLink></div>
            <div className="accordion__item__content ">
              <ul>
                <li><NavLink to="/markets/EpicfinanceTrends" className="navlink a">EPIC Financial Trends <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header active"><NavLink to="/markets/Epic-Equitites" className="navlink a active-dis">Equities</NavLink></div>
            <div className="accordion__item__content block">
              <ul>
                <li><NavLink to="/markets/EpicglobalEquity" className="navlink a">EPIC Global Equity Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicorientalFocus" className="navlink a a-active-color">EPIC Oriental Focus Fund <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicAsianCentricGlobalGrowth" className="navlink a">VT EPIC Asian Centric Global Growth Fund <span className="fa fa-angle-right"></span></NavLink></li>
				        {/* <li><NavLink to="/markets/EpicUKEquityMarketFund" className="navlink a">VT EPIC UK Equity Market Fund <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/AIMPortfolioDFM" className="navlink a">AIM Portfolio <span className="fa fa-angle-right"></span></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="accordion__item">
            <div className="accordion__item__header"><NavLink to="/markets/Epic-MultiAsset" className="navlink a ">Multi Asset</NavLink></div>
            <div className="accordion__item__content">
              <ul>
                <li><NavLink to="/markets/EpicipWealthFund" className="navlink a">EPIC Wealth Fund <span className="fa fa-angle-right"></span></NavLink></li>
                {/* <li><NavLink to="/markets/EpicipDiversifiedIncomeFund" className="navlink a">VT EPIC Diversified Income <span className="fa fa-angle-right"></span></NavLink></li> */}
                <li><NavLink to="/markets/EpicipMultiAssetFund" className="navlink a">VT EPIC Multi Asset Balanced <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/EpicipMultiAssetGrowthFund" className="navlink a">VT EPIC Multi Asset Growth <span className="fa fa-angle-right"></span></NavLink></li>
                <li><NavLink to="/markets/RiskEpicDFM" className="navlink a ">EPIC MPS Risk Managed Decumulation 5 <span className="fa fa-angle-right"></span></NavLink></li>
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
      <li class="nav-item nav-item-tabs"> <a class="nav-link active" data-toggle="tab" href="#nine" id="summaryButton" onClick={summaryButton} role="tab">Summary</a> </li>
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
                                    <h3 class="Paragraph__Heading-sc-2ra4j2-2 ">Daily Prices</h3>
                                    <div class="DailyPricing__Boxes-sc-62f3gi-0 biswZj">
                                    {arrPRTUState.map(renderDailyPrices)}

                                        {/* <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">${arrPRTUState[0]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A(USD) Shares</div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">£{arrPRTUState[1]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(GBP Hedged) Shares</span></div>
                                        </div>
                                        <div class="DailyPricing__DailyPriceCard-sc-62f3gi-1 coIgZR">
                                            <div class="DailyPricing__DailyPrice-sc-62f3gi-2 gsZde">€{arrPRTUState[2]}</div>
                                            <div class="DailyPricing__DailyPriceName-sc-62f3gi-3 iLShEo">Class A<br/><span className="daily-span">(EUR Hedged) Shares</span></div>
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
                                <h3 class="Paragraph__Heading-sc-2ra4j2-2 ">Investment Team</h3>
                                {/* <h3 class="Paragraph__SubHeading-sc-2ra4j2-3 dtCYUm">Darran Goodwin - Fund Manager</h3>
                                <p class="Paragraph__Body-sc-2ra4j2-4 gIzxtZ">Darran manages Garraway Financial Trends, a systematic trend following managed futures fund trading global financial markets. Darran launched his first successful systematic trend following strategy in 2008 with a UCITS version following in 2012. Darran was Managing Director at Bear Stearns International and Vice President at investment bank Fox-Pitt Kelton. He started his career in investment banking in 1997 as a Sales Trader at Butterfield Securities.</p> */}
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
          <p class="lse_redirect">Sector Breakdown (% NAV)</p>
            
                
          <PieChart width={295} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 10} } >
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
              </Pie>
              <Tooltip />
              {/* <Legend /> */}
              
              <Legend formatter={renderColorfulLegendText} className="legend-text"  iconSize={10} width={300} height={50} layout='vertical' />
            </PieChart>
                      </div>

          <div class="col-md-6 VARmargin chart-block" > 
            <p class="lse_redirect">Regional Breakdown (% NAV)</p>            

            <PieChart width={295} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 10} } >
              <Pie
                data={RegiongraphData}
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
                {RegiongraphData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS7[index % DONUTCOLORS7.length]} />
                ))}
                
              </Pie>
              <Tooltip />
              {/* <Legend /> */}
              <Legend margin={ {top:-500,} } className="legend-text" formatter={renderColorfulLegendText}  iconSize={10} width={300} height={50} layout='vertical' />

            </PieChart>
                 </div>
          
        </div>
        <div class="row chart-row">
          <div class="col-md-6 SECmargin chart-block"> 

          <p class="lse_redirect">Market Cap Breakdown (% NAV)</p>
            <p class="lse_redirect"><a className="display-none" target="_blank" href="transaction-own-share.php">Transaction In Own Share</a></p>
            
                
            <PieChart width={295} height={750} margin ={ {top: -60, right: 50, bottom: 5, left: 10} } >
              <Pie
                data={MarketgraphData}
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
                {MarketgraphData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={DONUTCOLORS5[index % DONUTCOLORS5.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend margin={ {top:-500,} } formatter={renderColorfulLegendText}  className="legend-text" iconSize={10} width={300} height={50} layout='vertical' />

              {/* <Legend /> */}
            </PieChart>          
          </div>
          {/* <div class="col-md-6"> 
          <table class="AssetClass__Table-sc-1rmhbx4-3 iiGyjE iiGyjE_newest">
            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
              <tr class="AssetClass__Row-sc-1rmhbx4-5 fQKjoJ">
                <th className="align-left" style={{width: "75%"}}>Top 10 Holdings</th>
                <th className="align-right" style={{width: "25%"}}>% NAV</th>
              </tr>
              {top10HoldingState.map(renderSectorState)}
            </tbody></table>
          
          </div> */}

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
          
        </div>
        <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}. 
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_oriental_focus_fund.pdf"} target="_blank" download>here </a> 
                     <br/></p>
                  </div>
      </div>
      <div class="tab-pane fade" id="one" role="tabpanel">
        <div class="row">
          
          <div class="col-sm-12">
            <div role="tabpanel" aria-hidden="false" class="fade tab-pane active show">
            <div class="row chart-row">
                    <div class="col-md-12 chart-block" >
                    <p class="lse_redirect">Cumulative Performance Since Inception</p>
                    
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
                        <XAxis dataKey="date"  />
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
                      <p class="lse_redirect1"><span class="span_color"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>&nbsp;&nbsp; EPIC Oriental Focus Fund Class B USD</p>
                      </div>


                      <div class="row chart-row table-margin_new_once">
                    <div class="col-md-12 table-margin table-margin_new">
                      <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_newest_one">
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
                    </div>
                <div class="row">
                    <div class="col-md-12" >
                    <table class=" table  CumulativePerformance__Table-sc-51pab9-0 hRUkzz hRUkzz_newest_one">
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
                
                {/* <div class="mb-2 row">
                    <div class="pr-md-1 col-12 col-md-6 col">
                        <table class="table table-bordered AssetClass__Table-sc-1rmhbx4-3 iiGyjE">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th colspan="1">Top Three Contributors</th>
                                    <th colspan="1">Gross Attribution</th>
                                </tr>
                                
                                {top3contriarray.map(rendertop3contri)}

                                
                            </tbody>
                        </table>
                    </div>
                    <div class="pl-md-1 col-12 col-md-6 col">

                        <table class="table table-bordered AssetClass__Table-sc-1rmhbx4-3 iiGyjE">
                            <tbody class="AssetClass__Body-sc-1rmhbx4-4 cyhKrw">
                                <tr class="AssetClass__Row-sc-1rmhbx4-5 eVXooJ">
                                    <th colspan="1">Bottom Three Contributors</th>
                                    <th colspan="1">Gross Attribution</th>
                                </tr>
                                {bot3contriarray.map(renderbot3contri)}

                            </tbody>
                        </table>
                    </div>
                </div> */}

                <div class="mb-2 row">
                    <div class="col" >
                    <div class="MonthlyPerformance__Wrapper-sc-1n33bhd-0 cHAvbZ">
                        <table class=" MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW hRUkzz_newest_one">
                                <tbody class="table MonthlyPerformance__Body-sc-1n33bhd-3 eLhmcV">
                                    <tr>
                                        <th colspan="99" class="MonthlyPerformance__Title-sc-1n33bhd-1 ekfIgT">
                                            Monthly Performance – Class B USD</th>
                                    </tr>
                                    <tr color="#d8e2e8" class="MonthlyPerformance__Row-sc-1n33bhd-4 elqUjA">

                                        {monthsArrayState.map(renderMonthNames)}


                                    </tr>
                                    
                                </tbody>
                            </table>

                            <table class="table MonthlyPerformance__Table-sc-1n33bhd-2 bDbyAW table-striped hRUkzz_newest_one">
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
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_oriental_focus_fund.pdf"} target="_blank" download>here </a> 
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
                     All information also available to download <a href={window.location.origin+"/sitepdfs/epic_oriental_focus_fund.pdf"} target="_blank" download>here</a> 
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
                <div class="mb-2 row">
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

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="DailyPricing__SourceWrapper-sc-62f3gi-4 hfRiYK">
                     <p className="mt-2 i">Monthly data as at: {PRTUDate}.
                      All information also available to download <a href={window.location.origin+"/sitepdfs/epic_oriental_focus_fund.pdf"} target="_blank" download>here </a> 
                     <br/></p>
                  </div>
            </div>
            
          </div>
          
        </div>
      </div>
      <div class="tab-pane fade" id="four" role="tabpanel">
        <div class="row">
          <div class="col-sm-12">

            <div className="row ">

         
          { KeyInveInfoState.length>0 ? <div class="col-md-12"><h3><b>Key Investor Information</b></h3><br/></div>  : ""}
          { KeyInveInfoState.length>0 ? KeyInveInfoState.map(renderLiteratureData) :""}

          <div class="col-sm-12">
            <h4>Fact Sheet</h4>

					      <p class="pdf_download">
                  <a href={window.location.origin+"/sitepdfs/epic_oriental_focus_fund.pdf"} target="_blank" download>Oriental Focus Fund PDF<br/>
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


            </div>

            
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
    </div>
  </div>
</section>

:

<div className="center"><ReactBootstrap.Spinner animation="border"/></div> 
}
</Fragment>
    );
}
 
export default EpicOrientalFocus;


