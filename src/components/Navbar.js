import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {FaRedhat} from 'react-icons/fa';
/* import {Link} from 'react-router-dom';
 */


export default function Navbar(props) {
  const [btnmode, setbtnmode] = useState("Enable dark Mode")
  const [navclass, setnavclass] = useState("rgb(200, 236, 200)")
  const [btnredmode, setbtnredmode] = useState("Enable ultradark Mode")
  //co//nst navclas=()=>{
    ////if(props.redmode==='ultradark')
   //// {
   //// setnavclass("#e3f2fd")
 // }
  //else if(props.mode==='dark')
//{//
  ////  setnavclass("grey")
  ////}
 //// else{
 ////   setnavclass("blue")
 //// }
 // }
  
  const func=()=>{
    if(props.mode==='dark'){
    setbtnmode("Enable dark Mode")
    setnavclass("rgb(200, 236, 200)")
  }
  else{
  
    setnavclass("rgb(0, 12, 29)")
  setbtnmode("Enable light Mode")
}
  }
 
  const funct=()=>{
    if(props.redMode==='ultradark'){
    setbtnredmode("Enable ultradark Mode")
    setnavclass("rgb(201, 201, 201)")
  }
  else{
  
    setnavclass("rgb(58, 8, 6)")
  setbtnredmode("Enable light Mode")
}
  }
  const funci=()=>{
func();
props.toggleMode();

  }
  const kit=()=>{
    funct();
    props.toggleredMode();
    
      }

    return (
      
    
     
<nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor:`${navclass}`}} id="nav" >
      <div className="container-fluid" >
        <span className=" larg mx-4"><FaRedhat/></span>
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item"> 
         {/*  <a className="nav-link active" aria-current="page" to="/About">About</a>
        */} </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.link}</a>
        </li>
        <li className="nav-item">
          {/* <a href="/" className="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={kit} type="checkbox" role="switch" id="ultra"/>
  <label className="form-check-label" onClick={kit} htmlFor="ultra">{btnredmode}</label>
</div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={funci}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" onClick={funci} htmlFor="flexSwitchCheckDefault">{btnmode}</label>
</div>

 
    </div>
  </div>
</nav>

    )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'SURAJ',
    aboutText:'About text here'
};