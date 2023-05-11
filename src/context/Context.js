import React,{createContext,useContext,useReducer} from 'react';
import {faker} from '@faker-js/faker';
import {cartReducer,productReducer} from "./Reducers";

const CartContext = createContext();
faker.seed(98)
const Context = ({children}) => {
    
    const products=[...Array(20)].map(()=>{
        return {
            id:faker.datatype.uuid(),
            image:faker.image.food(640,350,true),
            name:faker.commerce.product(),
            price:faker.commerce.price(10, 5000, 0),
            instock:faker.helpers.arrayElement([0,3,5,7,9]),
            fastdelivery:faker.datatype.boolean(),
            ratings:faker.helpers.arrayElement([1,2,3,4,5])
        }
    })
    const[state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    })

    const[productState,productDispatch]=useReducer(productReducer,{
        byStock:false,
        byFastDelivery:false,
        byRating:0,
        searchQuery:""
    })
  return (
    <CartContext.Provider value={{state,dispatch,productState,productDispatch}}>{children}</CartContext.Provider>
  )
}
export default Context;

export const CartState=()=>{
    return useContext(CartContext)
}