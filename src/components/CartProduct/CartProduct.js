import React, { useState, useEffect } from 'react';



const CartProduct = ({id,title,image,quantity,counter,idOfPlus,setremoveItem,index,setfirstClick}) =>{

        const[orderQunatity,setorderQunatity] = useState(0)

    useEffect(() => {
        if(idOfPlus === id){
          setorderQunatity(orderQunatity+1);
        }
       
        console.log(quantity);
        console.log(idOfPlus);
        
      },[counter]);
    

    return(
   <div>
        <h2>{title}</h2>
        <img width = '90px' height = '70px' src = {image}></img>
        <h2>{orderQunatity}</h2>
        <button onClick = {()=>(setremoveItem(index),console.log(index))}>remove item from cart</button>
   </div>
    )
}

export default CartProduct