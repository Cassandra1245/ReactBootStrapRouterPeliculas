import logo from './logo.svg';
import MyGrid from './ComponentesGryd'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <MyGrid />

      </header>
    </div>
  );
}

export default App;
