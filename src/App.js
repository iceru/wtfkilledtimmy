import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
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
