import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className='wrapper'>
      <Navigation />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
