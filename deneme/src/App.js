import React from 'react';
import User from './components/User';
import Test from './components/Test';

import './App.css'

function App() {
  const value = true;



  return (
    <div className="App">

      
      {
        value ? <User /> 
        : console.log("False")
      }
      {
        value ? <Test /> 
        : console.log("False")
      }

    </div>
  );
}

export default App;
