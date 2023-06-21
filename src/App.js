import logo from './logo.svg';
import './App.css';
import DatosList from './components/container/datos_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DatosList></DatosList>
      </header>
    </div>
  );
}

export default App;
