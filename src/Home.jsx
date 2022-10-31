import React from 'react';
import Complete from './components/Complete';
import Topview from './components/Topview';
import Bestseller from './components/Bestseller';
import Value from './components/Value';
import Slider from './components/Slider';
import Nav from './components/Navbar';
import Footer from './components/footer';
const Home = (props) => {
let image=[
  "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
]    
    return ( 

    <>
    <div className="row">
      <div className="col-12">
        <Nav/>
      </div>
      <div className="col-12">
        <Slider images={image}></Slider>
      </div>
      <div className="col-12">
        <div className="row">
          <hr />
          <div className="col-12 mt-4 d-flex justify-content-center">
           <h1>Value For Money</h1> 
          </div>
          <div className="col-12">
          <Value value={props}/>
          </div>
        <div className="col-12 mt-4 d-flex justify-content-center">
           <h1>On Trend</h1> 
          </div>
          <div className="col-12">
          <Topview value={props}/>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <h1>Best Seller</h1>
          </div>
          <div className="col-12">
            <Bestseller/>
          </div>
          <div className="col-12 d-flex justify-content-center">
           <h1>Recently Arrived</h1> 
          </div>
          <div className="col-12">
          <Complete value={props}/>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
    </>
     );
     
    }
 
export default Home;