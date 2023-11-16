// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'react-bootstrap';
// import HomePage from './pages/Home';
// import { useState } from 'react';

// function App() {
// return (
//   <div className='App'>
//     <header className='App-header'>
//       <img src={logo} className='App-logo' alt='logo' />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className='App-link'
//         href='https://reactjs.org'
//         target='_blank'
//         rel='noopener noreferrer'
//       >
//         Create React
//       </a>
// const [dat, setDat] = useState(true);
// const [vair, setVair] = useState('success');
// const oppDat = () => {
//   setDat(!dat);
//   setVair(!dat ? 'success' : 'danger');
// };

import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import RootLayout from './components/RootLayout';
import About from './pages/About';
import Latest from './pages/Latest';
import MovieCard from '../src/components/MovieCard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='Latest' element={<Latest />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
