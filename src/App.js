import './App.css'; 
import React, { useState } from 'react';
import About from './compones/About';
import Navbar from './compones/Navbar';
import Text from './compones/text';
import Home from './compones/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const togglemode = ()=> {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  } 
  return (
< >
        <Router>
        <div className="App">

        <Navbar title="React  S" mode={mode} togglemode={togglemode}  />
           {/* <h1 className=""> Shreyans  Area  </h1> */}
           <h1 className={` container text-${mode==='light'?'black':'white'} `}> Shreyans  Area  </h1>
          <Routes>
            <Route path="/" element={<Home mode={mode}/>} />
            <Route path="/text" element={<Text fn="Enter full name :- " mode={mode} textarea="Addres :- "/>} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>

        </Router>
    </>
  );
}

export default App;
