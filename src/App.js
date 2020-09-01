import React, { useState, useEffect, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { Slider } from 'antd';
import './App.css';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Test from './components/Test/Test';
import ManagerLogin from './components/ManagerLogin/ManagerLogin';
import ProductPage from './components/CartProduct/CartProduct';
import AddProduct from './components/AddProduct/AddProduct';
import ManagerPage from './components/ManagerPage/ManagerPage';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import RemoveProduct from './components/RemoveProduct/RemoveProduct';

function App() {
    //first array that gets all products on first load
  const [productsArray,setProductsArray] = useState([]);

  //the counter on cart that counts all products "+" click
  const [counter,setCounter] = useState(0);
  //array of cart products
  const [cartProducts,setcartProducts] = useState([]);

  //id of plus click
  const [idOfPlus,setidOfPlus] = useState(null);
  
  //state that checks for first render to display all products on first render

  const [firstRenderCheck,setfirstRenderCheck] = useState(true);
  

  //first render
  useEffect(()=>(
    axios.get('http://localhost:8000/products')
  .then((res)=>{setProductsArray(res.data);console.log(res.data)})
    
  ),[]);

  function onChange(value) {
    console.log('onChange: ', value);
    setfirstRenderCheck(false);
  }

  //manipulated products array declaration
  const [productsDisplay,setproductsDisplay] = useState(productsArray);
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
    setproductsDisplay(
      productsArray.filter(((product) =>{if(+product.price >= +value[0] && +product.price <= +value[1]){
        
        return product;
      } }))
    )
    
  }


  return (
    <Router>
  <div>
    <Header/>
 <div className = 'sliderContainer'>
 <Cart idOfPlus = {idOfPlus}  cartProducts = {cartProducts} counter = {counter}   />
<div style = {{width : '70%',display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',flexGrow: '20'}}>
<h6 style = {{margin : '0 2rem'}}>choose your price range</h6>
    <Slider
      range
      style = {{width : '70%',margin :"0 auto",padding : "1.4rem"}}
      step={1}
      defaultValue={[0, 100]}
      onChange={onChange}
      onAfterChange={onAfterChange}
      
    />
</div>
 </div>

  <div className = 'productsContainer'>
   
     {!firstRenderCheck &&productsDisplay.map((product,index)=>(
        <Product setidOfPlus = {setidOfPlus} cartProducts = {cartProducts} setcartProducts = {setcartProducts} counter = {counter}
        setCounter = {setCounter}  products = {productsArray} index = {index}/>
        ))}
        
        {firstRenderCheck && productsArray.map((product,index)=>(
        <Product setidOfPlus = {setidOfPlus} cartProducts = {cartProducts} setcartProducts = {setcartProducts} counter = {counter}
        setCounter = {setCounter}  products = {productsArray} index = {index}/>
        ))}
  </div>

  <Switch>
      <Route exact path = "/product/:id">
              <Test productsArray = {productsArray} />
      </Route>
      <Route exact path = "/manageshop">
              <ManagerLogin />
      </Route>
      <Route exact path = "/managerpage/addproduct">
              <AddProduct />
      </Route>
      <Route exact path = "/managerpage">
              <ManagerPage />
      </Route>
      <Route exact path = "/managerpage/updateproduct">
              <UpdateProduct />
      </Route>
      <Route exact path = "/managerpage/removeproduct">
              <RemoveProduct />
      </Route>

  </Switch>
  </div>
  </Router>
  );


}

export default App;
