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
            <h3>Hello</h3>
            <ProductForm formSubmnitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></ProductForm>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
