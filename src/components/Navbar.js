import React from 'react';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [toggleText, setToggleText] = useState('Enable Dark Mode');

  const toggleMode1 = () => {
  
    setIsDarkMode(!isDarkMode);
    
    console.log('toogle clicked')
    // Update the text based on the mode
    setToggleText(isDarkMode ? 'Enable Light Mode': 'Enable Dark Mode');
}

  return (
    

  //`` backtics are used to use javascript to make template literal
 < nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        {/* For Router React changing a to Link and href to to bcoz we dont want reloading of website */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
        <li className="nav-item">

        </li> 
        <li className="nav-item">
          {/* <a className="nav-link" href="/">{props.abouttext}</a> */}
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li>
       
        
      </ul>
      <form className="d-flex">
        <input className={`form-control me-2" type="search" placeholder="Search" aria-label="Search" `}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch $-{props.mode=='light'?'dark':'light'}`} >
      <input className="form-check-input mx-1"  onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className={ `form-check-label ${isDarkMode ? 'color-black' :''} ` } onClick={toggleMode1} htmlFor="flexSwitchCheckDefault">{toggleText} </label>
    </div>
    </div>
  </div>  
  </nav>
 

   
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired , 
    abouttext:PropTypes.string
  }
  Navbar.defaultProps={
    title:'set title',
    abouttext:'about text'
  }
  