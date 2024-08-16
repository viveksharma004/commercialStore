import {React} from 'react';
import {Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { enableMapSet } from 'immer';

// At the beginning of your application

function App() {
  enableMapSet();
  return (
    <>
    <div className="bg-slate-800"><Navbar ></Navbar></div>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  );
}

export default App;
