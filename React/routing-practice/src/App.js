import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,//this allows us to enable routing fotr the application
  Switch,//this allows us to tell react which components/elements will show conditionally based on the route
  Route,//this allows us to specify the route for a component/element
  Link //just like <a> anchor tag but it won't reload the whole page
} from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>This is routing practice</h1> */}
        <Switch>
            <Route exact path = "/home">
                <h1>Welcome</h1>
            </Route>
            <Route exact path ="/:stringOrNum">
              <Home></Home>
            </Route>
            <Route exact path ="/:stringOrNum/:textColor">
              <Home></Home>
            </Route>
            <Route exact path ="/:stringOrNum/:textColor/:backgroundColor">
              <Home></Home>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
