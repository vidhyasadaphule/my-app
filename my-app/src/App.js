
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// shortcut for this is imrs usestate importing
import About from './components/About';
import Alert from './components/Alert';
// to connect the app with the browser we use browserrouter
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  let [mode,setMode] = useState('light');
  let [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
     setAlert ({
              msg:message,
              type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
    const removeBodyClass =()=>{
      // document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-danger');
    }

  const toggleMode = (cls) =>{
    //  console.log(cls);
     removeBodyClass(cls);


     document.body.classList.add('bg-'+cls);
     showAlert('mode is enabled now',cls);
    // if(mode === 'light'){
    //   setMode('dark') ;
    //   document.body.style.color = 'white';
    //   // showAlert('mode is enabled now','success');
    //   // document.title = "TextUtils-Dark mode";
    //   // logic for continue blinking of a message
    //   // setInterval(()=>{
    //   //   document.title = "TextUtils-Dark mode";
    //   // },2000)
    //   // setInterval(()=>{
    //   //   document.title = "TextUtils-Light mode";
    //   // },1500)
    // }
    // else{
    //   setMode('light');
    //   document.body.style.color = 'black';
    //   // showAlert('light mode is enabled now','success');
    //   // document.title = "TextUtils-Light Mode";
    // }
  }

  return (
    //this is jsx fragments <> </>
    // a web page is divided in components the content inside the component is a called props 
    //and state is the heading od the componenet
    //html rwritten in app.js under return is called as JSX.
    // there are two types of components in reactjs 1.class based component 2.function based component
  <>  
   <Router>
   <Navbar  title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3 " >
   <Routes>
   {/* <TextForm showAlert={showAlert} heading ="TEXT EDITOR" mode={mode} toggleMode={toggleMode}/> */}
   <Route path="/about" element={<About mode={mode} />} />
   <Route path="/" element={<TextForm heading="Text-Counter,Word-Counter,Text-Case Converter " ShowAlert={showAlert} mode={mode}
    toggleMode={toggleMode}/>} />
   </Routes>
   </div>
   </Router>
  
  </>
  //  prop types in react
  /*
      
   */
  );
}

export default App;
