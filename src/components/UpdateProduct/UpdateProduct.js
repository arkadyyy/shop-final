import React, { useState, useEffect, Component } from 'react';
import './UpdateProduct.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';
import { Radio } from 'antd';


  const UpdateProduct = () =>{

    const getProduct = (e) =>{
        e.preventDefault();
        const searchInputValue = document.getElementById('searchInput').value;
        if(document.getElementById('id').checked) {
            console.log('id radio is chehecked');

            axios.get(`http://localhost:8000/products/updateproductById/${searchInputValue}`)
            .then((res)=>{
                console.log(res.data);
            document.querySelector('#name').defaultValue = res.data.title;
            document.querySelector('#quantity').defaultValue = res.data.quantity;
            document.querySelector('#price').defaultValue = res.data.price;
           document.querySelector('#picture').defaultValue = res.data.image;
            
            })

          }
          else if(document.getElementById('title').checked) {
            console.log('title radio is chehecked');
            axios.get(`http://localhost:8000/products/updateproductByTitle/${searchInputValue}`)
            .then((res)=>{
                console.log(res.data);
            document.querySelector('#name').defaultValue = res.data.title;
            document.querySelector('#quantity').defaultValue = res.data.quantity;
            document.querySelector('#price').defaultValue = res.data.price;
           document.querySelector('#picture').defaultValue = res.data.image;
            
            })    
          }
        


    }

    

    const updateProduct = (e) =>{
             e.preventDefault();
           const title =  document.querySelector('#name').value
           const quantity = document.querySelector('#quantity').value
           const price = document.querySelector('#price').value
           const image = document.querySelector('#picture').value
           console.log(title);
        axios.put('http://localhost:8000/products/updateproduct/:id',{title:title,quantity:+quantity,price:+price,image:image},{params: {
          title,
          quantity,
          price,
          image
        }, headers: { "Content-Type": "text/plain" } })
        .then((res)=>{console.log(res);});
       
      
       
    }

    return(
        <div className = "updateProductContainer">
            <div className = 'updateProductHeader'>
            <h1 >update product</h1>
            <Link to = "/">back to shop</Link>
            </div>

            
            
              <form className = "updateProductForm">
                  <div className = 'updateProductFormFind'>
                  <h2>what product would you like to update ?</h2>
                  <h4>select by</h4>
                 <div style ={{display:'flex'}}>
                 <label for="id">id</label>
                  <input type="radio" id="id" name="id" value="id"></input>
                  <label for="title">title</label>
              <input type="radio" id="title" name="id" value="title"></input>
                 </div>
                 <input id = 'searchInput'></input>
                 <button onClick = {getProduct}>search</button>
                  </div>
                  <div className = 'inputs'>
              <label for="title">product name:</label>
              <input type="text" id="name" name="title"></input>
  
              <label for="quantity">product quantity:</label>
              <input type="text" id="quantity" name="quantity"></input>
              
              <label for="price">product price:</label>
              <input type="text" id="price" name="price"></input>
  
              <label for="image">product picture:</label>
              <input type="text" id="picture" name="image"></input>
  
              <h4>add image of product</h4>
              <input type = "file"></input>

           
              
              <button onClick = {updateProduct} type="submit" value="Submit">update product</button>
              </div>
          </form>
  
          
        </div>
          
      )
    }
  
    export default UpdateProduct

    
