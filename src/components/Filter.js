import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Rating from "./Rating";
import { CartState } from '../context/Context';

const Filter = () => {
  const[rate,setrate]=useState(0);
  const {productState :{byStock, byRating, byFastDelivery,sort},productDispatch}=CartState()
  return (
    <div className="filter">
        <h4 className='filter-title' style={{height:"45px",width:"220px",paddingTop:"50px",paddingBottom:"25px"}}>Filter Products</h4>
        <Form className="mt-5 filter-form">
           <Form.Check checked={sort==="lowToHigh"?true:false} className="mt-2" style={{height:"35px",width:"220px"}} type="radio" name="asc-desc" id="default-radio" label="Ascending" 
           onChange={()=>productDispatch({
            type:"SORT_BY_PRICE",
            payload:"lowToHigh"
           })}/>
           <Form.Check checked={sort==="highToLow"?true:false} className="mt-2" style={{height:"35px",width:"220px"}} type="radio" name="asc-desc" id="default-radio" label="Descending"
           onChange={()=>productDispatch({
            type:"SORT_BY_PRICE",
            payload:"highToLow"
           })}/>
           <Form.Check checked={byStock} className="mt-2" style={{height:"35px",width:"220px"}} type="checkbox" id="default-checkbox" label="Include Out of stock"
           onChange={()=>productDispatch({
            type:"SORT_BY_INSTOCK"
           })}/>
           <Form.Check checked={byFastDelivery} className="mt-2" style={{height:"35px",width:"220px"}} type="checkbox" id="default-checkbox" label="Fast Delivery Only"
           onChange={()=>productDispatch({
            type:"SORT_BY_FAST_DELIVERY"
           })}/>
           <div style={{display:"flex"}}>
               <label style={{marginRight:"10px"}}>Rating:</label>
               <Rating rating={byRating} 
               onClick={(i)=>productDispatch({
                type:"SORT_BY_RATING",
                payload:i+1
               })}  />
           </div>
        </Form>
        
        <Button variant="light" className="mt-5 clear-filter-btn" 
        onClick={()=>productDispatch({
          type:"CLEAR_FILTER"
        })}>Clear Filter</Button>
    </div>
  )
}

export default Filter





{/* onClick={(i)=>onClick(i)}      */}

// onClick={(i)=>setrate(i+1)}

{/* <p>Filter Products</p>
        <div><label><input type="radio"/> Ascending</label></div>
        <div><label><input type="radio"/> Ascending</label></div>
        <div><label><input type="checkbox"/> Ascending</label></div>
        <div><label><input type="checkbox"/> Ascending</label></div>
        <div>Rating</div>
        <button>Clear Filters</button> */}