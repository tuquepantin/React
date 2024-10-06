import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Shop() {
    return (
      <>
      <Navbar />
      <div className="App">
          <header className="App-header">
            <img src="Octocat.png" className="App-logo" alt="logo" />
            <p>
              HOLA SOY EL SHOPPPPPPPPPPPPP
            </p>
            <p className="small">
              Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <p>
              
            <Link to="/">REGRESAR</Link>
              
            </p>
          </header>
        </div>
      
      </>
        
      );
}

export default Shop;