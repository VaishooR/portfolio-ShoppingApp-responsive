import React from 'react';
import { AiOutlineStar} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";

const Rating = ({rating,onClick,style}) => {
  return (
    <span style={{display:"flex",alignItems: "center",cursor:"pointer"}}>
        {[...Array(5)].map((_,i)=>{
            return  <span key={i} onClick={()=>onClick(i)}>{rating>i?<AiFillStar/>:<AiOutlineStar/>} </span>
        })}
    </span>
  )
}

export default Rating

