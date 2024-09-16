import {Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { enableMapSet } from 'immer';
import React, { useState, useEffect } from 'react';

// At the beginning of your application

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // console.log(window.matchMedia('(prefers-color-scheme: dark)'));
    // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial state based on system preference
    // setIsDarkMode(prefersDarkMode);

    // Listen for changes in system preferences
    // const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // const handleMediaQueryChange = (e) => setIsDarkMode(e.matches);
    // mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up event listener on unmount
    // return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  enableMapSet();
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'} >
    <div className="bg-slate-800 "><Navbar props={{isDarkMode,setIsDarkMode,toggleTheme}}></Navbar></div>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/cart" element={<Cart props={{isDarkMode,setIsDarkMode,toggleTheme}}/>}></Route>
    </Routes>
    </div>
    

  );
}

export default App;
