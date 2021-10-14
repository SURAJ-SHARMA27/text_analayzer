 
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
//import {FcApproval} from 'react-icons/fc';
 import React, { useState } from 'react'
 import Alert from './components/Alert';
 //import {
 // BrowserRouter as Router,
 // Switch,
  //Route,
  
//} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [redMode, setredMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    } )
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark');

  document.body.style.backgroundColor='rgb(26, 36, 51)';
showAlert("DARK MODE is enabled","success");
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("LIGHT MODE is enabled","success");
  
}
}
const toggleredMode=()=>{
  if(redMode==='light'){
  setredMode('ultradark');
  setMode('dark');
  document.body.style.backgroundColor='rgb(0, 0, 0)';
showAlert("ULTRADARK MODE is enabled","success");
}
else{
  setredMode('light')
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("LIGHT MODE is enabled","success");
}
}
  return (
 <>
{/*  <Router> */}
{/* <Navbar title="options" link="click for more"/>*/}
<Navbar mode={mode} toggleMode={toggleMode} redMode={redMode} toggleredMode={toggleredMode}/>
<Alert alert={alert}/>
<div className="container my-3">
 <TextForm showAlert={showAlert} mode={mode} heading="ENTER THE TEXT TO ANALYZE"/>
 
 {/* <Switch> */}
     {/*      <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/"> */}
           {/*  <TextForm />
          </Route>
        </Switch> */}
        </div>
{/*    </Router> */}


 </>
  );
}

export default App;
