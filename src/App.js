import React, { Component } from'react';
import './App.css';
// import './custom.js';

// import "../components/EpicfinanceTremds.css"
// import{ ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
// import { PieChart, Pie, Cell} from 'recharts';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Header from './Header'; //Include Header;
import Footer from './Footer'; //Include Footer;
import AppHome from './App-home'; //Include Footer;
import Home from './components/Home';
import EpicfinanceTrends from './components/EpicfinanceTrends';
import EpicglobalEquity from './components/EpicglobalEquityfund';
import EpicorientalFocus from './components/Epicorientalfocusfund';
import EpicAsianCentricGlobal from './components/EpicAsianCentricGlobalGrowthFund';
import EpicUKEquityMarketComp from './components/EpicUKEquityMarketFund';
import EpicwealthFundComp from './components/EpicWealthFund';

import EpicDiversifiedIncomeComp from './components/EpicDiversifiedIncome';
import EpicMultiAssetBalancedComp from './components/EpicMultiAssetBalanced';
import EpicMultiAssetGrowthComp from './components/EpicMultiAssetGrowthFund';
import EpicNfaUcitsComponent from './components/EpicNfaUcits';
import EpicNextGenUcitsComponent from './components/EpicNextGenUcits';
import EpicInsightsComponent from './components/EpicNews'
import EpicInsightsDataComponent from './components/EpicNewsData'
import EpicDailyUpdateComponent from './components/EpicDailyUpdate'
import EpicDailyUpdateDataComponent from './components/EpicDailyUpdateData'
import EpicDFMComponent from './components/EpicDfm'
import NotFoundComponent from './components/NotFound'
import EpicPCCNextGenComponent from './components/EpicPCCNextGen';
import EpicRNBpccComponent from './components/EpicRNBpcc';

import EpicFixedIncomeComponent from './components/FixedIncomeLanding';

import FixedIncomeComponent from './components/FixedIncomeLogin';

import EpicEquitiesComponent from './components/EquitiesLanding';
import EpicManagedFuturesComponent from './components/ManagedFuturesLanding';
import EpicMultiAssetLandingComponent from './components/MultiAssetLanding';
import EpicInsightsLandingComponent from './components/InsightsLanding';



export default function App() {

  return (
  
  <BrowserRouter >
    <div className="maincontainer">
     <Header></Header>
    
    <Switch>

      <Route path="/markets"  component={Home} exact/>
      <Route path="/markets/EpicfinanceTrends" component={EpicfinanceTrends}/> 
      <Route path="/markets/EpicglobalEquity" component={EpicglobalEquity}/> 
      <Route path="/markets/EpicorientalFocus" component={EpicorientalFocus}/> 
      <Route path="/markets/EpicAsianCentricGlobalGrowth" component={EpicAsianCentricGlobal}/> 
      <Route path="/markets/EpicUKEquityMarketFund" component={EpicUKEquityMarketComp}/>       
      <Route path="/markets/EpicipWealthFund" component={EpicwealthFundComp}/> 
      <Route path="/markets/EpicipDiversifiedIncomeFund" component={EpicDiversifiedIncomeComp}/> 
      <Route path="/markets/EpicipMultiAssetFund" component={EpicMultiAssetBalancedComp}/> 
      <Route path="/markets/EpicipMultiAssetGrowthFund" component={EpicMultiAssetGrowthComp}/> 
      <Route path="/markets/EpiciNfaUcitsFundRoute" component={EpicNfaUcitsComponent}/>   
      <Route path="/markets/EpicNextGenUcitsFundRoute" component={EpicNextGenUcitsComponent}/> 
      <Route path="/markets/EpicDFM" component={EpicDFMComponent}/> 
      <Route path="/markets/EpicDailyUpdates" component={EpicDailyUpdateComponent}/>
      <Route path="/markets/DailyUpdatesData/:slug" component={EpicDailyUpdateDataComponent}/>
      <Route path="/markets/EpicInsights" component={EpicInsightsComponent}/> 
      <Route path="/markets/EpicInsightsData/:slug" component={EpicInsightsDataComponent}/> 
      <Route path="/public/markets/:slug" component={NotFoundComponent} />
      <Route path="/public/markets/EpicDFM" EpicDFMcomponent={EpicDFMComponent} />
      <Route path="/markets/EpicNextGenPCC" component={EpicPCCNextGenComponent}/> 
      <Route path="/markets/EpicRNBpcc" component={EpicRNBpccComponent}/> 
      <Route path="/markets/Epic-FixedIncome" component={EpicFixedIncomeComponent}/> 
      <Route path="/markets/FixedIncome" component={FixedIncomeComponent}/>  
      <Route path="/markets/Epic-ManagedFutures" component={EpicManagedFuturesComponent}/> 
      <Route path="/markets/Epic-Equitites" component={EpicEquitiesComponent}/> 
      <Route path="/markets/Epic-MultiAsset" component={EpicMultiAssetLandingComponent}/>
      <Route path="/markets/Epic-Insights" component={EpicInsightsLandingComponent}/> 
      
    </Switch> 
    
     <Footer></Footer>
     <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

     </div>
  </BrowserRouter>

  );
}







