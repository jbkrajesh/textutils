import { useState } from 'react';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import  {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type: type
        
  })
  setTimeout(()=>{
    setAlert(null);

  },3000)

  }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backGroundColor='grey';
  }
  else{
    setMode('light')
    document.body.style.backGroundColor='red';
  }
  }
  return (
    <>
  
  <Navbar title="TextUtils" aboutText="About"mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
           
              {/* <About /> */}
                       
            <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>
             </div>
     
     
        </>
    
  );
}

export default App;
