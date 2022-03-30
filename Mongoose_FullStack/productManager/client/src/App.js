import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import OneProductDetail from "./components/OneProductDetail";
import EditProductForm from './components/EditProductForm';

function App() {

  //to set the default of form submission state as "not submitted" via "false"
  const [formSubmitted, setFormSubmitted] = useState(false);

  //actual routes and render
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Switch>
          {/* <Route exact path = "/">
            <p> Hello</p>
          </Route> */}
          <Route exact path="/">
            <h3>Hello for products</h3>
            <ProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></ProductForm>
            {/* you need the form submitted to update the allproducts cuz you need to connect the form submitted to the results too */}
            
            <AllProducts formSubmitted = {formSubmitted}></AllProducts>
          </Route>
          <Route exact path= "/products/:_id">
            <OneProductDetail></OneProductDetail>
          </Route>
          <Route exact path= "/products/edit/:_id">
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
