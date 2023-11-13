import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';

// import About from './components/About';


import {
  BrowserRouter as Router,
  // createRoutesFromElements,
   Routes,
  Switch,
  Route,

  // RouterProvider,
  Link
} from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='gray';
      document.title='Textuils Dark mode';
      showalert("Dark mode has been enabled","success");


      // document.body.style.color='white';
    
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.title='Textuils Light mode';
      showalert("light mode has been enabled","success");
      // document.body.style.color='black';
    
    }

  }
    // const[enable,setenable]=useState('Enable dark mode')
    // const enabletext=(e)=>{
    //   if(enable===  'light'){
    //     let newtext='Enable Darkmode';
    //      setenable(newtext);
    //      console.log("darkmode enabled");
    //   }
    //   else{
    //     let newtext='Enable Lightmode';
    //      setenable(newtext);
    //      console.log("lightmode enabled");
    //   }
  
    // }
 

  return (
  
   <>
   <Router>
     
      <Navbar title="TextUtils"  abouttext="About" mode={mode} toggleMode={toggleMode}> </Navbar>

      {/* < Navbar title="Text Utils"  abouttext="About TextUtils"/> */}
      {/* <Navbar></Navbar> */} 

      <Alert alert={alert}></Alert>
      
      {/* my-3 is class in bootstrap gin margin in y axix(my) */}
      <div className="container my-4 ">
        <Routes>  
          {/* For exact matcing we use exact path instead of path */}
          <Route exact path="/about"
           element ={ <About />}
          />
          <Route exact path="/"   
             element={  <Textform heading ="Enter the Text to convert" mode={mode} alert={alert}></Textform>}
          />
        </Routes>
      </div>
  
  </Router>
   {/* <About ></About> */}

   </>
    
  );
}


export default App;
