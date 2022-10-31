import React from "react";
import { useState,useEffect } from "react";
import Slider from "./components/Slider";
import axios from "axios";
import Footer from "./components/footer";
import Nav from "./components/Navbar";
const Details = (props) => {

 let Hid = props.id;
 let cart =props.cart;
 const[data,setdata]=useState([])
const baseUrl="https://dummyjson.com/products/";
useEffect(() => {
 axios.get(baseUrl).then((response) => {
   setdata(response.data.products);
 });
}, []);
console.log("details",Hid);
const[count,setcount]=useState(0)
function Add()
{
  console.log("hello");
setcount(count+1);
} 
function Sub()
{
  let counts = count;
  if(count>=1)
  {
    setcount(counts-1);
  }
 else
 {
  setcount(0);
 }
}

console.log("helloss",props)
  return ( 
    <>
    <Nav></Nav>
    <div className="row " style={{marginTop:"100px"}}>
{data.filter(id=> id.id===Hid).map(value =>
    
    {
        return(
          
            <>
            
   <div className="container origin"style={{margin:"40px 100px"}}>
    <div className="row justify-content-center">
      <div className="col-4 " style={{border:"0px solid grey"}}>
        <Slider images={value.images}/>
      </div>
      <div className="col-5">
        <div className="row  " style={{marginLeft:"50px"}}>
          <div className="col-12 d-flex justify-content-start">
          <h2>{value.title}</h2>
          </div>
          <div className="col-12 mb-3 mt-2 d-flex justify-content-start">
          <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star" style={{color:"orange"}}></span>
<span class="fa fa-star" style={{color:"orange"}}></span>
<span class="fa fa-star" style={{color:"orange"}}></span>
<span class="fa fa-star"></span>
        
          </div>
          
          <div className="col-12 mt-2">
          <p>{value.description}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa sunt quis harum sit in deleniti provident exercitationem totam, iusto necessitatibus delectus, cumque quia molestiae rem quidem possimus esse ad.</p>
          </div>
          <div className="col-12 d-flex justify-content-start">
          <p style={{color:"black", fontSize:"20px"}}>Price:</p>
          <p style={{color:"black", fontSize:"20px"}}>&#8377;{value.price}</p>
          </div>
          <div className="col-12 mb-3">
            <button className="" style={{padding:"5px 10px",border:"2px solid black"}} onClick={Add}>+</button>
            <span className="p-2" style={{border:"2px solid black",borderTop:"2px solid black"}}>{count}</span>
            <button className="" style={{padding:"5px 10px",border:"2px solid black"}} onClick={Sub}>-</button>
          </div>
          <div className="col-12">
            <button onClick={()=>cart(value.id)} style={{background:"black", color:"white",padding:"10px"}}>Buy Now</button>
          </div>
        </div>
       
      </div>
  
    </div>
   </div>
            
            
            </>
        )
    }
    )}
 </div>
 <Footer/>
    </>
   );
}
 
export default Details;