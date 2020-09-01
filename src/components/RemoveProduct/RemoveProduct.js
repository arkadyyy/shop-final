import React, { useState, useEffect, Component } from 'react';
import './RemoveProduct.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';
import { Radio } from 'antd';


  const RemoveProduct = () =>{

    const[searchclicked,setsearchclicked] = useState(false)

    const getProduct = (e) =>{
      e.preventDefault();
      const searchInputValue = document.getElementById('searchInput').value;
      if(document.getElementById('id').checked) {
          console.log('id radio is chehecked');

          axios.get(`http://localhost:8000/products/updateproductById/${searchInputValue}`)
          .then((res)=>{
            res.status =200 ? setsearchclicked(true) : setsearchclicked(false);
              console.log(res.data);
          document.querySelector('#productTitle').textContent = res.data.title;
          document.querySelector('#productQuantity').textContent = res.data.quantity;
          document.querySelector('#productprice').textContent = res.data.price;
         document.querySelector('#productImage').src = res.data.image;
          
          })

        }
        else if(document.getElementById('title').checked) {
          console.log('title radio is chehecked');
          axios.get(`http://localhost:8000/products/updateproductByTitle/${searchInputValue}`)
          .then((res)=>{
           res.status =200 ? setsearchclicked(true) : setsearchclicked(false);
              console.log(res.data);
              document.querySelector('#productTitle').textContent = res.data.title;
              document.querySelector('#productQuantity').textContent = res.data.quantity;
              document.querySelector('#productprice').textContent = res.data.price;
             document.querySelector('#productImage').src = res.data.image;
          
          })    
        }
      


  }

  const removeProduct = () =>{
      const removeProductTitle = document.querySelector('#productTitle').value;
    axios.delete(`http://localhost:8000/products/${removeProductTitle}`,{title : removeProductTitle},{params : {removeProductTitle}})
    .then((res)=>{console.log(res);})
      


  }


  
    return(
      <div className = "RemoveProductContainer">
        <div className = 'updateProductHeader'>
            <h1 >remove product</h1>
            <Link to = "/">back to shop</Link>
            </div>



            <div style = {{display : 'flex',justifyContent : 'space-around'}}>

              <div className = 'removeProductFormFind'>
                  <h2>what product would you like to remove ?</h2>
                  <h4>select by</h4>
                 <div style ={{display:'flex'}}>
                 <label for="id">id</label>
                  <input type="radio" id="id" name="id" value="id"></input>
                  <label for="title">title</label>
              <input type="radio" id="title" name="id" value="title"></input>
                 </div>
                 <input id = 'searchInput'></input>
                 <button onClick = {getProduct} >search</button>
                  </div>

                 {searchclicked && 
                  <div>
                      <h1 id = 'productTitle'></h1>
                      <img width = '80px' height = '80px' id = 'productImage'></img>
                      <h2 >price</h2>
                      <h3 id = 'productprice'></h3>
                      <h2 >quantity</h2>
                      <h3 id = 'productQuantity'></h3>



                  </div>}



            <form className = "RemoveProductForm">
           
            
            <button onClick = {removeProduct}  type='submit' value="Submit">remove product</button>
            
        </form>
        </div>
       
      </div>
        
    )
  }

  export default RemoveProduct