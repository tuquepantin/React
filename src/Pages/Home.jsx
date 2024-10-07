import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Carrusel from '../Components/Carrusel';
import Bannershop from '../Components/Bannershop';
import Myinfo from '../Components/Myinfo';
import Comments from '../Components/Comments';

function Home() {
  return (
    <>
    <Navbar />
    <Welcome />
    <Carrusel />
    <Bannershop />
    <Myinfo />
    <Comments/>
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
