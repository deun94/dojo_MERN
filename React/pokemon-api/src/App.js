// import logo from './logo.svg';
import './App.css';
// import Pokemon from './components/Pokemon';
import AxiosPokemon from './components/AxiosPokemon';
function App() {
  return (
    <div className="App">
      <h1>Who's your Pokemon</h1>
      {/* <Pokemon></Pokemon> */}
      <AxiosPokemon></AxiosPokemon>
    </div>
  );
}

export default App;
