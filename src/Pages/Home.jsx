import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';

function Home() {
  return (
    <>
    <Navbar />
    <Welcome />
    <div className="App">
          <header className="App-header">
            <img src="Octocat.png" className="App-logo" alt="logo" />
            <p>
              HOLA SOY EL homeeeeee
            </p>
            <p className="small">
              Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <p>
              
            <Link to="/shop">SHOPPPPPPPP</Link>
              
            </p>
          </header>
        </div>
    
    </>
  );
}

export default Home;
