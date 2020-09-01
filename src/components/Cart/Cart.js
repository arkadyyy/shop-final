import React, { useState, useEffect } from 'react';
import '../Cart/Cart.css'
import CartProduct from '../CartProduct/CartProduct';
import Product from '../Product/Product';
import { removeFileItem } from 'antd/lib/upload/utils';
import { Drawer, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({counter,cartProducts,orderQuantity,idOfPlus,setFirstClick}) =>{

const [cartProductsDuplicate,setcartProductsDuplicate] = useState(cartProducts); 

//state that defines which element to remove
const [removeItem,setremoveItem] = useState(-1);

useEffect(()=>{

    if(removeItem > -1){
        cartProducts.splice(removeItem,1);
        console.log(removeItem);
        console.log(cartProducts);
        setremoveItem(-1);
    }


},[removeItem])

useEffect(()=>{

  setcartProductsDuplicate(cartProducts);
    console.log(cartProductsDuplicate);

},[cartProducts])

//drawer functions
const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    

    return(
        <div className = 'cart'>
            <Button type="primary" onClick={showDrawer}>
            <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
             <Drawer
        title="cart"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
       
            
            <h6>counter : {counter} </h6>
            

                  {cartProductsDuplicate.map((product,index)=>(
                    
                    <CartProduct setFirstClick = {setFirstClick} index = {index} setremoveItem = {setremoveItem} idOfPlus = {idOfPlus} counter = {counter} id = {product.id} title = {product.title} image = {product.image} quantity = {product.quantity} />
                    
                ))}
      </Drawer>
           
            </div>
    )
}

export default Cart