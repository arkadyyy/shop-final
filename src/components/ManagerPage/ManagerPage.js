import React, { useState, useEffect, Component } from 'react';
import './ManagerPage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';
import ManagerLogin from '../ManagerLogin/ManagerLogin';


const ManagerPage = () =>{

        
    
    return(
<div className = 'managerPageContainer'>
        <h1>what would you like to do ?</h1>
        <div className = 'managerPageNavigation'>
            <button><Link style = {{color:"#f4f4f4"}} to = "/managerpage/addproduct">add product</Link></button>
            <button><Link style = {{color:"#f4f4f4"}} to = "/managerpage/updateproduct">update product</Link></button>
            <button><Link style = {{color:"#f4f4f4"}} to = "/managerpage/removeproduct">remove product</Link></button>
        </div>
        <Link to = "/">back to shop</Link>
        </div>
        )


}

export default ManagerPage