import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"

import TextForm from './components/TextForm'
import About from'./components/About'
import Alert from './components/Alert'


function App() {
  
  const [mode, setMode] = useState('light');
  const [man, setMan] = useState('enable light mode');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({msg:message,
      type:type}
      );

      setTimeout(() => {
        setAlert(null);
      },1500);
    }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setMan('enable dark mode');
      document.body.style.backgroundColor='black';
      showAlert("dark mode has been enabled","success");
      document.title='React-dark mode';
      setInterval(() => {
        document.title='install textutils now';
      },2000);
    }
    else{
      setMode('light');
      setMan('enable light mode');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      document.title='React-light mode';
    }
  }

  


  
  return (
    
      <>
    

<Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<About/>
<TextForm heading="enter your name" mode={mode}/>


  

 




      </>
      
  );

}
export default App;
