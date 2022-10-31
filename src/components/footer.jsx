import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 

        <>
        
        <footer class="w-100 py-4 flex-shrink-0" style={{background: "#2a2e32"}}>
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">FakeStore</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="https://www.linkedin.com/in/vibhor-shandilya-032801164">FakeStore</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                    <li >
                <Link to="/">Home</Link>
                </li>
                <li className="mt-3 ">
                <Link className="mt-3" to="/vfm">VFM</Link>
                </li>
                <li className="mt-3">
                <Link to="/trending">Trending</Link>
                </li>
               
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                    <li className="mt-3">
                <Link to="/bestseller">Bestseller</Link>
                </li>
                <li className="mt-3">
                <Link to="/recent">Recent</Link>
                </li>
                <li className="mt-3">
                <Link to="/ALL">ALL</Link>
                </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>

        
        
        </>
     );
}
 
export default Footer;