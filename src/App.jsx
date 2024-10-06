import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Hello world <span className="heart">♥️</span> mongui
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          
        <Link to="/about">Acerca de</Link>
          
        </p>
      </header>
    </div>
  );
}

export default App;
