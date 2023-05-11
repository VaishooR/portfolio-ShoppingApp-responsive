import React from 'react';
import {Link} from "react-router-dom";
import {BsCartCheck} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {CartState} from "../context/Context";
import {AiFillDelete} from "react-icons/ai";

const Header = () => {
  const {state:{cart},productState:{searchQuery},dispatch,productDispatch}= CartState()
  return (
    <div className="header">
        <Link to="/"><span className='shopping-app'>SHOPPING APP</span></Link>
        <input placeholder='Search the product here...' onChange={(e)=>{productDispatch({
          type:"SORT_BY_SEARCH",
          payload:e.target.value
        })}}/>
       
        <Dropdown className='dropdown' as={ButtonGroup} >
          <Button  variant="light">Cart-{cart.length}</Button>
          <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
          <Dropdown.Menu style={{minWidth:"380px"}}>
            {cart.length > 0 ? 
            <>
            {
              cart.map((prod) => (
                <span className="cartitem" key={prod.id}>
                  <img src={prod.image} className="cartitemimage"/>
                  <div className="cartitemdetail">
                    <span>{prod.name} </span>
                    <span> ${prod.price}</span>
                  </div>
                  <AiFillDelete fontSize="20px" onClick={()=>{dispatch({type: "REMOVE_FROM_CART",payload:prod})}} style={{cursor:"pointer"}}/>
                </span>
              ) )
            }
            <Link to="/cart"><Button variant="success" style={{width:"95%",margin:"0 10px"}}>Go To Cart</Button></Link>
            </> :
            <Dropdown.Item href="#/action-1">Cart is empty...!</Dropdown.Item>}
            
          </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header