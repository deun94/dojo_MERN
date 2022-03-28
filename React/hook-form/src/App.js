import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserFormReducer from './components/UserFormReducer';

function App() {
  return (
    <div className="App">
      <h1>Hook Form</h1>
      {/* <UserForm></UserForm> */}
      <UserFormReducer></UserFormReducer>
    </div>
  );
}

export default App;
