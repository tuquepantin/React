import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
          <header className="App-header">
            <img src="Octocat.png" className="App-logo" alt="logo" />
            <p>
              HOLA SOY EL HOMEEEE
            </p>
            <p className="small">
              Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <p>
              
            <Link to="/">REGRESAR</Link>
              
            </p>
          </header>
        </div>
      );
}

export default Home;