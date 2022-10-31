import React from "react";
import"./Nav.css";
import { Link } from 'react-router-dom';

import Details from "../Details";
const Nav = () => {
    return ( 

        <>
        <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <Link to="/"> <h1 className="logo" style={{color:"Black"}}>FakeStore</h1></Link>
           
            <ul class="menu-items">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/vfm">VFM</Link>
                </li>
                <li>
                <Link to="/trending">Trending</Link>
                </li>
                <li>
                <Link to="/bestseller">Bestseller</Link>
                </li>
                <li>
                <Link to="/recent">Recent</Link>
                </li>
                <li>
                <Link to="/ALL">ALL</Link>
                </li>
                
                
              
            </ul>
            
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
        </div>
    </nav>
        
        </>
     );
}
 
export default Nav;