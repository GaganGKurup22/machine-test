import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Add from './component/Add';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>

      </Routes>
    </>
  );
}

export default App;