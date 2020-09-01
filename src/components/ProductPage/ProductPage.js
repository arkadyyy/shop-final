import React, { useState, useEffect, Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


  const ProductPage = () =>{

            const {id} = useParams();

    return(
       <div>
            <h1>this is a ProductPage page ~!</h1>
                <h2>{id}</h2>
         

            <Link to = "/">back</Link>
       </div>
    )
  }

  export default ProductPage