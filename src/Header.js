import React, {useState, useEffect, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

// import market from 'images/epic-logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import market from '../images/background/markets.jpg';

{/* <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/style.css" />;
<link rel="stylesheet" href="%PUBLIC_URL%/assets/css/bootstrap-4.4.1.css" />;
<link rel="stylesheet" href="%PUBLIC_URL%/assets/css/font-awesome.min.css" /> */}

// import 'public/assets/css/bootstrap-4.4.1.css';
// import 'public/assets/css/font-awesome.min.css';
// import 'public/assets/css/responsive.css';
<head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
<script src="https://cdn.anychart.com/releases/v8/js/anychart-base.min.js"></script>

</head>

// class Header extends React.Component
const Header = () => {

  const [HeaderResponse, setHeaderResponse] = useState([]);
  const [HeaderName,setHeaderName]= useState([]);
  const [ServiceResponse, setServiceResponse] = useState([]);
  const [ServiceName,setServiceName]= useState([]);
  const [status, setstatus] = useState(false);
  const [Header1, setHeader1] = useState([]);
  const [Header2, setHeader2] = useState([]);
  const [Header3, setHeader3] = useState([]);
  const [Header4, setHeader4] = useState([]);
  const [Header5, setHeader5] = useState([]);
  const [Header6, setHeader6] = useState([]);
  
  const [HeaderStatus1, setHeaderStatus1] = useState([]);
  const [HeaderStatus2, setHeaderStatus2] = useState([]);
  const [HeaderStatus3, setHeaderStatus3] = useState([]);
  const [HeaderStatus4, setHeaderStatus4] = useState([]);
  const [HeaderStatus5, setHeaderStatus5] = useState([]);
  const [HeaderStatus6, setHeaderStatus6] = useState([]);
  
  
  const [HeaderURL1, setHeaderURL1] = useState([]);
  const [HeaderURL2, setHeaderURL2] = useState([]);
  const [HeaderURL3, setHeaderURL3] = useState([]);
  const [HeaderURL4, setHeaderURL4] = useState([]);
  const [HeaderURL5, setHeaderURL5] = useState([]);
  const [HeaderURL6, setHeaderURL6] = useState([]);
  
  const [ArrServiceResponsedd, setArrServiceResponsedd] = useState([]);

  const [HeaderService1a, setHeaderService1a] = useState([]);
  const [HeaderService1b, setHeaderService1b] = useState([]);
  const [HeaderService1c, setHeaderService1c] = useState([]);
  const [HeaderService1d, setHeaderService1d] = useState([]);
  const [HeaderService1e, setHeaderService1e] = useState([]);

 
  const [HeaderServiceURL1a, setHeaderServiceURL1a] = useState([]);
  const [HeaderServiceURL1b, setHeaderServiceURL1b] = useState([]);
  const [HeaderServiceURL1c, setHeaderServiceURL1c] = useState([]);
  const [HeaderServiceURL1d, setHeaderServiceURL1d] = useState([]);
  const [HeaderServiceURL1e, setHeaderServiceURL1e] = useState([]);
 
  
  const [HeaderService2a, setHeaderService2a] = useState([]);
  const [HeaderService2b, setHeaderService2b] = useState([]);
  const [HeaderService2c, setHeaderService2c] = useState([]);
  const [HeaderService2d, setHeaderService2d] = useState([]);

  const [HeaderServiceURL2a, setHeaderServiceURL2a] = useState([]);
  const [HeaderServiceURL2b, setHeaderServiceURL2b] = useState([]);
  const [HeaderServiceURL2c, setHeaderServiceURL2c] = useState([]);
  const [HeaderServiceURL2d, setHeaderServiceURL2d] = useState([]);
  const [DomainUrl, setDomainUrl] = useState([]);

  const [HeaderService3a, setHeaderService3a] = useState([]);
  const [HeaderService3b, setHeaderService3b] = useState([]);
  const [HeaderService3c, setHeaderService3c] = useState([]);
  const [HeaderService3d, setHeaderService3d] = useState([]);
  const [HeaderService3e, setHeaderService3e] = useState([]);

  const [HeaderServiceURL3a, setHeaderServiceURL3a] = useState([]);
  const [HeaderServiceURL3b, setHeaderServiceURL3b] = useState([]);
  const [HeaderServiceURL3c, setHeaderServiceURL3c] = useState([]);
  const [HeaderServiceURL3d, setHeaderServiceURL3d] = useState([]);
  const [HeaderServiceURL3e, setHeaderServiceURL3e] = useState([]);
  
  const [HeaderService4a, setHeaderService4a] = useState([]);
  const [HeaderService4b, setHeaderService4b] = useState([]);

  const [HeaderServiceURL4a, setHeaderServiceURL4a] = useState([]);
  const [HeaderServiceURL4b, setHeaderServiceURL4b] = useState([]);
  
  const [HeaderService5a, setHeaderService5a] = useState([]);
  const [HeaderService5b, setHeaderService5b] = useState([]);
  const [HeaderService5c, setHeaderService5c] = useState([]);
  const [HeaderService5d, setHeaderService5d] = useState([]);
  const [HeaderService5e, setHeaderService5e] = useState([]); 

  const [HeaderServiceURL5a, setHeaderServiceURL5a] = useState([]);
  const [HeaderServiceURL5b, setHeaderServiceURL5b] = useState([]);
  const [HeaderServiceURL5c, setHeaderServiceURL5c] = useState([]);
  const [HeaderServiceURL5d, setHeaderServiceURL5d] = useState([]);
  const [HeaderServiceURL5e, setHeaderServiceURL5e] = useState([]);

  const [HeaderService6a, setHeaderService6a] = useState([]); 
  const [HeaderService6b, setHeaderService6b] = useState([]); 

  const [HeaderServiceURL6a, setHeaderServiceURL6a] = useState([]);
  const [HeaderServiceURL6b, setHeaderServiceURL6b] = useState([]);

  const [HeaderService6c, setHeaderService6c] = useState([]); 
  const [HeaderServiceURL6c, setHeaderServiceURL6c] = useState([]); 

  const [HeaderService6d, setHeaderService6d] = useState([]); 
  const [HeaderServiceURL6d, setHeaderServiceURL6d] = useState([]); 

  const [HeaderService6e, setHeaderService6e] = useState([]); 
  const [HeaderServiceURL6e, setHeaderServiceURL6e] = useState([]);

  const [HeaderService6f, setHeaderService6f] = useState([]); 
  const [HeaderServiceURL6f, setHeaderServiceURL6f] = useState([]);

  const [arrHeaderState,setarrHeaderState]= useState([]);

  const ArrHeaderResponse =[]
  const Example=()=>{
  }
  
  const HeaderFunction=()=>{
    const ArrServiceResponse =[]
      
    var allKeys = ["Serviceid","Servicename","Headername","ServiceUrl"];
    for(let j=0 ; j< ServiceName.length ;j++){
    let obj={};
        for(let i=0 ; i< HeaderName.length ;i++){
    
          if(HeaderName[i].id == ServiceName[j].division_id){

          obj[allKeys[0]] = ServiceName[j].division_id ;
          obj[allKeys[1]] = ServiceName[j].name ;
          obj[allKeys[2]] = HeaderName[i].name ;
          obj[allKeys[3]] = ServiceName[j].url ;

          }
        }
          ArrServiceResponse.push(obj)    
    }

    var HeaderKeys = ["HeaderId","HeaderName","HeaderUrl","headerImage"];

    for(let i=0 ; i< HeaderName.length ;i++){
      let obj={};
  
      obj[HeaderKeys[0]] = HeaderName[i].id ;
      obj[HeaderKeys[1]] = HeaderName[i].name ;
      obj[HeaderKeys[2]] = HeaderName[i].url ;
      obj[HeaderKeys[3]] = HeaderName[i].image ;
  
      ArrHeaderResponse.push(obj)    
    
    }
    
    Example();
}

  const ArrServiceResponse = [];
  const SettingFunction=()=>{

    setHeaderName(HeaderResponse);
    setServiceName(ServiceResponse);

    var allKeys = ["Serviceid","Servicename","Headername","ServiceUrl"];
    var meru1 = [];
    var meru2 = [];
    var meru3 = [];
    var meru4 = [];
    var meru6 = [];
    for(let j=0 ; j< ServiceName.length ;j++){
      let meru11 = [];
      if(ServiceName[j].division_id == 1 && ServiceName[j].status == "1"){
        meru11['name'] = ServiceName[j].name;
        meru11['url'] = ServiceName[j].url;
        meru1.push(meru11) 
      }

      if(meru1.length > 0){
        for(let k=0 ; k< meru1.length ;k++){
          if(meru1[k].name =="Private Equity"){
            var HeaderService1a = meru1[k].name;
            var HeaderServiceURL1a = meru1[k].url
          }

          if(meru1[k].name =="Special Purpose Acquisition Companies"){
            var HeaderService1c = meru1[k].name;
            var HeaderServiceURL1c = meru1[k].url
          }

          if(meru1[k].name ="Early Stage"){
            var HeaderService1d = meru1[k].name;
            var HeaderServiceURL1d = meru1[k].url
          }
        }
      }


      let meru22 = [];
      if(ServiceName[j].division_id == 2 && ServiceName[j].status == "1"){
        meru22['name'] = ServiceName[j].name;
        meru22['url'] = ServiceName[j].url;
        meru2.push(meru22) 
      }

      if(meru2.length > 0){
        for(let k=0 ; k< meru2.length ;k++){
          if(meru2[k].name =="Corporate Services"){
            var HeaderService2a = meru2[k].name;
            var HeaderServiceURL2a = meru2[k].url
          }

          if(meru2[k].name =="Fund Services"){
            var HeaderService2b = meru2[k].name;
            var HeaderServiceURL2b = meru2[k].url
          }

          if(meru2[k].name ="Legal and Public Notices"){
            var HeaderService2c = meru2[k].name;
            var HeaderServiceURL2c = meru2[k].url
          }
        }
      }

      let meru33 = [];
      if(ServiceName[j].division_id == 3 && ServiceName[j].status == "1"){
        meru33['name'] = ServiceName[j].name;
        meru33['url'] = ServiceName[j].url;
        meru3.push(meru33) 
      }

      if(meru3.length > 0){
        for(let k=0 ; k< meru3.length ;k++){
          if(meru3[k].name =="Fixed Income"){
            var HeaderService3a = meru3[k].name;
            var HeaderServiceURL3a = meru3[k].url
          }

          if(meru3[k].name =="Managed Futures"){
            var HeaderService3b = meru3[k].name;
            var HeaderServiceURL3b = meru3[k].url
          }

          if(meru3[k].name =="Equities"){
            var HeaderService3c = meru3[k].name;
            var HeaderServiceURL3c = meru3[k].url
          }

          if(meru3[k].name =="Multi Asset"){
            var HeaderService3d = meru3[k].name;
            var HeaderServiceURL3d = meru3[k].url
          }

          if(meru3[k].name =="Fund of Hedge Funds"){
            var HeaderService3e = meru3[k].name;
            var HeaderServiceURL3e = meru3[k].url
          }
        }
      }

      let meru44 = [];
      if(ServiceName[j].division_id == 4 && ServiceName[j].status == "1"){
        meru44['name'] = ServiceName[j].name;
        meru44['url'] = ServiceName[j].url;
        meru4.push(meru44) 
      }

      if(meru4.length > 0){
        for(let k=0 ; k< meru4.length ;k++){
          if(meru4[k].name =="Corporate Finance"){
            var HeaderService4a = meru4[k].name;
            var HeaderServiceURL4a = meru4[k].url
          }

          if(meru4[k].name =="General Partners"){
            var HeaderService4b = meru4[k].name;
            var HeaderServiceURL4b = meru4[k].url
          }
        }
      }

      let meru66 = [];
      if(ServiceName[j].division_id == 6 && ServiceName[j].status == "1"){
        meru66['name'] = ServiceName[j].name;
        meru66['url'] = ServiceName[j].url;
        meru6.push(meru66) 
      }
    }
    if(meru6.length > 0){
      for(let k=0 ; k< meru6.length ;k++){
        if(meru6[k].name =="About Us" ){
           HeaderService6a = meru6[k].name;
          HeaderServiceURL6a = meru6[k].url
        }
        if(meru6[k].name =="Our Values"){
          var HeaderService6b = meru6[k].name;
          var HeaderServiceURL6b = meru6[k].url
        }
        if(meru6[k].name =="Our Investment Principles"){
          var HeaderService6c = meru6[k].name;
          var HeaderServiceURL6c = meru6[k].url
        }

        if(meru6[k].name =="Our People"){
          var HeaderService6d = meru6[k].name;
          var HeaderServiceURL6d = meru6[k].url
        }

        if(meru6[k].name =="Reading Room"){
          var HeaderService6e = meru6[k].name;
          var HeaderServiceURL6e = meru6[k].url
        }

        if(meru6[k].name =="Community"){
          var HeaderService6f = meru6[k].name;
          var HeaderServiceURL6f = meru6[k].url
        }
      }
    }
    for(let j=0 ; j< ServiceName.length ;j++){
    let obj={};
        for(let i=0 ; i< HeaderName.length ;i++){
    
          if(HeaderName[i].id == ServiceName[j].division_id){

        //   obj[allKeys[0]] = ServiceName[j].division_id ;
        //   obj[allKeys[1]] = ServiceName[j].name ;
        //   obj[allKeys[2]] = HeaderName[i].name ;
        //   obj[allKeys[3]] = ServiceName[j].url ;

        //   var HeaderService1a = ServiceName[5].name;
        //   var HeaderServiceURL1a = ServiceName[5].url
        //  // var HeaderService1b = ServiceName[8].name;
        //  // var HeaderServiceURL1b = ServiceName[8].url 
        //   var HeaderService1c = ServiceName[7].name;
        //   var HeaderServiceURL1c = ServiceName[7].url
         
        //   var HeaderService1d = ServiceName[8].name;
        //   var HeaderServiceURL1d = ServiceName[8].url
         
        //   var HeaderService2a = ServiceName[9].name;
        //   var HeaderServiceURL2a = ServiceName[9].url

        //   var HeaderService2b = ServiceName[25].name;
        //   var HeaderServiceURL2b = ServiceName[25].url
         
        //   var HeaderService2c = ServiceName[26].name;
        //   var HeaderServiceURL2c = ServiceName[26].url

        //   var HeaderService2d = ServiceName[24].name;
        //   var HeaderServiceURL2d = ServiceName[24].url
         
        //   var HeaderService3a = ServiceName[0].name;
        //   var HeaderServiceURL3a = ServiceName[0].url
        
        //   var HeaderService3b = ServiceName[1].name;
        //   var HeaderServiceURL3b = ServiceName[1].url
        
        //   var HeaderService3c = ServiceName[2].name;
        //   var HeaderServiceURL3c = ServiceName[2].url

        //   var HeaderService3d = ServiceName[3].name;
        //   var HeaderServiceURL3d = ServiceName[3].url

        //   // var HeaderService3e = ServiceName[4].name;
        //   // var HeaderServiceURL3e = ServiceName[4].url

        //   var HeaderService4a = ServiceName[9].name;
        //   var HeaderServiceURL4a = ServiceName[9].url

        //   var HeaderService4b = ServiceName[11].name;
        //   var HeaderServiceURL4b = ServiceName[11].url

        //   var HeaderService5a = ServiceName[15].name;
        //   var HeaderServiceURL5a = ServiceName[15].url
          
        //   var HeaderService5b = ServiceName[16].name;
        //   var HeaderServiceURL5b = ServiceName[16].url
          
        //   var HeaderService5c = ServiceName[17].name;
        //   var HeaderServiceURL5c = ServiceName[17].url
          
        //   var HeaderService5d = ServiceName[18].name;
        //   var HeaderServiceURL5d = ServiceName[18].url
          
        //   var HeaderService5e = ServiceName[19].name;
        //   var HeaderServiceURL5e = ServiceName[19].url

        //   var HeaderService6a = ServiceName[17].name;
        //   var HeaderServiceURL6a = ServiceName[17].url

        //   var HeaderService6b = ServiceName[18].name;
        //   var HeaderServiceURL6b = ServiceName[18].url

        //   var HeaderService6c = ServiceName[19].name;
        //   var HeaderServiceURL6c = ServiceName[19].url

        //   var HeaderService6d = ServiceName[20].name;
        //   var HeaderServiceURL6d = ServiceName[20].url

        //   var HeaderService6e = ServiceName[21].name;
        //   var HeaderServiceURL6e = ServiceName[21].url

        //   var HeaderService6f = ServiceName[22].name;
        //   var HeaderServiceURL6f = ServiceName[22].url

        //   var HeaderService3e = ServiceName[23].name;
        //   var HeaderServiceURL3e = ServiceName[23].url
          
        }
      }
    ArrServiceResponse.push(obj)    
 
  }

  setHeaderService1a(HeaderService1a)
  setHeaderServiceURL1a(HeaderServiceURL1a)

  setHeaderService1b(HeaderService1b)
  setHeaderServiceURL1b(HeaderServiceURL1b)
  
  setHeaderService1c(HeaderService1c)
  setHeaderServiceURL1c(HeaderServiceURL1c)
  
  setHeaderService1d(HeaderService1d)
  setHeaderServiceURL1d(HeaderServiceURL1d)

  setHeaderService1e(HeaderService1e)
  setHeaderServiceURL1e(HeaderServiceURL1e)
 
  setHeaderService2a(HeaderService2a)
  setHeaderServiceURL2a(HeaderServiceURL2a)

  setHeaderService2b(HeaderService2b)
  setHeaderServiceURL2b(HeaderServiceURL2b)

  setHeaderService2c(HeaderService2c)
  setHeaderServiceURL2c(HeaderServiceURL2c)

  setHeaderService2d(HeaderService2d)
  setHeaderServiceURL2d(HeaderServiceURL2d)

  setHeaderService3a(HeaderService3a);    
  setHeaderServiceURL3a(HeaderServiceURL3a)

  setHeaderService3b(HeaderService3b);
  setHeaderServiceURL3b(HeaderServiceURL3b)
  
  setHeaderService3c(HeaderService3c);    
  setHeaderServiceURL3c(HeaderServiceURL3c)
 
  setHeaderService3d(HeaderService3d); 
  setHeaderServiceURL3d(HeaderServiceURL3d)

  setHeaderService3e(HeaderService3e);    
  setHeaderServiceURL3e(HeaderServiceURL3e)

  setHeaderService4a(HeaderService4a);
  setHeaderServiceURL4a(HeaderServiceURL4a)

  setHeaderService4b(HeaderService4b);
  setHeaderServiceURL4b(HeaderServiceURL4b)

  setHeaderService5a(HeaderService5a);
  setHeaderServiceURL5a(HeaderServiceURL5a)

  setHeaderService5b(HeaderService5b);
  setHeaderServiceURL5b(HeaderServiceURL5b)

  setHeaderService5c(HeaderService5c);    
  setHeaderServiceURL5c(HeaderServiceURL5c)
  
  setHeaderService5d(HeaderService5d);    
  setHeaderServiceURL5d(HeaderServiceURL5d)
  
  setHeaderService5e(HeaderService5e);
  setHeaderServiceURL5e(HeaderServiceURL5e)
    
  setHeaderService6a(HeaderService6a);
  setHeaderServiceURL6a(HeaderServiceURL6a)

  setHeaderService6b(HeaderService6b);
  setHeaderServiceURL6b(HeaderServiceURL6b)

  setHeaderService6c(HeaderService6c);
  setHeaderServiceURL6c(HeaderServiceURL6c)

  setHeaderService6d(HeaderService6d);
  setHeaderServiceURL6d(HeaderServiceURL6d)

  setHeaderService6e(HeaderService6e);
  setHeaderServiceURL6e(HeaderServiceURL6e)

  setHeaderService6f(HeaderService6f);
  setHeaderServiceURL6f(HeaderServiceURL6f)


  setDomainUrl(window.location.origin);
 
    var HeaderKeys = ["HeaderId","HeaderName","HeaderUrl","headerImage","Status"];
    var HeaderMenu5 = "";
    var HeaderURL5 = "";
    var HeaderStatus5 = "";
  for(let i=0 ; i< HeaderName.length ;i++){
    
      let obj={};
      obj[HeaderKeys[0]] = HeaderName[i].id ;
      obj[HeaderKeys[1]] = HeaderName[i].name ;
      obj[HeaderKeys[2]] = HeaderName[i].url ;
      obj[HeaderKeys[3]] = HeaderName[i].image ;
      obj[HeaderKeys[4]] = HeaderName[i].status ;

      ArrHeaderResponse.push(obj)    
    
      var HeaderMenu1 = HeaderName[0].name;
      var HeaderURL1 = HeaderName[0].url;
      var HeaderStatus1 = HeaderName[0].status;
      
      var HeaderMenu2 = HeaderName[1].name;
      var HeaderURL2 = HeaderName[1].url;
      var HeaderStatus2 = HeaderName[1].status;

      var HeaderMenu3 = HeaderName[2].name;
      var HeaderURL3 = HeaderName[2].url;
      var HeaderStatus3 = HeaderName[2].status;

      var HeaderMenu4 = HeaderName[3].name;
      var HeaderURL4 = HeaderName[3].url;
      var HeaderStatus4 = HeaderName[3].status;

      // var HeaderMenu5 = HeaderName[4].name;
      // var HeaderURL5 = HeaderName[4].url;
      // var HeaderStatus5 = HeaderName[4].status;

      var HeaderMenu6 = HeaderName[4].name;
      var HeaderURL6 = HeaderName[4].url;
      var HeaderStatus6 = HeaderName[4].status;
        
    }
    
    setHeader1(HeaderMenu1);
    setHeaderURL1(HeaderURL1);
    setHeaderStatus1(HeaderStatus1);

    setHeader2(HeaderMenu2);  
    setHeaderURL2(HeaderURL2);
    setHeaderStatus2(HeaderStatus2);

    setHeader3(HeaderMenu3);  
    setHeaderURL3(HeaderURL3);
    setHeaderStatus3(HeaderStatus3);

    setHeader4(HeaderMenu4);    
    setHeaderURL4(HeaderURL4);
    setHeaderStatus4(HeaderStatus4);

    setHeader5(HeaderMenu5);    
    setHeaderURL5(HeaderURL5);
    setHeaderStatus5(HeaderStatus5);
    
    setHeader6(HeaderMenu6);    
    setHeaderURL6(HeaderURL6);
    setHeaderStatus6(HeaderStatus6);

  }
  
  const clicked=()=>{
    
    // console.log("clicked")
    document.getElementById("summaryButton").click()

  }
  const ABC=()=>{
    setarrHeaderState(ArrHeaderResponse)
  }
  
  var count=0;

  $(document).ready(function() {
    $("#capital").ready(function() {

      $(this).click();

    });

  $('.btn-setting')[0].click();

  if ($(".accordion__item__header").length > 0) {

      var active = "active";
      var activedis = "active-dis";
      $(".accordion__item__header").on("click", function (event) {
        event.stopImmediatePropagation();
        // console.log("clicked")
        $(this).toggleClass(active);
        $(this).find(".navlink").toggleClass(activedis);
        
      $(this).next("div").slideToggle(200);
      });
      }

  });  
  async function fetchMyServiceAPI(){

    const url =window.location.origin+'/service_api';
    //const url ='https://www.epicip.com/service_api';
    const localurl ="https://epicipprojects.com/service_api";
     //const url ='https://demo.epicip.com/service_api';
     fetch(url).then(resp=> resp.json())
     .then (resp => {
      setServiceResponse(resp)
    })
     .catch(e=>{
       console.log(e);
     })
      console.log("allKeys")

  };
  async function fetchMyAPI(){

      const url =window.location.origin+'/division_api';
    // const url ="https://epicipprojects.com/epicip/division_api";
      //const url ="https://www.epicip.com/division_api";
      const localurl ="https://epicipprojects.com/division_api";
      //const url ='https://demo.epicip.com/division_api';
      
       fetch(url).then(resp=> resp.json())
       .then (resp => {      
        setHeaderResponse(resp)
      })  
       .catch(e=>{
         console.log(e);
       })
    };
  function renderHeader(Header, sindex){
        
    }
  function navItemClick(){
    
    }
  useEffect(()=>{

      fetchMyAPI();
      fetchMyServiceAPI();



    },[])

    return (
<Fragment>


<header className="inner-page"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL
          + "/images/background/markets.jpg"})`,}} >
{/* styles={{ backgroundImage:`url(${market})` }} */}
{/* style="background:url('images/background/markets.jpg')" */}
  <div className="container">
    <div className="row">
      <div className="col-sm-12"> 
        <a href={window.location.origin+"/contact"} className="btn-contact btn-primary float-right">Contact</a>
        <a onClick={SettingFunction} className="btn-setting btn-primary float-right hidden">Setting</a> 

      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container"> <a className="navbar-brand" href={window.location.origin+"/"}><img src="images/epic-logo.svg" width="150px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
      <div className="collapse navbar-collapse navbar-header" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        {/* {arrPRTUState.map(renderHeader)} */}
        {/* {setarrHeaderState(ArrHeaderResponse)} */}
        {/* {arrHeaderState.map(renderHeader)} */}
        {/* {ArrServiceResponse.map(renderHeader)} */}
        {/* <li className="nav-item nav-item-tabs latest-news"> <a className="nav-link active latest-news" data-toggle="tab" class="summaryButton" id="summaryButton" onload={ABC} onClick={ABC} href="#nine" role="tab">Daily Updates</a> </li> */}
        { HeaderStatus1 ==1 ? 
          <li className="nav-item dropdown" > 
          
            <a className="nav-link dropdown-toggle" href={window.location.origin+"/"+HeaderURL1} id="capital" role="button" aria-haspopup="true" aria-expanded="false" onClick={navItemClick}>{Header1}</a>
            <div className="dropdown-menu" aria-labelledby="capital"> 
            { HeaderService1a != "" ?
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL1a}>{HeaderService1a}</a>
            : "" }

              {/* <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL1b}>{HeaderService1b}</a>  */}
              { HeaderService1c != "" ?
               <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL1c}>{HeaderService1c}</a> 
              : "" }
              { HeaderService1d != "" ?
              <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL1d}>{HeaderService1d}</a>
              : "" }
              <a className="dropdown-item" href={window.location.origin+"/sectors"}>Sectors</a>

              {/* <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL1e}>{HeaderService1e}</a> */}
              
              {/* <a className="dropdown-item" href="buy-shares.php">Buy Shares</a>  */}
            </div>
          </li> : "" }
           {/* onMouseLeave={() => setShowDropdown(false)} onMouseOver={() => setShowDropdown(true)} */}
              {/* <Dropdown className="nav-item dropdown"  >
              
                <Dropdown.Toggle  className="nav-link dropdown-toggle dropdown-button" id="dropdown-basic" >
                Capital
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu" show={showDropdown}>
                  <Dropdown.Item className="dropdown-item"><NavLink to="#/action-1">Private Equity</NavLink></Dropdown.Item>
                  <Dropdown.Item className="dropdown-item"><NavLink to="#/action-2">Credit</NavLink></Dropdown.Item>
                  <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Early Stage</NavLink></Dropdown.Item>
                  <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Special Purpose Acquisition Companies</NavLink></Dropdown.Item>
                  <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Buy Shares</NavLink></Dropdown.Item>

                </Dropdown.Menu>
              
              </Dropdown>

              <Dropdown className="nav-item dropdown"   >
              
              <Dropdown.Toggle  className="nav-link dropdown-toggle dropdown-button" id="dropdown-basic">
              Administration
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu" show={showDropdown1} >
                <Dropdown.Item className="dropdown-item" ><NavLink to="#/action-1">Corporate Services</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item" ><NavLink to="#/action-2">Fund Services</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item" ><NavLink to="#/action-3">Legal and Public Notice Advertising</NavLink></Dropdown.Item>


              </Dropdown.Menu>
            
            </Dropdown>
            <Dropdown className="nav-item dropdown" onMouseLeave={() => setShowDropdown2(false)} onMouseOver={() => setShowDropdown2(true)}>
              
              <Dropdown.Toggle  className="nav-link dropdown-toggle dropdown-button" id="dropdown-basic">
              Markets
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu" show={showDropdown2}>

                <Dropdown.Item className="dropdown-item"><NavLink className="nav-color"  to="/market/EpicfinanceTrends">Managed Futures</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink className="nav-color" to="/market/EpicglobalEquity">Equities</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink className="nav-color" to="/market/EpicipWealthFund">Multi Asset</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink className="nav-color" to="/market/EpiciNfaUcitsFundRoute">Discretionary Fund Management</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"> <NavLink className="nav-color" to="/market/EpicInsights">Insights</NavLink></Dropdown.Item>


              </Dropdown.Menu>
            
            </Dropdown>

            <Dropdown className="nav-item dropdown" >
              
              <Dropdown.Toggle  className="nav-link dropdown-toggle dropdown-button" id="dropdown-basic">
              Advisory
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu" show={showDropdown3}>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-1">Corporate Finance</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-2">Managed Futures</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Equities</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Multi Asset</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Discretionary Fund Management</NavLink></Dropdown.Item>



              </Dropdown.Menu>
            
            </Dropdown>
            <Dropdown className="nav-item dropdown" >
              
              <Dropdown.Toggle  className="nav-link dropdown-toggle dropdown-button" id="dropdown-basic">
              Sectors
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu" show={showDropdown4}>

                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-1">Consumer and Retail</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-2">Industrials</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Business Services</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Financial Services</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Special Situations</NavLink></Dropdown.Item>
                <Dropdown.Item className="dropdown-item"><NavLink to="#/action-3">Data Science</NavLink></Dropdown.Item>

              </Dropdown.Menu>
            
            </Dropdown>

            <Dropdown className="nav-item dropdown" onMouseLeave={() => setShowDropdown5(false)} onMouseOver={() => setShowDropdown5(true)}>
              
              <Dropdown.Toggle  className="nav-link dropdown-toggle dropdown-button" id="dropdown-basic">
              About us
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu" show={showDropdown5}>

                <Dropdown.Item className="dropdown-item" href=window.location.origin+"/people">Our People</Dropdown.Item>

              </Dropdown.Menu>
            
            </Dropdown> */}
                      { HeaderStatus2 ==1 ? 
		  <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href={window.location.origin+"/"+HeaderURL2} id="administration" role="button" aria-haspopup="true" aria-expanded="false">{Header2}</a>
            <div className="dropdown-menu" aria-labelledby="administration"> 
            { HeaderService2a != "" ?
              <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL2a}>{HeaderService2a}</a> 
              :""}
              {/* <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL2d}>{HeaderService2d}</a> */}
              { HeaderService2b != "" ?
              <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL2b}>{HeaderService2b}</a> 
              :""}
              { HeaderService2c != "" ?
              <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL2c}>{HeaderService2c}</a>
              :""}
              
             
             </div>   
          </li> :""}
          
			  <li className="nav-item dropdown active"> 
          <a className="nav-link dropdown-toggle" href="/markets" id="markets" role="button" aria-haspopup="true" aria-expanded="false">{Header3}</a>
            
            <div className="dropdown-menu" aria-labelledby="markets"> 
            {/* <a className="dropdown-item" href="/markets/Epic-FixedIncome">Fixed</a> */}
              { HeaderService3a != "" ?
                <NavLink  className="dropdown-item nav-color" to="/markets/Epic-FixedIncome">{HeaderService3a}</NavLink> 
              :""} 
            { HeaderService3b != "" ?
              <NavLink  className="dropdown-item nav-color" to="/markets/Epic-ManagedFutures">{HeaderService3b}</NavLink>
              :""} 
              {/* <a className="dropdown-item" href="#">Managed Futures</a>  */}
              { HeaderService3c != "" ?
              <NavLink  className="dropdown-item nav-color" to="/markets/Epic-Equitites">{HeaderService3c}</NavLink>
              :""}
              { HeaderService3d != "" ?
              <NavLink  className="dropdown-item nav-color" to="/markets/Epic-MultiAsset">{HeaderService3d}</NavLink>
              :""}
              { HeaderService3e != "" ?
              <NavLink  className="dropdown-item nav-color" to="/markets/Hedge-Funds">{HeaderService3e}</NavLink> 
              :""}
              <NavLink  className="dropdown-item nav-color" to="/markets/Epic-Insights">EPIC Insights</NavLink> 
            
            </div>
          </li>
          { HeaderStatus4 ==1 ? 
			<li className="nav-item dropdown"> 
            <a className="nav-link dropdown-toggle" href={window.location.origin+"/"+HeaderURL4} id="advisory" role="button" aria-haspopup="true" aria-expanded="false">{Header4}</a>
            <div className="dropdown-menu" aria-labelledby="advisory"> 
            { HeaderService4a != "" ?
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL4a}>{HeaderService4a}</a> 
            :""}
            { HeaderService4b != "" ?
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL4b}>{HeaderService4b}</a>
            :""}
            <a className="dropdown-item" href={window.location.origin+"/sectors"}>Sectors</a>

            </div>
          </li>:""}
          { HeaderStatus6 ==1 ? 
			<li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href={window.location.origin+"/"+HeaderURL6} id="about" role="button" aria-haspopup="true" aria-expanded="false">{Header6}</a>
            <div className="dropdown-menu right" aria-labelledby="about"> 
            {/* <a className="dropdown-item" href="#">History</a>  */}
            { HeaderService6a != "" ? 
              <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL6a}>{HeaderService6a}</a>
              :""}
            { HeaderService6b != "" ? 
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL6b}>{HeaderService6b}</a>
            :""}
            { HeaderService6c != "" ? 
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL6c}>{HeaderService6c}</a>
            :""}
            { HeaderService6d != "" ? 
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL6d}>{HeaderService6d}</a>
            :""}
            { HeaderService6e != "" ?
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL6e}>{HeaderService6e}</a>
            :""}
            { HeaderService6f != "" ?
            <a className="dropdown-item" href={window.location.origin+"/"+HeaderServiceURL6f}>{HeaderService6f}</a>
            :""}
            {/* <a className="dropdown-item" href="why-join-us.php">Why Join Us</a> */}
            </div>
          </li>:""}
        </ul>
      </div>
    </div>
  </nav>
  <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3 col-5">
          <div className="text-block">
            <p>Markets</p>
          </div>
        </div>
        <div className="col-md-5 col-sm-8">
          <h3>
          Explore opportunity from a unique vantage point.<br/>
          The EPIC view.
          </h3>
        </div>
      </div>
    </div>
  </div>
</header>
{/* :"" } */}
</Fragment>

      
    )
  }

export default Header;