import React, { useState, useEffect, Component } from 'react';
import '../Test/Test.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Product from '../Product/Product';


  const Test = ({productsArray}) =>{

            const {id} = useParams();
        const product = productsArray.findIndex(x => x.id === id);
        console.log(product);
        console.log(productsArray[id-1]);
        const x = productsArray[id-1];

    return(
       <div className = "TestContainer">

                <h2>{id}</h2>
                <h1>{x.title}</h1>
                <h1>{x.price}</h1>
                <img width = "200px" height = "200px" src = {x.image}></img>
            <br></br>
            <br></br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Quis viverra nibh cras pulvinar. Turpis in eu mi bibendum. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Tellus orci ac auctor augue mauris. Eget duis at tellus at urna condimentum mattis pellentesque. Sit amet est placerat in egestas. Elit sed vulputate mi sit amet mauris commodo. Ultricies mi eget mauris pharetra et. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Dui ut ornare lectus sit amet est placerat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ultrices dui sapien eget mi proin. In aliquam sem fringilla ut. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.

Rutrum quisque non tellus orci ac auctor. Consectetur a erat nam at lectus urna. Tellus pellentesque eu tincidunt tortor aliquam. Leo a diam sollicitudin tempor id. Amet venenatis urna cursus eget nunc. Sollicitudin tempor id eu nisl nunc. Orci ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Nullam eget felis eget nunc lobortis mattis. In pellentesque massa placerat duis ultricies. Tincidunt tortor aliquam nulla facilisi. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Faucibus a pellentesque sit amet porttitor eget dolor. Tellus in hac habitasse platea. Morbi enim nunc faucibus a pellentesque. Imperdiet proin fermentum leo vel.
            </p>
            <Link style = {{color : "#333"}} to = "/">back</Link>
       </div>
    )
  }

  export default Test