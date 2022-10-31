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
import Error from './Error';
function App() {
  return (    
     <>
    <Router>
     <Routes>
      <Route exact path="/"element={<Home  />} ></Route>
      <Route path="details/:id" element={<Details  />} ></Route>
      <Route path="vfm" element={<ValueF/>} ></Route>
      <Route path="vfm/details/:id" element={<Details/>} ></Route>
      <Route path="trending" element={<Trending/>} ></Route>
      <Route path="trending/details/:id" element={<Details/>} ></Route>
      <Route path="bestseller" element={<BestsellerF/>} ></Route>
      <Route path="bestseller/details/:id" element={<Details/>} ></Route>
      <Route path="recent" element={<Recent/>} ></Route>
      <Route path="recent/details/:id" element={<Details/>} ></Route>
      <Route path="all" element={<All  />} ></Route>
      <Route path="all/details/:id" element={<Details/>} ></Route>
      <Route path="*" element={<Error />} ></Route>

      </Routes>
     </Router>

     </>
  );
}

export default App;
