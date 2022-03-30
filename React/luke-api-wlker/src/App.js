import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Detail from './components/Detail';

import {
  BrowserRouter,//this allows us to enable routing fotr the application
  Switch,//this allows us to tell react which components/elements will show conditionally based on the route
  Route,//this allows us to specify the route for a component/element
  Link //just like <a> anchor tag but it won't reload the whole page
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Luke SkyWalker API</h1>
        <SearchForm></SearchForm>
        <Switch>
          {/* exact path is better than just path */}
          <Route exact path="/:category/:id">
            <Detail></Detail>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
