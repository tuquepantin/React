import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Welcome from '../Components/Welcome';
import Carrusel from '../Components/Carrusel';
import Bannershop from '../Components/Bannershop';
import Myinfo from '../Components/Myinfo';
import Comments from '../Components/Comments';
import Support from '../Components/Support';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Carrusel />
      <Bannershop />
      <Myinfo />
      <Comments />
      <Support />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
