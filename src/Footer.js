import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';

// import market from 'images/epic-logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import market from '../images/background/markets.jpg';

{/* <link rel="stylesheet" href="%PUBLIC_URL%/assets/css/style.css" />;
<link rel="stylesheet" href="%PUBLIC_URL%/assets/css/bootstrap-4.4.1.css" />;
<link rel="stylesheet" href="%PUBLIC_URL%/assets/css/font-awesome.min.css" /> */}

// import 'public/assets/css/bootstrap-4.4.1.css';
// import 'public/assets/css/font-awesome.min.css';
// import 'public/assets/css/style.css';
// import 'public/assets/css/responsive.css';

// class Footer extends React.Component
const Footer = () => {
  
const [FooterContentResponse, setFooterContentResponse] = useState([]);
const [FooterContent, setFooterContent] = useState([]); 
const [contentState, setcontentState] = useState([]);

const [FooterLinksResponse, setFooterLinksResponse] = useState([]);
const [FooterLinks, setFooterLinks] = useState([]); 
// const [linkState, setlinkState] = useState([]);

const [linkNameone, setlinkNameone] = useState([]); 
const [linkone, setlinkone] = useState([]); 
const [linkNametwo, setlinkNametwo] = useState([]); 
const [linktwo, setlinktwo] = useState([]); 
const [linkNamethree, setlinkNamethree] = useState([]); 
const [linkthree, setlinkthree] = useState([]); 
const [linkNamefour, setlinkNamefour] = useState([]); 
const [linkfour, setlinkfour] = useState([]); 
const [linkNamefive, setlinkNamefive] = useState([]); 
const [linkfive, setlinkfive] = useState([]); 


const LoopingFunction=()=>{
var content;
var ArrLinkResponse = [];
var LinkName1;
var Link1;

var LinkName2;
var Link2;

var LinkName3;
var Link3;

var LinkName4;
var Link4;

var LinkName5;
var Link5;

  
var allKeys = ["PageName","PageUrl"];

    for(let i=0 ; i< FooterLinks.length ;i++){
      
      let obj={};

      LinkName1 = FooterLinks[0].page_name ;
      Link1 = FooterLinks[0].url ;

      LinkName2 = FooterLinks[1].page_name ;
      Link2 = FooterLinks[1].url ;

      LinkName3 = FooterLinks[2].page_name ;
      Link3 = FooterLinks[2].url ;

      LinkName4 = FooterLinks[3].page_name ;
      Link4 = FooterLinks[3].url ;

      LinkName5 = FooterLinks[4].page_name ;
      Link5 = FooterLinks[4].url ;

      console.log(obj);
      console.log("obj Services");
  
      // ArrLinkResponse.push(obj)    
    
    }

console.log(ArrLinkResponse);
console.log("ArrLinkResponse");

  
  for(let j=0 ; j< FooterContent.length ;j++){       
    
    content =  FooterContent[0].content ;
  }

  setcontentState(content)
  var count =0;

  setlinkNameone(LinkName1)
  setlinkone(Link1)

  setlinkNametwo(LinkName2)
  setlinktwo(Link2)

  setlinkNamethree(LinkName3)
  setlinkthree(Link3)
  
  setlinkNamefour(LinkName4)
  setlinkfour(Link4)

  setlinkNamefive(LinkName5)
  setlinkfive(Link5)
  // console.log(linkState)
  
  console.log(contentState)
  console.log("contentState")
  console.log(linkNameone)
  console.log("linkNameone")


}
  
  const SettingFunction=()=>{
    console.log("SETTING FUNCTION")
   
    const ArrServiceResponse = [];
    setFooterContent(FooterContentResponse);
    setFooterLinks(FooterLinksResponse)
    LoopingFunction();

  }

  $(document).ready(function() {
    
    SettingFunction();
      
  });
  async function fetchMyServiceAPI(){

    const url =window.location.origin+'/footer_linksapi';
    
     fetch(url).then(resp=> resp.json())
     .then (resp => {

      console.log(resp)
      console.log("serv-resp")

      setFooterLinksResponse(resp)

    })
      
     .catch(e=>{
       console.log(e);
     })

        console.log("allKeys")



  };
  async function fetchMyAPI(){

    const url =window.location.origin+'/footer_contentapi';
    
     fetch(url).then(resp=> resp.json())
     .then (resp => {
      console.log(resp)
      console.log("Division-resp")


  
      setFooterContentResponse(resp)

    })  
     .catch(e=>{
       console.log(e);
     })
  
        console.log("allKeys")

  };

  useEffect(()=>{

    fetchMyAPI();
    fetchMyServiceAPI();

  },[])
    return (
        <div>


  <footer>
  <div className="container footer-container footer-container-line">
    <div className="row footer-row">
      <div class="col-lg-3 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          {/* <li><a href="#">Legal Notice</a></li> */}
          <li><a href={window.location.origin+"/policies/"+linkone}>{linkNameone}</a></li>
          <li><a href={window.location.origin+"/policies/"+linktwo}>{linkNametwo}</a></li>
          <li><a href={window.location.origin+"/policies/"+linkthree}>{linkNamethree}</a></li>
          <li><a href={window.location.origin+"/policies/"+linkfour}>{linkNamefour}</a></li>
          <li><a href={window.location.origin+"/policies/"+linkfive}>{linkNamefive}</a></li>
          <li><a href={window.location.origin+"/policies/interest-policy"}>Conflict of Interest Policy</a></li>

        
        </ul>
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 text-right footer-font "dangerouslySetInnerHTML={{ __html: contentState }}>
        
      </div>
    </div>
  </div>
</footer>
</div>


      
    )
  }

export default Footer;