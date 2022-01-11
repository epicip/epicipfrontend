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

// import { Accordion } from "react-bootstrap";
// var Accordion = require('react-bootstrap').Accordion;
// var Panel = require('react-bootstrap').Panel;
// var responseData;
const colors = ["#1A1549", " #9DB1DB", "#E6EEF6", "#dcdcdc","#B85876"]

const NotFoundFunction = () => {

    let { slug } = useParams();
if(slug== 1){

    window.location.href = "/markets/EpicfinanceTrends";

}else
if(slug== 2){
    window.location.href = "/markets/EpicglobalEquity";

}else if(slug== 3){
    window.location.href = "/markets/EpicipWealthFund";

}else if(slug== 4){

    window.location.href = "/markets/EpiciNfaUcitsFundRoute";

}else if(slug== 5){

    window.location.href = "/markets/EpicDailyUpdates";

}



return(

    <button className="hide">Hi</button>
)

}
 
export default NotFoundFunction;

