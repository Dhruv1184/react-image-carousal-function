import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
   let [count,setcount] = useState(1)
    
    const increase = () =>{
        if (count < 2){
            setcount(count = count +1)
        }else{
            setcount(count=0)
        }     
    }
    
    const  decrease = () =>{
        if (count > 0 ){
            setcount(count = count-1)
        }else{
            setcount(count = 2)
        }
       
    }
    
       
    return(
            <div className="body">
                <div onClick={decrease} className="backbtn">
                    <ArrowBackIosIcon/>
                </div>
                
                <div className="title">
                    {images[count].title}    
                </div>
    
                <img src={images[count].img} alt=""  className="img"/>
    
                <div className="statement">
                    {images[count].subtitle}
                </div>
    
                <div onClick={increase} className="forwardbtn">
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        )
      
    
}


export default Carousel;