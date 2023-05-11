import React from 'react';
import {CartState} from "../context/Context";
import SingleProduct from './SingleProduct';
import Filter from './Filter';

const Home = () => {
    const {state : {products,cart}}= CartState();
    const {productState:{byStock, byRating, byFastDelivery,sort,searchQuery}}=CartState();
    // console.log(cart)
    const transformProducts =()=>{
      let sortedProducts = products;
      if(sort){
        sortedProducts.sort((a,b)=>sort==="lowToHigh"?a.price-b.price:b.price-a.price)
      }
      if(!byStock){
        sortedProducts=sortedProducts.filter((prod)=>prod.instock)
      }
      if(byFastDelivery){
        sortedProducts=sortedProducts.filter((prod)=>prod.fastdelivery)
      }
      if(byRating){
        const ratingProd=sortedProducts.filter((prod)=>prod.ratings>=byRating)
        // sortedProducts=sortedProducts.filter((prod)=>prod.ratings>=byRating)
        // sortedProducts=sortedProducts.filter((prod)=>prod.ratings>=byRating)
        ratingProd.length!==0? sortedProducts=ratingProd:<h3>No Products Found</h3>
      }
      if(searchQuery){
        sortedProducts=sortedProducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
      }
      return sortedProducts;
    }
  return (
    <div className="homepage">
        <div className='filter'><Filter/></div>
        <div className="card-container">
           {transformProducts().map((eachproduct)=>{
               return <SingleProduct prod={eachproduct} key={eachproduct.id}/>
           })}
        </div>
    </div>
  )
}

export default Home