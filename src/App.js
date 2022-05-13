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

{/* <h1 className="container"> Shreyans  Area  </h1> */}
<div className="App">
        <Router>
        <Navbar title="React  S" mode={mode} togglemode={togglemode} contect="contect us" >ok</Navbar>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/text" element={<Text fn="Enter full name :- " mode={mode} textarea="Addres :- "/>} />
            <Route path="/about" element={<About />} />
          </Routes>
         
          
        </Router>
       

      </div>
{/* <About/> */}

    </>
  );
}

export default App;
