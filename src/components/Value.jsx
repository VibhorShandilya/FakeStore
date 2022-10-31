import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import axios from 'axios';
import './Complete.css'
const Value= (props) => {
    //  let data=[
    //     {name:"vini",id:"user/1",age:22},
    //     {name:"vini2",id:"user/2",age:23},
    //     {name:"vini3",id:"user/3",age:24}
    // ]
    const[data,setdata]=useState([])
  const baseUrl="https://dummyjson.com/products?skip=15&limit=6";

 
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setdata(response.data.products);
    });
  }, []);

console.log("Me",props.value)
let Transver = props.value;
    return ( 

        <>
             <div className="container">
            < div className="row mt-4">
              
        {data.map((data)=>
       
        {
            return(
              <>  

<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 col-xxl-4">
<div class="card">
  <div className="row">
    <div className="col-12">
    <img src={data.images[0]}  alt="Denim Jeans" style={{maxHeight:"160px"}}/>
    </div>
  </div>

  <p className="mt-3">{data.title}</p>

  <p className="d-flex justify-content-center">Price {data.price}</p>
  <p><Link to="details">
        <Button variant="primary" onClick={()=>Transver.address(data.id)} >See More </Button>
        </Link></p>
</div>
<hr />
</div>



              
            
               
          
              </> 
            )
        }

        )}
    
       </div>
        </div>
          
        </>
     );
     
    }
 
export default Value;