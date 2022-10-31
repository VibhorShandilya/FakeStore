{/* <div className="row ">
{data.filter(id=> id.id===Hid).map(value =>
    {
        return(
            <>
            <div className="col-12">
                
            </div>
            
            
            </>
        )
    }
    )}
 </div> */}



//  let Hid = props.id;
//  const[data,setdata]=useState([])
// const baseUrl="https://dummyjson.com/products/";
// useEffect(() => {
//  axios.get(baseUrl).then((response) => {
//    setdata(response.data.products);
//  });
// }, []);



























// import React from "react";
// import { useState,useEffect } from "react";
// import Slider from "./components/Slider";
// import axios from "axios";
// import Footer from "./components/footer";
// const Details = (props) => {

//  let Hid = props.id;
//  const[data,setdata]=useState([])
// const baseUrl="https://dummyjson.com/products/";
// useEffect(() => {
//  axios.get(baseUrl).then((response) => {
//    setdata(response.data.products);
//  });
// }, []);
// console.log("details",Hid);



//   return ( 
//     <>
//     <div className="row ">
// {data.filter(id=> id.id===Hid).map(value =>
    
//     {
//         return(
          
//             <>
            
//    <div className="container origin"style={{margin:"40px 100px"}}>
//     <div className="row">
//       <div className="col-6">

//         <Slider images={value.images}/>
//       </div>
//       <div className="col-6">
//         <div className="row">
//           <div className="col-12 d-flex justify-content-center">
//           <h2>{value.title}</h2>
//           </div>
//           <div className="col-12 d-flex justify-content-center">
//           <p>{value.rating}</p>
        
//           </div>
//           <div className="col-12 d-flex justify-content-center">
//           <p>{value.price}</p>
//           </div>
//           <div className="col-12">
//           <p>{value.description}</p>
//           </div>
//         </div>
       
//       </div>
  
//     </div>
//    </div>
            
            
//             </>
//         )
//     }
//     )}
//  </div>
//  <Footer/>
//     </>
//    );
// }
 
// export default Details;