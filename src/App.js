import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import 'animate.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      disable: 'mobile',
    });
  }, []);
  return (
    <div className='wrapper'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
