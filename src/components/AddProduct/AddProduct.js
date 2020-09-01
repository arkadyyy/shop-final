import React, { useState, useEffect, Component } from 'react';
import './AddProduct.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';
import { Radio } from 'antd';


  const AddProduct = () =>{

    

    const postProduct = (e) =>{
             e.preventDefault();
           const title =  document.querySelector('#name').value
           const quantity = document.querySelector('#quantity').value
           const price = document.querySelector('#price').value
           const image = document.querySelector('#picture').value
        axios.post('http://localhost:8000/products/newproduct',{title:title,quantity:+quantity,price:+price,image:image},{params: {
          title,
          quantity,
          price,
          image
        }, headers: { "Content-Type": "text/plain" } })
        .then((res)=>{console.log(res);});
       console.log(title,quantity,price,image);
       
    }


    




  
    return(
      <div className = "AddProductContainer">
            <form className = "AddProductForm">
            <label for="title">product name:</label>
            <input type="text" id="name" name="title"></input>

            <label for="quantity">product quantity:</label>
            <input type="text" id="quantity" name="quantity"></input>
            
            <label for="price">product price:</label>
            <input type="text" id="price" name="price"></input>

            <label for="image">product picture:</label>
            <input type="text" id="picture" name="image"></input>

            <input type="radio" id="male" name="gender" value="male"></input>
            <input type="radio" id="male" name="gender" value="female"></input>
            <h4>add image of product</h4>
            <input type = "file"></input>
            
            <input onClick = {postProduct} type="submit" value="Submit"></input>
            
        </form>

        <Link to = "/">back to shop</Link>
      </div>
        
    )
  }

  export default AddProduct