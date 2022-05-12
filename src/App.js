import './App.css'; 
import React, { useState } from 'react';
// import About from './compones/About';
import Navbar from './compones/Navbar';
import Text from './compones/text';

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

<Navbar title="React S" mode={mode} togglemode={togglemode} contect="contect us" >ok</Navbar>
{/* <h1 className="container"> Shreyans  Area  </h1> */}
<Text fn="Enter full name :- " mode={mode} textarea="Addres :- "/>
{/* <About/> */}

    </>
  );
}

export default App;
