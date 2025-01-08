import logo from './logo.svg';
import MyGrid from './ComponentesGryd'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <div class="m-3">Este elemento tiene un margen de 3rem en todos los lados.</div>
        <div class="p-2">Este elemento tiene un relleno de 2rem en todos los lados.</div>
        <div class="mt-4">Este elemento tiene un margen superior de 4rem.</div>
        <div class="mx-auto">Este elemento está centrado horizontalmente.</div>

        <div class="p-3 md:p-5">
          Este elemento tiene un relleno de 3rem en todas las pantallas.
          En pantallas medianas (md) o más grandes, el relleno aumenta a 5rem.
        </div>
        
        <MyGrid />

      </header>
    </div>
  );
}

export default App;
