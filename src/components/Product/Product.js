import React, { useState, useEffect, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import './Product.css';




const Product = ({products,index,counter,setCounter,cartProducts,setcartProducts,setidOfPlus}) =>{

        //make each product quantity stateful
        const [quantity,setQuantity] = useState(products[index].quantity)
        //checks if first click on plus happend ,if not then product gets added to cart array
        const [firstClick,setFirstClick] = useState(true)


        //all functions happening on plus click
        const plus = () =>{
            quantity > 0 && setQuantity(quantity-1);
            quantity > 0 && setCounter(counter+1);
            firstClick === true && setFirstClick(false);
            firstClick === true && setcartProducts([...cartProducts,products[index]]);
            setidOfPlus(products[index].id);
           
            console.log(cartProducts);
            console.log(quantity);
            
        }

        //all functions happening on minus click
        const minus = () =>{
            setQuantity(quantity+1);
            quantity > 0 && setCounter(counter-1);
        }

        return(
                <div className = 'productContainer'>
                    <h1>{products[index].title}</h1>   
                    <img width = '90px' height = '70px' src = {products[index].image}></img>
                    <h4>quantity :{quantity}</h4> 
                    <h4>price : {products[index].price}</h4>

                    <div>
                        <button onClick = {plus}>+</button>
                        <button onClick = {minus}>-</button>
                    </div>  

                    <Link className = 'readmore' to = {`/product/${products[index].id}`}>Read More</Link>
                </div>
             

        )
}


export default Product