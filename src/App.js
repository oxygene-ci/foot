import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Action1 from "./Components/Action1";
import Action2 from "./Components/Action2";
import Action3 from "./Components/Action3";
import Action4 from "./Components/Action4";
import Action5 from "./Components/Action5";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/action1" element={<Action1 />} />
        <Route path="/action2" element={<Action2 />} />
        <Route path="/action3" element={<Action3 />} />
        <Route path="/action4" element={<Action4 />} />
        <Route path="/action5" element={<Action5 />} />
      </Routes>
);
}
export default App;
