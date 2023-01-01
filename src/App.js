// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
// let name = "Mit"
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type) =>{
      setAlert({
        msg:message,
        type:type
      }) 
      setTimeout(()=>{
          setAlert(null);
      },2000);
  }
  const toggleMode= ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert(" Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert(" Light mode has been enabled","success");
  }
  }
  const removecolor=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const changeColor = (cls)=>{
    removecolor();
   document.body.classList.add('bg-'+cls)
  }
  return (
   <>
  {/* <Router> */}

    <Navbar title="MIT" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<Form showAlert={showAlert} heading="Enter the Text to analyze"  mode={mode}/>} /> */}
          <Form showAlert={showAlert} heading="Enter the Text to analyze"  mode={mode}/>
    {/* </Routes> */}
    </div>
  {/* </Router> */}

   </>
  );
}

export default App;
