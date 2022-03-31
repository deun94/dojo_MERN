import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AuthorForm from './components/AuthorForm';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';

function App() {
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Author Assignment</h1>
        <Switch>
          <Route exact path = "/">
            <AllAuthors></AllAuthors>
          </Route>
          <Route exact path = "/new">
            <AuthorForm></AuthorForm>
          </Route>
          <Route exact path = "/authors/edit/:_id">
            <EditAuthor></EditAuthor>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
