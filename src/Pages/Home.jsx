import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          SOY EL HOMEEEE <span className="heart">♥️</span> mongui
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <Link to="/shop">Acerca de</Link>

        
      </header>
    </div>
  );
}

export default Home;
