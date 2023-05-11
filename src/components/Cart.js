import React,{useState,useEffect} from 'react';
import {CartState} from '../context/Context';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import Form from 'react-bootstrap/Form';
import {AiFillDelete} from "react-icons/ai";
import EmptyCart from "./EmptyCart";
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart = () => {
  
  const {state:{cart},dispatch}=CartState();
  console.log('cart',cart)

  const[total,settotal]=useState();
  useEffect(()=>{
    settotal(cart.reduce((acc,curr)=>acc+(Number(curr.price)*curr.qty),0)) 
  },[cart])
  

  return (
    <div className="homepage">
      <div className="card-container cartitem-space" style={{display: 'flex',justifyContent:"center"}}>
        {cart.length===0? <EmptyCart/>:
        <ListGroup className="cart-box-area"  style={{width:"95%",gap:"20px"}}>
            {cart.map((prod)=>{
              return <ListGroup.Item className="cart-box-one"  key={prod.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div><img className="cartitem-image" src={prod.image}/></div>
                <div>{prod.name}</div>
                <div>${prod.price}</div>
                <div><Rating rating={prod.ratings}/></div>
                <Form.Select as="select" style={{width:"80px"}} onChange={(e)=>{
                  dispatch({type:"CART_QUANTITY",payload:{id:prod.id,qty:e.target.value}})
                  }}>
                  {[...Array(prod.instock).keys()].map((x)=><option>{x+1}</option>)}
                </Form.Select>
                <AiFillDelete fontSize="20px" onClick={()=>{dispatch({type: "REMOVE_FROM_CART",payload:prod})}} style={{cursor:"pointer"}}/>
                </ListGroup.Item>
            })}
        </ListGroup>}
      </div>
      <div className="filter summary">
        <p className="subtotal">Subtotal ({cart.length}) items</p>
        <p style={{fontWeight: 'bold'}}>Total: $ {total}</p>
        <Button type="button"  disabled={cart.length === 0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart