import React from 'react'
import Rating from './Rating';
import Button from 'react-bootstrap/Button';
import {CartState} from "../context/Context"


const SingleProduct = ({prod}) => {
  const {state:{cart},dispatch}=CartState()
  return (
    <div className="each-product">
        
        <p><img src={prod.image}/></p>
        <div className='prod-line1'>
             <div>{prod.name}</div>
             <div><b>${prod.price}</b></div> 
        </div>
        <div className='prod-line2'>
             <div><Rating rating={prod.ratings}/></div>
             <div>{prod.fastdelivery?<span>Fast delivery</span>:<span>4 days delivery</span>}</div>
        </div>
        <div className='add-to-cart-btn'>
          {
            cart.some(p=>p.id===prod.id)?
            <Button variant='danger' 
              onClick={()=>{dispatch({
                type:'REMOVE_FROM_CART',
                payload:prod
              }
            )}}>Remove</Button> :
            <Button variant='success' disabled={!prod.instock} 
               onClick={()=>{dispatch({
                 type:'ADD_TO_CART',
                 payload:prod
               } 
            )}}>{!prod.instock?"Out of Stock" : "Add to Cart"}</Button>
          }
            
            
        </div>
        
       
        
    </div>
  )
}

export default SingleProduct