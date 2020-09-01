import React, { useState, useEffect, Component } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Header = () =>{

    return(
        <div className = "headerContainer">
            <h1>ARKAD'S shop</h1>
             <Link className = 'manageshop' to= "/manageshop">manage shop</Link> 
        </div>
    )
}


export default Header