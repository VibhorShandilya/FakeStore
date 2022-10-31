import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Details from './Details';
import BestsellerF from './components/BestsellerF';
import Trending from './components/Trending';
import Recent from './components/Recent';
import All from './components/All';
import ValueF from './components/ValueF';
import Cart from './cart';
function App() {
const [id,setid]=useState()
function address(data)
{
   setid(data);
   console.log("here",data);
}

const[cart,setcart]=useState([])
function cartv(a)
{
   setcart(a);
   console.log("here in app",a);
}


  return (    
     <>
    <Router>
     <Routes>
      <Route exact path="/"element={<Home address={address}/>} ></Route>
      <Route path="details" element={<Details id={id}  />} ></Route>
      <Route path="vfm" element={<ValueF  address={address} />} ></Route>
      <Route path="vfm/details" element={<Details id={id} cart={cartv} />} ></Route>
      <Route path="trending" element={<Trending address={address} />} ></Route>
      <Route path="trending/details" element={<Details id={id} cart={cartv} />} ></Route>
      <Route path="bestseller" element={<BestsellerF  address={address}/>} ></Route>
      <Route path="bestseller/details" element={<Details id={id} cart={cartv} />} ></Route>
      <Route path="recent" element={<Recent address={address} />} ></Route>
      <Route path="recent/details" element={<Details id={id} cart={cartv} />} ></Route>
      <Route path="all" element={<All address={address}/>} ></Route>
      <Route path="all/details" element={<Details id={id} cart={cartv}  />} ></Route>
      <Route path="cart" element={<Cart id={cart}  />} ></Route>

      </Routes>
     </Router>

     </>
  );
}

export default App;
